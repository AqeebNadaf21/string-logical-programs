// 4. WAP to check whether given strings contains word ‘UI’ or not?
// ○ const str = “React - UI Developer”
// ○ const str = “UI Developer”
// ○ const str = “Front end and backend technologies”
function containsUI(str) {
    return str.includes('UI');
}
const str1 = "React - UI Developer";
const str2 = "UI Developer";
const str3 = "Front end and backend technology";

console.log(`Does the string "${str1}" contain 'UI': ${containsUI(str1)}`)
console.log(`Does the string "${str2}" contain 'UI': ${containsUI(str2)}`)
console.log(`Does the string "${str3}" contain 'UI': ${containsUI(str3)}`)
