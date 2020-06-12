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

// create the encoded abi of the method
const encodedABI = contract.methods
  .approve('0x7e7c09509caf7771f61c26af8ee7c1b6c2d60bc0', ethers.utils.parseEther('5000000'))
  .encodeABI();

// declare the function to sign a transaction object and send it to the Ethereum network.
function sendSignedTx(transactionObject, cb) {
  let transaction = new EthTx(transactionObject);
  const privateKey = new Buffer.from(privKey, 'hex');
  transaction.sign(privateKey);
  const serializedEthTx = transaction.serialize().toString('hex');
  web3.eth.sendSignedTransaction(`0x${serializedEthTx}`, cb);
}

// construct a transaction object and invoke the sendSignedTx function
web3.eth.getTransactionCount(addressFrom).then((transactionNonce) => {
  const transactionObject = {
    chainId: 3,
    nonce: web3.utils.toHex(transactionNonce),
    gasLimit: 8000000, // pass an appropriate value
    gasPrice: 150000000000, // pass an appropriate value
    to: contractAddress,
    from: addressFrom,
    data: encodedABI
  };

  sendSignedTx(transactionObject, function (error, result) {
    if (error) return console.log('error ===>', error);
    console.log('sent ===>', result);
  });
});
