class Shape {
    constructor(startX, startY, textColor, logoText , shapeColor) {
        this._x = startX;
        this._y = startY;
        this.logo = logoText
    }

    render() {
        throw new Error("render method must be implemented in the subclass"); 
    }

}

const shape = new Shape(1, 30);
console.log(shape._x);
console.log(shape._y);
//console.log(shape.render());

// circle

class Circle extends Shape {
    constructor(x, y, radius, logoText) {
        super(x, y, logoText);
        this._r = radius;
    }
    render() {
        return `<circle cx="${this._x}" cy="${this._y}" r="${this._r}"/>`
    }
}

// tests 

const newCircle = new Circle(10, 10, 25)
console.log(newCircle._x)
console.log(newCircle._y)
console.log(newCircle._r)
console.log(newCircle.render())


// rectangle/square
class Rectangle extends Shape {
    constructor(x, y, width, height, logoText) {
        super(x, y, logoText);
        this._width = width;
        this._height = height;
    }

    render() {
        return `<rect x="${this._x}" y="${this._y}" width="${this._width}" height="${this._height}"/>`
    }
}

const newRectangle = new Rectangle(10, 10, 50, 50)
console.log(newRectangle._x)
console.log(newRectangle._y)
console.log(newRectangle._width)
console.log(newRectangle._height)
console.log(newRectangle.render())

// rectangle/square
class Triangle extends Shape {
    constructor(x, y, x2, y2 , x3, y3, logoText ) {
        super(x, y, logoText);
        this._x2 = x2;
        this._y2 = y2;
        this._x3 = x3;
        this._y3 = y3;
    }

    render() {
        return `<polygon points="${this._x}, ${this._y} ${this._x2}, ${this._y2} ${this._x3}, ${this._y3}"/>`
    }
}

//  <polygon points="150, 10 254, 190 46, 190" fill="blue" />
const newTriangle = new Triangle(150, 10, 254, 190, 46, 190) 
console.log(newTriangle.render())

