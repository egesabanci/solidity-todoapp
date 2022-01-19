require("dotenv").config()
const mnemonic = process.env.MNEMONIC
const infuraUrl = process.env.INFURAURL

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ropsten: {
    provider: () => new HDWalletProvider(mnemonic, infuraUrl),
    network_id: 3,
    gas: 5500000,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "0.8.11",
    }
  },
};
