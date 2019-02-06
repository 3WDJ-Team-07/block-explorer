import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider(
    "http://eth3noj46-dns-reg1.koreacentral.cloudapp.azure.com:8540"));

export default web3;