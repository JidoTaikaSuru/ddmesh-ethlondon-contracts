import { BigNumberish, ethers } from "ethers";

export const parseEther = (n: number | string) =>
  ethers.parseEther(n.toString());
export const formatEther = (n: BigNumberish) => ethers.formatEther(n);
