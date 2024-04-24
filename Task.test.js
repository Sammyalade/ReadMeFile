let {filterNumber, increaseScore, squareOfNumber, filterTime, expenseTracker, filterHealthyFood} = require("./Task.js")

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

test("Filter time", () => {
    let times = ["9: 00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
    let time = "PM";

    let result = filterTime(times, time);

    expect(result).toEqual(["1:00PM", "3:00PM", "5:00PM"]);
})

test("Expense tracker", ()=>{
    let jake = { groceries: 150, diningOut: 100, transportation: 50, entertainment: 80 };

    let result = expenseTracker(jake)

    expect(result).toEqual(380)
})

test("Healthy Food", ()=>{
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];

    let healthyFood = filterHealthyFood(shoppingList);

    expect(healthyFood).toEqual([
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
    ]);
})


