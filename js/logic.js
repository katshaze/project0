console.log("connected"); // TODO: remove later

const game = {

  players: {
    1: "X",
    2: "Blowfish"
  },

  // startingPlayer: function() {
  //   let randomChoice = Math.floor(Math.random() * (3 - 1)) + 1;
  //   return randomChoice;
  //   //The maximum is exclusive and the minimum is inclusive
  // },

  startingPlayer: "X",

  player: "Blowfish",

  winsTally: {
    "X": 0,
    "Blowfish": 0
    //"Draw": 0 // TODO: Decide whether to bother with this.
  },

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
        this.winsTally["Draw"] += 1;
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
    if (this.turnsPlayed[player] >= 3) { // TODO: decide if this is necessary or just do check for win everytime.
      this.checkForWin(player);
    }
    this.checkForDraw();
    this.checkForEndgame();
    if (this.winningCombo[player] === true) {
      this.winningSquare = square;
      console.log(this.winningSquare); // TODO: remove later
      this.winsTally[player] += 1;
    }
  },

  playTurnAI: function() {
    console.log(`AI function just got triggered.`);
    let availableSquares = [];
    for (key in this.boardStatus) {
      if (this.boardStatus[key] === "empty") {
        availableSquares.push(key);
      }
    }
    console.log(`AI list of spots to choose from is ${availableSquares}`);
    let chosenSquare = availableSquares[Math.floor(Math.random() * availableSquares.length)];
    console.log(`randomly chosen square is ${chosenSquare}`);
    this.boardStatus[chosenSquare] = "X";
    this.turnsPlayed["X"] += 1;
    this.checkForWin("X");
    this.checkForDraw();
    this.checkForEndgame();
    if (this.winningCombo["X"] === true) {
      this.winningSquare = chosenSquare;
      console.log(`${this.winningSquare} is the computer's winning square`); // TODO: remove later
      this.winsTally["X"] += 1;
    }
  }

}
