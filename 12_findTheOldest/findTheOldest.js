const findTheOldest = function(people) {
    let oldest = people.reduce(function (newObj, person) {
        if (findAge(newObj) > findAge(person)) {
            return newObj;
        } else {
            return person;
        }
      }, {
        name: "Bung",
        yearOfBirth: 1970,
        yearOfDeath: 1970,
      });
    return oldest;
};

const findAge = function(person) {
    let age=0;
    if (!person.yearOfDeath) {
        d = new Date();
        age=d.getFullYear()-person.yearOfBirth;
    } else {
        age=person.yearOfDeath-person.yearOfBirth;
    }
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;


