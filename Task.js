function filterNumber(numbers){
    return numbers.filter(num => num >= 70);
}

function increaseScore(numbers){
    return numbers.map(num => num + 5);
}

function squareOfNumber(numbers){
    return numbers.map(num => num * num);
}

function filterTime(times, timeToFind){
    return times.filter(time =>{
        for(let letter of time){
            if(time.endsWith(timeToFind)){
                return letter;
            }
        }
    });
}

function expenseTracker(arrays){
    let sum = 0;
    for(let key in arrays){
        sum += arrays[key]
    }
    return sum;
}

function filterHealthyFood(array){
    let healthyFood = array.filter(name=> name.isHealthy === true)
    for(const food of healthyFood){
        console.log(food.name);
    }
    return healthyFood;
}

module.exports = {filterNumber, increaseScore, squareOfNumber, filterTime, expenseTracker, filterHealthyFood};

