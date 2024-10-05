// 9. Program to count words: Define a function wordCount( ) with one 
// argument and call this function by passing below strings one by one. This 
// function must return the word count that’s been passed as an argument.
// ○ “JavaScript The language of Internet”
// ○ “Enhance Your Learning Journey with Exclusive Add-ons”
// ○ “Beyond frameworks, Beyond Imagination”
// ○ “I am passionate software developer”
function wordCount(str) {
    const words = str.split(' ').filter(word => word.length > 0);
    return words.length;
}
const strings = ["JavaScript The language of Internet", "Enhance Your Learning Journey with Exclusive Add-ons", "Beyond frameworks, Beyond Imagination", "I am passionate software developer"];
strings.forEach(str => {
    console.log(`The number of words in the string "${str}" is: ${wordCount(str)}`);
});
