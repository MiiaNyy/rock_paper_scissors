let startBtn = document.getElementById('start-button');
let mainContentContainer = document.getElementById('main-content');


//When button is pressed the button itself disapears and main content comes visible
startBtn.onclick = function() {
    startBtn.style.display = "none";
    mainContentContainer.style.visibility = "visible";
    }




