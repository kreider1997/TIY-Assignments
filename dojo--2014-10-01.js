//var num = "8675309";
//console.log("the number at index 4 is: " + num.charAt(4));
//  ^^^^^----we don't know what to do with this yet!
//console.log("You wrote a check for $" + num.toString().split(''));
//var digits = num.toString().split('');
//console.log(digits);
//console.log(num.charAt(2))



// testing starts below:

//var num = "1.00"
//var ones = (num.length - num.length)
//console.log(ones)

//var num = function (a){
//  a="1.00"
//If (num.length 4){
//  console.log("one");
//}
var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
var tens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
var teens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
var hundreds = ["zero", "one hundred", "two hundred", three hundred], "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
var thousands = ["zero", "one thousand", "two thousand", "three thousand", "four thousand", "five thousand", "six thousand", "seven thousand", "eight thousand", "nine thousand"]

checkWriting = {
  toEnglish: function(num){
    value = number(num).toFixed(2);
    var checkEnd = " and " + value.slice(-2) + "/100 dollars";
  }
}



/*  old code below

//We are on single digits
if (num.length-3 === 1){
  if(num.charAt(0) == "1"){
  console.log(smallWords[11] + " dollar");
  }
  if(num.charAt(0) == "2"){
    console.log(smallWords[10] + " dollars");
  }
  if(num.charAt(0) == "3"){
    console.log(smallWords[9] + " dollars");
  }
  if(num.charAt(0) == "4"){
    console.log(smallWords[8] + " dollars");
  }
  if(num.charAt(0) == "5"){
    console.log(smallWords[7] + " dollars");
  }
  if(num.charAt(0) == "6"){
    console.log(smallWords[6] + " dollars");
  }
  if(num.charAt(0) == "7"){
    console.log(smallWords[5] + " dollars");
  }
  if(num.charAt(0) == "8"){
    console.log(smallWords[4] + " dollars");
  }
  if(num.charAt(0) == "9"){
    console.log(smallWords[3] + " dollars");
  }
  if(num.charAt(0) == "0"){
    console.log(smallWords[12] + " dollars");
  }
}
*/

//we are on the tens

//if (num.length-3 === 2){
//  if(num.charAt(0) == "1"){
//  console.log(medWords[8] + " dollars");
//  }
//}
