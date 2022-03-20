const reverseString = function(inputString) {
    let size = inputString.length;
    let output = "";
    for ( let i=(size-1); i >= 0; i--) {
        output += inputString[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
