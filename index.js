// CONTAINS BUG: WILL START PLAY IF WHEN ENTERING NAME, "R || P || S" ARE ENTERED. HAVEN'T FIGURED OUT HOW TO FIX


// variables needed to start game
const playButton = document.getElementById('play-button');
const containerIntro = document.getElementById('container-intro');
const containerMain = document.getElementById('container-main');
const nameInput = document.getElementById('name-input');
const playerName = document.getElementById('player-name');

nameInput.addEventListener('click', makePlaceholderTextTransparent);
playButton.addEventListener('click', enterGame);
document.addEventListener('keydown', (e) => { if (e.code === "Enter") enterGame();});

// Turns the placeholder text transparent after clicking the input box
function makePlaceholderTextTransparent() {
  nameInput.style.setProperty('--placeholder-text-color', 'transparent');
}

// After clicking "PLAY", player is taken to the game (RPS view)
function enterGame() {

    containerIntro.style.display = 'none';
    containerMain.style.display = 'block';

    if (nameInput.value === '') {
      playerName.textContent = '(you)'; // name defaults to (you) if no input received
    } else {
      playerName.textContent = `(${nameInput.value})`; // takes name input from user and adds it to name shown in game
    }

}

// get computer's choice in the round
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(e) {

  computerChoiceValue = getComputerChoice();

  if (e.type === "keydown") {
    if (e.code === "KeyR") {
      playerChoiceValue = 'rock';
    } else if (e.code === "KeyP") {
      playerChoiceValue = 'paper';
    } else if (e.code === "KeyS") {
      playerChoiceValue = 'scissors';
    } else {
      return;
    }
  }

  if (e.type === "click") {
    playerChoiceValue = e.target.id;
  }

  if (playerChoiceValue === 'rock' && computerChoiceValue === 'scissors' ||
      playerChoiceValue === 'paper' && computerChoiceValue === 'rock' ||
      playerChoiceValue === 'scissors' && computerChoiceValue === 'paper') {
        playerScoreValue += 1;
        changeUI();
        gameUpdates.textContent = `${playerChoice.textContent} beats ${computerChoice.textContent}. Point for you!`;
  } else if (playerChoiceValue === computerChoiceValue) {
        changeUI();
        gameUpdates.textContent = `${playerChoice.textContent} ties to ${computerChoice.textContent}. No points!`;
  } else {
        computerScoreValue += 1;
        changeUI();
        gameUpdates.textContent = `${playerChoice.textContent} loses to ${computerChoice.textContent}. Point for comp!`;
  }

}

// variables needed during game
const ROCK = '{R}'
const PAPER = '[P]'
const SCISSORS = '\\S/'
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let gameUpdates = document.getElementById('game-updates');
let globalScore = document.getElementById('global-score');
let playerChoice = document.getElementById('player-choice');
let computerChoice = document.getElementById('computer-choice');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let playerScoreValue = 0;
let computerScoreValue = 0;
let playerChoiceValue = '';
let computerChoiceValue = '';

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
document.addEventListener('keydown', game);

function changeUI() {

  playerScore.textContent = playerScoreValue;
  computerScore.textContent = computerScoreValue;

  if (playerChoiceValue === "rock") {
    playerChoice.textContent = ROCK;
  } else if (playerChoiceValue === "paper") {
    playerChoice.textContent = PAPER;
  } else if (playerChoiceValue === "scissors") {
    playerChoice.textContent = SCISSORS;
  } else {
    return;
  }

  if (computerChoiceValue === "rock") {
    computerChoice.textContent = ROCK;
  } else if (computerChoiceValue === "paper") {
    computerChoice.textContent = PAPER;
  } else if (computerChoiceValue === "scissors") {
    computerChoice.textContent = SCISSORS;
  } else {
    return;
  }

}

function game(e) {

  playRound(e);

  let globalPlayerScoreValue = 0;
  let globalComputerScoreValue = 0;

  if (playerScoreValue === 5 || computerScoreValue === 5) {
    // find out how to make keydown disabled (returns error) or handle error due to playRound toggled to false
    containerMain.style.pointerEvents = 'none'
    playRound = false;
    if (playerScoreValue > computerScoreValue) {
      gameUpdates.textContent = 'You win!'
    }
  }
  // Code to make multiple games with a global score. Will come back to it when I learn more, I can't figure it out currently  
  //   if (playerScoreValue > computerScoreValue) {
  //     globalPlayerScoreValue++;
  //   } else {
  //     globalComputerScoreValue++;
  //   }
  //   globalScore.textContent = `${globalPlayerScoreValue} : ${globalComputerScoreValue}`
  //   globalPlayerScoreValue = 0;
  //   globalComputerScoreValue = 0;
  // }
  
}