// 13. Remove character from the string: Define a function removeChar( ) with 
// two arguments and call this function for below strings. This function must 
// return the string after character removal. Note: arg2 is the char that needs to 
// remove
// ○ arg1: “Java@Script”, arg2: ‘@’ Expected String: JavaScript
// ○ arg1: “Software”, arg2: ‘y’ Expected String: Software
// ○ arg1: “Code mind”, arg2: ‘ ’ Expected String: Codemind
function removeChar(str, charToRemove) {
    const regex = new RegExp(charToRemove, 'g');
    return str.replace(regex, '');
}
const pairs = [
    ["Java@Script", '@'],
    ["Software", 'y'],
    ["Code mind", ' ']
];
pairs.forEach( pair => {
    const str = pair[0];
    const charToRemove = pair[1];
    const result = removeChar(str, charToRemove);
    console.log(`Original String: "${str}", Removed '${charToRemove}': "${result}"`);
});
