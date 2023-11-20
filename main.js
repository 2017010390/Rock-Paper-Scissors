let playerSelection = "rock";
let computerSelection = getComputerChoice();

// game score
const winPoint = 5;
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

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
        roundWinner = 'tie';
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ){
        computerScore++;
        roundWinner = 'computer';
    } else {
        playerScore++;
        roundWinner = 'player';
    }
}

function isEndGame()
{
    return playerScore === winPoint || computerScore === winPoint;
}

function game(event)
{
    playerSelection = event.target.id;
    computerSelection = getComputerChoice();
    updateChoice(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateBoard(roundWinner);
    updateScore();
}

/**
 * UI
 */
//get hint element
const gameResult = document.querySelector('.game-result');
const gameDetail = document.querySelector('.game-detail');

const playerBoxScore = document.querySelector('.score.player');
const playerBoxSign = document.querySelector('.role.player');
const computerBoxScore = document.querySelector('.score.computer');
const computerBoxSign = document.querySelector('.role.computer');

//get btn element
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

/**
 * btnRock Listener: click
 */
btnRock.addEventListener('click', game);

/**
 * btnPaper Listener: click
 */
btnPaper.addEventListener('click', game);

/**
 * btnScissors Listener: click
 */
btnScissors.addEventListener('click', game);

function updateBoard(roundWinner)
{
    if(roundWinner == 'tie')
    {
        gameResult.textContent = 'Tie Game';
        gameDetail.textContent = `${playerSelection} ties ${computerSelection}`;
    }
    else if(roundWinner == 'player')
    {
        gameResult.textContent = 'You Win!';
        gameDetail.textContent = `${playerSelection} beats ${computerSelection}`;
    }
    else
    {
        gameResult.textContent = 'You Lose!';
        gameDetail.textContent = `${playerSelection} beated ${computerSelection}`;
    }
}

function updateChoice(playerSelection, computerSelection)
{
    if(playerSelection === 'rock')
    {
        playerBoxSign.textContent = '✊';
    } else if(playerSelection === 'paper')
    {
        playerBoxSign.textContent = '✋';
    } else
    {
        playerBoxSign.textContent = '✌';
    }
    
    if(computerSelection === 'rock')
    {
        computerBoxSign.textContent = '✊';
    } else if(computerSelection === 'paper')
    {
        computerBoxSign.textContent = '✋';
    } else
    {
        computerBoxSign.textContent = '✌';
    }
}

function updateScore()
{
    playerBoxScore.textContent = `Player:${playerScore}`;
    computerBoxScore.textContent = `Computer:${computerScore}`;
}