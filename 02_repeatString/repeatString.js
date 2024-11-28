const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR";
    }
    else {
        let curStr = "";
        for(let i = 0; i < num; i++){
            curStr = curStr + str;
        }
        return curStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
