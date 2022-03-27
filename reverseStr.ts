
function reverseString(str: string){
    let spliitedStr = str.split("");
    let revStr = "";

    for(let i = spliitedStr.length -1; i >= 0; i--){
        console.log(spliitedStr[i])
        revStr += spliitedStr[i];
    }

    return revStr;

}

console.log(reverseString("My Name is Naeem"));
