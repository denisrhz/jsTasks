const chai = require('chai');

const falseDelete = require('../first_list/falseDelete');

var assert = chai.assert;

describe("falseDelete", function() {

    it('falseDelete([7, "ate", "", false, 9]) should return [7, "ate", 9]', () => {
        assert.deepEqual(falseDelete([7, "ate", "", false, 9]), [7, "ate", 9]);
    });

    it('falseDelete(["a", "b", "c"]) should return ["a", "b", "c"]', () => {
        assert.deepEqual(falseDelete(["a", "b", "c"]), ["a", "b", "c"]);
    });

    it('falseDelete([false, null, 0, NaN, undefined, ""]) should return []', () => {
        assert.deepEqual(falseDelete([false, null, 0, NaN, undefined, ""]), []);
    });

    it('falseDelete([1, null, NaN, 2, undefined]) should return [1, 2]', () => {
        assert.deepEqual(falseDelete([1, null, NaN, 2, undefined]), [1, 2]);
    });
});