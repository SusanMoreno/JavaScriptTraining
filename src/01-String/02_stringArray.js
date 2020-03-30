/*
Write a JavaScript function to split a string and convert it into an array of words.

stringToArray("Robin Singh");
["Robin", "Singh"]

Tip: Go to the String api/methods documentation 
Test command: npm run stringArray-test
*/
export function stringToArray (string){
    return string.split(" ") 
}