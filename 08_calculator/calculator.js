const add = function(first,second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(numArr) {
  let output=0;
  for (let i=0; i < numArr.length; i++ ) {
    output += numArr[i];
  }
  return output;
	
};

const multiply = function(numArr) {
  let output=1;
  for (let i=0; i < numArr.length; i++ ) {
    output *= numArr[i];
  }
  return output;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(num) {
  let output=1;
	if ((num === 0)||(num === 1)) return output;
  for ( let i=num; i>0; i--) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
