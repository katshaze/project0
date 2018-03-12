let player = "X";

const reset = function() {
  player = "X";
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

  console.log(game.boardStatus); // TODO: remove later
  $('.visible').removeClass('visible');
  //$('.message-container div').toggleClass('invisible');
  render();
};

const render = function() {
  // TODO: create this and make it work
  // if game.boardStatus["1"] = 'empty', do nothing, if 'X', add visible class to square 1 div x, if 'Blowfish', add visible class to square 1 div blowfish - do for all squares 1-9;
  for (let key in game.boardStatus) {
    if (game.boardStatus[key] === "X") {
      $(`#${key} .x`).addClass('visible');
    }
    if (game.boardStatus[key] === "Blowfish") {
      $(`#${key} .blowfish`).addClass('visible');
    }
  };

  // if winningCombo[X/Blowfish/Draw] is true, make text flashes at bottom saying X/Blowfish/Draw Wins (simple mode)
  for (let key in game.winningCombo) {
    if (game.winningCombo[key] === true) {
      $(`.${key}-wins`).addClass('visible');
    }
  };

  // TODO: Better mode: the three relevant X flash on screen by switching on a special class

};

$(document).ready(function() {
  //$('.message-container div').toggleClass('invisible');
  console.log(player); // TODO: remove later

  $('.square').on('click', function() {
    console.log('square clicked'); // TODO: remove later
    const square = $(this).attr("id"); //get the square name
    console.log(square); // TODO: remove later
    // run the play turn function using the particular square ID (1-9) and the player
    game.playTurn(square, player);
    render();
    if (player === "X") {
      player = "Blowfish";
    } else if (player === "Blowfish") {
      player = "X";
    };
    console.log(player); // TODO: remove later
  });

  $('.reset').on('click', 'button', function() {
    console.log('reset button clicked'); // TODO: remove later
    reset();
  })


});
