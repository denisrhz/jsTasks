const chai = require('chai');

const truncate = require('../first_list/truncate');

var assert = chai.assert;

describe("truncate", function() {

    it('truncate("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket..."', () => {
        assert.equal(truncate("A-tisket a-tasket A green and yellow basket", 8), 'A-tisket...');
    });

    it('truncate("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper..."', () => {
        assert.equal(truncate("Peter Piper picked a peck of pickled peppers", 11), "Peter Piper...");
    });

    it('truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"', () => {
        assert.equal(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), "A-tisket a-tasket A green and yellow basket");
    });

    it('truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"', () => {
        assert.equal(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2), "A-tisket a-tasket A green and yellow basket");
    });

    it('truncate("A-", 1) should return "A..."', () => {
        assert.equal(truncate("A-", 1), "A...");
    });

    it('truncate("Absolutely Longer", 2) should return "Ab..."', () => {
        assert.equal(truncate("Absolutely Longer", 2), "Ab...");
    });
});