const removeFromArray = function(arr1, ...arr2) {
    return arr1.filter(x => !arr2.includes(x));
};

// the above is a variadic function
// it has indefinite arity (number of arguments)

// Do not edit below this line
module.exports = removeFromArray;
