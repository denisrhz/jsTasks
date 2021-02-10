const chai = require('chai');

const isContain = require('../first_list/isContain');

var assert = chai.assert;

describe("isContain", function() {

    it('isContain(["hello", "hey"]) should return false', () => {
        assert.equal(isContain(["hello", "hey"]), false);
    });

    it('isContain(["hello", "Hello"]) should return true', () => {
        assert.equal(isContain(["hello", "Hello"]), true);
    });

    it('isContain(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true', () => {
        assert.equal(isContain(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), true);
    });

    it('isContain(["Mary", "Army"]) should return true', () => {
        assert.equal(isContain(["Mary", "Army"]), true);
    });

    it('isContain(["Mary", "Aarmy"]) should return true', () => {
        assert.equal(isContain(["Mary", "Aarmy"]), true);
    });

    it('isContain(["Alien", "line"]) should return true', () => {
        assert.equal(isContain(["Alien", "line"]), true);
    });

    it('isContain(["floor", "for"]) should return true', () => {
        assert.equal(isContain(["floor", "for"]), true);
    });

    it('isContain(["hello", "neo"]) should return false', () => {
        assert.equal(isContain(["hello", "neo"]), false);
    });

    it('isContain(["ate", "date"] should return false should return false', () => {
        assert.equal(isContain(["ate", "date"]), false);
    });

    it('isContain(["Tiger", "Zebra"]) should return false', () => {
        assert.equal(isContain(["Tiger", "Zebra"]), false);
    });

    it('isContain(["Noel", "Ole"]) should return true', () => {
        assert.equal(isContain(["Noel", "Ole"]), true);
    });
});