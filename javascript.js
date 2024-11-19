console.log("Hello World");

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

console.log(getComputerChoice()); 
console.log(getHumanChoice());