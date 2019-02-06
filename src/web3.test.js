const Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider(
    "http://eth3noj46-dns-reg1.koreacentral.cloudapp.azure.com:8540"));

// 블록 조회
web3.eth.getBlockTransactionCount('latest')
    .then(block => {
        console.log(block);
    });


