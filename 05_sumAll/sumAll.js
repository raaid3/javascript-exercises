const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    else if(a <= 0 || b <= 0){
        return 'ERROR';
    }
    else {
        let greaterInt = Math.max(a, b);
        let smallerInt = Math.min(a, b);
        let acc = 0;

        for(let i = smallerInt; i <= greaterInt; i++) {
            acc += i;
        }
        return acc;
    }
};



// Do not edit below this line
module.exports = sumAll;
