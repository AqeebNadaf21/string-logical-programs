// 6. Reverse String: Recommended to use define the functions
// ○ Reverse the string using any existing methods that you know
// ➢ const str = "Software";
// ➢ const str = “UI Developer”;
// ○ Reverse the string without using predefined methods.
// ➢ const str = "Web Developer";
// ➢ const str = “Billion Dollar”;
// ➢ const str = “Java”

// 1) Using Predefined Methods
function reverseStrUsingMethods(str) {
    return str.split('').reverse().join('');
}
const str1 = "Software";
const str2 = "UI Developer";

console.log(`The reverse of the string "${str1}" is: ${reverseStrUsingMethods(str1)}`);
console.log(`The reverse of the string "${str2}" is: ${reverseStrUsingMethods(str2)}`);


console.log("=============================================");
// 2) Without Using Predefined Methods
function reverseStrManually(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
const str3 = "Web Developer";
const str4 = "Billion Dollar";
const str5 = "Java"

console.log(`The reverse of the string "${str3}" is: ${reverseStrManually(str3)}`);
console.log(`The reverse of the string "${str4}" is: ${reverseStrManually(str4)}`);
console.log(`The reverse of the string "${str5}" is: ${reverseStrManually(str5)}`);




