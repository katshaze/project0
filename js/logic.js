console.log("connected"); // TODO: remove later

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

  endgame: false,

  winningSquare: "",

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

  checkForDraw: function() {
    console.log('the checkForDraw function got called'); // TODO: remove later
    if (this.turnsPlayed["X"] + this.turnsPlayed["Blowfish"] === 9) {
      if (this.winningCombo["X"] === false && this.winningCombo["Blowfish"] === false) {
        this.winningCombo["Draw"] = true;
      }
    }
  },

  checkForEndgame: function() {
    console.log('check for endgame function has been called');
    for (let key in this.winningCombo) {
      if (this.winningCombo[key] === true) {
        this.endgame = true;
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
    this.checkForDraw();
    this.checkForEndgame();
    if (this.winningCombo[player] === true) {
      this.winningSquare = square;
      console.log(this.winningSquare); // TODO: remove later
    }
  }
}
