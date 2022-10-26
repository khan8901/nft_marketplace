require("@nomiclabs/hardhat-waffle");


module.exports = {

  solidity: "0.8.4",
  networks: {

    rinkeby:{
        url:"https://rinkeby.infura.io/v3/a868b56432a7470688f879e5ec1b431d",
        accounts:["2ab60ecfb61bd4d4adc0113e1c8940098cb39157ba95e004067b73725586578d"]
    },
    ropsten: { 
      url :"https://ropsten.infura.io/v3/a868b56432a7470688f879e5ec1b431d", 
      accounts:["2ab60ecfb61bd4d4adc0113e1c8940098cb39157ba95e004067b73725586578d"],
      
    }



  },
 



};
