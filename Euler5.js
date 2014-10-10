//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


var eulerFive = function(){
  for (var i=20; i<=10000000; i++){
    for (var num = 1; num==20; num++){
      if (i % num ==0){
        return num;
      }
    }
  }
}
