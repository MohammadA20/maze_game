//Initialized variables
let is_game_running = false; 
let score = 0;
let timer_left = 10;

//Declared variables
let end;
let start;
let boundaries;
let status_display; 
let display_timer;
let going_timer_down;

document.addEventListener("DOMContentLoaded", loadPage);

function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + "<br/>" + "Your Score is: " + score;
}

function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
            score = score - 1;
        displayScore("Game Over!");
        is_game_running = false;
    }
}
function start_timer(){
    let starting_timer = setInterval(function(){
    if(timer_left > 0){
        timer_left -= 1;
        display_timer.innerHTML = "Timer left: " + timer_left + "s";
    }
    if(!is_game_running){
        clearInterval(starting_timer);
        endGame();
}
}, 1000);
}

function startGame() {
    start_timer();
    displayScore("");
    is_game_running = true;
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
}

function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        displayScore("You Won!");
        is_game_running = false;
    }
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    display_timer = document.getElementById("game_timer");
    boundaries = document.getElementsByClassName("boundary");
    status_display =  document.getElementById("status");

    end.addEventListener("mouseover", endGame);
    start.addEventListener("click", startGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
}

