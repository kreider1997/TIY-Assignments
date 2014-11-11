/**
 * Check Writing
 *
 * GIVEN: a number like 1234.56
 * WHEN: called with `toEnglish()`
 * THEN: expect 'one thousand two hundred thirty four and 56/100s'
 */
/** === PRODUCTION CODE === **/

/**
 * Function Definition: toEnglish()
 *
 * @name toEnglish Identifier
 *
 * @param Number value
 * @return String
 *
 */
 var assert = require("assert");
 

 function toEnglish(value){
     var ones = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10};
    return ones[value];
     
 }

describe('toEnglish()', function() {
    it ('should have function named toEnglish()', function(){

        assert.equal(toEnglish(0), "zero");
        assert.equal(toEnglish(1), "one");
    });
    
});