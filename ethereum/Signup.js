import web3 from './web3';
import Signup from './build/Signup.json';

const instance = new web3.eth.Contract(
  JSON.parse(Signup.interface),
  '0xBE881c546dD2aD0c7117f0a46D473e2d1df608AB'
);

export default instance;
