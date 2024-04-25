let Shapes = require("./Shapes.js");

class Rectangle extends Shapes {

    constructor(name, side1, side2) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea(side1, side2){
        return this.side1 * this.side2;
    }

    isSquare(side1, side2){
        return this.side1 === this.side2;
    }

}

module.exports = Rectangle;