import {expect} from 'chai'
import {swapcase, isUpperCase} from '../../src/01-String/05_swapcase'

describe('Testing Swapcase', function() {

    describe('Testing isUpperCase function', function() {
        it("Should return true when char is upper case", function() {
            let input = ['A', 'B', 'C', 'D', 'Z', '5', ' ', '$'];
            let expected = true;
      
            performAsserts(input, expected);
          });

          it("Should return false when char is lower case", function() {
            let input = ['a', 'b', 'z'];
            let expected = false;
      
            performAsserts(input, expected);
          });
    });

    it("Should swap lower to upper and upper to lower", function() {
      let input = "This is an String";
      let expected = "tHIS IS AN sTRING";

      expect(swapcase(input)).to.eql(expected);
    });
});

function performAsserts(input, expected) { 
    for (let i=0; i< input.length; i++) {
        expect(isUpperCase(input[i])).to.eql(expected, `isUpperCase('${input[i]}') !== ${expected}`);
    }
}