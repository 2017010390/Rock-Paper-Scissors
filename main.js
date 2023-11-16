let playerSelection = "rock";
let computerSelection = getComputerChoice();

/**
 * random computer choice
 * @returns string
 */
function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        console.log("Tie Game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

function game()
{
    for(let i = 1; i <= 5; ++i)
    {
        playerSelection = prompt("Please input ROCK PAPER or SCISSORS") || "rock";
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();