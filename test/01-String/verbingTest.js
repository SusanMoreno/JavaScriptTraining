import {assert} from 'chai'
import {verbing} from '../../src/01-String/03_verbing'

describe('Testing verbing function', function() {

    it("should add 'ing' to its end", function() {
      let words = ["swim", "run", "sort"];
      let expectedWords = ["swiming", "runing", "sorting"];

      performAsserts(words, expectedWords);
    });

    it("should add 'ly' if ends in 'ing'", function() {
        let words = ["swimming", "runing", "sorting"];
        let expectedWords = ["swimmingly", "runingly", "sortingly"];
  
        performAsserts(words, expectedWords);
    });  

    it("should leave it unchanged when len < 3", function() {
        let words = ["go", "hi", "if"];
  
        performAsserts(words, words);
    });  
  
});

function performAsserts(words, expectedWords) { 
    for (let i=0; i< words.length; i++) {
        let result = verbing(words[i]);
        assert.equal(result, expectedWords[i], `${result} !== ${expectedWords[i]}`)
    }
}