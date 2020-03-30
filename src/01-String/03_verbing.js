/*Verbing
Create a function called verbing.
It should take a single argument, a string. And return
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:
    verbing('swim'): 'swiming'
    verbing('swimming'): 'swimmingly'
    verbing('go'): 'go'

For run tests use: npm run verbing-test
*/
export function verbing (word){
if ( word.length >= 3) { 
    if (terminaIng (word)) {
         return word+ "ly"
    } else{
        return word +"ing"
    }
} else {
    return word
}
}
export function terminaIng ( word){
   return word.search("ing")>-1

}