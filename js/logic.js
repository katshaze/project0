const boardStatus = {
  "1": "empty",
  2: "empty",
  3: "empty",
  4: "empty",
  5: "empty",
  6: "empty",
  7: "empty",
  8: "empty",
  9: "empty"
}

let xTurnsPlayed = 0;
let toadTurnsPlayed = 0;
let winningCombo = {
  "X": false,
  "Toad": false,
  "Draw": false
}

const checkForWin = function(player) {
  if (boardStatus[1] === player && boardStatus[2] === player && boardStatus[3] === player) {
    //console.log(`this is working - x wins`);
    winningCombo[player] = true;
  }
  if (boardStatus[1] === player && boardStatus[5] === player && boardStatus[9] === player) {
    winningCombo[player] = true;
  }
  if (boardStatus[1] === player && boardStatus[4] === player && boardStatus[7] === player) {
    winningCombo[player] = true;
  }
  if (boardStatus[2] === player && boardStatus[5] === player && boardStatus[8] === player) {
    winningCombo[player] = true;
  }
  if (boardStatus[3] === player && boardStatus[6] === player && boardStatus[9] === player) {
    winningCombo[player] = true;
  }
  if (boardStatus[3] === player && boardStatus[5] === player && boardStatus[7] === player) {
    winningCombo[player] = true;
  }
  if (boardStatus[4] === player && boardStatus[5] === player && boardStatus[6] === player) {
    winningCombo[player] = true;
  }
  if (boardStatus[7] === player && boardStatus[8] === player && boardStatus[9] === player) {
    winningCombo[player] = true;
  }
}

const checkForDraw = function() {
  if (xTurnsPlayed + toadTurnsPlayed === 9) {
    if (winningCombo["X"] === false && winningCombo["Toad"] === false) {
      winningCombo["Draw"] = true;
    }
  }
}

const xPlays = function(square) {
  if (boardStatus[square] === "empty") {
    //console.log(`${square} is empty - free to play`);
    boardStatus[square] = "X";
    //console.log(boardStatus[square]);
    xTurnsPlayed += 1;
    //console.log(xTurnsPlayed);
  }
  if (xTurnsPlayed >= 3) {
    checkForWin("X");
  }
  if (winningCombo["X"] === true) {
    console.log(`X WINS.`);
  }
  checkForDraw();
  if (winningCombo["Draw"] === true) {
    console.log('GAME ENDS IN A DRAW.');
  }
}

const toadPlays = function(square) {
  if (boardStatus[square] === "empty") {
    boardStatus[square] = "Toad";
    toadTurnsPlayed += 1;
  }
  if (toadTurnsPlayed >= 3) {
    checkForWin("Toad");
  }
  if (winningCombo["Toad"] === true) {
    console.log(`TOAD WINS.`);
  }
  checkForDraw();
  if (winningCombo["Draw"] === true) {
    console.log(`GAME ENDS IN A DRAW.`);
  }
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
