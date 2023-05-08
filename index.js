//Make the computer play

function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * 3)];

}

console.log(getComputerChoice())