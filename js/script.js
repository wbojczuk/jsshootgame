
"use strict";
window.onload = startGame();

function startGame() {
    var counter = 0;
    var heartCount = 0;


    // Move blocks
        setInterval(
            function() {

                // GENERATE RANDOM FALLING CELLS

                counter += 1;
                
                var fallingHTML = "<div class='falling-container'>";
                if (counter % 5 == 0) {
                    fallingHTML += "<div class='thing-one' style='margin-left:" + getRndInteger(1 , 100) +  "%'></div>";
                } else if ( counter % 13 == 0){
                    fallingHTML += "<div class='thing-one' style='margin-left:" + getRndInteger(1 , 100) +  "%'></div>";
                    fallingHTML += "<div class='thing-one' style='margin-left:" + getRndInteger(1 , 100) +  "%'></div>";
                } else if ( counter % 13 == 0){
                    fallingHTML += "<div class='thing-one' style='margin-left:" + getRndInteger(1 , 100) +  "%'></div>";
                    fallingHTML += "<div class='thing-one' style='margin-left:" + getRndInteger(1 , 100) +  "%'></div>";
                    fallingHTML += "<div class='thing-one' style='margin-left:" + getRndInteger(1 , 100) +  "%'></div>";
                }

                fallingHTML += "</div>";

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

                var allCells = document.querySelectorAll(".thing-one");
                var allCellsLength = allCells.length;
                 
                    for (let i = 0; i < allCellsLength; i++) {
                        allCells[i].addEventListener("click", cellClicked);
                    }



                    function cellClicked(evt) {
                        evt.target.remove();
                    }

        

            // Test if cell is in viewport

            for (let i = 0; i < allCellsLength; i++) {

                if (isInViewport(allCells[i]) === false ) {

                    var hearts = document.querySelectorAll(".heart-img");
                    hearts[heartCount].style.backgroundImage = "url('img/heart1.png')";
                    heartCount += 1;

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

            console.log(isInViewport(viewSubject));
            if (isInViewport(viewSubject) === false) {
  
               viewSubject.remove();

            }



            // Test if falling-container is in viewport

            

            // Random Numbers

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
              }



            
            


            
        }
        ,700);


}