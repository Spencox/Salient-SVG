const Shape = require('../shape');

describe('Shape', () =>{
    // failure
    it('should fail if string entered for shapeColor is not a valid css color', () => {
        // arrange
        const expected = [10, 20, 'red'];
        const subject = new Shape(10, 20, 'randomString');
        subject._shapeColor = subject._shapeColor.toLowerCase()
        // act
        const actual = [subject._x, subject._y, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
    });

    // exception 
    it('should throw an error when number of arguments is greater than 1 but less than 3 or over 3', () => {
        // arrange
        const expected = new Error(
            'Wrong number of constructor arguments, must be empty or exactly three arguments'
            );

        // act
        const actual = () => new Shape('10, 20');
        
        // assert
        expect(actual).toThrowError(expected);
    });

    // empty object constructed
    it('should form a default shape with all values being undefined', () => {
        // arrange
        const expected = undefined;
        // act
        const actual = new Shape();
        // assert
        expect(actual._x).toEqual(expected);
        expect(actual._y).toEqual(expected);
        expect(actual._shapeColor).toEqual(expected);
    });
    
    // complete object constructed
    it('should correctly assign values to object constructor properties', () => {
        // arrange
        const expected = [10, 20, 'red'];
        const subject = new Shape(10, 20, 'Red');
        subject._shapeColor = subject._shapeColor.toLowerCase()
        // act
        const actual = [subject._x, subject._y, subject.shapeColor]; // testing getters here
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
    });

    // setters
    it('after initialization of empty Shape class, use setter functions to set attribute values correctly', () => {
        // arrange
        const expected = [10, 20, 'red'];
        const subject = new Shape();
        // act
        subject.x = 10;
        subject.y = 20;
        subject.shapeColor = "Red"
        subject._shapeColor = subject._shapeColor.toLowerCase()
        const actual = [subject._x, subject._y, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
    });

    // render function
    it('should throw an error because there is no generic render function ', () => {
        // arrange
        const expected = new Error(
            'render method must be implemented in the subclass'
            );

        // act
        const actual = () => new Shape(10, 20, 'Red').render();
        
        // assert
        expect(actual).toThrowError(expected);
    });


});

