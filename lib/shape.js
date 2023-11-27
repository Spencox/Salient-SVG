class Shape {
    constructor(startX, startY, shapeColor) {
        this._x = startX;
        this._y = startY;
        this._shapeColor = shapeColor;
    }

    // abstract method to be used later
    render() {
        throw new Error("render method must be implemented in the subclass"); 
    }
    // getters

    // returns object value of starting x position
    get x() {
        return this._x;
    }

    // returns object value of starting y position
    get y() {
        return this._y;
    }

    // returns color of object shape
    get shapeColor() {
        return this._shapeColor;
    }

    // setters

    // sets starting x position
    set x(updateX) {
        this._x = updateX
    }

    // sets starting y position
    set y(updateY) {
        this._y = updateY
    }

    // sets shape color
    set shapeColor(updateShapeColor) {
        this._shapeColor = updateShapeColor
    }

}

module.exports = Shape;

// // circle

// class Circle extends Shape {
//     constructor(x, y, radius, textColor, logoText , shapeColor) {
//         super(x, y, textColor, logoText , shapeColor);
//         this._r = radius;
//     }
//     render() {
//         return `<circle cx="${this._x}" cy="${this._y}" r="${this._r}" fill="${this._shapeColor}"/>`
//     }
// }

// // tests 

// //const newCircle = new Circle(150, 100, 90, "green", "Put", "purple" )
// const newCircle = new Circle();
// console.log(newCircle._x)
// console.log(newCircle._y)
// console.log(newCircle._r)
// console.log(newCircle.render())


// // rectangle/square
// class Rectangle extends Shape {
//     constructor(x, y, width, height, textColor, logoText , shapeColor) {
//         super(x, y, textColor, logoText , shapeColor);
//         this._width = width;
//         this._height = height;
//     }

//     render() {
//         return `<rect x="${this._x}" y="${this._y}" width="${this._width}" height="${this._height}" fill="${this._shapeColor}" />`
//     }
// }

// const newRectangle = new Rectangle(10, 10, 180, 180, "orange", 'sie', 'yellow')
// console.log(newRectangle._x)
// console.log(newRectangle._y)
// console.log(newRectangle._width)
// console.log(newRectangle._height)
// console.log(newRectangle.render())

// // rectangle/square
// class Triangle extends Shape {
//     constructor(x, y, x2, y2 , x3, y3, textColor, logoText , shapeColor ) {
//         super(x, y, textColor, logoText , shapeColor);
//         this._x2 = x2;
//         this._y2 = y2;
//         this._x3 = x3;
//         this._y3 = y3;
//     }

//     render() {
//         return `<polygon points="${this._x}, ${this._y} ${this._x2}, ${this._y2} ${this._x3}, ${this._y3}" fill="${this._shapeColor}"/>`
//     }
// }

// //  <polygon points="150, 10 254, 190 46, 190" fill="blue" />
// const newTriangle = new Triangle(150, 10, 254, 190, 46, 190, 'blue', 'SVG', 'red') 
// console.log(newTriangle.render())

