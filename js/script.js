
"use strict";

// Global Variables
var resume = 0;
var currentTime = 0;
var score = 0;
var heartLost = 0;
var lvlRepeat;
var currentLvl = "lvl1";
var selectedLvl = "";
var counter = 1;
var speedRepeat;
var speedyRepeat;
var backgroundMusic = new Audio('sounds/menu_background_music.mp3');
var tempCounter = 0;
var generationRepeat;
var testViewportRepeat;
var power1Repeat;
var onlyOne11 = 1;
var checkPowersRepeat;
var moveItemsRepeat;
var randomNum1 = 0;



// SECOND COUNTER 

setInterval(
    function(){counter = Math.floor(counter) + 1;
        
    },1000);

    // Random Number Generator

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
              }



    



// MAIN MENU FUNTION 
function mainMenu() {

    window.removeEventListener("keydown", escPause);
    window.removeEventListener("keydown", escResume);
    document.getElementById("body").style.cursor = "default"
    // DISPLAY SWAP
    document.getElementById("pauseCheck").removeAttribute("onclick");
    document.getElementById("pauseCheck").setAttribute("onclick", "pauseGame();")
    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "block";
    document.getElementById("pauseCheck").checked = false;

    document.getElementById("body").style.backgroundImage = "url('img/main_screen_background.jpg')";

    // set location and music 
    currentLvl = "menu";
    currentTime = 1;

    
    

    counter = -10000000;
    score = 0;
    document.getElementById("score").innerHTML = score;
    
    //  Clear functions
    clearInterval(generationRepeat);
    clearInterval(testViewportRepeat);
    clearInterval(checkPowersRepeat);
    clearInterval(moveItemsRepeat);
    clearInterval(power1Repeat);
    removePowers();
    

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
    onlyOne11 = 1;

    // Add Support for ESC KEY PAUSE

    window.addEventListener("keydown", escPause);

    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("pausePage").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
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
    //  Clear functions
    clearInterval(generationRepeat);
    clearInterval(testViewportRepeat);
    clearInterval(checkPowersRepeat);
    clearInterval(moveItemsRepeat);
    clearInterval(power1Repeat);
    removePowers();
    window.removeEventListener("keydown", escPause);

    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "block";
    document.getElementById("endScreenTitle").textContent = "You Died!!";
    document.getElementById("endScreenScore").innerHTML = "Score: " + score;
    
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


// PAUSE GAME

function pauseGame() {
    
    //  Clear functions
    clearInterval(generationRepeat);
    clearInterval(testViewportRepeat);
    clearInterval(checkPowersRepeat);
    clearInterval(moveItemsRepeat);
    clearInterval(power1Repeat);
    onlyOne11 = 1;
    document.getElementById("pauseCheck").removeAttribute("onclick");
    document.getElementById("pauseCheck").setAttribute("onclick", "resumeGame();");
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("pausePage").style.display = "flex";

    window.removeEventListener("keydown", escPause);

    window.addEventListener("keydown", escResume);

    tempCounter = counter;
    
}

//   ESC PAUSE 

function escPause(evt) {
    if (evt.key == "Escape") {
        pauseGame();
        document.getElementById("pauseCheck").checked = true;
    }
}

function escResume(evt){
    if (evt.key == "Escape") {
        resumeGame();
        
    }
}

function resumeGame() {

    switch (currentLvl) {
        case "lvl1":
            generationRepeat = setInterval(lvlOneGeneration, 1000);
            testViewportRepeat = setInterval(testViewport, 10);
            checkPowersrepeat = setInterval(checkPowers, 100);
            

            switch (currentTime) {

                case 1 :
                    moveItemsRepeat = setInterval(moveItems, 10);
                break;

                case 2 :
                    moveItemsRepeat = setInterval(moveItems, 9);
                break;

                case 3 :
                    moveItemsRepeat = setInterval(moveItems, 7);
                break;
                    
                case 4 :
                    moveItemsRepeat = setInterval(moveItems, 5);
                break;

                case 5 :
                    moveItemsRepeat = setInterval(moveItems, 5);
                break;
                case 6 :
                    moveItemsRepeat = setInterval(moveItems, 5);
                break;
                case 7 :
                    moveItemsRepeat = setInterval(moveItems, 4);
                break;
                case 8 :
                    moveItemsRepeat = setInterval(moveItems, 3);
                break;
                case 9 :
                    moveItemsRepeat = setInterval(moveItems, 2);
                break;
                case 10 :
                    moveItemsRepeat = setInterval(moveItems, 1);
                break;


            }

        break;
    }
    counter = tempCounter;
    document.getElementById("pauseCheck").checked = false;
    document.getElementById("mainContainer").style.display = "block";
    document.getElementById("pausePage").style.display = "none";
    document.getElementById("pauseCheck").removeAttribute("onclick");
    document.getElementById("pauseCheck").setAttribute("onclick", "pauseGame();");
    window.removeEventListener("keydown", escResume);
    window.addEventListener("keydown", escPause);

}