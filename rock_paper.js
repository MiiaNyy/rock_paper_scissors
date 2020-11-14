let startBtn = document.getElementById('start-button');
let mainContentContainer = document.getElementById('main-content');

//Paper, rock, scissors icons buttons
let paperIconButton = document.getElementById('paper-icon-button');
let rockIconButton = document.getElementById('rock-icon-button');
let scissorsIconButton = document.getElementById('scissors-icon-button');

//The box where the players choice is shown 
let paperPlayersChoice = document.getElementById('players-choice-paper');
let rockPlayersChoice = document.getElementById('players-choice-rock');
let scissorsPlayerChoice = document.getElementById('players-choice-scissors');


//When start button is pressed the button itself disapears and main content comes visible
function startButtonIsPressed() {
    startBtn.style.display = "none";
    mainContentContainer.style.visibility = "visible";
    rockPlayersChoice.style.display = "block";
}


function paperButtonIsPressed () {
    paperPlayersChoice.style.display = "block";
    rockPlayersChoice.style.display = "none";
    scissorsPlayerChoice.style.display = "none";
}

function rockButtonIsPressed() {
    rockPlayersChoice.style.display = "block";
    paperPlayersChoice.style.display = "none";    
    scissorsPlayerChoice.style.display = "none"
}

function scissorsButtonIsPressed() {
    scissorsPlayerChoice.style.display = "block";
    rockPlayersChoice.style.display = "none";
    paperPlayersChoice.style.display = "none"; 
}

startBtn.addEventListener("click", startButtonIsPressed);
//Event Listeners when icon buttons are pressed
paperIconButton.addEventListener("click", paperButtonIsPressed);
rockIconButton.addEventListener("click", rockButtonIsPressed);
scissorsIconButton.addEventListener("click", scissorsButtonIsPressed);

