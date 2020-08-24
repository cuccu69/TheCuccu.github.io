//Bai01:
function testMethod(a, b){
    result = b.includes(a);
    return result;
}

console.log(testMethod("meo", "choyeumeo"));
console.log(testMethod("a", "b"));

//Bai02:
function shortenString(string) {
    let result = "";
    if(string.length < 8){
        return a;
    } else{
        for(let i = 0; i < 8; i++){
            result += string[i];
        }
    }
    return (result + "...");
}

console.log(shortenString('I love you'));

//Bai03: chưa làm xong
function capitalizeString(string) {
    let newString = string.toLowerCase();
    
    for(let i = 0; i < newString.length; i++){
        if(i == 0){
            newString = newString[i].toUpperCase() + newString.slice(i + 1);
        } else {
            if(newString[i] == " " && (i + 1) < newString.length){
                newString = newString[i + 1].toUpperCase() + newString.slice(i + 2);
                i++;
            }
        }
    }

    return newString;
}

console.log(capitalizeString("con mEo cOn"));

//Bai04:
function muntil10Times (string) {
    let result = string;
    for(let i = 0; i < 9; i++){
        result += " " + string;
    }
    return result;
}

console.log(muntil10Times("love"));

//Bai05 + Bai06 tuong tu Bai04

//Bai07:
function reverseString(string) {
    let result = "";

    for(let i = string.length - 1; i >= 0; i--){
        result += string[i];
    }

    return result;
}

console.log(reverseString('Hello'));

//Bai08:
function checkSymmetry(string) {
    string = string.replace(" ", "");
}