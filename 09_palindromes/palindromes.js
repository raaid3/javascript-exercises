const palindromes = function (a) {
    return !a.split(/\W/).join("").localeCompare(a.split(/\W/).join("").split("").reverse().join(""), undefined, {sensitivity: "base"});
};

// Do not edit below this line
module.exports = palindromes;
