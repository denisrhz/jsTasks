const chai = require('chai');

const factorial = require('../first_list/factorial');

var assert = chai.assert;

describe("factorial", function() {

    it('should return a number', () => {
        assert.equal(typeof factorial(5), 'number');
    });

    it('factorial(5) should return 120', () => {
        assert.equal(factorial(5), 120);
    });

    it('factorial(10) should return 3628800', () => {
        assert.equal(factorial(10), 3628800);
    });

    it('factorial(20) should return 2432902008176640000', () => {
        assert.equal(factorial(20), 2432902008176640000);
    });

    it('factorial(0) should return 1', () => {
        assert.equal(factorial(0), 1);
    });

});