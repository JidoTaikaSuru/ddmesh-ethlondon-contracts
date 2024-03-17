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
    // Orbit :0xBBB017c1db26096280852A93eF9e9A355f82C82d
    // arbSepolia: 0x15223Dee9891d84609889798bb63ADe5e1FDcB15
    args: ["0x15223Dee9891d84609889798bb63ADe5e1FDcB15"],
    log: false,
    // we need to wait if on a live network so we can verify properly
    // waitConfirmations: networkConfig[chainId]?.blockConfirmations || 0,
  });
  console.log("DDMeshMarket deployed to:", ddmesh.address);
  console.log("DDMeshMarket deployed on network:", network.name);
};

export default deployDDMeshMarket;
deployDDMeshMarket.tags = ["all", "ddmesh"];
