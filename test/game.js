var Game = artifacts.require("./Game.sol")
import {advanceBlock} from './helpers/advanceToBlock'
import ether  from './helpers/ether';
const EVMRevert = require('./helpers/EVMRevert.js')
import {increaseTimeTo, duration} from './helpers/increaseTime'
import latestTime from './helpers/latestTime'
import BigNumber  from 'bignumber.js'


require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()


  contract('Game', function(accounts){

  	describe('Game Initialization', async () => {

    let HOUSE = accounts[9];
  	let PLAYER = accounts[8];

  	before(async function() {
      await advanceBlock()
    })

  	it('Throw Errow with Null address', async() => { 
     let zeroWallet = '0x0000000000000000000000000000000000000000';
     await Game.new(zeroWallet).should.be.rejectedWith(EVMRevert);

  	})


  })


  })

  /* TESTS FOR THE SMART CONTRACTS WOULD INCLUDE:

  a) Checking for 0 or Null addresses for the HOUSE and PLAYER 
  b) Making sure the betting amount is < 0
  c) Checking if the Temperature value is valid and revert occurs anywhere >100 F
  d) Checking if the code behaves properly on TWO major use cases:
      - Any number between 0 - 50, ETH is transfered to the HOUSE
      - Any number between 50 - 100, ETH is tranfereed to the PLAYER 
      - Checking if only the Owner of the contract is allowed to trigger the Bet Function 

      */ 