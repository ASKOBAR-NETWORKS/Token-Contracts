require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();
const { PRIVATE_KEY, API_KEY } = process.env;

module.exports = {
    solidity: {
        version: "0.8.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        binance: {
            url: "https://rpc.ankr.com/bsc",
            accounts: [PRIVATE_KEY],
        }
    },
    etherscan: {
        apiKey: API_KEY
    }
};
