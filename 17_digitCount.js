// 17. Find the numeric digits: Write a program with function name digitCount() 
// to count the total number of numeric digits from the below strings. This function 
// accepts the one argument as a string.
// ○ Codemind2019
// ○ Twenty24
// ○ Bharath1947India
function digitCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            count++
        }
    }
    return count;
}
const strings = ["Codemind2019", "Twenty24", "Bharath1947India"];
strings.forEach(str => {
    const count = digitCount(str);
    console.log(`Number of numeric digits in "${str}": ${count}`);
});
