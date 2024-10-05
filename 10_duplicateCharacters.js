// 10. Program to find duplicate characters: Define a function 
// duplicateCharCount( ) with one argument and call this function by passing 
// below strings one by one. This is void function which will print the character 
// and it’s count as shown below
// ○ “Banana” Expected output => a – 3, n – 2
// ○ “Apple” Expected output => p – 2
// ○ “Software Developer” Expected output => o – 2, r – 2, e – 4
function duplicateCharCount(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char != '') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    for (const char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}
const strings = ["Banana", "Apple", "Software Developer" ];

strings.forEach(str => {
    console.log(`Duplicate characters in string "${str}" are:`);
    duplicateCharCount(str);
    console.log('');
});
