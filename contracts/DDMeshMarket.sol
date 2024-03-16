// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./interface/IToken.sol";

contract DDMeshMarket is AccessControl, Ownable {
  //ad0ll: Recommend we create modifiers for "onlyProvider" and "onlyUser"
  //ad0ll: We should consider making an agreement a contract instead instead of a struct. That way we could allow selfdestruct.
  event EnterAgreementAndPay(uint256 amount);
  event AgreementClosed(address user, address provider);

  event ProviderRegistered(address provider);
  event WithdrawReward(uint256 amount);
  event WithdrawUserBalance(uint256 amount);

  IToken private immutable token;
  address[] providers;

  struct Agreement {
    address user;
    uint256 userBalance;
    address provider;
    uint256 providerClaimed;
    bool active;
  }

  mapping(address => Agreement) public userToAgreement; // mapping of user to agreement
  mapping(address => Agreement) public providerToAgreement; // mapping of provider to agreement

  constructor(address _tokenAddress) Ownable(msg.sender) {
    _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    token = IToken(_tokenAddress);
  }

  function enterAgreement(uint256 _amount, address _provider) public {
    require(_amount > 0, "amount must be greater than 0");
    Agreement memory agreement = Agreement(
      msg.sender,
      _amount,
      _provider,
      0,
      true
    );
    agreement.userBalance += _amount;
    userToAgreement[msg.sender] = agreement;
    providerToAgreement[_provider] = agreement;

    token.transferFrom(msg.sender, address(this), _amount);
    emit EnterAgreementAndPay(_amount);
  }

  function registerProvider(address _provider) public {
    // ad0ll: A provider would probably best be represented as a struct. They have a fee they charge per epoch, a name, something w/ ENS.
    // They also have a supabase api key but we won't store that on chain (for now), unless there's an ethereum function that lets us check if its encrypted
    providers.push(_provider);
    emit ProviderRegistered(_provider);
  }

  // Provider can withdraw fee from user.
  function withdrawReward(uint256 _amount, address _user) public {
    // ad0ll: Later will want to only let them withdraw an amount equal to the the amount of time that the agreement has been active

    address provider = msg.sender;
    Agreement storage agreement = providerToAgreement[provider];
    require(agreement.provider == provider, "provider not found");
    require(agreement.user == _user, "not your user");
    require(agreement.userBalance >= _amount, "insufficient balance");

    agreement.userBalance -= _amount;
    agreement.providerClaimed += _amount;
    token.transfer(msg.sender, _amount);

    emit WithdrawReward(_amount);
  }

  function withdrawBalanceUser(uint256 _amount) public {
    Agreement storage agreement = userToAgreement[msg.sender];
    require(agreement.user == msg.sender, "not your agreement");
    require(agreement.userBalance >= _amount, "insufficient balance");

    agreement.userBalance -= _amount;
    token.transfer(msg.sender, _amount);
    emit WithdrawUserBalance(_amount);
  }

  function closeAgreementByUser() public {
    Agreement storage agreement = userToAgreement[msg.sender];
    require(agreement.user == msg.sender, "not your agreement");
    require(agreement.active, "agreement is not active");
    agreement.active = false;
    withdrawBalanceUser(agreement.userBalance);
    emit AgreementClosed(agreement.user, agreement.provider);
  }

  function closeAgreementByProvider() public {
    Agreement storage agreement = providerToAgreement[msg.sender];
    require(
      agreement.provider == msg.sender,
      "not your agreement, you are not the provider"
    );
    require(agreement.active, "agreement is not active");
    agreement.active = false;
    withdrawReward(agreement.userBalance, agreement.user);
    emit AgreementClosed(agreement.user, agreement.provider);
  }
}

// close the agreement.
//Todo:
// Provider can close only hen not enough funds
// Calculation of how much time is passed and how much of the userbalance can be claimed by the provider.
