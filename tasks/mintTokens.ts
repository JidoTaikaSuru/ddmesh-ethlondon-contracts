import { network } from "hardhat";
import "@nomicfoundation/hardhat-chai-matchers";
import { task } from "hardhat/config";
// yarn hardhat mintTokens --amount 1000000 --contractaddress 0x601c2F884F68308C64d662bb6073E108955E3eD7  --account 0x9C8ca52fA6f12fd7B70c6B6E9a2704149af676Ea  --network arbitrumSeplia
task("mintTokens")
  .addParam("contractaddress", "the contract address of the erc20 to mint from")
  .addParam("amount", "the amount you want to mint")
  .addParam("account", "the account you want to mint to")
  .setAction(async ({ contractaddress, amount, account }, hre) => {
    const { deployer } = await hre.getNamedAccounts();

    console.log("running this minting task with account:", deployer);

    console.log("contractaddress", contractaddress);

    const token = (await hre.ethers.getContractFactory("Token")).attach(
      contractaddress
    );
    console.log(`Got contract Tokens at ${token.address}`);
    console.log("Minting Tokens...");
    let transactionResponse;

    let mintTx;

    try {
      mintTx = await token.mint(account, hre.ethers.parseEther(amount));
    } catch (error) {
      console.log("Error while minting Tokens", error);
    }
    let mintTxReceipt;
    const { network } = hre;
    if (network.name === "hardhat" || network.name === "localhost") {
      mintTxReceipt = await mintTx.wait();
    } else {
      mintTxReceipt = await mintTx.wait(2);
    }
    console.log(`Minted ${amount} Tokens to ${account}!`);
    console.log("TX receipt:", mintTxReceipt);
  });
