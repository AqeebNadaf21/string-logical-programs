// 8. Program to count vowels: Define a function vowelsCount( ) with one 
// argument and call this function by passing below strings one by one. This 
// function must return the vowels count that’s been passed as an argument.
// ○ “JavaScript”
// ○ “HTML and CSS”
// ○ “Language Of Internet”
// ○ “I am UI Developer”
// ○ “Do or Die”
// Note: While counting vowel, consider the lower & upper-case vowels as well
function vowelsCount(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
       if (vowels.includes(str[i])) {
        count++;
       }
    }
    return count;
}
const strings = ["JavaScript", "HTML and CSS", "Language Of Internet", "I am UI Developer", "Do or Die"];
strings.forEach(str => {
    console.log(`The number of vowels in the string "${str}" is: ${vowelsCount(str)}`);
});

