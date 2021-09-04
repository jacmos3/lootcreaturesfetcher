This is a very simple frontend created to interact with Loot Creatures smart contract located here: https://etherscan.io/address/0xb89a71f1abe992dc71349fc782b393da2b6fb4c2#writeContract .

This frontend is very dumb, it only researches for tokenIds that can still be used to mint new LootCreatures NFT for free + gas.

It invokes the method ownerOf() of the smartcontract. It loops an id from 1 to 16000 and pass it to the function, and wait for the answer.
After that, it discriminates the answers saying that the token has no owner, and lists all of those into the frontend page to the user.

The user can now take each of those id and use them to mint the nft interacting with the etherscan page.
That's all.

Could be a simple boilerplate to fork it and continue to develop it (for example it can be implemented the minting call directly in this app).


PREREQUISITES:
- create an account on infura.io -> then go to "ethereum" tab and click "create new project". --> then copy the mainnet endpoint and paste to the web3.js file replacing the fake one.
- having node and npm already installed in your pc. if not installed --> then install both.

HOW TO RUN THE project

locate the terminal to the main folder of the project and run:

- npm install
the command above will install the libraries to make the server running

- npm run dev
the command above will start the server

then go to your browser and type:
localhost:3000/
