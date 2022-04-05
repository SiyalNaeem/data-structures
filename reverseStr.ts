
function reverseString(str: string){
    let spliitedStr = str.split("");
    let revStr = "";

    for(let i = spliitedStr.length -1; i >= 0; i--){
        revStr += spliitedStr[i];
    }

    return revStr;

}

function reverseString2(str: string){
    return str.split('').reverse().join('');
}

console.log(reverseString("My Name is Naeem"));
console.log(reverseString2("My Name is Naeem"));
