// Two player version: code for state of play

const game = {

  startingPlayer: "Blowfish",

  currentPlayer: "Blowfish",

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

  winsTally: {
    "X": 0,
    "Blowfish": 0
  },

  //MAIN FUNCTION, referring to other minor functions to update state of play
  playTurn: function(square, player) {
    //this code will only run if the square is empty.
    if (this.boardStatus[square] === "empty") {
      //update the board
      this.boardStatus[square] = player;
      //update the number of turns played
      this.turnsPlayed[player] += 1;
      //run the check for win function
      this.checkForWin(player);
      //run the check for draw function
      this.checkForDraw();
      //run the check for endgame function
      this.checkForEndgame();
      //if the player has won, note the winning square and update the wins tally
      if (this.winningCombo[player] === true) {
        this.winningSquare = square;
        this.winsTally[player] += 1;
      }
      //update (alternate) current player
      this.updateCurrentPlayer(player);
    }
  },

  //function for AI mode: to randomly choose a square for the computer to play in based on what's available. gets called from presentation.js at same time as running the playturn function for the computer.
  chooseSquareAI: function() {
    let availableSquares = [];
    for (let key in this.boardStatus) {
      if (this.boardStatus[key] === "empty") {
        availableSquares.push(key);
      }
    }
    let chosenSquare = availableSquares[Math.floor(Math.random() * availableSquares.length)];
    return chosenSquare;
  },

  //check for win function, called from playTurn function every time someone has a turn
  checkForWin: function(player) {
    if (this.boardStatus[1] === player && this.boardStatus[2] === player && this.boardStatus[3] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [1,2,3];
    }
    if (this.boardStatus[1] === player && this.boardStatus[5] === player && this.boardStatus[9] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [1,5,9];
    }
    if (this.boardStatus[1] === player && this.boardStatus[4] === player && this.boardStatus[7] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [1,4,7];
    }
    if (this.boardStatus[2] === player && this.boardStatus[5] === player && this.boardStatus[8] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [2,5,8];
    }
    if (this.boardStatus[3] === player && this.boardStatus[6] === player && this.boardStatus[9] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [3,6,9];
    }
    if (this.boardStatus[3] === player && this.boardStatus[5] === player && this.boardStatus[7] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [3,5,7];
    }
    if (this.boardStatus[4] === player && this.boardStatus[5] === player && this.boardStatus[6] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [4,5,6];
    }
    if (this.boardStatus[7] === player && this.boardStatus[8] === player && this.boardStatus[9] === player) {
      this.winningCombo[player] = true;
      this.winningStrip = [7,8,9];
    }
  },

  checkForDraw: function() {
    if (this.turnsPlayed["X"] + this.turnsPlayed["Blowfish"] === 9) {
      if (this.winningCombo["X"] === false && this.winningCombo["Blowfish"] === false) {
        this.winningCombo["Draw"] = true;
        this.winsTally["Draw"] += 1;
      }
    }
  },

  checkForEndgame: function() {
    for (let key in this.winningCombo) {
      if (this.winningCombo[key] === true) {
        this.endgame = true;
      }
    }
  },

  updateCurrentPlayer: function(player) {
    if (player === "X") {
      this.currentPlayer = "Blowfish";
    } else {
      this.currentPlayer = "X";
    }
  }
};
