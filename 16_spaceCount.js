// 16. Count spaces: Write a function spaceCount( ), which should count the 
// total number spaces that is available in the string. This function should accept 
// the one argument and return the total number of spaces.
// ○ “Revision is the mother of success”
// ○ “Javascript is the language of internet world”
function spaceCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++;
        }        
    }
    return count;
}
const strings = ["Revision is the mother of success", "JavaScript is the language of internet world"];
strings.forEach(str => {
    const count = spaceCount(str);
    console.log(`Number of spaces in "${str}": ${count}`);
});
