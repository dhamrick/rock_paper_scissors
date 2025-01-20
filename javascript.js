const btnsUserChoices = document.querySelectorAll(".humanChoice");

btnsUserChoices.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice());
    })
});

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

const gameDialogue = document.querySelector("#gameDialogue");

let humanScore = 0;
let computerScore = 0;

let round = 1;


    function playRound(humanChoice, computerChoice) {
        const roundResult = document.createElement("div");

        if (humanChoice === computerChoice) {
            roundResult.textContent = `Round ${round} result: Tie! Play again! Score is player ${humanScore} and computer ${computerScore}!`
        } else if (
            //define all human player winning conditions
            humanChoice === 'scissors' && computerChoice === 'paper' ||
            humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            humanScore++;
            roundResult.textContent  = `Round ${round} result: You won! ${humanChoice} beats ${computerChoice}! Score is now: Player ${humanScore} and Computer ${computerScore}!`;
    
        }else{
            computerScore++;
            roundResult.textContent  = `Round ${round} result: You lose! ${computerChoice} beats ${humanChoice}! Score is now: Player ${humanScore} and Computer ${computerScore}!`;
        
        }
       gameDialogue.appendChild(roundResult);
       round++;
        if (humanScore >= 5 || computerScore >= 5) {
            const endGameMessage = document.createElement("div");
            const endGameScore = document.createElement("p");
            const endGameWinner = document.createElement("p");
            endGameScore.textContent = `Finale Score: Player ${humanScore}, Computer ${computerScore}`;
            if (humanScore > computerScore) {
                endGameWinner.textContent = "Congratulations! You won!"

            } else {
                endGameWinner.textContent = "The computer won! Better luck next time!"
            }
            endGameMessage.appendChild(endGameWinner);
            endGameMessage.appendChild(endGameScore);
            gameDialogue.appendChild(endGameMessage);
        }
    }  

if(humanScore > computerScore) {
    console.log("Congratulations! You won!");
} else {
    console.log("The computer won! Better luck next time!");
}