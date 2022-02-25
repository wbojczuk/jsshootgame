
"use strict";

// Global Variables

var score = 0;
var heartLost = 0;
var lvlRepeat;
var currentLvl = "lvl1";
var counter = 1;
var speedRepeat;



// SECOND COUNTER 

setInterval(
    function(){counter = Math.floor(counter) + 1; 
        console.log(counter);
        

    }
    
,1000);

window.onload = startGame();


// START FUNCTION

function startGame() {
    clearInterval(lvlRepeat);
    clearInterval(speedRepeat);

switch (currentLvl) {


    case "lvl1":
        lvl1Pre();
    break;

}

}
    
        
        function lvl1Pre() {

            currentLvl = "lvl1";
            counter = 1;

    // Main Function Interval
    


    document.addEventListener('click', lvl1BackgroundMusic);
    
        
        function lvl1BackgroundMusic() {
            // SET BACKGROUND MUSIC
            
            var backgroundMusic = new Audio('sounds/lvl1/main_background_music.mp3');
            backgroundMusic.play();
            backgroundMusic.volume = 0.3;
            console.log("preloaded");
            document.removeEventListener('click', lvl1BackgroundMusic);
            backgroundMusic.addEventListener("ended", function(){
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }); 

        
        }

                currentLvl = "lvl1";
            

                // SET LEVEL ONE BACKGROUND
                document.getElementById("body").style.backgroundImage = "url('img/lvl1/lvl1_background.jpg')";
                document.getElementById("body").style.backgroundSize = "cover";
                document.getElementById("body").style.backgroundRepeat = "no-repeat";
                document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";

                
                

                lvlRepeat = setInterval(lvlOne, 10);
                console.log("lvl1pre");
    }
        
    
        // Main Function
            function lvlOne(){

                

                var allThingOneHitbox;
                var allThingOneLengthHitbox;


                    // GENERATE RANDOMLY PLACED FALLING CELLS
                var fallingHTML = "";

                // Bomb Generation
                if (counter % 2 == 0) {
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else if ( counter % 3 == 0){
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else if ( counter % 4 == 0){
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='noevent thing-one unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";

                } else {
                    fallingHTML = "<div class='falling-container'></div>"
                }



                // Healing/Red Potion Generation
                
                    //  sec
                    if ( counter == Math.floor(getRndInteger(30 , 35)) ) {

                        fallingHTML += "<div class='falling-container'><div class='noevent red-potion unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'></div></div>";
                     } 

                     if ( counter == Math.floor(getRndInteger(60 , 70)) ) {

                        fallingHTML += "<div class='falling-container'><div class='noevent red-potion unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'></div></div>";
                     }
                     if ( counter == Math.floor(getRndInteger(100 , 120)) ) {

                        fallingHTML += "<div class='falling-container'><div class='noevent red-potion unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'></div></div>";
                     }





                    //  RARE EXTRA HEART GENERATION

                    if ( counter == Math.floor(getRndInteger(1, 500)) ) {

                        fallingHTML += "<div class='falling-container'><div class='noevent extra-heart-orb unclicked' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'></div></div>";
                     } 


                // Print cells to screen
                document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", fallingHTML);
                
                

                // SET EVENT LISTENERS ON CELLS

            var allThingOne = document.querySelectorAll(".thing-one.unclicked.noevent");
            var allThingOneLength = allThingOne.length;
             
                for (let i = 0; i < allThingOneLength; i++) {
                    allThingOne[i].addEventListener("click", bombClicked);
                    allThingOne[i].classList.remove("noevent");
                }

                //SET RED POTION EVENTS
                var redPotions = document.querySelectorAll(".red-potion.unclicked.noevent");

                for (let i = 0; i < redPotions.length; i++) {
                    redPotions[i].addEventListener("click", redPotionEffect);
                    redPotions[i].classList.remove("noevent");
                }

                //SET Extra Heart Orb EVENTS
                var extraHeartOrb = document.querySelectorAll(".extra-heart-orb.unclicked.noevent");

                for (let i = 0; i < extraHeartOrb.length; i++) {
                    extraHeartOrb[i].addEventListener("click", extraHeartOrbEffect);
                    extraHeartOrb[i].classList.remove("noevent");
                }
            
            




                    // PLACE ON LAST GENERATION IF STATEMENT
            

                


                // Function to test if element is in viewport 
                var isInViewport = function (elem) {
                    var bounding = elem.getBoundingClientRect();
                    return (
                        bounding.top >= 0 &&
                        bounding.left >= 0 &&
                        bounding.bottom <= (window.innerHeight) &&
                        bounding.right <= (window.innerWidth)
                    );
                };


                



                    

        

            // Test if cell hitbox is in viewport
            var allThingOne = document.querySelectorAll(".thing-one");
            var allThingOneLength = allThingOne.length;

            allThingOneHitbox = document.querySelectorAll(".thing-one-hitbox");
            allThingOneLengthHitbox = allThingOneHitbox.length;

            for (let i = 0; i < allThingOneLengthHitbox; i++) {

                if (isInViewport(allThingOneHitbox[i]) === false ) {

                    var hearts = document.querySelectorAll(".heart-img");
                    hearts[heartLost].style.backgroundImage = "url('img/heart1.png')";
                    hearts[heartLost].classList.add("heart-gone");
                    hearts[heartLost].classList.remove("heart-here");

                    heartLost += 1;

                    allThingOneHitbox[i].remove();

                    // FAILLLLL
            

                    
                        if (heartLost == hearts.length) {
                            failScreen();
                        }
                    
                }
                

            }

            var viewTest = document.getElementById("mainContainer");
            var viewSubject = viewTest.lastElementChild;

            var fallingCount = document.querySelectorAll(".falling-container");
            var fallingCountLength = fallingCount.length;

           
            for(let i = 0; i < fallingCountLength; i++)
            if (isInViewport(viewSubject) === false) {
  
               viewSubject.remove();

               viewSubject = viewTest.lastElementChild;

            }



            // Test if falling-container is in viewport

            

            // Random Numbers

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
              }



            
            


            //   Speed things based on time

            if (counter == 200) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 7);
            }

            if (counter == 40) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 6.5);
            }

            if (counter == 60) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 4);
            }

            if (counter == 80) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 3.5);
            }

            if (counter == 100) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 2);
            }

            if (counter == 120) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 1);
            }

            if (counter == 140) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 6);
            }

            if (counter == 160) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 5);
            }

            if (counter == 180) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 4);
            }

            if (counter == 200) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 3);
            }

            if (counter == 220) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 2);
            }

            if (counter == 240) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 1);
            }

            // TEMP DISABLE COUNTER TRIGGERS
            counter += .0001;


            
        }
    
    
    





// ONCLICK FUNCTIONS

// BOMBS

function bombClicked(evt) {
    evt.target.removeEventListener("click", bombClicked);
    evt.target.classList.remove("unclicked");
    evt.target.querySelector(".thing-one-hitbox").remove();
    evt.target.style.zIndex = "1";
    var audio = new Audio('sounds/bomb_explosion.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.1;
    audio.play();
    evt.target.style.backgroundImage = "url('img/lvl1/bomb_explosion.gif')";
    evt.target.style.backgroundRepeat = "no-repeat";
    evt.target.style.backgroundSize = "contain";

    score += 5;
    document.getElementById("score").innerHTML = score;
    

    setTimeout(() => {
        evt.target.remove();
    }, 400);
}



// RED POTIONS

function redPotionEffect(evt) {
    evt.target.classList.remove("unclicked");
    evt.target.removeEventListener("click", redPotionEffect);

    var goneHeartState = document.querySelectorAll(".heart-gone");

    score += 15;
    document.getElementById("score").innerHTML = score;

    if (goneHeartState.length >= 1){
        evt.target.style.zIndex = "1";
        var audio = new Audio('sounds/glass_break.mp3');
        audio.volume = 0.4;
        audio.playbackRate = 1;
        audio.play();
        evt.target.style.backgroundRepeat = "no-repeat";
        evt.target.style.backgroundImage = "url('img/red_splash.gif')";
        evt.target.style.backgroundSize = "contain";
        var targetHeart = goneHeartState.length - 1;
        goneHeartState[targetHeart].style.backgroundImage = "url('img/heart.png')";
        goneHeartState[targetHeart].classList.remove("heart-gone");
        goneHeartState[targetHeart].classList.add("heart-here");
        heartLost -= 1;
    } else {
        evt.target.style.zIndex = "1";
        var audio = new Audio('sounds/glass_break.mp3');
        audio.volume = 0.2;
        audio.playbackRate = 1;
        audio.play();
        evt.target.style.backgroundRepeat = "no-repeat";
        evt.target.style.backgroundImage = "url('img/red_splash.gif')";
        evt.target.style.backgroundSize = "contain";
}

    setTimeout(() => {
        evt.target.remove();
    }, 480);
}


// RARE EXTRA HEART ORB

    function extraHeartOrbEffect(evt) {
        
        console.log("hi")
        evt.target.classList.remove("unclicked");
        evt.target.removeEventListener("click", extraHeartOrbEffect);
        score += 80;
        document.getElementById("score").innerHTML = score;
        evt.target.style.zIndex = "1";
        var audio = new Audio('sounds/glass_break.mp3');
        audio.volume = 0.4;
        audio.playbackRate = 1;
        audio.play();

        // Insert heart before the first alive heart
        var heartsHere = document.querySelectorAll(".heart-here");
        heartsHere[0].insertAdjacentHTML("beforebegin", "<div class='heart-img heart-here extra-heart' id='heartImage'></div>");

        setTimeout(() => {
            evt.target.remove();
        }, 200);
    }



// FAIL SCREEN

function failScreen() {
    counter = -10000000;
    
    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "block";

    document.getElementById("endScreenTitle").textContent = "You Died!!";
    document.getElementById("endScreenScore").innerHTML = "Score: " + score;
}

// RESTART

function restart() {

    

    score = 0;

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