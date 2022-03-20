const caesar = function(inputString, numShift) {
    let output="";
    for (let i=0; i < inputString.length; i++) {
        let currChar=inputString.charCodeAt(i);
        if ((numShift>26)||(numShift < -26)) {
            numShift = numShift % 26;
        }
        let newChar=currChar+numShift;
        switch (true) {
            case ((currChar>=65)&&(currChar<=90)):
                switch (true) {
                    case (newChar > 90):
                        newChar = newChar - 90 + 64;
                        break;
                    case (newChar < 65):
                        newChar = 90 + (newChar - 64);
                        break;
                }
                break;
            case ((currChar>=97)&&(currChar<=122)):
                switch (true) {
                    case (newChar > 122):
                        newChar = newChar -122 + 96;
                        break;
                    case (newChar < 97):
                        newChar = 122 + (newChar - 96);
                        break;
                }
                break;
            default:
                newChar = currChar;   
        }
        output += String.fromCharCode(newChar);
    }
    return output;
};

// Do not edit below this line
module.exports = caesar;
