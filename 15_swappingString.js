// 15. Swapping String: Write a function swapWords(), which should swap the 
// two words without using third variable. This is a function with no argument and 
// no return value.
// ○ const wordOne = “Angular”
// ○ const wordTwo = “React”
function swapWords() {
    let wordOne = "Angular";
    let wordTwo = "React";
    [wordOne, wordTwo] = [wordTwo, wordOne];
    console.log(`After swapping:`);
    console.log(`wordOne: ${wordOne}`);
    console.log(`wordTwo: ${wordTwo}`);
}
swapWords();
