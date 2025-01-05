const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((acc, e)=>acc + e, 0);
};

const multiply = function(a) {
  return a.reduce((acc, e)=>acc * e, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	let acc = 1;
  let counter = 2;
  while(counter <= x){
    acc *= counter;
    counter++;
  }
  return acc;
  
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
