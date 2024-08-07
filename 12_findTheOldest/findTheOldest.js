const findTheOldest = function(peoples) {
    let oldestPerson;
    let oldestAge = -1;

    for (let i = 0; i < peoples.length; i++) {
        let now = new Date();
        let age = 0;
        if (peoples[i].yearOfDeath == undefined) {
            age = now.getFullYear() - peoples[i].yearOfBirth;
        }
        else {
            age = peoples[i].yearOfDeath - peoples[i].yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = peoples[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
