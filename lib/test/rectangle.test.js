const Rectangle = require('../rectangle');

describe('Rectangle', () =>{
    // // failure
    // it('should fail if string entered for shapeColor is not a valid css color', () => {
    //     // arrange
    //     const expected = [10, 10, 180, 180,'yellow'];
    //     const subject = new Rectangle(10, 10, 180, 180, "randomString")
    //     // act
    //     const actual = [subject._x, subject._y, subject._width, subject._height, subject.shapeColor];
    //     // assert
    //     expect(actual[0]).toEqual(expected[0]);
    //     expect(actual[1]).toEqual(expected[1]);
    //     expect(actual[2]).toEqual(expected[2]);
    //     expect(actual[3]).toEqual(expected[3]);
    //     expect(actual[4]).toEqual(expected[4]);
    // });

    // exception 
    it('should throw an error when number of arguments is greater than 1 but less than 4 or over 4', () => {
        // arrange
        const expected = new Error(
            'Wrong number of constructor arguments, must be empty or exactly five arguments'
            );

        // act
        const actual = () => new Rectangle(10, 30, "blue");
        
        // assert
        expect(actual).toThrowError(expected);
    });

    // empty object constructed
    it('should form a default Rectangle/Square with all values being undefined', () => {
        // arrange
        const expected = undefined;
        // act
        const actual = new Rectangle();
        // assert
        expect(actual._x).toEqual(expected);
        expect(actual._y).toEqual(expected);
        expect(actual._width).toEqual(expected);
        expect(actual._height).toEqual(expected);
        expect(actual._shapeColor).toEqual(expected);
    });
    
    // complete object constructed
    it('should correctly assign values to object constructor properties', () => {
        // arrange
        const expected = [10, 10, 180, 180,'yellow'];
        const subject = new Rectangle(10, 10, 180, 180, "yellow")
        // act
        const actual = [subject._x, subject._y, subject._width, subject._height, subject.shapeColor]; // testing getter functions here
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
        expect(actual[4]).toEqual(expected[4]);
    });

    // setters
    it('after initialization of empty Rectangle class, use setter functions to set attribute values correctly', () => {
        // arrange
        const expected = [10, 10, 180, 180,'yellow'];
        const subject = new Rectangle();
        // act
        subject.x = 10;
        subject.y = 10;
        subject.width = 180;
        subject._height = 180;
        subject.shapeColor = "yellow"
        const actual = [subject._x, subject._y, subject._width, subject._height, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
        expect(actual[4]).toEqual(expected[4]);
    });

    // render function
    it('should throw an error because there is no generic render function ', () => {
        // arrange
        const expected = '<rect x="10" y="10" width="180" height="180" fill="yellow" />'

        // act
        const actual = new Rectangle(10, 10, 180, 180, "yellow").render()
        
        // assert
        expect(expected).toEqual(actual)
    });
});

