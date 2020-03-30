/*chop

Write a JavaScript function to chop a string into chunks of a given length.

console.log(chop('w3resource',2)); 
["w3", "re", "so", "ur", "ce"] 
 */
 function chop ( word,chunk) {
    let counter= 1;
    let chunkedWords=[];
    let string= "";

    for (let character of word) {
        string= string + character; 
        if (counter===chunk){
            chunkedWords.push (string);
            string="";
            counter=1;
        } else {
            counter = counter+1;
        } 
     } 
     if (string.length>0) {
         chunkedWords.push (string);
     }
     return chunkedWords
    
}

let resultado= chop ("maximusmugre",7)
console.log (resultado)

 let word = "Pulgas"; // P, u, l, g, a , s
 let counter = 1;
 let chunk=2


 
