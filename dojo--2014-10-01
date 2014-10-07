//using phillycc to work from
//SET UP - get the arrays set up and define the vars
var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "eighteen", "nineteen"];
var teens = ["zero", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["zero", "ten", "twenty", "thrity", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var hundreds = ["zero", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
var thousands = ["zero", "one thousand", "two thousand", "three thousand", "four thousand", "five thousand", "six thousand", "seven thousand", "eight thousand", "nine thousand"];

//create a function to change a number value to a string value
function numChange(a){

  var cents = "00";
  temp = a.toString ();
  if(temp.indexOf('.') !== -1) {
    cents = temp.substr(temp.indexOf('.'));
    cents = cents.replace(".","");
    a = temp.split(".")[0];
  }

  var value = a.toString().split("");
    if (a<20){              //for numbers 0-19
      return(ones[a]);
    }
    if (a<100){             //for numbers 20-99
      if (a % 10 === 0){
        return (tens[value[0]]);
      }
      return (tens[value[0]] + " " + ones[value[1]] + " and " + cents + "/100s");
    }
    if (a<1000){            //for nubers 100-999
      if (a % 100 === 0){
        return (hundreds[value [0]]);
      }
      if (a % 10 === 0){        //numbers between 100-999 and divisible by 10
        return (hundreds[value[0]] + " " + tens[value[1]] + " and" + cents + "/100");
      }
      if (value[1] < 2) {       //hundreds digits, _10<x<_20
        return (hundreds [value[0]] + " " + tens[value[2]] + " and" + cents + "/100s");
      }
      return (hundreds[value[0]] + " " + tens[value[1]] + " " + ones[value[2]] + " and" + cents + "/100s");
    }

  if (a<10000){
    if (a % 1000 === 0){
      return (thousands [value[0]] +" and" + cents + "/100s");
    }
    if (a % 100 === 0){
      return (thousands [value[0]] + " " + hundreds[value[1]] +" and " + cents + "/100s");
    }
    if (a % 10 === 0){
      return (thousands [value[0]] + " " + hundreds[value[1]] + " " + tens[value[2]] + " and" + cents + "/100s");
    }
    if (value[2] < 2) {
      return (thousands [value[0]] + " " + hundreds[value[1]] + " " + teens[value[3]] + " and " + cents + "/100s");
    }
    return(thousands [value[0]] + " " + hundreds[value[1]] + " " + tens[value[2]] + " " ones[value[3]] + " and " + cents + "/100s"):
  }
}
