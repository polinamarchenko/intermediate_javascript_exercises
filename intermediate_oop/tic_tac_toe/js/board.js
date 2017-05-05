function GameBoard() {
  this.counter = 0;
  this.turn = "X";
  this.check = [1,2,3,4,5,6,7,8,9];
}

GameBoard.prototype.getTurn = function() {
  return this.turn;
}

GameBoard.prototype.changeTurn = function() {
  if (this.turn === "X") {
    this.turn = "O"
  }  else {
     this.turn = "X"
  };
}

GameBoard.prototype.add = function(number) {
  this.check[number] = this.turn;
}

GameBoard.prototype.result = function(check, counter) {

  if (this.check[0] === this.check[3] && this.check[3] === this.check[6]) document.getElementById("message").innerText = (this.check[0] + " wins");
  if (this.check[0] === this.check[1] && this.check[1] === this.check[2]) document.getElementById("message").innerText = (this.check[0] + " wins");
  if (this.check[0] === this.check[4] && this.check[4] === this.check[8]) document.getElementById("message").innerText = (this.check[0] + " wins");
  if (this.check[3] === this.check[4] && this.check[4] === this.check[5]) document.getElementById("message").innerText = (this.check[3] + " wins");
  if (this.check[6] === this.check[7] && this.check[7] === this.check[8]) document.getElementById("message").innerText = (this.check[6] + " wins");
  if (this.check[2] === this.check[4] && this.check[4] === this.check[6]) document.getElementById("message").innerText = (this.check[2] + " wins");
  if (this.check[1] === this.check[4] && this.check[4] === this.check[7]) document.getElementById("message").innerText = (this.check[1] + " wins");
  if (this.check[2] === this.check[5] && this.check[5] === this.check[8]) document.getElementById("message").innerText = (this.check[2] + " wins");

  if (this.counter === 9) {
    document.getElementById("message").innerText = ("It's a Tie!")
    this.counter = 0;
  }
}

GameBoard.prototype.reset = function() {
  this.counter = 0;
  this.turn = "X";
  this.check = [1,2,3,4,5,6,7,8,9];
}

GameBoard.prototype.upCounter = function() {
  this.counter ++;
}
