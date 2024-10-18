const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt) || secondInt < 0 || firstInt < 0){
        return "ERROR";
    }
    else if (firstInt > secondInt){
        for (let i = firstInt; i >= secondInt ; i--) {
            sum += i;
        }
    } else {
    for (let i = firstInt; i <= secondInt ; i++) {
        sum += i;
    }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
