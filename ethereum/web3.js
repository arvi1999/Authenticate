import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);

let web3;

if(typeof window !== 'undefined'  && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;
