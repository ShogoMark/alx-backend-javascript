const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round and sum two positive number', function() {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should round and sum a positive and a negative number', function() {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should round and sum two floats', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should round and sum two negative floats', function() {
    const result = calculateNumber(-1.2, -3.7);
    assert.strictEqual(result, -5);
  });

  it('should round and sum zero and one', function() {
    const result = calculateNumber(0, 1);
    assert.strictEqual(result, 1);
  });
});
