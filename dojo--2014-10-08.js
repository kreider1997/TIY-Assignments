/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */

//  kreider1997 and fab9

var assert = require(assert)

describe('fromEnglish()', function() {
    it('should convert 0 through 10', function() {
            assert.equal(fromEnglish('zero'), 0);
            assert.equal(fromEnglish('one'), 1);
            assert.equal(fromEnglish('two'), 2);
            assert.equal(fromEnglish('three'), 3);
            assert.equal(fromEnglish('four'), 4);
            assert.equal(fromEnglish('five'), 5);
            assert.equal(fromEnglish('six'), 6);
            assert.equal(fromEnglish('seven'), 7);
            assert.equal(fromEnglish('eight'), 8);
            assert.equal(fromEnglish('nine'), 9);
            assert.equal(fromEnglish('ten'), 10); {

            })
    })
})