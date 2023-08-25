const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round the first argument', () => {
    assert(calculateNumber(1.1, 0), 1);
    assert(calculateNumber(1.4, 0), 1);
    assert(calculateNumber(1.7, 0), 2);
  });

  it('should round the second argument', () => {
    assert(calculateNumber(0, 1.1), 1);
    assert(calculateNumber(0, 1.4), 1);
    assert(calculateNumber(0, 1.7), 2);
  });

  it('it should return the right number', () => {
    assert(calculateNumber(1.3, 0), 1);
    assert(calculateNumber(0, 1.2), 1);
    assert(calculateNumber(1.3, 1.3), 2);
    assert(calculateNumber(1.7, 1.2), 3);
    assert(calculateNumber(1.3, 1.8), 3);
    assert(calculateNumber(1.6, 1.8), 4);
  });

});
