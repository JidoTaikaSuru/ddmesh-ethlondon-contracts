import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import verify from "../utils/verify";
import { developmentChains } from "../helper-hardhat-config";

const deployToken: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("Token deployed by:", deployer);
  const token = await deploy("DDMTOKEN", {
    from: deployer,
    args: ["0x1b6bB595fFD8a0dCDeac79f805d35c5101273F9a"],
    log: true,
    // we need to wait if on a live network so we can verify properly
    // waitConfirmations: networkConfig[chainId]?.blockConfirmations || 0,
  });
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(token.address, "contracts/Token.sol:DDMTOKEN", []);
  }
  console.log("Token deployed to:", token.address);
  console.log("Token deployed on network:", network.name);
  const Token = await hre.ethers.getContractFactory("DDMTOKEN");
  const tokenContract = Token.attach(token.address);
  const txRole = await tokenContract.grantRole(
    await tokenContract.MINTER_ROLE(),
    deployer
  );
  await txRole.wait();
};

export default deployToken;
deployToken.tags = ["all", "token"];
