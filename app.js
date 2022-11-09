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

// declare the game function with a for loop (5 game rounds)
// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Rock, Paper, Scissors, GO!').toLowerCase();
//         const computerSelection = getComputerChoice();
//         // print roundd, both choices, winner of specific round, and overall score
//         console.log(`Round ${i + 1}`);
//         console.log(`Computer chose: ${computerSelection}`);
//         console.log(`You chose: ${playerSelection}`);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`Your score: ${playerScore} , Computer's score: ${computerScore}`);
//     }
// }
// // run game
// game();

// event listener to the buttons
// each button calls the playRound function with
// the corresponding playerSelection

const btnR = document.getElementById('btnR');
const btnP = document.getElementById('btnP');
const btnS = document.getElementById('btnS');
const choiceContainer = document.getElementById('choice');
const scoreContainer = document.getElementById('score');
const resultContainer = document.getElementById('result');

// add event to each button: rock, paper, scissors
// calling the playRound function for each
btnR.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);
    choiceContainer.textContent = ` `;
    resultContainer.textContent = `${round}`;
    choiceContainer.textContent += `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreContainer.textContent = `Your score: ${playerScore} , Computer's score: ${computerScore}`;
});

btnP.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);
    choiceContainer.textContent = ` `;
    resultContainer.textContent = `${round}`;
    choiceContainer.textContent += `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreContainer.textContent = `Your score: ${playerScore} , Computer's score: ${computerScore}`;
});

btnS.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);
    choiceContainer.textContent = ` `;
    resultContainer.textContent = `${round}`;
    choiceContainer.textContent += `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreContainer.textContent = `Your score: ${playerScore} , Computer's score: ${computerScore}`;
});



//condition for the winner
// if (playerScore === computerScore) {
//     choiceContainer.textContent += `It's a tie!`;
// } else if (playerScore > computerScore) {
//     choiceContainer.textContent += `You win!`;
// } else {
//     choiceContainer.textContent += `You lose..`;
// }

// end game