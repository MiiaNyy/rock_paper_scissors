const mainContentContainer = document.getElementById('main-content');

//Buttons
const startBtn = document.getElementById('start-button'); 
const resetButton = document.getElementById('reset-button');
//Paper, rock, scissors icons buttons
const paper = document.getElementById('paper-icon-button');
const rock = document.getElementById('rock-icon-button');
const scissors = document.getElementById('scissors-icon-button');


//The box where the PLAYERS choice is shown 
const paperPlayersChoice = document.getElementById('players-paper'); //
const rockPlayersChoice = document.getElementById('players-rock');//
const scissorsPlayerChoice = document.getElementById('players-scissors');//

//The box where COMPUTERS choice is shown
const paperComputersIcon = document.getElementById('computer-paper');//
const rockComputersIcon = document.getElementById('computer-rock');//
const scissorsComputersIcon = document.getElementById('computer-scissors');//

//Score board
let text = document.getElementById('winner-message');
let playerScoreCounter = document.getElementById('player-count');
let computerScoreCounter = document.getElementById('computer-count');

//Score counter
let playerScore = 0;
let computerScore = 0;


//When start button is pressed the button itself disapears and main content comes visible
function startButtonIsPressed() {
    startBtn.style.display = "none";
    mainContentContainer.style.visibility = "visible";
    rockPlayersChoice.style.display = "block";
}

//Random number generator, which decides what is computers choice in the game
function computersChoiceIs() {
    let randomNum = Math.floor(Math.random() * 3);
    let computersFinalChoice;


    if(randomNum == 0) {
        rockComputersIcon.style.display = "block"
        paperComputersIcon.style.display = "none";
        scissorsComputersIcon.style.display = "none";

        computersFinalChoice = "rock";
    } else if (randomNum == 1) {
        paperComputersIcon.style.display = "block"
        rockComputersIcon.style.display = "none";
        scissorsComputersIcon.style.display = "none";

        computersFinalChoice = "paper";
    } else if (randomNum == 2) {
        scissorsComputersIcon.style.display = "block"
        rockComputersIcon.style.display = "none";
        paperComputersIcon.style.display = "none";

        computersFinalChoice = "scissors";
    }  
    return computersFinalChoice
}

function playRound(computer, player) {
    let result = '';
    
    if ((player == 'rock' && computer == 'scissors') || (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper')) {        
        playerScore++;   

        if(playerScore < 3) {
            result = 'You got a score';
        } else if (playerScore === 3) {
            result = 'You win!'
            resetButton.style.display = "block"
            paper.disabled = true;
            rock.disabled = true;
            scissors.disabled = true;            
        }

    } else if (player == computer) {
        result = "It's a tie"        
    } else {    
        computerScore++;

        if(computerScore < 3) {
            result = 'Computer got a score';
        } else if (computerScore === 3) {
            result = 'Computer Wins!'
            resetButton.style.display = "block"
            paper.disabled = true;
            rock.disabled = true;
            scissors.disabled = true;
        }
    }
    text.innerHTML = result;
    playerScoreCounter.innerHTML = playerScore;
    computerScoreCounter.innerHTML = computerScore;

    return
}

//When certain button is clicked, all of the other icons disapear
function buttonActionDisplay(player) {
    if (player == 'rock') {
        rockPlayersChoice.style.display = "block";
        paperPlayersChoice.style.display = "none";    
        scissorsPlayerChoice.style.display = "none";  
    } else if (player == 'paper') {
        paperPlayersChoice.style.display = "block";
        rockPlayersChoice.style.display = "none";
        scissorsPlayerChoice.style.display = "none"; 
    }else if (player == 'scissors') {
        scissorsPlayerChoice.style.display = "block";
        rockPlayersChoice.style.display = "none";
        paperPlayersChoice.style.display = "none";   
    }
}

function game(player) {
    let computerGame = computersChoiceIs();
    playRound(computerGame, player);
    buttonActionDisplay(player);
}


function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreCounter.innerHTML = 0;
    computerScoreCounter.innerHTML = 0;
    text.innerHTML = "Let's dual!";
    rockPlayersChoice.style.display = "block";
    paperPlayersChoice.style.display = "none";    
    scissorsPlayerChoice.style.display = "none"; 
    rockComputersIcon.style.display = "block"
    paperComputersIcon.style.display = "none";
    scissorsComputersIcon.style.display = "none";
    resetButton.style.display = "none";
    paper.disabled = false;
    rock.disabled = false;
    scissors.disabled = false;
    
}

//When user clicks icon button, game starts
function startGame() {
    //Pressing start button main content is shown 
    startBtn.addEventListener("click", startButtonIsPressed);

    rock.addEventListener('click', function() {
        game('rock');
    })

    scissors.addEventListener('click', function() {
        game('scissors');
    })

    paper.addEventListener('click', function() {
        game('paper');
    })
    resetButton.addEventListener('click', reset);

}

startGame();











