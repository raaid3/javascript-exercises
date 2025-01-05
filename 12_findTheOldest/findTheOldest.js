const findTheOldest = function(a) {
    return a.reduce((a, e)=>{
            a.age = (("yearOfDeath" in a) ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth;
            e.age = (("yearOfDeath" in e) ? e.yearOfDeath : new Date().getFullYear()) - e.yearOfBirth;
            if(a.age < e.age){
                return e;
            }
            else {
                return a;
            }
        })
};

// Do not edit below this line
module.exports = findTheOldest;
