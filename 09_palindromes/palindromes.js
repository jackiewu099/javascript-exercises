function isAlphanumeric(char) {
    let code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);  // a-z
}


const palindromes = function (string) {
    let l = 0;
    let r = string.length-1;

    while (l < r) {
        while (l < r && !isAlphanumeric(string[l])) {
            l++;
        }
        while (l < r && !isAlphanumeric(string[r])) {
            r--;
        }
        if (string[l].toLowerCase() !== string[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
