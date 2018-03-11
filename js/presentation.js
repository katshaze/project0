const playerTurn = "X";

const reset = function() {
  playerTurn = "X";
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
}

const render = function() {
  // TODO;
  // make screen square 1 = game.boardStatus["1"];
  // do as above for all 9 squares;
  // if winningCombo[X] is true, make the three relevant X flash on screen by switching on a special class;
  // if winningCombo[blowfish] is true, make the three relevant blowfish flash on screen by switching on a special class;
  // if winningCombo[draw] is true, make the borders of the squares flash on screen by switching on a special class; 
  //update playerTurn so that if player = "X", playerTurn now = "Blowfish" and if player = "Blowfish", playerTurn now = "X";
}

$(document).ready(function() {
  reset();
  const player = playerTurn;

  $('.square').on('click', function() {
  // Get the square name
  const square = $(this).id();
  // run the play turn function using the particular square ID (1-9) and the player
  game.playTurn(square, player);
  // TODO: Update the screen by writing the render function
  render();
});


}
