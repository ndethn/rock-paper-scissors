// rock paper scissors project by ande10 - 10.28.2022

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
//         // print road, both choices, winner of specific round, and overall score
//         console.log(`Round ${i + 1}`);
//         console.log(`Computer chose: ${computerSelection}`);
//         console.log(`You chose: ${playerSelection}`);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`Your score: ${playerScore} , Computer's score: ${computerScore}`);
//     }
// }
// run game
// game();

// condition for the winner
if (playerScore === computerScore) {
    console.log(`It's a tie!`);
} else if (playerScore > computerScore) {
    console.log(`You win!`);
} else {
    console.log(`You lose..`);
}

// end game