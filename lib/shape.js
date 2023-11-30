class Shape {
    constructor(startX, startY, shapeColor) {
         // throw error if all arguments are not present
         if ((arguments.length > 0 && arguments.length < 3) || arguments.length > 3) {
            throw new Error(
              'Wrong number of constructor arguments, must be empty or exactly three arguments'
            );
          }
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


