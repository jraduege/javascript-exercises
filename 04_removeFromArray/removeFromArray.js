const removeFromArray = function(inputArray, ...targets) {
    for (let i = 0; i < targets.length; i++) {
        let position=inputArray.indexOf(targets[i]);
        if (position>=0) {
            inputArray.splice(position,1);
        }
    }
    return inputArray;
};


// Do not edit below this line
module.exports = removeFromArray;
