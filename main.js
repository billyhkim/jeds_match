let game, music, stats;
$(document).ready(startApp);

function startApp(){
  game = new Game();
  music = new Music();
  stats = new Stats();

  game.shuffleCards(game.images);  
  game.renderCards();
  $('.game-area').on('click', '.back', game.cardClicked);
  $('.reset-btn').click(stats.gameReset);
  $('body').removeClass('fadeout');

  $('.audio-play').click(() => {
    music.startAudio('theme');
    $('.audio-play').css({'background': '#f6b93b', 'color': '#ffffff', 'border-color': '#f6b93b'});
    $('.audio-mute').css({'background': '', 'color': '', 'border-color': ''})
  });
  $('.audio-mute').click(() => {
    music.stopAudio('theme');
    $('.audio-mute').css({'background': '#f6b93b', 'color': '#ffffff', 'border-color': '#f6b93b'});
    $('.audio-play').css({'background': '', 'color': '', 'border-color': ''})
  });
  $('#about-btn').click(() => $('#my-modal').css('display', 'block'));
  $('.close').click(() => $('#my-modal').css('display', 'none'));
  $('.close').click(() => $('#win-modal').css('display', 'none'));
}
