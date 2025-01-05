const fibonacci = function(x) {
    let y = +x;
    if(y < 0){return "OOPS"};
    let a = 0;
    let b = 1;
    while(y > 1){
        let c = a;
        a = b;
        b += c;
        y--;
    }
    return y === 0 ? 0 : b;
};

// Do not edit below this line
module.exports = fibonacci;
