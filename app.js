/***** 
pseudocode -> rock paper scissors

begin with a function getComputerChoice()
- random choice between rock, paper, scissors
- declare as an array containing these choices
- will randomly return either 'rock', 'paper', 'scissors'
- use console to verify
*****/

// declare choices array
const choices = ['rock', 'paper', 'scissors'];
console.log(choices);

// declare computer choice function
function getComputerChoice() {
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

/*
write a function for a single round
- takes two parameters: playerSelection and computerSelection
- return a string declaring the winner: "You Lose! Paper beats Rock"
- make playerSelection function parameter case-insensitive -> convert the users input
into all lowercase: toLowerCase()

- create function playRound containing parameters playerSelection and computerSelection
- compare the two selections to declare a winner
- return a string declaring the winner
- return the result of the function call

- use an IF statement
    - if playerSelection === computerSelection
    - then return tie

    - else if playerSelection === 'rock' && computerSelection === 'paper'
    - then return you lose
    
    - else if playerSelection === 'rock' && computerSelection === 'scissors'
    - then return you win

    - else if playerSelection === 'paper' && computerSelection === 'scissors'
    - then return you lose
    
    - else if playerSelection === 'paper' && computerSelection === 'rock'
    - then return you win

    - else if playerSelection === 'scissors' && computerSelection === 'rock'
    - then return you lose
    
    - else if playerSelection === 'scissors' && computerSelection === 'paper'
    - then return you win

- declare playerSelection by using prompt();
- declare computerSelection equal to the function getComputerChoice()

*/

// testing the playRound function
function playRound(playerSelection, computerSelection){
    // tie condition
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win! Scissors beats paper';
    } else {
        return 'try again';
    }
}

// declare playerSelection and computerSelection
const playerSelection = prompt('Rock, paper, scissors, GO!').toLowerCase();
const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
