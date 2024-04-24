let {filterNumber, increaseScore, squareOfNumber} = require("./Task.js")

test("Filter number", () => {
    let arrays = [20, 70, 77, 55, 85]
    let results = filterNumber(arrays)

    expect(results).toEqual([70, 77, 85])
})

test("Increase Score", () => {
    let arrays = [85, 92, 78, 88, 95]
    let results = increaseScore(arrays)

    expect(results).toEqual([90, 97, 83, 93, 100])
})

test("Square of Number", () => {
    let arrays = [2, 4, 6, 8, 10]
    let results = squareOfNumber(arrays)

    expect(results).toEqual([4, 16, 36, 64, 100])
})


