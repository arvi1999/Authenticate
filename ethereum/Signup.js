import web3 from './web3';
import Signup from './build/Signup.json';

const instance = new web3.eth.Contract(
  JSON.parse(Signup.interface),
  '0x9eAAbCb66A21F200212a777076e3E73480f13914'
);

export default instance;
