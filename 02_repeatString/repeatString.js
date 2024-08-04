const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else if (string == "") {
        return "";
    }

    ans = "";
    for (let i = 0; i < num; i++) {
        ans = ans.concat(string);
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
