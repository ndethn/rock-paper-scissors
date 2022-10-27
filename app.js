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
- make playerSelection function parameter case-insensitive

- create function playRound containing parameters playerSelection and computerSelection
- compare the two selections to declare a winner
- return a string declaring the winner

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



*/