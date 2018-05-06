'use strict';

// Code for interaction with browser & DOM manipulation

var twoPMode = true;

$(document).ready(function () {

  reset();

  // event listener for click to reset in endgame situation.
  $('body').on('click', function () {
    if (game.endgame === true) {
      reset();
    }
  });

  //event listener for player clicking on any square on the board. passing in event parameter to be able to switch off propogation as needed within the function.
  $('.square').on('click', function (event) {
    // if the last click caused an endgame, exit out of here instead of running the player's turn
    if (game.endgame === true) {
      return;
    }

    //Endgame is false if we get to here so we keep going. //Event.stopPropagation() prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
    event.stopPropagation();
    var square = $(this).attr("id"); //get the square name

    if (twoPMode === false) {
      if (game.currentPlayer === "Blowfish") {
        game.playTurn(square, game.currentPlayer);
        render();
      }

      if (game.endgame != true) {
        if (game.currentPlayer === "X") {
          setTimeout(function () {
            game.playTurn(game.chooseSquareAI(), game.currentPlayer);
            render();
          }, 500);
        }
      }
    } else if (twoPMode === true) {
      game.playTurn(square, game.currentPlayer); //run the playTurn function
      render(); //update the screen with the new state of play
    }
  });

  //event listener for the reset button being clicked.
  $('#reset').on('click', reset);
});

var reset = function reset() {
  //switch starting player from what it was last time
  if (game.startingPlayer === "X") {
    game.startingPlayer = "Blowfish";
  } else if (game.startingPlayer === "Blowfish") {
    game.startingPlayer = "X";
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
var newGameRender = function newGameRender() {
  $('.current-mode').removeClass('current-mode');
  $('.visible').removeClass('visible');
  $('.makeBig').removeClass('makeBig');
  $('.flash').removeClass('animated flash');
  if (twoPMode) {
    $('.' + game.startingPlayer + '-starts').addClass('visible');
    $('#two-p-tally').addClass('current-mode');
  } else {
    game.startingPlayer === "X" ? $('.Computer-starts').addClass('visible') : $('.' + game.startingPlayer + '-starts').addClass('visible');
    $('#ai-tally').addClass('current-mode');
  }

  if (twoPMode === false) {
    //if it's start of a new game, board is reset and starting player is X (computer), play turn function is called for the computer.
    if (game.currentPlayer === "X") {
      setTimeout(function () {
        game.playTurn(game.chooseSquareAI(), game.currentPlayer);
        render();
      }, 500);
    }
  }
};

//render function - called within event listener for when player clicks a square. takes current state of play from game object and updates all relevant elements afresh
var render = function render() {

  // remove the msg re who starts the game if more than one move has been made by any player
  for (var key in game.turnsPlayed) {
    if (game.turnsPlayed[key] > 1) {
      if (twoPMode) {
        $('.' + key + '-starts').removeClass('visible');
      } else {
        key === "X" ? $('.Computer-starts').removeClass('visible') : $('.' + key + '-starts').removeClass('visible');
      }
    }
  }

  // update the board squares with wherever X/Blowfish have played.
  for (var _key in game.boardStatus) {
    if (game.boardStatus[_key] === "X") {
      $('#' + _key + ' .x').addClass('visible');
    }
    if (game.boardStatus[_key] === "Blowfish") {
      $('#' + _key + ' .blowfish').addClass('visible');
    }
  }

  // if winningCombo[X/Blowfish/Draw] is true, make text appear at bottom saying X/Blowfish/Draw Wins (simple mode)
  for (var _key2 in game.winningCombo) {
    if (game.winningCombo[_key2] === true) {
      if (twoPMode) {
        $('.' + _key2 + '-wins').addClass('visible');
      } else {
        _key2 === "X" ? $('.Computer-wins').addClass('visible') : $('.' + _key2 + '-wins').addClass('visible');
      }
    }
  }

  // Blowfish puffs up for a win
  if (game.winningCombo["Blowfish"] === true) {
    $('#' + game.winningSquare + '\n     .blowfish').addClass('makeBig');
  }

  // Flash the three relevant Xs if X wins
  if (game.winningCombo["X"] === true) {
    $('#' + game.winningStrip[0] + ' .x').addClass('animated flash');
    $('#' + game.winningStrip[1] + ' .x').addClass('animated flash');
    $('#' + game.winningStrip[2] + ' .x').addClass('animated flash');
  }

  // Add the win to the relevant tally
  for (var _key3 in game.winsTally) {
    $('.' + _key3 + '-tally').html('' + game.winsTally[_key3]);
  }
};