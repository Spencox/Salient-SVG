const Shape = require('../shape');

describe('Shape', () =>{
    it('should form a default shape with all values being undefined', () => {
        // arrange
        const subject = new Shape();
        // act
        const actual = subject;
        // assert
        expect(actual._x).toBeUndefined();
        expect(actual._y).toBeUndefined();
        expect(actual._shapeColor).toBeUndefined();
    });
});

