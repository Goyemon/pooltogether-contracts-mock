const Web3 = require('web3');
const EthTx = require('ethereumjs-tx');
const ethers = require('ethers')

// declare const variables for a contract address and its abi
const contractAddress = '0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd';
const contractAbi = require('../dai').abi

// set up Web3 to use Infura as your web3 provider
const web3 = new Web3(
  new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/df995414148e47f4807318c48283f51b')
);

// declare const variables for your address and private key
const addressFrom = '0x0C41D57DB49E8415f2550c8325264577230b562f';
const privKey = 'BB6FDA56CB1CC3B6A2E4411F667246873EEF1272969A7246414725711CC950C8';

// instantiate the contract
const contract = new web3.eth.Contract(
  JSON.parse(JSON.stringify(contractAbi)),
  contractAddress
);

// declare the function to sign a transaction object and send it to the Ethereum network.
const sendSignedTx = async (transactionObject, cb) => {
    const balance = await contract.methods
    .balanceOf('0x240A029e61EE0B5a5F853eBeBdB6A46F58Be0789')
    .call();
    console.log(balance)
}

sendSignedTx()
