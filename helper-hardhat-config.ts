export interface networkConfigItem {
  name?: string;
  usdcAddress?: string;
  unstoppableJobsAddress?: string;
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
}

export interface networkConfigInfo {
  [key: number]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    blockConfirmations: 6,
    usdcAddress: "0xf56e0296b3456e341d0854946b5179e897F8ECAB",
  },
  80001: {
    name: "mumbai",
    ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
  },
  31337: {
    name: "localhost",
  },
};

export const developmentChains = ["hardhat", "localhost"];

export const DECIMALS = 8;
export const INITIAL_ANSWER = 200000000000;
