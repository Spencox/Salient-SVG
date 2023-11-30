// import Shape parent class 
const Shape = require('./shape');

class Triangle extends Shape {
    constructor(x, y, x2, y2 , x3, y3, shapeColor ) {
         // throw error if all arguments are not present
         if ((arguments.length > 0 && arguments.length < 7) || arguments.length > 7) {
            throw new Error(
              'Wrong number of constructor arguments, must be empty or exactly seven arguments'
            );
          }
        super(x, y, shapeColor);
        this._x2 = x2;
        this._y2 = y2;
        this._x3 = x3;
        this._y3 = y3;
    }
    // .svg xml format for triangle
    render() {
        return `<polygon points="${this._x}, ${this._y} ${this._x2}, ${this._y2} ${this._x3}, ${this._y3}" fill="${this._shapeColor}"/>`
    }
    // getters
    get x2() {
        return this._x2
    }
    get y2() {
        return this._y2
    }
    get x3() {
        return this._x3
    }
    get y3() {
        return this._y3
    }
    
    // setters
    set x2(updateX2) {
        this._x2 = updateX2
    }
    set y2(updateY2) {
        this._y2 = updateY2
    }
    set x3(updateX3) {
        this._x3 = updateX3
    }
    set y3(updateY3) {
        this._y3 = updateY3
    }
}

module.exports = Triangle;

// tests

//  <polygon points="150, 10 254, 190 46, 190" fill="blue" />
const newTriangle = new Triangle(150, 10, 254, 190, 46, 190, 'blue') 
