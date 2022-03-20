const leapYears = function(year) {
    switch (true) {
        case (year % 100) === 0:
            return ((year % 400) === 0);
        case (year % 4) ===0:
            return (true);
        default:
            return (false);

    }
};

// Do not edit below this line
module.exports = leapYears;
