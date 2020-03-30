import {assert} from 'chai'
import {isString} from '../../src/01-String/01_isString'

describe('Testing isString function', function() {

    it("should return true when input is String type", function() {
      let input = ["This is an String", "This too", "and this"];
      let expected = true;

      performAsserts(input, expected);
    });

    it("should return false when input is not String type", function() {
        let input = [5, 7.8, {}, [], false];
        let expected = false;
  
        performAsserts(input, expected);
    });    
  
});

function performAsserts(input, expected) { 
    for (let i=0; i< input.length; i++) {
        let result = isString(input[i]);
        assert.equal(result, expected, `isString('${input[i]}') !== ${expected}`)
    }
}