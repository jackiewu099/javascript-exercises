const reverseString = function(word) {
    let array = [];
    for (let i = 0 ; i < word.length; i++) {
        array.push(word[i]);
    }

    let l = 0;
    let r = array.length-1;
    
    while (l < r) {
        [array[l], array[r]] = [array[r], array[l]];
        l++;
        r--;
    }
    word = array.join('');
    return word;
};

// Do not edit below this line
module.exports = reverseString;
