const removeFromArray = function() {
    let array = arguments[0];

    const set1 = new Set();
    for (let i = 1; i < arguments.length; i++) {
        set1.add(arguments[i]);
    }

    for (let j = array.length; j >= 0; j--) {
        if (set1.has(array[j])) {
            array.splice(j, 1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
