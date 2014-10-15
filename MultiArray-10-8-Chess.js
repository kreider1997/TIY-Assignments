// Multidimensional array example.  Website:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Example:_Creating_a_two-dimensional_array

var assert = require('chai').assert
var assert = require('chai').expect

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
var moves = {
  step 1: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  },
  step 2: function(){
    board[3][3] = board[1][3];
    board[1][3] = ' ';
  },
  step 3: function(){
    board[4][2] = board[6][2];
    board[6][2] = ' ';
  },
  step 4: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  },
  step 5: function(){
    board[5][5] = board[7][6];
    board[7][6] = ' ';
  },
  step 6: function(){
    board[2][5] = board[0][6];
    board[0][6] = ' ';
  },
  step 7: function(){
    board[5][6] = board[6][6];
    board[6][6] = ' ';
  },
  step 8: function(){
    board[1][4] = board[0][6];
    board[0][6] = ' ';
  },
  step 9: function(){
    board[6][6] = board[7][5];
    board[7][5] = ' ';
  },
}
/*
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

//move black king pawn forward to e6.
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
*/
// Test code

describe ('testing the board state', function(){
  it('after move 1: board should look like', function(){
    moves.step1();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    )
  });
  it('after move 2: board should look like', function(){
    moves.step2();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    )
  });
  it('after move 3: board should look like', function(){
    moves.step3();

    assert.deepEqual(board,
    [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P',' ','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','P',' ',' ',' ',' '],
    [' ',' ','p','p',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p',' ',' ','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ]
    )
  });
  it
})
