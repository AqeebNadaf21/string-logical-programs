// 18. Program to count consonants: Define a function consonantsCount( ) with 
// one argument and call this function by passing below strings one by one. This 
// function must return the consonants count that’s been passed as an argument.
// ○ “JavaScript”
// ○ “HTML and CSS”
// ○ “Language Of Internet”
// ○ “I am UI Developer”
// ○ “Do or Die”
// Note: Please consider the lower & upper-case consonants as well
function consonantsCount(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNQRSTVWXYZ';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if(consonants.includes(str[i])){
            count++;
        }
    }
    return count;
}
const strings = ["JavaScrip", "HTML and CSS", "Language Of Internet", "I am UI Developer", "Do or Die"];

strings.forEach(str => {
    console.log(`Number of consonants in "${str}": ${consonantsCount(str)}`);
});
