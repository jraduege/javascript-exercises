const repeatString = function(input, number) {

    let output="";

    if (number < 0) {
        return 'ERROR';
    } else {
        for ( let i=0; i < number; i++) {
            output += input;
        }
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
