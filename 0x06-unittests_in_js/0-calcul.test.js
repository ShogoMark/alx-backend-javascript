const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round and sum two positive number', function() {
    const result = calculateNumber(2.7, 5.2);
    assert.strictEqual(result, 8);
  });

  it('should round and sum a positive and a negative number', function() {
    const result = calculateNumber(3.2, -4.6);
    assert.strictEqual(result, -2);
  });

  it('should round and sum zero and one', function() {
    const result = calculateNumber(0, 1);
    assert.strictEqual(result, 1);
  });
});
