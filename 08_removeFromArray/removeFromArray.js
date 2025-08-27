const removeFromArray = function(arr, ...removeThis) {
    const newArray = [];
    arr.forEach((item) => {
        if (!removeThis.includes(item)){
            newArray.push(item);
        }
    });
    return  newArray;
    }

// Do not edit below this line
module.exports = removeFromArray;
