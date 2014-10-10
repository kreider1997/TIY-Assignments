//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var array19 = [];


function solution (){
     
     return {
        solveFor: function(){},  
        getUpperLimit: function(){},
        filterOdds: function(){},
        findMultiples: function(){}
    }
}




//   TESTING

describe('solution()', function(){
    it('should be a type of function named solution()', function(){
        assert.typeOf(solution,'function');
    });
    it('should contain function named solverFor()', function(){
        assert.typeOf(solveFor,'function');
    });
});




/*
var eulerFive = function(){
  for (var i=0; i<=10000000; i++){
    for (var num = 20; num>= 1; num--){
      if (num % == 0){
        return i;
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