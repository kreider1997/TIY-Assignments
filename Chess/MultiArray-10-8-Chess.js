// Multidimensional array example.  Website:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Example:_Creating_a_two-dimensional_array
var assert = require('chai').assert;
//caps are black, lower case is white
var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'],
];
console.log(board.join('\n') + '\n\n');

// move white queen pawn forward to d4.
board [4][3] = board [6][3];
board [6][3] = ' ';
console.log(board.join('\n') + '\n\n');

//move black queen pawn forward to d5.
board [3][3] = board [1][3];
board [1][3] = ' ';
console.log(board.join('\n') + '\n\n');

//move white bishion pawn forward to c4.
board [4][2] = board [6][2];
board [6][2] = ' ';
console.log(board.join('\n') + '\n\n');

//move black kink pawn forward to e6.
board [2][4] = board [1][4];
board [1][4] = ' ';
console.log(board.join('\n') + '\n\n');

//move white king's knight forward to f3.
board [5][5] = board [7][6];
board [7][6] = ' ';
console.log(board.join('\n') + '\n\n');

//move black king's knight forward to f6.
board [2][5] = board [0][6];
board [0][6] = ' ';
console.log(board.join('\n') + '\n\n');

//move white pawn forward to g3.
board [5][6] = board [6][6];
board [6][6] = ' ';
console.log (board.join('\n') + '\n\n');

//move black kings bishop to e7
board [1][4] = board [0][6];
board [0][6] = ' ';
console.log(board.join('\n') + '\n\n');

//move white king's bishop to g2.
board [6][6] = board [7][5];
board [7][5] = ' ';
console.log(board.join('\n') + '\n\n');

// Test code
 {
  if ('should convert "0" to "zero"', function(){
    assert.equal(checkWriting().toEnglish(0), 'zero 00/100 Dollars');
  });
it ('should convert "20" to "twenty"', function(){
  assert.equal(checkWriting().toEnglish(20), 'twenty four 00/100 Dollars');
});
it ('should convert "25 to "twenty five"', function(){
  assert.equal(checkWriting().toEnglish(25), 'twenty five 00/100 Dollars');
});
})
