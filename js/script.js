
"use strict";

// Global Variables

var score = 0;
var heartLost = 0;
var lvlRepeat;
var currentLvl = "lvl1";
var selectedLvl = "";
var counter = 1;
var speedRepeat;
var backgroundMusic = new Audio('sounds/menu_background_music.mp3');



// SECOND COUNTER 

setInterval(
    function(){counter = Math.floor(counter) + 1; 
        
        

    },1000);

    // Random Numbers

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
              }



// MAIN MENU FUNTION 
function mainMenu() {

    // DISPLAY SWAP

    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "flex";

    document.getElementById("body").style.backgroundImage = "url('img/main_screen_background.jpg')";

    // set location and music 
    currentLvl = "menu";

    
    

    score = -100000000000000;

    // Remove current falling rows

    var fallingCount = document.querySelectorAll(".falling-container");
    var fallingCountLength = fallingCount.length;

    for (let i = 0; i < fallingCountLength; i++) {
        fallingCount[i].remove();
    }


    // RESET HEARTS

    // removing the extra hearts

    var extraHearts = document.querySelectorAll(".extra-heart");
    for (let i = 0; i < extraHearts.length; i++) {
        extraHearts[i].remove();
    }
    
    heartLost = 0;

    var Gonehearts = document.querySelectorAll(".heart-gone");

    for (let i = 0; i < Gonehearts.length; i++) {
        Gonehearts[i].classList.remove("heart-gone");
        Gonehearts[i].classList.add("heart-here");
        Gonehearts[i].style.backgroundImage = "url('img/heart.png')";
    }
    clearInterval(lvlRepeat);
    clearInterval(speedRepeat);
    setBackgroundMusic();

}


// START FUNCTION

function preStartGame(sLvl) {
    selectedLvl = sLvl;

    startGame();
}

function startGame() {
    // RESET VARIABLES

    score = 0;
    heartLost = 0;
    counter = 1;

    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("mainWrapper").style.display = "block";
    currentLvl = selectedLvl;
    clearInterval(lvlRepeat);
    clearInterval(speedRepeat);
    setBackgroundMusic();
    

switch (currentLvl) {


    case "lvl1":
        lvl1Pre();
    break;
    
}

}


function setBackgroundMusic() {
    // SET BACKGROUND MUSIC

    switch (currentLvl) {
        case "lvl1":
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic = new Audio('sounds/lvl1/main_background_music.mp3');
        break;

        case "menu":
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic = new Audio('sounds/menu_background_music.mp3');
            console.log("menu");
        break;
    }
    
     

    backgroundMusic.play();
    backgroundMusic.volume = 0.2;
    document.removeEventListener('click', setBackgroundMusic);
    backgroundMusic.addEventListener("ended", function(){
        backgroundMusic.currentTime = 0;
        backgroundMusic.play();
    }); 


}







// FAIL SCREEN

function failScreen() {
    counter = -10000000;
    
    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "block";
    document.getElementById("endScreenTitle").textContent = "You Died!!";
    document.getElementById("endScreenScore").innerHTML = "Score: " + score;
    clearInterval(lvlRepeat);
    clearInterval(speedRepeat);
}

// RESTART

function restart() {

    

    score = 0;
    document.getElementById("score").innerHTML = score;

    // DISPLAY SWAP

    document.getElementById("mainWrapper").style.display = "block";
    document.getElementById("endScreenWrapper").style.display = "none";

    // Remove current falling rows

    var fallingCount = document.querySelectorAll(".falling-container");
    var fallingCountLength = fallingCount.length;

    for (let i = 0; i < fallingCountLength; i++) {
        fallingCount[i].remove();
    }


    // RESET HEARTS

    // removing the extra hearts

    var extraHearts = document.querySelectorAll(".extra-heart");
    for (let i = 0; i < extraHearts.length; i++) {
        extraHearts[i].remove();
    }
    
    heartLost = 0;

    var Gonehearts = document.querySelectorAll(".heart-gone");

    for (let i = 0; i < Gonehearts.length; i++) {
        Gonehearts[i].classList.remove("heart-gone");
        Gonehearts[i].classList.add("heart-here");
        Gonehearts[i].style.backgroundImage = "url('img/heart.png')";
    }



    // Load Correct Pre-Level

    startGame();

}