const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    let sum = 0;
    if (min > max) {
        const holder = min;
        min = max;
        max = holder;
    }
    for (let i = min; i <= max; i++) {
            sum += i;
        }
    return sum;
};

/*
pseudocode
Take two numbers
Create answer variable
Loop through all the numbers between them,  each time adding the index to the answer
return answer
I can't quite figure out the syntax to do this with reduce but it is 100% possible -
maybe make array of the numbers then reduce that
*/

// Do not edit below this line
module.exports = sumAll;
