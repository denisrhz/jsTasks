const chai = require('chai');

const fillArray = require('../first_list/fillArray');

var assert = chai.assert;

describe("fillArray", function() {

    it('After calling fillArray(myArray, -1), myArray should be empty', () => {
        let myArray = [];
        fillArray(myArray, -1);
        assert.deepEqual(myArray, []);
    });

    it('After calling fillArray(myArray, 10), myArray should contain [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
        let myArray = [];
        fillArray(myArray, 10);
        assert.deepEqual(myArray, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });

    it('After calling fillArray(myArray, 5), myArray should contain [5, 4, 3, 2, 1]', () => {
        let myArray = [];
        fillArray(myArray, 5);
        assert.deepEqual(myArray, [5, 4, 3, 2, 1]);
    });

    it('Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.)', () => {
        assert.equal(fillArray.toString().includes('map'), false);
        assert.equal(fillArray.toString().includes('for'), false);
        assert.equal(fillArray.toString().includes('while'), false);
        assert.equal(fillArray.toString().includes('forEach'), false);
        assert.equal(fillArray.toString().includes('filter'), false);
        assert.equal(fillArray.toString().includes('reduce'), false);
    });

    it('You should use recursion to solve this problem', () => {
        assert.equal(fillArray.toString().includes('fillArray'), true);
    });
});