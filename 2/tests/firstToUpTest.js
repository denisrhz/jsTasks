const chai = require('chai');

const firstToUp = require('../first_list/firstToUp');

var assert = chai.assert;

describe("firstToUp", function() {

    it('should return a stringy', () => {
        assert.equal(typeof firstToUp("I'm a little tea pot"), 'string');
    });

    it('firstToUp("I\'m a little tea pot") should return I\'m A Little Tea Pot', () => {
        assert.equal(firstToUp("I'm a little tea pot"), "I'm A Little Tea Pot");
    });

    it('firstToUp("sHoRt AnD sToUt") should return Short And Stout', () => {
        assert.equal(firstToUp("sHoRt AnD sToUt"), "Short And Stout");
    });

    it('firstToUp("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout', () => {
        assert.equal(firstToUp("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout");
    });
});