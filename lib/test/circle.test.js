const Circle = require('../circle');

describe('Circle', () =>{
    // failure
    it('should fail if string entered for shapeColor is not a valid css color', () => {
        // arrange
        const expected = [150, 100, 90, 'green'];
        const subject = new Circle(150, 100, 90, "randomString")
        subject._shapeColor = subject._shapeColor.toLowerCase()
        // act
        const actual = [subject._x, subject._y, subject._r, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
    });

    // exception 
    it('should throw an error when number of arguments is greater than 1 but less than 4 or over 4', () => {
        // arrange
        const expected = new Error(
            'Wrong number of constructor arguments, must be empty or exactly four arguments'
            );

        // act
        const actual = () => new Circle(10, 30, 40, 50, 40, "stuff");
        
        // assert
        expect(actual).toThrowError(expected);
    });

    // empty object constructed
    it('should form a default Circle with all values being undefined', () => {
        // arrange
        const expected = undefined;
        // act
        const actual = new Circle();
        // assert
        expect(actual._x).toEqual(expected);
        expect(actual._y).toEqual(expected);
        expect(actual._r).toEqual(expected);
        expect(actual._shapeColor).toEqual(expected);
    });
    
    // complete object constructed
    it('should correctly assign values to object constructor properties', () => {
        // arrange
        const expected = [150, 100, 90, 'green'];
        const subject = new Circle(150, 100, 90, "green")
        // act
        const actual = [subject._x, subject._y, subject._r, subject.shapeColor]; // testing getters here
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
    });


    // setters
    it('after initialization of empty Circle class, use setter functions to set attribute values correctly', () => {
        // arrange
        const expected = [150, 100, 90, 'green'];
        const subject = new Circle();
        // act
        subject.x = 150;
        subject.y = 100;
        subject.r = 90;
        subject.shapeColor = "green"
        const actual = [subject._x, subject._y, subject._r, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
    });

    // render function
    it('should throw an error because there is no generic render function ', () => {
        // arrange
        const expected = '<circle cx="150" cy="100" r="90" fill="green"/>'

        // act
        const actual = new Circle(150, 100, 90, "green").render()
        
        // assert
        expect(expected).toEqual(actual)
    });
});

