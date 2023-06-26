let distributedCandies = function(candyType) {
    let numOfTypes = [...new Set(candyType)].length
    let numToEat = candyType.length / 2;
    return numOfTypes >= numToEat ? numToEat: numOfTypes
};