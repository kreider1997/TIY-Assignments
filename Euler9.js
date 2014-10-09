//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
//a2 + b2 = c2
//For example, 32 + 42 = 9 + 16 = 25 = 52.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.


var pythagorean = function (a, b, c,){
  for (a=0; a<b; a++){
    for (b=0; b<c; b++){
      if ((a*a + b*b == c*c) && (a+b+c=1000))
        return c
    }

  }
}
