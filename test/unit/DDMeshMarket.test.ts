import { DDMeshMarket } from "./../../typechain-types/contracts/DDMeshMarket";
import { assert, expect } from "chai";
import { ContractTransaction } from "ethers";
import { deployments, ethers, network } from "hardhat";
import { Token } from "../../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import exp from "constants";

describe("DDMeshMarket", function () {
  describe("test assigning minters with only owner", () => {
    let token: Token;
    let ddMeshMarket: DDMeshMarket;
    let accounts: SignerWithAddress[];

    before(async () => {
      accounts = await ethers.getSigners();
      token = (await (
        await ethers.getContractFactory("Token")
      ).deploy()) as unknown as Token;
      ddMeshMarket = (await (
        await ethers.getContractFactory("DDMeshMarket")
      ).deploy(await token.getAddress())) as unknown as DDMeshMarket;

      await token.grantRole(await token.MINTER_ROLE(), accounts[0].address);
      await token.mint(accounts[0].address, ethers.parseEther("100000"));
      const ddMeshMarketAddress = await ddMeshMarket.getAddress();
      token.approve(ddMeshMarketAddress, ethers.parseEther("100000"));
    });

    it("check if enter agreement function is working", async () => {
      const tx = await ddMeshMarket.enterAgreement(
        BigInt(1),
        "0x6ae181072aBc10a4eE84724BE867c71E0d4C0471"
      );
      const receipt = await tx.wait();
      console.log(receipt);
      expect(receipt?.status).to.equal(1);
    });
  });
});
