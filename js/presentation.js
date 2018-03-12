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
  game.endgame = false;
  $('.visible').removeClass('visible');
  $('.makeBig').removeClass('makeBig')
  render();
};

const render = function() {

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

  // TODO: Better mode: the three relevant X flash on screen by switching on a special class
  // TODO: Even better: the blowfish puffs up if it wins.
  if (game.winningCombo["Blowfish"] === true) {
    $(`#${game.winningSquare}
     .blowfish`).addClass('makeBig');
  };

};

$(document).ready(function() {
  console.log(player); // TODO: remove later

  // event listener for click to reset in endgame situation.
  $('body').on('click', function() {
    console.log('body clicked'); // TODO: remove later

    if (game.endgame === true) {
    console.log('endgame');
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
    game.playTurn(square, player);
    render();
    if (player === "X") {
      player = "Blowfish";
    } else if (player === "Blowfish") {
      player = "X";
    };
  });

  $('.reset').on('click', 'button', reset);

});
