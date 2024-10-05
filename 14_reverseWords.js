// 14. Reverse the words from given string: Define a function reverseWord( ) with 
// one argument and call this function by passing below strings one by one. This 
// function must return the string with reverse words.
// ○ Input String: "Arise! Awake! and stop not until the goal is reached";
// Expected output: !esirA !ekawA dna pots ton litnu eht laog si dehcaer
// ○ Input String: “Learn with us, Job with us”
// Expected output: nraeL htiw su, boJ htiw su
function reverseWord(str) {
    const words = str.split(' ');
    const reversedWord = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWord.join(' ');
}
const strings = ["Arise! Awake! and stop not until the goal is reached", "Learn with us, Job with us"];
strings.forEach(str => {
    const reversedString = reverseWord(str);
    console.log(`Original String: "${str}"`);
    console.log((`Reversed Words: "${reversedString}"`));
    console.log('');
});

