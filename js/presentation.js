//branch: ai-feature-easy

// game.startingPlayer = "X";
// console.log(`starting player is ${game.startingPlayer}`); // TODO: remove later
//let player = "X";

const reset = function() {

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

  $('.visible').removeClass('visible');
  $('.makeBig').removeClass('makeBig');

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

  $(`.${game.startingPlayer}-starts`).addClass('visible');

  if (game.startingPlayer === "X") {
    game.player = "X";
    game.playTurnAI("X");
    console.log(`AI was triggered from inside reset function`);
  }

  // render();
  // if (game.startingPlayer === "X") {
  //   player = "X";
  //   game.playTurnAI("X");
  //   // render();
  // }
  render();
};

const render = function() {

  // remove the msg re who starts the game if more than one move has been made by any player
  for (let key in game.turnsPlayed) {
    if (game.turnsPlayed[key] > 1) {
      $(`.${key}-starts`).removeClass('visible');
    }
  };

  for (let key in game.boardStatus) {
    if (game.boardStatus[key] === "X") {
      $(`#${key} .x`).addClass('visible');
      // for (let key in game.winsTally) {
        // $(`.${key}-starts`).removeClass('visible');
      // }
    }
    if (game.boardStatus[key] === "Blowfish") {
      $(`#${key} .blowfish`).addClass('visible');
      // for (let key in game.winsTally) {
        // $(`.${key}-starts`).removeClass('visible');
      // }
    }
  };

  // if winningCombo[X/Blowfish/Draw] is true, make text appear at bottom saying X/Blowfish/Draw Wins (simple mode)
  for (let key in game.winningCombo) {
    if (game.winningCombo[key] === true) {
      $(`.${key}-wins`).addClass('visible');
    }
  };

  // TODO: Better mode: the three relevant X flash on screen by switching on a special class

  // The blowfish puffs up if it wins.
  if (game.winningCombo["Blowfish"] === true) {
    $(`#${game.winningSquare}
     .blowfish`).addClass('makeBig');
  };

  // The win gets added to the relevant tally
  for (let key in game.winsTally) {
    $(`.${key}-tally`).html(`${game.winsTally[key]}`);
  };

  // only change the current player if we're in the middle of a game, not at the start of a new game.
  if (game.turnsPlayed["X"] + game.turnsPlayed["Blowfish"] > 0) {
    if (game.player === "X") {
      game.player = "Blowfish";
    } else if (game.player === "Blowfish") {
      game.player = "X";
    };
  }

  // check for if it's computer's turn, if it is, don't need to wait for next click but run computer's turn immediately, except in case of endgame situation.
  if (game.endgame != true) {
    if (game.player === "X") {
      game.playTurnAI();
      console.log(`AI just got triggered from inside render function`);
      render();
    }
  };

};

$(document).ready(function() {
  reset(); //this means on refresh, the starting player will be blowfish, so that the human can start first game.

  // event listener for click to reset in endgame situation.
  $('body').on('click', function() {
    console.log('body clicked'); // TODO: remove later

    if (game.endgame === true) {
    console.log('body event has run and endgame is true. about to reset.');
    reset();
    };
  });

  $('.square').on('click', function(event) {
    // if the last click caused an endgame, exit out of here instead of running the player's turn
    if (game.endgame === true) {
      return;
    }
    // endgame is false if we get to here. if so, turn off the endgame event listener by using stop propogation for now since it's not an endgame situation.
    event.stopPropagation();

    const square = $(this).attr("id"); //get the square name
    game.playTurn(square, game.player);
    render();

  });

  $('.reset').on('click', 'button', reset);

});
