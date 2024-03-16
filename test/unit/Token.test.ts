import { assert, expect } from "chai";
import { ContractTransaction } from "ethers";
import { deployments, ethers, network } from "hardhat";
import { Token } from "../../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("Token", function () {
  describe("test assigning minters with only owner", () => {
    let token: Token;
    let accounts: SignerWithAddress[];

    before(async () => {
      accounts = await ethers.getSigners();
      token = await (await ethers.getContractFactory("Token")).deploy();
      await token.grantRole(await token.MINTER_ROLE(), token);
    });

    it("the constructor succesfully sets the name", async () => {
      const name = await token.name();
      assert.equal(name, "ddmesh-test");
    });

    it("should assign minter with only owner", async () => {
      const minter = accounts[1];
      const hasRoleBefore = await token.hasRole(
        await token.MINTER_ROLE(),
        minter.address
      );
      expect(hasRoleBefore).to.equal(false);

      await token.grantRole(await token.MINTER_ROLE(), minter.address);

      const hasRoleAfter = await token.hasRole(
        await token.MINTER_ROLE(),
        minter.address
      );
      expect(hasRoleAfter).to.equal(true);
    });

    // in total not more than 500 million tokens can be minted, test this amount
    it("should mint 500 million tokens", async () => {
      const minter = accounts[1];
      await token.grantRole(await token.MINTER_ROLE(), minter.address);
      // connect the minter to the token contract
      const tokenAsMinter = token.connect(minter);
      const tx1 = await tokenAsMinter.mint(
        minter.address,
        ethers.parseEther("500000000")
      );
      const receipt = await tx1.wait();

      const balance = await token.balanceOf(minter.address);
      expect(balance).to.equal(ethers.parseEther("500000000"));

      const totalSupply = await token.totalSupply();
      expect(totalSupply).to.equal(ethers.parseEther("500000000"));

      const balance2 = await token.balanceOf(minter.address);
      expect(balance2).to.equal(ethers.parseEther("500000000"));

      expect(await token.totalSupply()).to.equal(await token.cap());
    });
  });
});
