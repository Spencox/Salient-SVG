class Shape {
    constructor(startX, startY) {
        this._x = startX;
        this._y = startY;
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
    constructor(x, y, radius) {
        super(x, y);
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
    constructor(x, y, width, height) {
        super(x, y);
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
    constructor(x, y, x2, height) {
        super(x, y);
        this._width = width;
        this._height = height;
    }

    render() {
        return `<rect x="${this._x}" y="${this._y}" width="${this._width}" height="${this._height}"/>`
    }
}

