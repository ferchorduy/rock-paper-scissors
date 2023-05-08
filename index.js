//Make the computer play

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];

}

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    if ( playerSelection === 'rock' && computerSelection === 'scissors' || 
         playerSelection === 'paper' && computerSelection === 'rock' || 
         playerSelection === 'scissors' && computerSelection === 'paper' ) {
            return `You win! ${playerSelection} beats ${computerSelection}.`;
    }   else if ( playerSelection === computerSelection ) {
            return `Tie! ${playerSelection} is equal to ${computerSelection}.`;
    }   else {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));