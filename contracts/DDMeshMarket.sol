// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./interface/IToken.sol";

contract DDMeshMarket is AccessControl, Ownable {
    //ad0ll: Recommend we create modifiers for "onlyProvider" and "onlyUser"
    //ad0ll: We should consider making an agreement a contract instead instead of a struct. That way we could allow selfdestruct.
    event AgreementCreated(
        uint256 agreementId,
        address userAddress,
        address providerAddress,
        uint256 providerId,
        string encApiKey,
        string encConnectionString
    );
    event AgreementClosed(
        uint256 agreementId, address userAddress, address providerAddress, uint256 providerId, string encApiKey
    );
    event AgreementActivated(
        uint256 agreementId,
        address userAddress,
        address providerAddress,
        uint256 providerId,
        string encApiKey,
        string encConnectionString
    );
    event ProviderRegistered(uint256 id, address provider, uint256 fee, string encApiKey, string ensName);
    event WithdrawReward(uint256 amount, address provider);
    event WithdrawUserBalance(uint256 amount, address user);

    IToken public token;

    enum AgreementStatus {
        NONE,
        ENTERED,
        ACTIVE,
        CLOSED,
        REVOKED,
        ERROR
    }

    struct Agreement {
        uint256 id;
        address user;
        uint256 userBalance;
        address providerAddress;
        uint256 providerId;
        uint256 providerClaimed;
        string encConnectionString;
        uint256 startTimeStamp;
        AgreementStatus status;
    }

    struct Provider {
        uint256 id;
        address pAddress;
        uint256 fee; // DDM Tokens
        string encApiKey;
        string ensName;
        string description;
        uint256 noOfDbAgreements;
        uint256 activeAgreements;
    }

    uint256 public agreementIdTotalCount;
    uint256 public providerIdTotalCount;

    mapping(uint256 => Agreement) public agreementIdToAgreement; // mapping of agreement id to agreement
    mapping(uint256 => Provider) public providerIdToProvider; // mapping of provider id to provider
    mapping(address => Provider) public addressToProvider; // mapping of address to provider
    mapping(address => uint256[]) public userAgreements; // mapping of user to agreements
    mapping(address => uint256[]) public providerAgreements; // mapping of provider to agreements
    mapping(uint256 => uint256[]) public providerIdToAgreements; // mapping of provider id to agreements
    mapping(address => uint256) public providerToTVLAcrossAllAgreements; //Convenience mapping that shows how much value a provider is securing, used for leaderboard
    uint256[] public agreements;
    Provider[] public providers;

    constructor(address _tokenAddress) Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        token = IToken(_tokenAddress);
    }

    function getAgreement(uint256 _agreementId) public view returns (Agreement memory) {
        return agreementIdToAgreement[_agreementId];
    }

    function getProviderByProviderId(uint256 _providerId) public view returns (Provider memory) {
        return providerIdToProvider[_providerId];
    }

    function getProviderByAddress(address _providerAddress) public view returns (Provider memory) {
        return addressToProvider[_providerAddress];
    }

    function getUserAgreements(address _userAddress) public view returns (uint256[] memory) {
        return userAgreements[_userAddress];
    }

    function getProviderAgreements(address _providerAddress) public view returns (uint256[] memory) {
        return providerAgreements[_providerAddress];
    }

    function getProviderIdToAgreements(uint256 _providerId) public view returns (uint256[] memory) {
        return providerIdToAgreements[_providerId];
    }

    function getAllAgreements() public view returns (uint256[] memory) {
        return agreements;
    }

    function getAllProviders() public view returns (Provider[] memory) {
        return providers;
    }

    function getProviderTVLs() public view returns (address[] memory, uint256[] memory) {
        uint256[] memory tvls = new uint256[](providers.length);
        address[] memory providerAddresses = new address[](providers.length);
        for (uint256 i = 0; i < providers.length; i++) {
            providerAddresses[i] = providers[i].pAddress;
            tvls[i] = providerToTVLAcrossAllAgreements[providers[i].pAddress];
        }
        return (providerAddresses, tvls);
    }

    function enterAgreement(uint256 _providerId, uint256 _amount) public {
        require(_amount > 0, "amount must be greater than 0");
        uint256 id = ++agreementIdTotalCount;
        Provider memory provider = providerIdToProvider[_providerId];
        require(provider.noOfDbAgreements > provider.activeAgreements, "no of agreements exceeded");
        token.transferFrom(msg.sender, address(this), _amount);
        Agreement memory agreement = Agreement(
            id, msg.sender, _amount, provider.pAddress, _providerId, 0, "", block.timestamp, AgreementStatus.ENTERED
        );

        provider.activeAgreements += 1;

        agreement.userBalance += _amount;
        agreementIdToAgreement[id] = agreement;
        agreements.push(id);
        userAgreements[_userAddress].push(id);
        providerAgreements[provider.pAddress].push(id);
        providerIdToAgreements[_providerId].push(id);

        // Increase provider TVL by fee (we'll render it in months in the UI)
        providerToTVLAcrossAllAgreements[provider.pAddress] += provider.fee;
        emit AgreementCreated(id, _userAddress, provider.pAddress, _providerId, provider.encApiKey, "");
    }

    function setConnectionStringAndActivateAgreement(uint256 _agreementId, string memory _encConnectionString) public {
        Agreement storage agreement = agreementIdToAgreement[_agreementId];
        require(agreement.id == _agreementId, "agreement not found");
        require(agreement.status == AgreementStatus.ENTERED, "agreement already activated");
        agreement.encConnectionString = _encConnectionString;
        agreement.status = AgreementStatus.ACTIVE;
        emit AgreementActivated(
            agreement.id,
            agreement.user,
            agreement.providerAddress,
            agreement.providerId,
            agreement.encConnectionString,
            _encConnectionString
        );
    }

    function registerProvider(
        uint256 _fee,
        string memory _enc_apiKey,
        string memory _ensName,
        string memory _description,
        uint256 _noOfDbAgreements
    ) public {
        // Require description < 256 characters
        require(_fee > 0, "fee must be greater than 0");
        uint256 id = ++agreementIdTotalCount;
        Provider memory _provider = Provider(id, msg.sender, _fee, _enc_apiKey, _ensName, _noOfDbAgreements, 0);
        providerIdToProvider[id] = _provider;
        providers.push(_provider);
        emit ProviderRegistered(id, msg.sender, _fee, _enc_apiKey, _ensName);
    }

    // Provider can withdraw fee from user.
    function withdrawReward(uint256 _amount, address _user, uint256 _agreementId) public {
        // ad0ll: Later will want to only let them withdraw an amount equal to the the amount of time that the agreement has been active
        address provider = msg.sender;
        Agreement storage agreement = agreementIdToAgreement[_agreementId];
        require(agreement.providerAddress == provider, "provider not found");
        require(agreement.user == _user, "not your user");
        require(agreement.userBalance >= _amount, "insufficient balance");

        agreement.userBalance -= _amount;
        agreement.providerClaimed += _amount;
        token.transfer(msg.sender, _amount);

        emit WithdrawReward(_amount, msg.sender);
    }

    function withdrawBalanceUser(uint256 _amount, uint256 _agreementId) public {
        Agreement storage agreement = agreementIdToAgreement[_agreementId];
        require(agreement.user == msg.sender, "not your agreement");
        require(agreement.userBalance >= _amount, "insufficient balance");

        agreement.userBalance -= _amount;
        token.transfer(msg.sender, _amount);
        emit WithdrawUserBalance(_amount, msg.sender);
    }

    function closeAgreementByUser(uint256 _agreementId) public {
        Agreement memory agreement = agreementIdToAgreement[_agreementId];
        Provider memory provider = providerIdToProvider[agreement.providerId];
        require(agreement.user == msg.sender, "not your agreement");
        require(agreement.status == AgreementStatus.ACTIVE, "agreement is not active");
        agreement.status = AgreementStatus.CLOSED;
        withdrawBalanceUser(agreement.userBalance, agreement.id);

        // Decrease provider TVL by fee (we'll render it in months in the UI)
        providerToTVLAcrossAllAgreements[provider.pAddress] -= provider.fee;
        emit AgreementClosed(_agreementId, agreement.user, agreement.providerAddress, provider.id, provider.encApiKey);
    }

    function closeAgreementByProvider(uint256 _agreementId) public {
        Agreement storage agreement = agreementIdToAgreement[_agreementId];
        Provider memory provider = providerIdToProvider[agreement.providerId];
        require(agreement.providerAddress == msg.sender, "not your agreement, you are not the provider");
        require(agreement.status == AgreementStatus.ACTIVE, "agreement is not active");
        agreement.status = AgreementStatus.CLOSED;
        withdrawReward(agreement.userBalance, agreement.user, agreement.id);
        // Decrease provider TVL by fee (we'll render it in months in the UI)
        providerToTVLAcrossAllAgreements[provider.pAddress] -= provider.fee;
        emit AgreementClosed(_agreementId, agreement.user, agreement.providerAddress, provider.id, provider.encApiKey);
    }
}

// close the agreement.
//Todo:
// Provider can close only hen not enough funds
// Calculation of how much time is passed and how much of the userbalance can be claimed by the provider.
