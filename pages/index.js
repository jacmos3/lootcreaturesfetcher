import React, {Component} from 'react';
import loot from '../ethereum/loot';
import {List} from 'semantic-ui-react';

class LootIndex extends Component{
  state = {
    freeId:['Loading... (it may take several minutes. check the console to see live searching while waiting the final results)']
  };

  async myCall(){
    let tempArray = [];
    for (let tokenId = 1; tokenId < 16000; tokenId++) {
      console.log("fetching tokenId number: "+ tokenId+"...");
      try{
        const address = await loot.methods.ownerOf(tokenId).call();
      }
      catch(err){
        if ((""+err).includes("for nonexistent token")){
          //here if the token id is still available
          tempArray.push(""+tokenId);
          console.log("free tokenId found: "+ tokenId);
        }
        else {
          //other error. must retry later
          console.log("this tokenId" + tokenId + " has incountered the following error:" + err);
        }
      }
    }
    if (tempArray.length == 0){
      tempArray.push("No any ID is still available. Sorry");
    }
    this.setState({freeId:tempArray});
  }

  render(){
    this.myCall();

    return (
      <div>
        <h3>Follows the list of still available LootCreatures NFT TokenIDs</h3>
        <p>Remember: only IDs between 8001 and 16000 are claimable by everyone. All the others (1-8000) are only claimable by Loot (0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7) owners</p>
        <List items ={this.state.freeId} />
      </div>
    )
  }
}


  export default LootIndex;
