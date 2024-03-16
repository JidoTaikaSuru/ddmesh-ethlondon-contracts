import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployDDMeshMarket: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("DDMeshMarket deployed by:", deployer);

  const ddmesh = await deploy("DDMeshMarket", {
    from: deployer,
    // token address
    args: ["0x601c2f884f68308c64d662bb6073e108955e3ed7"],
    log: false,
    // we need to wait if on a live network so we can verify properly
    // waitConfirmations: networkConfig[chainId]?.blockConfirmations || 0,
  });
  console.log("DDMeshMarket deployed to:", ddmesh.address);
  console.log("DDMeshMarket deployed on network:", network.name);
};

export default deployDDMeshMarket;
deployDDMeshMarket.tags = ["all", "ddmesh"];
