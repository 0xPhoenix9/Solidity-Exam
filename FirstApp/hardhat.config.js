require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      // mining: {
      //   auto: false,
      //   interval: 0,
      // },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.MAINNET_INFURA_KEY}`,
      accounts: [`${process.env.MAINNET_DEPLOYER_PRIV_KEY}`],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.GOERLI_INFURA_KEY}`,
      accounts: [`${process.env.GOERLI_DEPLOYER_PRIV_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
