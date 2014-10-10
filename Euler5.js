//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var assert = require('assert');

var eulerFive = function(){
  for (var i=0; i<=10000000; i++){
    for (var num = 1; num<= 20; num++){
      if (num % == 0){
        return num;
      }
    }
  }
}



describe ('eulerFive'(), function (){
  it('should return number divisable by all integers 1-20', funciton(){
    assert.equal(eulerFive(), ?????);
  });
});
