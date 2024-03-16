import { ethers } from "ethers";
import { Token } from "../../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { parseEther } from "./util.format";

export const fundAccounts = async (
  token: Token,
  accounts: SignerWithAddress[],
  amount: string
) => {
  await token.grantRole(ethers.id("MINTER_ROLE"), accounts[0].address);
  for (let i = 0; i < accounts.length; i++) {
    await token.mint(accounts[i].address, parseEther(amount));
  }
};

export const approve = async (
  token: Token,
  spender: string,
  owner: SignerWithAddress,
  amount: string
) => {
  const approveTx = await token
    .connect(owner)
    .approve(spender, parseEther(amount));
  const approveReceipt = await approveTx.wait();
};
