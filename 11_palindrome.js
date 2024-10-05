// 11. Palindrome: If the string is similar from the starting as well as the 
// ending, then we can say that the string is a palindrome.
// Define a function isPalindrome( ) with one argument and call this function by 
// passing below strings one by one. This function must return true if given 
// argument string is palindrome else, false in case not palindrome.
// ○ “madam”
// ○ “banana”
// ○ “radar”
// ○ “civil”
// ○ “noon”
// ○ “stats”
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    const len = cleanStr.length;

    for (let i = 0; i < len / 2; i++) {
        if (cleanStr[i] != cleanStr[len -1 - i]) {
            return false;
        }
    }
    return true;
}

const strings = ["madam", "banana", "radar", "civil", "noon"];

strings.forEach(str => {
    if (isPalindrome(str)) {
        console.log(`"${str}" is a palindrome`);
    } else{
        console.log(`"${str}" is not a palindrome`);
    }
});
