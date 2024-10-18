const repeatString = function(repeatString, numberOfRepetitions) {
    let finalString = "";
    if (numberOfRepetitions < 0) {
        return "ERROR";
    }
    for (let i = 1; i <= numberOfRepetitions; i++) {
        finalString += repeatString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
