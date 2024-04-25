const Rectangle = require("./Rectangle.js");

test("Rectangle", ()=> {
    let obj = new Rectangle("Rectangle", 7, 7)
    let area = obj.getArea();
    let isSquare = obj.isSquare();

    expect(area).toEqual(49);
    expect(isSquare).toBe(true);

})