const assignBook = require("./BookClub");

function returnMode(array) {
    let number = [];
    let maxCount = 0;

    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (count > maxCount && i !== 0) {
            number.push(array[i]);
            maxCount = count;
        } else if (count === maxCount && !number.includes(array[i])) {
            number.push(array[i]);
            maxCount = count;
        }
    }
    return number;
}

module.exports = returnMode;


console.log(returnMode([1, 1, 1, 2, 2]))
console.log(returnMode([5, 3, 3, 3, 1]))