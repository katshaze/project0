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
};

const render = function() {
  // TODO: create this and make it work
  // if game.boardStatus["1"] = 'empty', do nothing, if 'X', add visible class to square 1 div x, if 'Blowfish', add visible class to square 1 div blowfish - do for all squares 1-9;
  if (game.boardStatus[1] === "X") {
    $('#1 .x').addClass('visible');
  };
  if (game.boardStatus[1] === "Blowfish") {
    $('#1 .blowfish').addClass('visible');
  };
  if (game.boardStatus[2] === "X") {
    $('#2 .x').addClass('visible');
  };
  if (game.boardStatus[2] === "Blowfish") {
    $('#2 .blowfish').addClass('visible');
  };
  if (game.boardStatus[3] === "X") {
    $('#3 .x').addClass('visible');
  };
  if (game.boardStatus[3] === "Blowfish") {
    $('#3 .blowfish').addClass('visible');
  };
  if (game.boardStatus[4] === "X") {
    $('#4 .x').addClass('visible');
  };
  if (game.boardStatus[4] === "Blowfish") {
    $('#4 .blowfish').addClass('visible');
  };
  if (game.boardStatus[5] === "X") {
    $('#5 .x').addClass('visible');
  };
  if (game.boardStatus[5] === "Blowfish") {
    $('#5 .blowfish').addClass('visible');
  };
  if (game.boardStatus[6] === "X") {
    $('#6 .x').addClass('visible');
  };
  if (game.boardStatus[6] === "Blowfish") {
    $('#6 .blowfish').addClass('visible');
  };
  if (game.boardStatus[7] === "X") {
    $('#7 .x').addClass('visible');
  };
  if (game.boardStatus[7] === "Blowfish") {
    $('#7 .blowfish').addClass('visible');
  };
  if (game.boardStatus[8] === "X") {
    $('#8 .x').addClass('visible');
  };
  if (game.boardStatus[8] === "Blowfish") {
    $('#8 .blowfish').addClass('visible');
  };
  if (game.boardStatus[9] === "X") {
    $('#9 .x').addClass('visible');
  };
  if (game.boardStatus[9] === "Blowfish") {
    $('#9 .blowfish').addClass('visible');
  };

  // if winningCombo[X] is true, make the three relevant X flash on screen by switching on a special class;
  // if winningCombo[blowfish] is true, make the three relevant blowfish flash on screen by switching on a special class;
  // if winningCombo[draw] is true, make the borders of the squares flash on screen by switching on a special class;

};

$(document).ready(function() {
  console.log(player); // TODO: remove later

  $('.square').on('click', function() {
    console.log('square clicked'); // TODO: remove later
    // Get the square name
    const square = $(this).attr("id");
    console.log(square); // TODO: remove later
    // run the play turn function using the particular square ID (1-9) and the player
    game.playTurn(square, player);
    // TODO: Update the screen by writing the render function
    render();
    //update playerTurn so that if player = "X", playerTurn now = "Blowfish" and if player = "Blowfish", playerTurn now = "X";
    if (player === "X") {
      player = "Blowfish";
    } else if (player === "Blowfish") {
      player = "X";
    };
    console.log(player);
  });

});
