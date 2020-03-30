/*Write a JavaScript function to check whether an input is a string or not.

isString("w3resource"); = true
isString([1, 2, 4, 0]); = false

Tip: use typeof
Test command: npm run isString-test
*/
export function isString (input){
    if (typeof input==="string") {
        return true
    } else {
        return false
    }
}
