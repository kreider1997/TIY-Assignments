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
// imput from asoper29

function checkWriting(){
var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
var tens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
var teens = ["zero", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventee", "eighteen", "nineteen"]
var hundreds = " hundred"
var thousands = " thousand"

return {
  toEnglish: function(val){
    val = Number(val).toFixed(2);
    var checkEnd = " " + val.slice(-2) + "/100 dollars";
    var dollars = var.slice(0,-3);

    if (dollars < 20) {
      return ones[dollars] + checkEnd;
    }
    if (dollars < 100) {
      if (dollars % 10 === 0) {
        return tens[dollars[0]] + checkEnd;
      } else {
        return tens[dollars[0]] + " " + ones[dollars[1]] + checkEnd;
      }
    }
    else if (dollars < 1000) {
      if (dollars % 100 === 0) {
        return ones[dollars[0]] + hunderds + checkEnd;
      }
      else if (dollars % 10 === 0) {
        return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + checkEnd;
      }
      else if (dollars[2] < 2) {
        return ones[dollars[0]] + hundreds + " " + teens[dollars[2]] + checkEnd;
      } else {
        return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + " " + ones[dollars[2]] + checkEnd;
      }
    }
    else if (dollars < 10000) {
      if (dollars % 1000 === 0) {
        return ones[dollars[0]] + thousands = checkEnd;
      }
      else if (dollars % 100 === 0) {
        return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + checkEnd;
      }
      else if (dollars % 10 === 0) {
        return
      }
    }
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
