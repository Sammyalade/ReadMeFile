let returnMode = require('./Mode.js');

test("Return Mode", () => {
    let array = [1, 1, 1, 2, 2, 2];

    let result = returnMode(array);

    expect(result).toEqual([1, 2]);
})