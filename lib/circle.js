// import Shape parent class 
const Shape = require('./shape');

class Circle extends Shape {
    constructor(x, y, radius, shapeColor) {
         // throw error if all arguments are not present
         if ((arguments.length > 0 && arguments.length < 4) || arguments.length > 4) {
            throw new Error(
              'Wrong number of constructor arguments, must be empty or exactly four arguments'
            );
          }
        super(x, y, shapeColor);
        this._r = radius;
    }
    // .svg xml format for circle
    render() {
        return `<circle cx="${this._x}" cy="${this._y}" r="${this._r}" fill="${this._shapeColor}"/>`
    }
    // getters
    get r() {
        return this._r
    }
    // setters
    set r(updateRadius) {
        this._r = updateRadius;
    }
}

module.exports = Circle;
