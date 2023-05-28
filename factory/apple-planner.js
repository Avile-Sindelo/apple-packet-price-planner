function ApplePlanner(currentState){
    //state variable
    var appleState = currentState || {
        boxCost: 0,
        applesInBox: 0,
        applePacketSize: 0,
        requiredProfitPercentage: 0
    }
    //setters
    
    //getters
    function getNumberOfPackets(){

    }

    function getAppleCost(){
        
    }

    function getPacketCost(){

    }

    function getRecommendedPacketPrice(){

    }

    return {
        //exposed closure functions
        getNumberOfPackets,
        getAppleCost,
        getPacketCost,
        getRecommendedPacketPrice
    }
}