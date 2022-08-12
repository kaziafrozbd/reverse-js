
function reverseStr(text){
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}
const string = 'hello world! how are you?';
const reversed = reverseStr(string);
console.log(reversed);