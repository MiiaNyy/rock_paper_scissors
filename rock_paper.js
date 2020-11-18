const mainContentContainer = document.getElementById('main-content');

//Buttons
const startBtn = document.getElementById('start-button'); 
const resetButton = document.getElementById('reset-button');
//Paper, rock, scissors icons buttons
const paper = document.getElementById('paper-icon-button');
const rock = document.getElementById('rock-icon-button');
const scissors = document.getElementById('scissors-icon-button');


//The box where the PLAYERS choice is shown 
const paperPlayersIcon = document.getElementById('players-paper'); //
const rockPlayersIcon = document.getElementById('players-rock');//
const scissorsPlayersIcon = document.getElementById('players-scissors');//

//The box where COMPUTERS choice is shown
const paperComputersIcon = document.getElementById('computer-paper');//
const rockComputersIcon = document.getElementById('computer-rock');//
const scissorsComputersIcon = document.getElementById('computer-scissors');//

//Score board
let text = document.getElementById('winner-message');
let playerScoreCounter = document.getElementById('player-count');
let computerScoreCounter = document.getElementById('computer-count');
let scoreBoardContainer = document.getElementById('score');

//Score counter
let playerScore = 0;
let computerScore = 0;
let idInterval;


//When start button is pressed the button itself disapears and main content comes visible
function startButtonIsPressed() {
    startBtn.style.display = "none";
    mainContentContainer.style.visibility = "visible";
    rockPlayersIcon.style.display = "block";
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

//It's determend which one is the winner
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
            idInterval = setInterval(winnerDisplay, 500 );            
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
}

//When certain button is clicked, all of the other player icons disapear
function actionDisplay(player) {
    if (player == 'rock') {
        rockPlayersIcon.style.display = "block";
        paperPlayersIcon.style.display = "none";    
        scissorsPlayersIcon.style.display = "none";  
    } else if (player == 'paper') {
        paperPlayersIcon.style.display = "block";
        rockPlayersIcon.style.display = "none";
        scissorsPlayersIcon.style.display = "none"; 
    }else if (player == 'scissors') {
        scissorsPlayersIcon.style.display = "block";
        rockPlayersIcon.style.display = "none";
        paperPlayersIcon.style.display = "none";   
    }
}

function winnerDisplay() {
    
    let tmpColCheck = scoreBoardContainer.style.borderColor;

    if (tmpColCheck === 'black') {
        scoreBoardContainer.style.borderColor = '#f400a1';
    } else {
        scoreBoardContainer.style.borderColor = 'black';
    }
} 

function stopWinnerDisplay() {
    clearInterval(idInterval);
    scoreBoardContainer.style.borderColor = 'black';
}

function game(player) {
    let computerGame = computersChoiceIs();
    playRound(computerGame, player);
    actionDisplay(player);
}

//When game is over, reset everything so next game can begin
function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreCounter.innerHTML = 0;
    computerScoreCounter.innerHTML = 0;
    text.innerHTML = "Let's dual!";
    rockPlayersIcon.style.display = "block";
    paperPlayersIcon.style.display = "none";    
    scissorsPlayersIcon.style.display = "none"; 
    rockComputersIcon.style.display = "block"
    paperComputersIcon.style.display = "none";
    scissorsComputersIcon.style.display = "none";
    resetButton.style.display = "none";
    paper.disabled = false;
    rock.disabled = false;
    scissors.disabled = false;
    stopWinnerDisplay()
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









