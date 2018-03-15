// Two player version: code for interaction with browser

$(document).ready(function() {

  reset(); //possibly not necessary since game object is set in the reset position by default, but ensures board is reset and starting player will always be the same (X).

  // event listener for click to reset in endgame situation.
  $('body').on('click', function() {

    if (game.endgame === true) {
    reset();
    };

  });

  //event listener for player clicking on any square on the board
  $('.square').on('click', function(event) {
    // if the last click caused an endgame, exit out of here instead of running the player's turn
    if (game.endgame === true) {
      return;
    }

    // Endgame is false if we get to here. Therefore, turn off the endgame event listener for now by using stop propogation.
    event.stopPropagation();

    const square = $(this).attr("id"); //get the square name
    game.playTurn(square, game.currentPlayer); //run the playTurn function
    render(); //update the screen with the new state of play
  });

  //event listener for the reset button being clicked.
  $('.reset').on('click', 'button', reset);

});

const reset = function() {
  //switch starting player from what it was last time
  if (game.startingPlayer === "X") {
    console.log(`at time of reset, X was starting player`);
    game.startingPlayer = "Blowfish";
    console.log('new starting player on reset is blowfish');
  } else if (game.startingPlayer === "Blowfish") {
    console.log('at time of reset, blowfish was starting player');
    game.startingPlayer = "X";
    console.log('new starting player on reset is X');
  }

  //double check currentplayer is set to whichever is the new starting player
  game.currentPlayer = game.startingPlayer;

  game.boardStatus = {
    1: "empty",
    2: "empty",
    3: "empty",
    4: "empty",
    5: "empty",
    6: "empty",
    7: "empty",
    8: "empty",
    9: "empty"
  };
  game.turnsPlayed = {
    "X": 0,
    "Blowfish": 0
  };
  game.winningCombo = {
    "X": false,
    "Blowfish": false,
    "Draw": false
  };
  game.endgame = false;

  newGameRender();
};

//render for start of new game only - removes visible classes and notes the starting player
const newGameRender = function() {

  $('.visible').removeClass('visible');
  $('.makeBig').removeClass('makeBig');
  $(`.${game.startingPlayer}-starts`).addClass('visible');

};

//render function - called within event listener for when player clicks a square. takes current state of play from game object and updates all relevant elements afresh
const render = function() {

  // remove the msg re who starts the game if more than one move has been made by any player
  for (let key in game.turnsPlayed) {
    if (game.turnsPlayed[key] > 1) {
      $(`.${key}-starts`).removeClass('visible');
    }
  };

  // update the board squares with wherever X/Blowfish have played.
  for (let key in game.boardStatus) {
    if (game.boardStatus[key] === "X") {
      $(`#${key} .x`).addClass('visible');
    }
    if (game.boardStatus[key] === "Blowfish") {
      $(`#${key} .blowfish`).addClass('visible');
    }
  };

  // if winningCombo[X/Blowfish/Draw] is true, make text appear at bottom saying X/Blowfish/Draw Wins (simple mode)
  for (let key in game.winningCombo) {
    if (game.winningCombo[key] === true) {
      $(`.${key}-wins`).addClass('visible');
    }
  };

  // Puff up the blowfish if it wins.
  if (game.winningCombo["Blowfish"] === true) {
    $(`#${game.winningSquare}
     .blowfish`).addClass('makeBig');
  };

  // Flash the three relevant Xs if X wins.
  if (game.winningCombo["X"] === true) {
    $(`#${game.winningStrip[0]} .x`).addClass('animated flash');
    $(`#${game.winningStrip[1]} .x`).addClass('animated flash');
    $(`#${game.winningStrip[2]} .x`).addClass('animated flash');
  };

  // Add the win to the relevant tally
  for (let key in game.winsTally) {
    $(`.${key}-tally`).html(`${game.winsTally[key]}`);
  };
};
