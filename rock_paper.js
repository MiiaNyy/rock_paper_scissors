const startBtn = document.getElementById('start-button');
const mainContentContainer = document.getElementById('main-content');


//Paper, rock, scissors icons buttons
const paperIconButton = document.getElementById('paper-icon-button');
const rockIconButton = document.getElementById('rock-icon-button');
const scissorsIconButton = document.getElementById('scissors-icon-button');

//The box where the PLAYERS choice is shown 
const paperPlayersChoice = document.getElementById('players-choice-paper');
const rockPlayersChoice = document.getElementById('players-choice-rock');
const scissorsPlayerChoice = document.getElementById('players-choice-scissors');

//The box where COMPUTERS choice is shown
const paperComputersIcon = document.getElementById('computer-paper');
const rockComputersIcon = document.getElementById('computer-rock');
const scissorsComputersIcon = document.getElementById('computer-scissors');

const congratulationText = document.getElementById('winner-text')

let playersFinalChoice;

//When start button is pressed the button itself disapears and main content comes visible
function startButtonIsPressed() {
    startBtn.style.display = "none";
    mainContentContainer.style.visibility = "visible";
    rockPlayersChoice.style.display = "block";
}

let clickCount = 0;

//What happens when icons are pressed
function paperButtonIsPressed () {
    clickCount++;    
    paperPlayersChoice.style.display = "block";
    rockPlayersChoice.style.display = "none";
    scissorsPlayerChoice.style.display = "none";
}


function rockButtonIsPressed() {
    rockPlayersChoice.style.display = "block";
    paperPlayersChoice.style.display = "none";    
    scissorsPlayerChoice.style.display = "none";
    let playersFinalChoice = "rock";
    return playersFinalChoice
}

function scissorsButtonIsPressed() {
    scissorsPlayerChoice.style.display = "block";
    rockPlayersChoice.style.display = "none";
    paperPlayersChoice.style.display = "none";
    let playersFinalChoice = "scissors";
    return playersFinalChoice 
}

//Three Computers choice possibility
function rockIsComputersChoice() {
    rockComputersIcon.style.display = "block"
    paperComputersIcon.style.display = "none";
    scissorsComputersIcon.style.display = "none";
}

function paperIsComputersChoice() {
    paperComputersIcon.style.display = "block"
    rockComputersIcon.style.display = "none";
    scissorsComputersIcon.style.display = "none";
}

function scissorsIsComputersChoice() {
    scissorsComputersIcon.style.display = "block"
    rockComputersIcon.style.display = "none";
    paperComputersIcon.style.display = "none";
}

//Random number generator, which decides what is computers choice in the game
function computersChoiceIs() {
    let randomNum = Math.floor(Math.random() * 3);
    let computersFinalChoice;


    if(randomNum == 0) {
        rockIsComputersChoice();
        computersFinalChoice = "rock";
    } else if (randomNum == 1) {
        paperIsComputersChoice();
        computersFinalChoice = "paper";
    } else if (randomNum == 2) {
        scissorsIsComputersChoice();
        computersFinalChoice = "scissors";
    }  
    return computersFinalChoice
}


//Pressing start button and showing the game
startBtn.addEventListener("click", startButtonIsPressed);

//Event Listeners when icon buttons are pressed
paperIconButton.onclick = paperButtonIsPressed;
rockIconButton.addEventListener("click", rockButtonIsPressed);
scissorsIconButton.addEventListener("click", scissorsButtonIsPressed);


computersChoiceIs();
console.log(computersChoiceIs());


