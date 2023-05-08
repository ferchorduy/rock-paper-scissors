//Make the computer play

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    if ( playerSelection === 'Rock' && computerSelection === 'Scissors' || 
         playerSelection === 'Paper' && computerSelection === 'Rock' || 
         playerSelection === 'Scissors' && computerSelection === 'Paper' ) {
            playerScore += 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
    }   else if ( playerSelection === computerSelection ) {
            playerScore += 0.5;
            computerScore += 0.5;
            return `Tie! ${playerSelection} is equal to ${computerSelection}.`;
    }   else {
            computerScore += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

}

function game() {

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`The score is You: ${playerScore} to Comp: ${computerScore}.`);

    }

    if ( playerScore > computerScore ) {
        return `You win ${playerScore} to ${computerScore}!`
    } else if (computerScore > playerScore) {
        return `You lose ${playerScore} to ${computerScore}!`
    } else {
        return `You tie ${playerScore} to ${computerScore}!`
    }

}

console.log(game());