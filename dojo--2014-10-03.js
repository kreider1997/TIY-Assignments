/**
 * Conway's Game of Life (LITE)
 *
 * @link http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 *
 * Consider a finite 3x3 board of cells:
 *
 *     0   1   2
 *   +---+---+---+
 * 0 |   |   |   |
 *   +---+---+---+
 * 1 |   |   |   |
 *   +---+---+---+
 * 2 |   |   |   |
 *   +---+---+---+
 *
 * Represented as:
 *
 * board = [
 *   [ false, false, false ],
 *   [ false, false, false ],
 *   [ false, false, false ],
 * ]
 *
 * Where each Boolean value represents the state of a `cell`, either
 * alive (`true`) or dead (`false`). Each cell can be accessed with
 * the index operators (`[n]`), e.g. `board[0][1]`, `board[2][2]`.
 *
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
 *
 * Use the provided `board` function to produce the initially empty
 * board, and test the following starting positions:
 *
 * Initially Empty Board
 * =====================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   |   |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Just One Cell
 * =============
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Two Cells in Any Arrangement
 * ============================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X | X | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 | X |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Three Cells in a Line
 * =====================
 *       start              tick 1             tick 2
 *     0   1   2          0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 0 |   | X |   |    0 |   |   |   |    0 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 | X | X | X | >> 1 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 2 |   | X |   |    2 |   |   |   |    2 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 *
 * You may test more starting position, if you like, of course.
 */

//var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
//function test(actual, expected, success){
//    if (success === undefined) success = 'pass!';

//    assert.strictEqual(actual, expected);

//    console.log(success);
//}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
//function board(){
//    return [
//        [ false, false, false ],
//        [ false, false, false ],
//        [ false, false, false ],
//    ];
//}
//  START  HERE

var assert = require('assert');

//below sets up the board and defines the neighbors of a specific cell.  Using rw for row, cl for column.
var board =  [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];

var neighbors;

function neighborsOf (board, rw, cl){
if (rw===0 && cl===0){
  neighbors = [board [0][1], board [1][0], board [1][1]];
  }
if (rw===0 && cl===1){
  neighbors = [board [0][0], board [0][2], board [1][0], board [1][1], board [1][2]];
  }
if (rw===0 && cl===2){
  neighbors = [board [0][1], board [1][1], board[1][2]];
  }
if (rw===1 && cl===0){
  neighbors = [board [0][0], board [0][1], board [1][1], board [2][0], board [2][1]];
  }
if (rw===1 && cl===1){
  neighbors = [board [0][0], board [0][1], board[0][2], board[1][0], board[1][2], board[2][0], board[2][1], board[2][2]];
  }
if (rw===1 && cl===2){
  neighbors = [board [0][1], board [0][2], board [1][1], board [2][1], board [2][2]];
  }
if (rw===2 && cl===0){
  neighbors = [board [1][0], board [1][1], board [2][1]];
  }
if (rw===2 && cl===1){
  neighbors = [board [1][0], board [1][1], board [1][2], board [2][0], board [2][2]];
  }
if (rw===2 && cl===2){
  neighbors = [board [1][1], board [1][2], board [2][1]];
  }
return neighbors;
}

//Conway area - apply rules
var newCell;
function conway (cell, neighbors) {
  var livingCell = 0;
  for (var i=0; i<neighbors.length; i++){ //you are telling the robot to cycle through the board
      if neighbors[i] == true){
        livingCell++;
      }
      if cell === true{
        if (livingCell<2) {   //less than two cells alive, no new cell
          newCell = false;
        }
        if (livingCell === 2 || livingCell === 3) {  //two or three cells alive, new cell
          newCell = true;
        }
        if (livingCell >3) {  //more than three cells alive, no new cell
          newCell = false;
        }
      } else {
        if (alive === 3){
          newCell = true
        } else {
        newCell = false;
        }
      }
      return newCell;
}
//TEST AREA


function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}

var actual = neighborOf (board, 0, 0)
var testb1 = neighborOf (board, 0, 1)
var testb2 = neighborOf (board, 0, 2)
var testb3 = neighborOf (board, 1, 0)
var testb4 = neighborOf (board, 1, 1)
var testb5 = neighborOf (board, 1, 2)
var testb6 = neighborOf (board, 2, 0)
var testb7 = neighborOf (board, 2, 1)
var testb8 = neighborOf (board, 2, 2)
