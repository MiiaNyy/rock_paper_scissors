const userScore = 0;
const computerScore = 0;

const userScoreCount = document.getElementById('player-count');
const computerScoreCount = document.getElementById('computer-count');

const scoreBoard = document.getElementsByClassName('text-container');
const result = document.getElementById('winner-text');

const paper = document.getElementById('paper-icon-button');
const rock = document.getElementById('rock-icon-button');
const scissors = document.getElementById('scissors-icon-button');

rock.addEventListener('click', function() {
    game('rock');
})

scissors.addEventListener('click', function() {
    game('scissors');
})

paper.addEventListener('click', function() {
    game('paper');
})