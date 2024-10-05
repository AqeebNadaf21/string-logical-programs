// 2. WAP to print or log the last character of the given strings
// ○ const str = “Hey, my friend, Programming Language”
// ○ const str = “I am learning logical programs”
// ○ const str = “Angular
function getLastCharacter(str) {
    return str.charAt(str.length - 1);
}
const str1 = "Hey, my friend, Programming Language";
const str2 = "I am learning logical programs";
const str3 = "Angular";

console.log(`The last character of the string "${str1}" is: ${getLastCharacter(str1)}`)
console.log(`The last character of the string "${str2}" is: ${getLastCharacter(str2)}`)
console.log(`The last character of the string "${str3}" is: ${getLastCharacter(str3)}`)
