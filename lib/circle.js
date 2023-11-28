// import Shape parent class 
const Shape = require('./shape');

class Circle extends Shape {
    constructor(x, y, radius, shapeColor) {
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

// // tests 

// const newCircle = new Circle(150, 100, 90, "green", "Put", "purple" )
// console.log(newCircle._x)
// console.log(newCircle._y)
// console.log(newCircle._r)
// console.log(newCircle.render())