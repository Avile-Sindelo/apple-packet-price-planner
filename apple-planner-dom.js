const appleBoxCost = document.querySelector('#box-cost');
const applesInTheBox = document.querySelector('#apples-in-the-box');
const sizeOfThePacket = document.querySelector('#packet-size');
const profitPercentageRequired = document.querySelector('#required-percentage');
const calculateBtn = document.querySelector('#calculate');

//check if local storage has a state varible stored in there
var currentState;
if(localStorage['state']){
    currentState = JSON.parse(localStorage.getItem('state'));
} else {
    var initialState = {
        boxCost: 0,
        applesInBox: 0,
        applePacketSize: 0,
        requiredProfitPercentage: 0,
        packetNumber: 0,
        eachAppleCost: 0,
        packetCost: 0,
        packetRecommendedPrice: 0
    }

    localStorage.setItem('state', JSON.stringify(initialState));
}

//Initiate an object from the factory function 
let applePlan = ApplePlanner(currentState);

calculateBtn.addEventListener('click', function(){
    applePlan.numberOfPackets(applesInTheBox.value, sizeOfThePacket.value);
    console.log(typeof appleBoxCost.value);
    console.log(typeof applesInTheBox.value);
    applePlan.costPerApple(parseFloat(appleBoxCost.value), parseFloat(applesInTheBox.value));
    applePlan.costPerPacket(appleBoxCost.value, applePlan.getNumberOfPackets());
   console.log('number of packets :', applePlan.getNumberOfPackets());
   console.log('cost per apple :', applePlan.getCostPerApple());
   console.log('Cost per packet :', applePlan.getCostPerPacket());
});


