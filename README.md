This is a very simple frontend created to interact with Loot Creatures smart contract located here: https://etherscan.io/address/0xb89a71f1abe992dc71349fc782b393da2b6fb4c2#writeContract .

This frontend is very dumb, it only researches for tokenIds that can still be used to mint new LootCreatures NFT for free + gas
It invokes the method ownerOf() of the smartcontract, passing to it a looped id, and check the answer.
Then it discriminate the ones that have no owners, and list all of them to the user into the frontend page.

That's all.

Could be a simple boilerplate to fork it and continue developing the minting call and other details.


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
