// Multidimensional array example.  Website:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Example:_Creating_a_two-dimensional_array
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

// move kings pawn forward 2
board [4][4] = board [6][4];
board [6][4] = ' ';
console.log(board.join('\n'));
