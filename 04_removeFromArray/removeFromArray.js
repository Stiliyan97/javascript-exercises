const removeFromArray = function(elements, ...args) {
    let filteredElements = elements.filter(element => !args.includes(element));
    return filteredElements;
};

// Do not edit below this line
module.exports = removeFromArray;
