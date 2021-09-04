import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/7b74ed075e1e471cb58f209427ed47c5"
  );
  web3 = new Web3(provider);
}

export default web3;



//const provider = new HDWalletProvider(
//  'south lunar thrive critic absent provide swear object elephant combine come weasel',
//  'https://rinkeby.infura.io/v3/61cff086411d49e1816b5c8d0af10083'
//);
