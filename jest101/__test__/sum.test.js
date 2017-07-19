var sum = require('../src/sum');

describe('sum',function() {
    it('should return 3 when sum 1 with 2',function(){
        var expedtedValue = 3;
        var actual = sum(1,2);
        expect(actual).toBe(expedtedValue);
    })

    it('should return 2 when sum 2 with 4',function(){
        var expedtedValue = 4;
        var actual = sum(2,2);
        expect(actual).toBe(expedtedValue);
    })

    it('should return 3 when sum 8 with 69',function(){
        var expedtedValue = 69;
        var actual = sum(3,8);
        expect(actual).toBe(expedtedValue);
    })
})