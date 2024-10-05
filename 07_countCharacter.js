// 7. Program to count character ‘a’: Define a function charCount( ) with one 
// argument and call this function by passing below strings one by one. This 
// function must return the char count.
// ○ “JavaScript”
// ○ “Do or Die”
// ○ “Learn with us, Job with us”
// ○ “Empowering Dreams, Guaranteeing Futures”
// ○ “Anny, My favorite fruit is Apple”
function charCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'a') {
            count++
        }
    }
    return count;
}
const strings = ["JavaScript", "Do or Die", "Learn with us, Job with us", "Empowering Dreams, Guaranteeing Futures", "Anny, My favorite fruit is Apple"];
strings.forEach(str => {
    console.log(`The number of 'a' characters in the string "${str}" is: ${charCount(str)}`);
});
