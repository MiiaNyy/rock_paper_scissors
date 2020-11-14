let startBtn = document.getElementById('start-button');
let mainContentContainer = document.getElementById('main-content');

let animationContainer = document.getElementsByClassName('choice-icon-container')

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

//What happens when icons are pressed
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

function stopAnimation() {
    animationContainer.style.webkitAnimationPlayState="paused";
}



//Pressing start button and showing the game
startBtn.addEventListener("click", startButtonIsPressed);



//Event Listeners when icon buttons are pressed
paperIconButton.addEventListener("click", paperButtonIsPressed);
rockIconButton.addEventListener("click", rockButtonIsPressed);
scissorsIconButton.addEventListener("click", scissorsButtonIsPressed);

