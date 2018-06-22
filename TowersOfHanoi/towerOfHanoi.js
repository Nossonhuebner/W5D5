const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TowersOfHanoi {

  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  run(completionCallback) {
    this.getMove(function(move) {
      let moveFlag = this.makeMove(move[0], move[1]);
      if (!moveFlag) console.log('Invalid move');
      if (this.isGameOver()) {
        completionCallback();
      } else {
        this.run(completionCallback);
      }
    }.bind(this));
  }

  getMove(callback) {
    console.log(this.towers);
    reader.question('select a move ("0,2")', (res) => {

      callback(this.parseMove(res));
    });
  }

  parseMove(moveStr){
    let move = moveStr.split(',');
    return move.map((el) => parseInt(el));
  }

  makeMove(start, end) {
    if (this.isValidMove(start, end)) {
      const disc = this.towers[start].pop();
      this.towers[end].push(disc);
      return true;
    }
    return false;
  }

  isValidMove(start, end) {
    if (!this._inBounds(start) || !this._inBounds(end)) {
      return false;
    } else if(this.towers[start].length === 0) {
      return false;
    } else if (this.towers[end].length === 0) {
      return true;
    } else if (this.towers[start][this.towers[start].length - 1] > this.towers[end][this.towers[end].length - 1]) {
      return false;
    }

    return true;
  }

  _inBounds(pos) {
    return (pos >= 0 && pos <= 2);
  }

  isGameOver() {
    return (this.towers[1].length === 3 || this.towers[2].length === 3);
  }

  endGame() {
    console.log(this.towers);
    console.log('You win!');
    reader.close();
  }

}

const game = new TowersOfHanoi();
game.run(game.endGame.bind(game));
