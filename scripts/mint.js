const Web3 = require("web3")
const ethers = require('ethers')
const EthTx = require("ethereumjs-tx");
const saiAddress = '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C'
const daiAddress = '0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd'
const tokenContractABI = require('../build/contracts/TokenMock').abi
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/df995414148e47f4807318c48283f51b"))
const SaiContract = new web3.eth.Contract(tokenContractABI, saiAddress)
const DaiContract = new web3.eth.Contract(tokenContractABI, daiAddress)

const cSaiAddress = '0xe813Ab215bB6e17eF0AfB82a7530308B7Fb29C92'
const cDaiAddress = '0xEc93Fa5FFa583A9e80702644b3Df7bdadc16dA7C'
const scdmcdAddress = '0x0768CaDa02481e2720Ea0f085c0FCb3e1aA4BC45'

const amountOfEther = ethers.utils.parseEther('5000000')

const senderAddr = '0x0C41D57DB49E8415f2550c8325264577230b562f'
const senderPriv = 'BB6FDA56CB1CC3B6A2E4411F667246873EEF1272969A7246414725711CC950C8'

const mintToken = async () => {
    const saiMint = SaiContract.methods.mint(cSaiAddress, amountOfEther).encodeABI()
    const daiMint = DaiContract.methods.mint(cDaiAddress, amountOfEther).encodeABI()
    const scdmcdMint = DaiContract.methods.mint(scdmcdAddress, amountOfEther).encodeABI()
    await executeTx(saiMint, cSaiAddress)
    await executeTx(daiMint, cDaiAddress)
    await executeTx(scdmcdMint, scdmcdAddress)
}

const executeTx = async (rawTx, destAddr) => {
    web3.eth.getTransactionCount(senderAddr).then(transactionNonce => {
        const transactionObject = {
            chainId: 3,
            nonce: web3.utils.toHex(transactionNonce),
            gasLimit: web3.utils.toHex(6000000),
            gasPrice: web3.utils.toHex(1000000000000),
            to: destAddr,
            from: senderAddr,
            data: rawTx,
            value: 0
        }
        sendSignedTx(transactionObject, (error, result) => {
            if(error) console.log("error:", error);
            console.log("success:", result);
        })
    }
)}

const sendSignedTx = (transactionObject, cb) => {
    let transaction = new EthTx(transactionObject);
    const priv = new Buffer.from(senderPriv, "hex");
    transaction.sign(priv);
    const serializedEthTx = transaction.serialize().toString("hex");
    web3.eth.sendSignedTransaction(`0x${serializedEthTx}`, cb);
}

mintToken()
