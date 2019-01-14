import web3 from './web3';
import Signup from './build/Signup.json';

const instance = new web3.eth.Contract(
  JSON.parse(Signup.interface),
  '0xA6c943f39cB51eC952E601588EccC797Da9cB8D4'
);

export default instance;
