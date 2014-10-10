//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var array19 = [];
//array19.fill(1++[start = 1 [end = 1000000]]);

function smallestNum (){
  
}




//   TESTING

describe('smallestNum()', function(){
    it('should be a type of function named smallestNum()', function(){
        assert.typeOf(smallestNum,'function');
    });
});




/*
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
  it('should return number divisable by all integers 1-20', function(){
    assert.equal(eulerFive(), ?????);
  });
});
*/