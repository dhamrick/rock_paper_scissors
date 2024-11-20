# rock_paper_scissors
TOP JS fundamentals lesson to create a game of rock paper scissors




## Objective
    Get computer's choice and return it

### Psuedocode

declare function getComputerChoice
    define variable for computerChoice
    assign computerChoice random number 0 - 2
    get RPS selection from random number
    assign RPS selection to computerChoice
    return computerchoice

## Objective
    Get human player's choice and return it

### Psuedocode

    declare function getHumanChoice
        define variable for humanChoice
        get humanChoice from user
        get rps from humanChoice
        return rps as humanChoice

## Objective: 
    play a single round and track the score and report the winner

### Pseduocode

    declare global variable for humanChoice
        call getHumanChoice to assign value
    declare global varible for computerChoice
        call getComputerChoice to assign value
    declare playRound function that takes humanChoice and computerChoice as variables
        compare computerChoice and humanChoice to decide winner
            if same, then tie
            define humanChoice win conditions
                rock beats scissors
                paper beats rock
                scissors beats paper
            increment winner score
        display message to player with who won and their new score

## Objective
        Play 5 roudns of the games. Calculate winner and display message

### Pseduocode
    declare PlayGame function
    initialize stopPlaying variable to false
    initialize round to 1
    while stopPlaying is false     
        display message for round
        call playRound
        Exit: if round equals 5, set stopPlayin to true
    calculate winner
    return winner message
