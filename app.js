/***** 

pseudocode -> rock paper scissors

begin with a function getComputerChoice()
- random choice between rock, paper, scissors
- declare as an array containing these choices
- will randomly return either 'rock', 'paper', 'scissors'
- use console to verify


*****/

// declare choices array
let choices = ['rock', 'paper', 'scissors'];
console.log(choices);

// declare computer choice function
function getComputerChoice() {
    let randChoice = Math.floor(Math.random(choices) * choices.length);
    return randChoice;
}