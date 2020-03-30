import {assert} from 'chai'
import {sum, isEven} from '../../src/example/commonFunctions'

describe('Testing common functions', function() {

  describe('#sum function', function() {
    it('should do the sum of 5 + 5', function() {
      let sumResult = sum(5, 5);
      let expected = 10;
      assert.equal(sumResult , expected);
    });

    it('should do the sum of 5 + (-5.66)', function() {
      let sumResult = sum(5, -5.66);
      let expected = -0.6600000000000001;
      assert.equal(sumResult , expected);
    });
  });

  describe('#isEven functions', function() {
    it('should return true when number is even', function() {
      let evenNumbers = [2, 4, 100, -10, 88888];
      let expected = true;

      for (let number of evenNumbers) {
        assert.equal(isEven(number), expected, `${number} is not even`);
      }
    });

    it('should return false when number is odd', function() {
      let oddNumbers = [3, 5, 99, -9, 55555];
      let expected = false;

      for (let number of oddNumbers) {
        assert.equal(isEven(number), expected);
      }
    });
  });

});