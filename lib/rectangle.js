// import Shape parent class 
const Shape = require('./shape');

// rectangle/square
class Rectangle extends Shape {
    constructor(x, y, width, height, shapeColor) {
         // throw error if all arguments are not present
         if ((arguments.length > 0 && arguments.length < 5) || arguments.length > 5) {
            throw new Error(
              'Wrong number of constructor arguments, must be empty or exactly five arguments'
            );
          }
        super(x, y, shapeColor);
        this._width = width;
        this._height = height;
    }
    // .svg xml format for rectangle
    render() {
        return `<rect x="${this._x}" y="${this._y}" width="${this._width}" height="${this._height}" fill="${this._shapeColor}" />`
    }
    // getters
    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    
    // setters
    set width(updateWidth) {
        this._width = updateWidth
    }
    set height(updateHeight) {
        this._height = updateHeight
    }
}

module.exports = Rectangle;
