const Triangle = require('../triangle');

describe('Triangle', () =>{
    // // failure
    // it('should fail if string entered for shapeColor is not a valid css color', () => {
    //     // arrange
    //     const expected = [150, 10, 254, 190, 46, 190, 'blue'];
    //     const subject = new Triangle(150, 10, 254, 190, 46, 190, 'randomString') 
    //     // act
    //     const actual = [subject._x, subject._y, subject._x2, subject._y2, subject._x3, subject._y3, subject.shapeColor];
    //     // assert
    //     expect(actual[0]).toEqual(expected[0]);
    //     expect(actual[1]).toEqual(expected[1]);
    //     expect(actual[2]).toEqual(expected[2]);
    //     expect(actual[3]).toEqual(expected[3]);
    //     expect(actual[4]).toEqual(expected[4]);
    //     expect(actual[5]).toEqual(expected[5]);
    //     expect(actual[6]).toEqual(expected[6]);
    // });

    // exception 
    it('should throw an error when number of arguments is greater than 1 but less than 6 or over 6', () => {
        // arrange
        const expected = new Error(
            'Wrong number of constructor arguments, must be empty or exactly seven arguments'
            );

        // act
        const actual = () => new Triangle(10, 30, "blue");
        
        // assert
        expect(actual).toThrowError(expected);
    });

    // empty object constructed
    it('should form a default Triangle with all values being undefined', () => {
        // arrange
        const expected = undefined;
        // act
        const actual = new Triangle();
        // assert
        expect(actual._x).toEqual(expected);
        expect(actual._y).toEqual(expected);
        expect(actual._x2).toEqual(expected);
        expect(actual._y2).toEqual(expected);
        expect(actual._x3).toEqual(expected);
        expect(actual._y3).toEqual(expected);
        expect(actual._shapeColor).toEqual(expected);
    });
    
    // complete object constructed
    it('should correctly assign values to object constructor properties', () => {
        // arrange
        const expected = [150, 10, 254, 190, 46, 190, 'blue'];
        const subject = new Triangle(150, 10, 254, 190, 46, 190, 'blue') 
        // act
        const actual = [subject._x, subject._y, subject._x2, subject._y2, subject._x3, subject._y3, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
        expect(actual[4]).toEqual(expected[4]);
        expect(actual[5]).toEqual(expected[5]);
        expect(actual[6]).toEqual(expected[6]);
    });

    // setters
    it('after initialization of empty Triangle class, use setter functions to set attribute values correctly', () => {
        // arrange
        const expected = [150, 10, 254, 190, 46, 190, 'blue'];
        const subject = new Triangle(150, 10, 254, 190, 46, 190, 'blue') 
        // act
        subject.x = 150;
        subject.y = 10;
        subject.x2 = 254;
        subject.y2 = 190;
        subject.x3 = 46;
        subject.y3 = 190;
        subject.shapeColor = "blue"
        const actual = [subject._x, subject._y, subject._x2, subject._y2, subject._x3, subject._y3, subject.shapeColor];
        // assert
        expect(actual[0]).toEqual(expected[0]);
        expect(actual[1]).toEqual(expected[1]);
        expect(actual[2]).toEqual(expected[2]);
        expect(actual[3]).toEqual(expected[3]);
        expect(actual[4]).toEqual(expected[4]);
        expect(actual[5]).toEqual(expected[5]);
        expect(actual[6]).toEqual(expected[6]);
    });

    // render function
    it('should throw an error because there is no generic render function ', () => {
        // arrange
        const expected = '<polygon points="150, 10 254, 190 46, 190" fill="blue"/>'

        // act
        const actual = new Triangle(150, 10, 254, 190, 46, 190, 'blue').render()
        
        // assert
        expect(expected).toEqual(actual)
    });
});

