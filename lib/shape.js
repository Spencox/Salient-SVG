class Shape {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }

    render() {
        return "Need shape type"  
    }

}

const shape = new Shape(1, 30);
console.log(shape.x);
console.log(shape.y);
console.log(shape.render());

// circle

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.r = radius;
    }
}

// tests 

const newCircle = new Circle(10, 10, 25)
console.log(newCircle.x)
console.log(newCircle.y)
console.log(newCircle.r)
console.log(newCircle.render())


// rectangle/square
class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
}

const newRectangle = new Rectangle(10, 10, 50, 50)
console.log(newRectangle.x)
console.log(newRectangle.y)
console.log(newRectangle.width)
console.log(newRectangle.height)
console.log(newRectangle.render())

