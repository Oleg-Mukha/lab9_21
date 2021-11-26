document.body.innerHTML = `
<div class="background">
    <div class="segment">
      <img class="avatar" id="avatar-player"/>
      <div class="name" id="name-player"></div>
      <div class="scores" id="score1"></div>
      <img class="card" id="card-player"/>
    </div>
    <div class="segment buttons">
    <button class="button btn1" id="butStart" onClick="playGame();"><span class="link-content">PLAY</span></button>
    <button class="button btn2" id="butReset" onClick="resetGame();"><span class="link-content">RESET<span></button>
    </div>
    <div class="segment bot">
    <img class="avatar" id="avatar-bot"/>
    <div class="name" id="name-bot"></div>
    <div class="scores" id="score2"></div>
    <img class="card" id="card-bot"/>
    </div>
</div>
`
var playerName = prompt('Enter your name:');
var namePlayer = document.getElementById('name-player').innerHTML = playerName;

document.getElementById("avatar-bot").src="img/robot.png";
document.getElementById("avatar-player").src="img/cat.png";

const botName = ['BOT Itsuki', "BOT Ren", "BOT Bryan", "BOT Charles", "BOT Richard", "BOT Jack", "BOT John"];
var counterPlayer = 0;
var counterBot = 0;
var counterGames = 0;
var cards = [
"img/cards/bybn_6.png", "img/cards/cherv_6.png", "img/cards/piki_6.png", "img/cards/tref_6.png",
"img/cards/bybn_7.png", "img/cards/cherv_7.png", "img/cards/piki_7.png", "img/cards/tref_7.png",
"img/cards/bybn_8.png", "img/cards/cherv_8.png", "img/cards/piki_8.png", "img/cards/tref_8.png",
"img/cards/bybn_9.png", "img/cards/cherv_9.png", "img/cards/piki_9.png", "img/cards/tref_9.png",
"img/cards/bybn_10.png", "img/cards/cherv_10.png", "img/cards/piki_10.png", "img/cards/tref_10.png",
"img/cards/bybn_jack.png", "img/cards/cherv_jack.png", "img/cards/piki_jack.png", "img/cards/tref_jack.png",
"img/cards/bybn_queen.png", "img/cards/cherv_queen.png", "img/cards/piki_queen.png", "img/cards/tref_queen.png",
"img/cards/bybn_king.png", "img/cards/cherv_king.png", "img/cards/piki_king.png", "img/cards/tref_king.png",
"img/cards/bybn_ace.png", "img/cards/cherv_ace.png", "img/cards/piki_ace.png", "img/cards/tref_ace.png"];

var btnPlay = document.getElementById('butStart');

function setGameOver() {
  btnPlay.disabled = true;
  btnPlay.style.cursor = "not-allowed";
}

function resetGame(){
  btnPlay.disabled = false;
  btnPlay.style.cursor = "pointer";
  document.getElementById('score1').innerHTML = '';
  document.getElementById('score2').innerHTML = '';
  counterPlayer = 0;
  counterBot = 0;
  counterGames = 0;
  document.getElementById('card-player').src = 'img/cards/freecard.png';
  document.getElementById('card-bot').src = 'img/cards/freecard.png';
  document.getElementById('card-player').classList.add('shakeAnimPlayer');
  document.getElementById('card-bot').classList.add('shakeAnimBot');
  setTimeout(function(){document.getElementById('card-player').classList.remove('shakeAnimPlayer');}, 600);
  setTimeout(function(){document.getElementById('card-bot').classList.remove('shakeAnimBot');}, 600);
}

  let random = Math.floor(Math.random() * botName.length);
  var nameBot = document.getElementById("name-bot").innerHTML = botName[random];
  document.getElementById('card-player').src = 'img/cards/freecard.png';
  document.getElementById('card-bot').src = 'img/cards/freecard.png';

function playGame(){

  var randomCardPlayer = Math.floor(Math.random() * cards.length);
  var randomCardBot = Math.floor(Math.random() * cards.length);
  var playerCard = document.getElementById("card-player").src = cards[randomCardPlayer];
  var botCard = document.getElementById("card-bot").src = cards[randomCardBot];

  if(playerCard == cards[0] || playerCard == cards[1] || playerCard == cards[2] || playerCard == cards[3]){
    counterPlayer = counterPlayer + 6;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[4] || playerCard == cards[5] || playerCard == cards[6] || playerCard == cards[7]){
    counterPlayer = counterPlayer + 7;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[8] || playerCard == cards[9] || playerCard == cards[10] || playerCard == cards[11]){
    counterPlayer = counterPlayer + 8;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[12] || playerCard == cards[13] || playerCard == cards[14] || playerCard == cards[15]){
    counterPlayer = counterPlayer + 9;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[16] || playerCard == cards[17] || playerCard == cards[18] || playerCard == cards[19]){
    counterPlayer = counterPlayer + 10;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[20] || playerCard == cards[21] || playerCard == cards[22] || playerCard == cards[23]){
    counterPlayer = counterPlayer + 2;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[24] || playerCard == cards[25] || playerCard == cards[26] || playerCard == cards[27]){
    counterPlayer = counterPlayer + 3;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[28] || playerCard == cards[29] || playerCard == cards[30] || playerCard == cards[31]){
    counterPlayer = counterPlayer + 4;
    document.getElementById("score1").innerHTML = counterPlayer;
  }
  if(playerCard == cards[32] || playerCard == cards[33] || playerCard == cards[34] || playerCard == cards[35]){
    counterPlayer = counterPlayer + 11;
    document.getElementById("score1").innerHTML = counterPlayer;
  }

  if(botCard == cards[0] || botCard == cards[1] || botCard == cards[2] || botCard == cards[3]){
    counterBot = counterBot + 6;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[4] || botCard == cards[5] || botCard == cards[6] || botCard == cards[7]){
    counterBot = counterBot + 7;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[8] || botCard == cards[9] || botCard == cards[10] || botCard == cards[11]){
    counterBot = counterBot + 8;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[12] || botCard == cards[13] || botCard == cards[14] || botCard == cards[15]){
    counterBot = counterBot + 9;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[16] || botCard == cards[17] || botCard == cards[18] || botCard == cards[19]){
    counterBot = counterBot + 10;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[20] || botCard == cards[21] || botCard == cards[22] || botCard == cards[23]){
    counterBot = counterBot + 2;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[24] || botCard == cards[25] || botCard == cards[26] || botCard == cards[27]){
    counterBot = counterBot + 3;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[28] || botCard == cards[29] || botCard == cards[30] || botCard == cards[31]){
    counterBot = counterBot + 4;
    document.getElementById("score2").innerHTML = counterBot;
  }
  if(botCard == cards[32] || botCard == cards[33] || botCard == cards[34] || botCard == cards[35]){
    counterBot = counterBot + 11;
    document.getElementById("score2").innerHTML = counterBot;
  }

  counterGames++;

  if(counterPlayer == 21){
    alert('Congrats! Player ' + namePlayer + ' has blackjack!');
  }
  else if(counterBot == 21){
    alert('Player' + namePlayer + 'lost - ' + nameBot + 'has blackjack!');
  }
  else if(counterPlayer > 21){
    alert('Game over - ' + nameBot + ' won');
  }
  else if(counterBot > 21){
    alert('Game over - Player ' + namePlayer + ' win');
  }
  else if(counterGames == 3){
  if(counterPlayer > 21){
      alert('Game over - ' + nameBot + ' won');
  }
  else if(counterBot > 21){
      alert('Game over - Player ' + namePlayer + ' win');
  }
  else if(counterPlayer > counterBot){
      alert('Game over - Player ' + namePlayer + ' win');
  }
  else if(counterPlayer < counterBot){
      alert('Game over - ' + nameBot + ' won');
  }
  else if(counterPlayer == counterBot){
      alert('Game over - draw');
  }
    setGameOver();
  }
  document.getElementById('card-player').classList.add('shakeAnimPlayer');
  document.getElementById('card-bot').classList.add('shakeAnimBot');
  setTimeout(function(){document.getElementById('card-player').classList.remove('shakeAnimPlayer');}, 600);
  setTimeout(function(){document.getElementById('card-bot').classList.remove('shakeAnimBot');}, 600);
}
