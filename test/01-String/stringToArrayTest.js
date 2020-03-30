import {expect} from 'chai'
import {stringToArray} from '../../src/01-String/02_stringArray'

describe('Testing stringToArray function', function() {

    it("Should return an Array with each String word from the input", function() {
      let input = "This is an String";
      let expected = ["This", "is", "an", "String"];

      expect(stringToArray(input)).to.eql(expected);
    });
});