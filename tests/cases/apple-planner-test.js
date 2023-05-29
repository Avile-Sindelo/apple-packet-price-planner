describe('Apple planner tester', function(){
    it('if we have 60 apples in the box, and we would like to have 3 apples in each packet, how many packets can we get from the apples in the box - 20', function(){
        //initiate an object from the factory function
        let planner = ApplePlanner();
        planner.numberOfPackets(60, 3);
        //call the closure methods and pass the relevant params, if any.
        //assert.equal 
        assert.equal(20, planner.getNumberOfPackets());
    });

    it('if we spend R30 on a box of apples, and we find 3 apples inside of the box, then how much is each apple - R10', function(){
        //initiate an object from the factory function
        let planned = ApplePlanner();
        planned.costPerApple(30, 3);
        assert.equal(10, planned.getCostPerApple());
    });

    it('if we spend R60 on a box of apples, and we would like the packet size to be 10 apples per packet, then how many packets can we make from the box of apples - 6', function(){
        //initiate an object from the factory function
        let planner = ApplePlanner();
        planner.costPerPacket(60,10);
        //call the closure methods and pass the relevant params, if any.
        //assert.equal 
        assert.equal(6, planner.getCostPerPacket());
    });
});