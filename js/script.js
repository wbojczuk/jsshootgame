
"use strict";
window.onload = startGame();

function startGame() {
    var counter = 0;
    var heartCount = 0;

    // Main Function Interval
    var lvlOneRepeat = setInterval(lvlOne, 80);


    
        // Main Function
            function lvlOne(){
                var allThingOneHitbox;
                var allThingOneLengthHitbox;

                // GENERATE RANDOM FALLING CELLS

                counter += 1;
                
                var fallingHTML = "";
                if (counter % 40 == 0) {
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else if ( counter % 66 == 0){
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else if ( counter % 100 == 0){
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='thing-one' style='transform: translateX( " + getRndInteger(1 , 70) +  "vw)'><div class='thing-one-hitbox'></div></div></div>";
                } else {
                    fallingHTML = "<div class='falling-container'></div>"
                }

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
                        allThingOne[i].addEventListener("click", cellClicked);
                    }



                    function cellClicked(evt) {
                        evt.target.remove();
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

            console.log(fallingCount.length);
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



            
            


            //   Speed things up

            if (counter == 1500) {
                lvlOneRepeat = setInterval(lvlOne, 50);
            }


            
        }
    


}