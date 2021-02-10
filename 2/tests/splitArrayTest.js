const chai = require('chai');

const splitArray = require('../first_list/splitArray');

var assert = chai.assert;

describe("splitArray", function() {

    it('splitArray(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]', () => {
        assert.deepEqual(splitArray(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
    });

    it('splitArray([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]', () => {
        assert.deepEqual(splitArray([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
    });

    it('splitArray([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]', () => {
        assert.deepEqual(splitArray([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
    });

    it('splitArray([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]', () => {
        assert.deepEqual(splitArray([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
    });

    it('splitArray([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]', () => {
        assert.deepEqual(splitArray([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]]);
    });

    it('splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', () => {
        assert.deepEqual(splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    });

    it('splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', () => {
        assert.deepEqual(splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    });
});