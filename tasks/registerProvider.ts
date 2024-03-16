import { network } from "hardhat";
import "@nomicfoundation/hardhat-chai-matchers";
import { task } from "hardhat/config";
// yarn hardhat mintTokens --amount 1000000 --contractaddress 0x601c2F884F68308C64d662bb6073E108955E3eD7  --account 0x9C8ca52fA6f12fd7B70c6B6E9a2704149af676Ea  --network arbitrumSeplia
task("registerProvider")
  .addParam("contractaddress", "Smart contract Address")
  .addParam("apikey", "api key")
  .addParam("ensname", "ens name")
  .addParam("description", "Description")
  .addParam("noofdbagreements", "No of DB agreements")
  .addParam("fee", "fee per sec")
  .setAction(async ({ contractaddress, apikey, ensname, description, noofdbagreements, fee }, hre) => {
    const { deployer } = await hre.getNamedAccounts();

    console.log("Registering Provider with account:", deployer);

    console.log("contractaddress", contractaddress);

    const ddmeshContract = (await hre.ethers.getContractFactory("DDMeshMarket")).attach(
      contractaddress
    );
    
    let transactionResponse;

    let registerProviderTx;

    try {
        registerProviderTx = await ddmeshContract.registerProvider(fee, apikey, ensname, description, noofdbagreements);
    } catch (error) {
      console.log("Error while Registering Provider", error);
    }
    let registerProviderTxReceipt;
    const { network } = hre;
    if (network.name === "hardhat" || network.name === "localhost") {
        registerProviderTxReceipt = await registerProviderTx.wait();
    } else {
        registerProviderTxReceipt = await registerProviderTx.wait(2);
    }
    console.log("TX receipt:", registerProviderTxReceipt);

  });
