import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
      //replace ###########" with your token. register into infura.io to have one (it's free)
    "https://mainnet.infura.io/v3/8886e44c58d547f5bbbd81e0460296a2"
  );
  web3 = new Web3(provider);
}

export default web3;
