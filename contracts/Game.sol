pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


contract Game is Ownable {
    

/*

Player - the participant who is betting on the game
House - the smart contract against whom the betting game is played against
Amount - is the value of ETH that is being bet

*/ 

  address public player;
  address public house; 
  uint256 public amount;


//The constructor initializes the creater of the contract as the house address

  function Game() public {
    
   house = msg.sender;

  }
  
  
  //Function to add a participant and the amount of ETH he/she is willing to bet
    function AddParticipant() public payable {
      
      player = msg.sender;
      amount = msg.value;
      
  }
  
  /* Function that can be called only by the owner of the contract. 

  This is the main logic as well. A Sunny day is being represented between 50 - 100 Degress F 
  and a cloudy or rainy between 0 - 50. F If the day is Sunny the player gets to keep the ETH else it is
  transfered to the house address.

  */ 

  function Bet(uint256 _temp) onlyOwner {
      
      //Sunny Temperature is between 50 - 100
      if( _temp >= 50 && _temp < 100) {
          
          player.transfer(amount);

      //Cloudy Temperature is between 0 - 50
      } else if (_temp >= 0 && _temp <50 ){
          
          house.transfer(amount);
          
      } else {
        
          revert();
      }
  } 


  }