class Board {

  constructor() {
    this.grid = [[null, null, null],
                [null, null, null],
                [null, null, null]];

  }

  isValidMove(pos) {
    return (this._inBounds(pos) && this.grid[pos[0]][pos[1]] === null);
  }

  _inBounds(pos){
    return (pos[0] >=0 && pos[0] <=2 && pos[0] >=0 && pos[0] <= 2 );
  }

  isWon() {

  }

  _isRowWon(row) {
    
  }


  placeMark(pos, mark) {
    if (this.isValidMove(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
      return true;
    }
    return false;
  }

  render() {
    this._renderRow(0);
    this._renderRow(1);
    this._renderRow(2);
  }
  _renderRow(row) {
    const rowArray = [];
    for(let i = 0; i < 3; i++) {
      if (this.grid[row][i] === null) {
        rowArray.push(' ') ;
      } else {
        rowArray.push(`${this.grid[row][i]}`) ;
      }
    }
    console.log(rowArray.join("|"));
  }


  winner() {

  }

}

const board = new Board();
board.grid[0][0] = "x";
board.render();
