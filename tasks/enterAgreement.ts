import { network } from "hardhat";
import "@nomicfoundation/hardhat-chai-matchers";
import { task } from "hardhat/config";
// yarn hardhat mintTokens --amount 1000000 --contractaddress 0x601c2F884F68308C64d662bb6073E108955E3eD7  --account 0x9C8ca52fA6f12fd7B70c6B6E9a2704149af676Ea  --network arbitrumSeplia
task("enterAgreement")
  .addParam("contractaddress", "Smart contract Address")
  .addParam("providerid", "Provider ID")
  .addParam("amount", "Amount to deposit")
  .setAction(async ({ contractaddress, providerid, amount }, hre) => {
    const { deployer } = await hre.getNamedAccounts();

    console.log("Entering Agreement with account:", deployer);

    console.log("contractaddress", contractaddress);

    const ddmeshContract = (await hre.ethers.getContractFactory("DDMeshMarket")).attach(
      contractaddress
    );
    
    let transactionResponse;

    let agreementProviderTx;

    try {
      agreementProviderTx = await ddmeshContract.enterAgreement(providerid, amount);
    } catch (error) {
      console.log("Error while Entering Agreement", error);
    }
    let agreementProviderTxReceipt;
    const { network } = hre;
    if (network.name === "hardhat" || network.name === "localhost") {
        agreementProviderTxReceipt = await agreementProviderTx.wait();
    } else {
        agreementProviderTxReceipt = await agreementProviderTx.wait(2);
    }
    console.log("TX receipt:", agreementProviderTxReceipt);

  });
