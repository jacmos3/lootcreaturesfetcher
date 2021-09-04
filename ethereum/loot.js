import web3 from './web3';
import Loot from './build/loot.json';
const instance = new web3.eth.Contract(
  Loot,
  '0xB89A71F1abe992Dc71349FC782b393dA2b6FB4C2'
);
export default instance;
