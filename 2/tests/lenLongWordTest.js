const chai = require('chai');

const lenLongWord = require('../first_list/lenLongWord');

var assert = chai.assert;

describe("lenLongWord", function() {

    it('should return a number', () => {
        assert.equal(typeof lenLongWord("The quick brown fox jumped over the lazy dog"), 'number');
    });

    it('lenLongWord("The quick brown fox jumped over the lazy dog") should return 6', () => {
        assert.equal(lenLongWord("The quick brown fox jumped over the lazy dog"), 6);
    });

    it('lenLongWord("May the force be with you") should return 5', () => {
        assert.equal(lenLongWord("May the force be with you"), 5);
    });

    it('lenLongWord("Google do a barrel roll") should return 6', () => {
        assert.equal(lenLongWord("Google do a barrel roll"), 6);
    });

    it('lenLongWord("What is the average airspeed velocity of an unladen swallow") should return 8', () => {
        assert.equal(lenLongWord("What is the average airspeed velocity of an unladen swallow"), 8);
    });

    it('lenLongWord("What if we try a super-long word such as otorhinolaryngology") should return 19', () => {
        assert.equal(lenLongWord("What if we try a super-long word such as otorhinolaryngology"), 19);
    });
});