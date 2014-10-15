module.exports = Game;

function board(){
  return [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
  ];
}

function Game(){
  this.board = board();
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x, y){

}

/**
 * make the cell at {x,y "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x, y){

}

/**
 *Make the cell at {x,y} "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){

 }

 /**
  * update the `board` by applying the `rules` to each cell.
  */
Game.prototype.tick = function(){
  //start with a fresh board.....
  //appy `rules` to each cell in the current board...
  //record the result of `rules` in the new board...
  //update the current board to match the new board
}

/**
 *what goes here?
 */
Game.prototype.rules = function(){

}

/**
 * WARNING:  This is VOODOO MAGIC
 * GIVEN:
 *  this.board === [
 *    [ false, true, false ],
 *    [ false, true, false ],
 *    [ false, true, false ],
 *  ];
 *
 * EXPECT:
 *  +---+---+---+
 *  |   | X |   |
 *  +---+---+---+
 *  |   | X |   |
 *  +---+---+---+
 *  |   | X |   |
 *  +---+---+---+
 */
Game.prototype.display = function(){
  var spacer = '+---+---+---+\n';

  return spacer +
    //apply `renderRow` to each `row` in `board`...
    this.board.map(function renderRow(row){
      return ' | ' +
        //apply `renderCell` to each `cell` in `row`...
        row.map(function renderCell(cell){
          // return 'X' if `cell` is TRUTHY otherwise return ' '
          return cell && 'X' || ' ';
        }).join(' | ')  // Place ' | ' between each `cell`...
        + ' |\';
    }).join(spacer)  //Place `spacer` between each `row`...
  + spacer;
} // END display
