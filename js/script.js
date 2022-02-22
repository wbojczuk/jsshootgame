
"use strict";
window.onload = startGame();

// Global Variables

var score = 0;



function startGame() {
    var counter = 1;
    var heartCount = 0;

    // Main Function Interval
    var lvlOneRepeat = setInterval(lvlOne, 40);


    // SECOND COUNTER 

    setInterval(
        function(){counter = Math.floor(counter) + 1; 
            console.log(counter);

            

        }
        
    ,1000);
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
        lvl1Pre();
        function lvl1Pre() {
            

                // SET LEVEL ONE BACKGROUND
                document.getElementById("body").style.backgroundImage = "url('img/lvl1/lvl1_background.jpg')";
                document.getElementById("body").style.backgroundSize = "cover";
                document.getElementById("body").style.backgroundRepeat = "no-repeat";
                document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";
        }
    
        // Main Function
            function lvlOne(){
                var allThingOneHitbox;
                var allThingOneLengthHitbox;


                    // GENERATE RANDOMLY PLACED FALLING CELLS
                var fallingHTML = "";

                // Bomb
                if (counter % 2 == 0) {
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else if ( counter % 3 == 0){
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else if ( counter % 4 == 0){
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";

                } else {
                    fallingHTML = "<div class='falling-container'></div>"
                }

                // SET EVENT LISTENERS ON CELLS

            var allThingOne = document.querySelectorAll(".thing-one");
            var allThingOneLength = allThingOne.length;
             
                for (let i = 0; i < allThingOneLength; i++) {
                    allThingOne[i].addEventListener("click", bombClicked);
                }




                    // PLACE ON LAST GENERATION IF STATEMENT
            

                // Print cells to screen
                document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", fallingHTML);


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
                    hearts[heartCount].style.backgroundImage = "url('img/heart1.png')";
                    heartCount += 1;

                    allThingOneHitbox[i].remove();

                    // FAILLLLL
            

                    setTimeout( function() {
                        if (heartCount == hearts.length) {
                            alert('YOU FAILEDD!!');
                        }
                    },500);
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

            if (counter == 20) {
                console.log("made it");
                lvlOneRepeat = setInterval(lvlOne, 35);
            }

            // TEMP DISABLE COUNTER TRIGGERS
            counter += .001;


            
        }
    


}

function bombClicked(evt) {
    evt.target.querySelector(".thing-one-hitbox").remove();
    evt.target.style.zIndex = "1";
    var audio = new Audio('sounds/bomb_explosion.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.1;
    audio.play();
    evt.target.style.backgroundRepeat = "no-repeat";
    evt.target.style.backgroundImage = "url('img/lvl1/bomb_explosion.gif')";
    evt.target.style.backgroundSize = "contain";

    score += 5;
    document.getElementById("score").innerHTML = score;
    

    setTimeout(() => {
        evt.target.remove();
    }, 440);
}