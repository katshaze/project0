$(document).ready(function() {

  $('#switch-mode').on('click', function() {
    console.log('switch mode button clicked');
    if (twoPMode === false) {
      $('#mode').text('Try human vs. computer');
      $('#switch-mode').removeClass('switch-to-2p');
      $('#switch-mode').addClass('switch-to-ai');
      game.startingPlayer = 'X';
      game.currentPlayer = 'X';
      game.winsTally['X'] = 0;
      game.winsTally['Blowfish'] = 0;
      twoPMode = true;
      reset();
      render();
    } else if (twoPMode === true) {
      $('#mode').text('Try two player version');
      $('#switch-mode').removeClass('switch-to-ai');
      $('#switch-mode').addClass('switch-to-2p');
      game.startingPlayer = 'X';
      game.currentPlayer = 'X';
      game.winsTally['X'] = 0;
      game.winsTally['Blowfish'] = 0;
      twoPMode = false;
      reset();
      render();
    }
  })
});
