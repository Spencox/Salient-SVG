// import Shape parent class 
const Shape = require('./shape');

// rectangle/square
class Rectangle extends Shape {
    constructor(x, y, width, height,shapeColor) {
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

// // tests

// const newRectangle = new Rectangle(10, 10, 180, 180, "orange", 'sie', 'yellow')
// console.log(newRectangle._x)
// console.log(newRectangle._y)
// console.log(newRectangle._width)
// console.log(newRectangle._height)
// console.log(newRectangle.render())