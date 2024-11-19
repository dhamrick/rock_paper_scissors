console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice) {
        case 0:
            return computerChoice = "scissors";
        case 1:
            return computerChoice = "rock";
        case 2: 
            return computerChoice = "paper";
    }
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("scissors (0), rock (1), or paper (2): ", "2"));

    switch(humanChoice) {
        case 0:
            return humanChoice = "scissors";
        case 1:
            return humanChoice = "rock";
        case 2: 
            return humanChoice = "paper";
    }

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! Play again! Score is player ${humanScore} and computer ${computerScore}!`)
    } else if (
        //define all human player winning conditions
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ) {
        humanScore++;
        console.log(`You won! ${humanChoice} beats ${computerChoice}! Score is now: Player ${humanScore} and Computer ${computerScore}!`)

    }else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}! Score is now: Player ${humanScore} and Computer ${computerScore}!`);
       
    }
}

// console.log(getComputerChoice()); 
// console.log(getHumanChoice());

playRound(humanChoice, computerChoice);