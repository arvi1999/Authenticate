import web3 from "./web3";
import User from "./build/User.json";

export default address => {
  return new web3.eth.Contract(JSON.parse(User.interface), address);
};
