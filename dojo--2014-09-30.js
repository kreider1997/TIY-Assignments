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

 // using a lot of code input from Ari

var assert = require ('chai').assert;

var num = {
  "zero" : 0,
  "one" : 1,
  "two" : 2,
  "three" : 3,
  "four" : 4,
  "five" : 5,
  "six" : 6,
  "seven" : 7,
  "eight" : 8,
  "nine" : 9,
  "ten" : 10,
}

var stringCalc = {
  wordsToNum : function(wordA, wordB){
    return num[wordA] + num [wordB];
  }
}

//this is BBD - behavior driven
//describe ("wordsToNum(), will convert two written numbers to numberals and return the sum", funtion(){
//  it ("should return "0" when given "zero" and "zero", funtion (){
//    assert.equal(0, stringCalc.wordsToNum("zero", "zero"));
//  });
//})

//this is TDD - test driven

suite("wordsToNum(), will convert two written numbers to numerals and return the sum", function() {
  test('Should return "0" when given "zero" and "zero"', function (){
    assert.equal(0, stringCalc.wordsToNum("zero", "zero"));
  })
  test('should return a number when given a word', function(){
    assert.typeof(stringCalc.wordsToNum("zero", "zero"), 'number');
  })
  test('should return "3" when given "one" and "two"', function(){
    assert.equal(3, stringCalc.wordsToNum("one", "two"));
  })
  test('should return "4" when given "two and two"', function(){
    assert.equal(4, stringCalc.wordsToNum("two", "two"));
  })
})


/* Old code below----
var add = function(a, b){
  if (a === "five" && b === "four"){
    return 9
  }
  if (a === "three" && b === "three"){
  return 6
    }
  if (a === "two" && b === "three"){
    return 5
  }

if ( a === "two"){
  return 4
}

  if ( b === "two" ){
      return 3
   }
  if ( b === "four"){
      return 8
    }
    if ( a === "four" ){
      return 7
    }
      return 2
}



console.log('it should add "one" and "one": ',
  add("one", "one") === 2);
console.log('it should add "one" and "two": ',
  add("one", "two") === 3);
console.log('it should add "two" and "two": ',
  add("two", "two") === 4);
console.log('it should add "two" and "three": ',
  add("two", "three") === 5);
console.log('it should add "three" and "three"; ',
  add("three", "three") === 6);
console.log('it should add "four" and "three"; ',
  add("four", "three") === 7);
console.log('it should add "four" and "four"; ',
  add("four", "four") === 8);
console.log('it should add "five" and "four"; ',
  add("five", "four") === 9);
*/
