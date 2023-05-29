function ApplePlanner(currentState){
    //state variable
    var appleState = currentState || {
        boxCost: 0,
        applesInBox: 0,
        applePacketSize: 0,
        requiredProfitPercentage: 0,
        packetNumber: 0,
        eachAppleCost: 0,
        packetCost: 0,
        packetRecommendedPrice: 0
    }
    //setters
    function numberOfPackets(numberOfApplesInBox, packetSize){
        //update the relevant state values with the params
        appleState.applesInBox = numberOfApplesInBox;
        appleState.applePacketSize = packetSize;
        //divide the number of apples in a box by the packet size
        appleState.packetNumber = appleState.applesInBox / appleState.applePacketSize;
        //store the result in the 'numberOfPackets' property of state
    }

    function costPerApple(costPerAppleBox, numberOfApplesInBox){
        
        if(typeof costPerAppleBox !== 'number' || typeof numberOfApplesInBox !== 'number'){
            return 'Make sure that you enter numbers for the prices.';
        } else {
            appleState.boxCost = costPerAppleBox;
            appleState.applesInBox = numberOfApplesInBox;

            appleState.eachAppleCost = appleState.boxCost / appleState.applesInBox;
        }
       
    }

    function costPerPacket(costPerAppleBox, numberOfPackets){
        appleState.boxCost = costPerAppleBox;
        appleState.packetNumber = numberOfPackets;

        appleState.packetCost = appleState.boxCost / appleState.packetNumber;
    }

    function recommendedPacketPrice(){

    }
    
    //getters
    function getNumberOfPackets(){
        return appleState.packetNumber;
    }

    function getCostPerApple(){
        return appleState.eachAppleCost;
    }

    function getCostPerPacket(){
        return appleState.packetCost;
    }

    function getRecommendedPacketPrice(){
        return appleState.packetRecommendedPrice;
    }

    return {
        //exposed closure functions
        numberOfPackets,
        costPerApple,
        costPerPacket,
        recommendedPacketPrice,
        getNumberOfPackets,
        getCostPerApple,
        getCostPerPacket,
        getRecommendedPacketPrice
    }
}