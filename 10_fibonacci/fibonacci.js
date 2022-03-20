const fibonacci = function(num) {
    num=Number(num);
    if (num <= 0) return "OOPS";

    let priorValue = 0;
    let currentValue = 1;
    let tempValue = 0;

    for (let i=1; i < num; i++) {
            tempValue = currentValue;     
            currentValue = currentValue + priorValue;
            priorValue = tempValue;
        }
    return currentValue;
};

// Do not edit below this line
module.exports = fibonacci;
