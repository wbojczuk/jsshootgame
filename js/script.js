
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
        function(){counter = Math.floor(counter) + 1; console.log(counter);
        }
        
    ,1000);


    
        // Main Function
            function lvlOne(){
                var allThingOneHitbox;
                var allThingOneLengthHitbox;

                // SET LEVEL ONE BACKGROUND
                document.getElementById("mainContainer").style.backgroundImage = "url('img/lvl1_background.jpg')";
                document.getElementById("mainContainer").style.backgroundSize = "cover";
                document.getElementById("mainContainer").style.backgroundRepeat = "no-repeat";
                

                    


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




                    // PLACE ON LAST GENERATION IF STATEMENT
                

                // TEMP DISABLE COUNTER TRIGGERS
                counter += .001;

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


                // SET EVENT LISTENERS ON CELLS

                var allThingOne = document.querySelectorAll(".thing-one");
                var allThingOneLength = allThingOne.length;
                 
                    for (let i = 0; i < allThingOneLength; i++) {
                        allThingOne[i].addEventListener("click", bombClicked);
                    }



                    

        

            // Test if cell hitbox is in viewport

            allThingOneHitbox = document.querySelectorAll(".thing-one-hitbox");
            allThingOneLengthHitbox = allThingOne.length;

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

            if (counter == 1500) {
                lvlOneRepeat = setInterval(lvlOne, 35);
            }


            
        }
    


}

function bombClicked(evt) {
    var audio = new Audio('sounds/bomb_explosion.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.1;
    audio.play();
    evt.target.style.backgroundRepeat = "no-repeat";
    evt.target.style.backgroundImage = "url('img/bomb_explosion.gif')";
    evt.target.style.backgroundSize = "contain";

    score += 5;
    document.getElementById("score").innerHTML = score;
    

    setTimeout(() => {
        evt.target.remove();
    }, 440);
}