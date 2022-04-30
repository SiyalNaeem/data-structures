//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str: string) {

    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;

}

function reverseStringRecursion(str: string): string{

    if (str.length <= 1) {
        return str;
    }

    return reverseStringRecursion(str.substr(1)) + str[0];

}

console.log(reverseString('yoyo mastery'))
console.log(reverseStringRecursion('yoyo mastery'))
//should return: 'yretsam oyoy'