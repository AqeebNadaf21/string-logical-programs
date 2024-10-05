// 3. WAP to print or log the first character of the given strings
// ○ const str = “React”
// ○ const str = “Elon Musk”
// ○ const str = “Apple founder is Stew Job”
function getFirstCharacter(str) {
    return str.charAt(0);
}
const str1 = "React";
const str2 = "Elon Musk";
const str3 = "Apple founder is Stew Job";

console.log(`The first character of the string "${str1}" is: ${getFirstCharacter(str1)}`)
console.log(`The first character of the string "${str2}" is: ${getFirstCharacter(str2)}`)
console.log(`The first character of the string "${str3}" is: ${getFirstCharacter(str3)}`)

