// rock paper scissors project by ande10 - 10.28.2022
// feature branch: add ui - 11.08.2022

// declare choices array
const choices = ['rock', 'paper', 'scissors'];
console.log(choices);

// declare function for random computer choice
function getComputerChoice() {
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

// declare score variables
let playerScore = 0;
let computerScore = 0;

// declare the playRound function with multiple conditions for rock paper scissors
function playRound(playerSelection, computerSelection) {
    // tie condition
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } // all other conditions
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You win! Scissors beats paper';
    } // consider typos
    else {
        return 'error, try again';
    }
}

// declare variables for referencing html elements
const btnR = document.getElementById('btnR');
const btnP = document.getElementById('btnP');
const btnS = document.getElementById('btnS');
const choiceContainer = document.getElementById('choice');
const scoreContainer = document.getElementById('score');
const resultContainer = document.getElementById('result');
const winnerContainer = document.getElementById('winner');

// create DOM events with each button and displaying results
btnR.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    // run the play round function for conditions
    const round = playRound(playerSelection, computerSelection);
    choiceContainer.textContent = ` `;
    resultContainer.textContent = `${round}`;
    choiceContainer.textContent += `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreContainer.textContent = `Your score: ${playerScore} , Computer's score: ${computerScore}`;
    // run the check winner function for 5 points
    checkWinner(playerScore, computerScore);
});

btnP.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);
    choiceContainer.textContent = ` `;
    resultContainer.textContent = `${round}`;
    choiceContainer.textContent += `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreContainer.textContent = `Your score: ${playerScore} , Computer's score: ${computerScore}`;
    checkWinner(playerScore, computerScore);
});

btnS.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);
    choiceContainer.textContent = ` `;
    resultContainer.textContent = `${round}`;
    choiceContainer.textContent += `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreContainer.textContent = `Your score: ${playerScore} , Computer's score: ${computerScore}`;
    checkWinner(playerScore, computerScore);
});

// check the winner based on 5 points and disable buttons for
// visibility of game ending
function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        resultContainer.textContent = ` `;
        choiceContainer.textContent = ` `;
        resultContainer.textContent = `You win the game!`;
        btnR.disabled = true;
        btnP.disabled = true;
        btnS.disabled = true;
    } else if (computerScore === 5) {
        resultContainer.textContent = ` `;
        choiceContainer.textContent = ` `;
        resultContainer.textContent = `You lose.. Refresh page to play again`;
        btnR.disabled = true;
        btnP.disabled = true;
        btnS.disabled = true;
    }
}
