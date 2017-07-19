describe('unit test life cycle with Jest',function(){
    beforeAll(function(){
        console.log("Before All") ;
    });

    afterAll(function(){
        console.log("After All") ;
    });

    beforeEach(function(){
        console.log("Before Each") ;
    });

    afterEach(function(){
        console.log("After Each") ;
    });

    it("Run Test",function(){
        console.log("Test Case");
        expect(true).toBe(true) ;
    });
});