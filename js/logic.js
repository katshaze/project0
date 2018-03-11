console.log("connected");

const game = {

  boardStatus: {
    1: "empty",
    2: "empty",
    3: "empty",
    4: "empty",
    5: "empty",
    6: "empty",
    7: "empty",
    8: "empty",
    9: "empty"
  },

  turnsPlayed: {
    "X": 0,
    "Blowfish": 0
  },

  winningCombo: {
    "X": false,
    "Blowfish": false,
    "Draw": false
  },

  checkForWin: function(player) {
    if (this.boardStatus[1] === player && this.boardStatus[2] === player && this.boardStatus[3] === player) {
      //console.log(`this is working - x wins`);
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[1] === player && this.boardStatus[5] === player && this.boardStatus[9] === player) {
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[1] === player && this.boardStatus[4] === player && this.boardStatus[7] === player) {
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[2] === player && this.boardStatus[5] === player && this.boardStatus[8] === player) {
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[3] === player && this.boardStatus[6] === player && this.boardStatus[9] === player) {
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[3] === player && this.boardStatus[5] === player && this.boardStatus[7] === player) {
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[4] === player && this.boardStatus[5] === player && this.boardStatus[6] === player) {
      this.winningCombo[player] = true;
    }
    if (this.boardStatus[7] === player && this.boardStatus[8] === player && this.boardStatus[9] === player) {
      this.winningCombo[player] = true;
    }
  },

  checkForDraw: function(player) {
    if (this.turnsPlayed[player] + this.turnsPlayed[player] === 9) {
      if (this.winningCombo["X"] === false && this.winningCombo["Blowfish"] === false) {
        this.winningCombo["Draw"] = true;
      }
    }
  },

  playTurn: function(square, player) {
    if (this.boardStatus[square] === "empty") {
      this.boardStatus[square] = player;
      this.turnsPlayed[player] += 1;
    }
    if (this.turnsPlayed[player] >= 3) {
      this.checkForWin(player);
    }
    if (this.winningCombo[player] === true) {
      console.log(`${player} wins`);
    }
    this.checkForDraw();
    if (this.winningCombo["Draw"] === true) {
      console.log('GAME ENDS IN DRAW');
    }
  }

  // xPlays: function(square) {
  //   if (this.boardStatus[square] === "empty") {
  //     //console.log(`${square} is empty - free to play`);
  //     this.boardStatus[square] = "X";
  //     //console.log(boardStatus[square]);
  //     this.xTurnsPlayed += 1;
  //     //console.log(xTurnsPlayed);
  //   }
  //   if (this.xTurnsPlayed >= 3) {
  //     this.checkForWin("X");
  //   }
  //   if (this.winningCombo["X"] === true) {
  //     console.log(`X WINS.`);
  //   }
  //   this.checkForDraw();
  //   if (this.winningCombo["Draw"] === true) {
  //     console.log('GAME ENDS IN A DRAW.');
  //   }
  // },

  // toadPlays: function(square) {
  //   if (this.boardStatus[square] === "empty") {
  //     this.boardStatus[square] = "Toad";
  //     this.toadTurnsPlayed += 1;
  //   }
  //   if (this.toadTurnsPlayed >= 3) {
  //     this.checkForWin("Toad");
  //   }
  //   if (this.winningCombo["Toad"] === true) {
  //     console.log(`TOAD WINS.`);
  //   }
  //   this.checkForDraw();
  //   if (this.winningCombo["Draw"] === true) {
  //     console.log(`GAME ENDS IN A DRAW.`);
  //   }
  // }

}














// const availableSquares = function() {
// }
//
// const xFilled = [];
// const toadFilled = [];
// const winningCombos = [
//   [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
// ]
// const squares = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
