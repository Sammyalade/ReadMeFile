function filterNumber(numbers){
    return numbers.filter(num => num >= 70);
}

function increaseScore(numbers){
    return numbers.map(num => num + 5);
}

function squareOfNumber(numbers){
    return numbers.map(num => num * num);
}

module.exports = {filterNumber, increaseScore, squareOfNumber};

