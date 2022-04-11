const removeFromArray = function(...theArgs) {
    const array = theArgs[0];
    return array.filter(val => !theArgs.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
