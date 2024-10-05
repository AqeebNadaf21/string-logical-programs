// 5. WAP to How do you split a string into an array of substrings?
// ○ const str = "apple,orange,banana";
// ○ const str = “Stew,Bill,Jenny,Elon”;
function splitString(str, delimiter) {
    return str.split(delimiter);
}
const str1 = "apple,orange,banana";
const str2 = "Stew,Bill,Jenny,Elon";

const result1 = splitString(str1, ',');
console.log(`The array of substrings from "${str1}" is:`, result1);

const result2 = splitString(str2, ',');
console.log(`The array of substrings from "${str2}" is:`, result2);
