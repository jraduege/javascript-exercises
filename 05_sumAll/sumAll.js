const sumAll = function(firstNum, secondNum) {
    if (isNotNumber(firstNum)||isNotNumber(secondNum)||firstNum<0||secondNum<0) {
        return "ERROR";
    }
    if (firstNum > secondNum) {
        return doSum(secondNum, firstNum);
    } else {
        return doSum(firstNum, secondNum);
    }
};

const doSum = function(smallerNum,biggerNum) {
    let output=0;
    for (let i=smallerNum; i <= biggerNum; i++) {
        output += i;
    }
    return output;
}

const isNotNumber = function(input) {
    return typeof(input)!=="number";
}

// Do not edit below this line
module.exports = sumAll;
