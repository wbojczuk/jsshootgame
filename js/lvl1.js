


function lvl1Pre() {
    var onlyOne = 1;
    var onlyOne1 = 1;
    var powerOneToggle = false; 
    var power1On = 0;
            

    // Main Function Interval
    


    
    
        
                currentLvl = "lvl1";
            

                // SET LEVEL ONE BACKGROUND
                document.getElementById("body").style.backgroundImage = "url('img/lvl1/lvl1_background.jpg')";
                document.getElementById("body").style.backgroundSize = "cover";
                document.getElementById("body").style.backgroundRepeat = "no-repeat";
                document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";

                
                

                lvlRepeat = setInterval(lvlOne, 13);
   
        
    
        // Main Function
            function lvlOne(){

                
                
                var allThingOneHitbox;
                var allThingOneLengthHitbox;
                
                

                    // GENERATE RANDOMLY PLACED FALLING CELLS
                var fallingHTML = "";

                // Bomb Generation
                if (counter % 3 == 0) {
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                } else if ( counter % 6 == 0){
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    
                    
                } else if ( counter % 10 == 0){
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";

                }else if ( counter % 20 == 0){
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                }else if ( counter % 15 == 0){
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                }else if ( counter % 13 == 0){
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container'><div class='clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    

                } else {
                    fallingHTML = "<div class='falling-container'></div>"
                }



                // Healing/Red Potion Generation
                
                    //  sec
                    if ( counter == Math.floor(getRndInteger(25, 40))) {

                        fallingHTML += "<div class='falling-container'><div class='clickbox red-potion-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='red-potion'></div></div></div>";
                     } 

                     if ( counter == Math.floor(getRndInteger(60 , 70)) ) {

                        fallingHTML += "<div class='falling-container'><div class='noevent red-potion unclicked' style='left: " + getRndInteger(1 , 70) +  "vw'></div></div>";
                     }
                     if ( counter == Math.floor(getRndInteger(100 , 120)) ) {

                        fallingHTML += "<div class='falling-container'><div class='noevent red-potion unclicked' style='left: " + getRndInteger(1 , 70) +  "vw'></div></div>";
                     }





                    //  RARE EXTRA HEART GENERATION

                    if ( counter == Math.floor(getRndInteger(1 , 1000)) ) {

                        fallingHTML += "<div class='falling-container'><div class='clickbox extra-heart-orb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='extra-heart-orb'></div></div></div>";
                     } 


                // Print cells to screen
                document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", fallingHTML);
                
                

                // SET EVENT LISTENERS ON CELLS

            var allThingOne = document.querySelectorAll(".bomb-clickbox.unclicked.no-event");
            var allThingOneLength = allThingOne.length;
            
                for (let i = 0; i < allThingOneLength; i++) {
                    
                    allThingOne[i].addEventListener("click", bombClicked);
                    allThingOne[i].classList.remove("noevent");
                }

                //SET RED POTION EVENTS
                var redPotions = document.querySelectorAll(".red-potion-clickbox.unclicked.no-event");
                var redPotionslength = redPotions.length;
                for (let i = 0; i < redPotionslength; i++) {
                    redPotions[i].addEventListener("click", redPotionEffect);
                    redPotions[i].classList.remove("noevent");
                }

                //SET Extra Heart Orb EVENTS
                var extraHeartOrb = document.querySelectorAll(".extra-heart-orb-clickbox.unclicked.no-event");
                var extraHeartOrblength = extraHeartOrb.length;

                for (let i = 0; i < extraHeartOrblength; i++) {
                    extraHeartOrb[i].addEventListener("click", extraHeartOrbEffect);
                    extraHeartOrb[i].classList.remove("noevent");
                }
            
            




                    
            

                


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
             allThingOne = document.querySelectorAll(".bomb-clickbox");
            allThingOneLength = allThingOne.length;

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
                            removePowers();
                            resetVariables();
                        }
                    
                }
                

            }

            var viewTest = document.getElementById("mainContainer");
            var viewSubject = viewTest.lastElementChild;

            var fallingCount = document.querySelectorAll(".falling-container");
            var fallingCountLength = fallingCount.length;

           
            for(let i = 0; i < fallingCountLength; i++){
            if (isInViewport(viewSubject) === false) {
  
               viewSubject.remove();

               viewSubject = viewTest.lastElementChild;

            }
        }



            // Test if falling-container is in viewport

            

            



            
            


            //   Speed things based on time

            if (counter == 200) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 11);
            }

            if (counter == 40) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 8);
            }

            if (counter == 60) {
                clearInterval(lvlRepeat);
                lvlRepeat = setInterval(lvlOne, 6);
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
                speedRepeat = setInterval(lvlOne, 10);
            }

            if (counter == 160) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 9);
            }

            if (counter == 180) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 8);
            }

            if (counter == 200) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 7);
            }

            if (counter == 220) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 6);
            }

            if (counter == 240) {
                clearInterval(speedRepeat);
                speedRepeat = setInterval(lvlOne, 5);
            }


            // Add powers based on score

            // MOUSEOVER BOMBS AKA POWER1
            if (score >= 500) {
                power1On = 1;
            }

            if(power1On == 1){

                // Set Events
                while (onlyOne == 1) {
                    document.getElementById("mainContainer").addEventListener("mousedown", function(evt) {
                        powerOneToggle = true;
                    });
                    document.getElementById("mainContainer").addEventListener("mouseup", function(evt) {
                        powerOneToggle = false;
                    });

                    // SET ICON
                var iconHTML = "<div class='power-icon power1' id='powerIcon'></div>";

                document.getElementById("mainBarRight").insertAdjacentHTML("afterbegin", iconHTML);
                    
                    onlyOne += 1;
                }

                if (powerOneToggle == true) {
                    
                for (let i = 0; i < allThingOneLength; i++) {
                    allThingOne[i].addEventListener("mouseover", bombClicked);
                }

                for (let i = 0; i < redPotionslength; i++) {
                    redPotions[i].addEventListener("mouseover", redPotionEffect);
                    
                }

                for (let i = 0; i < extraHeartOrblength; i++) {
                    extraHeartOrb[i].addEventListener("mouseover", extraHeartOrbEffect);
                }
            }

                if (powerOneToggle == false) {
                for (let i = 0; i < allThingOneLength; i++) {
                    allThingOne[i].removeEventListener("mouseover", bombClicked);
                }
                for (let i = 0; i < redPotions.length; i++) {
                    redPotions[i].addEventListener("mouseover", redPotionEffect);
                    
                }

                for (let i = 0; i < extraHeartOrb.length; i++) {
                    extraHeartOrb[i].addEventListener("mouseover", extraHeartOrbEffect);
                }
            }

                
            }
            if (power1On == 2) {
                while (onlyOne1 == 1){
                document.getElementById("mainContainer").removeEventListener("mousedown", function(evt) {
                    powerOneToggle = true;
                });
                document.getElementById("mainContainer").removeEventListener("mouseup", function(evt) {
                    powerOneToggle = false;
                });
                document.querySelector(".power1").remove();
                onlyOne1 += 1;
            }

            }

            // TEMP DISABLE COUNTER TRIGGERS
            counter += .0001;


            
        }
    
    
    
    // REMOVE POWERS
    function removePowers() {
        // POWER ONE REMOVAL

        var power1Current = document.querySelectorAll('.power1');

        if (power1Current.length >= 1) { 

        document.getElementById("mainContainer").removeEventListener("mousedown", function(evt) {
            powerOneToggle = true;
        });
        document.getElementById("mainContainer").removeEventListener("mouseup", function(evt) {
            powerOneToggle = false;
        });
        
        powerOneToggle = false;
        power1On = 0;
        document.querySelector(".power1").remove();
    }
    }

    function resetVariables() {
        onlyOne = 1;
        onlyOne1 = 1;
        score = 0;
    }


    }
















// ONCLICK FUNCTIONS

// BOMBS

function bombClicked(evt) {
    this.removeEventListener("click", bombClicked);
    this.classList.remove("unclicked");
    
    this.style.zIndex = "1";
    var audio = new Audio('sounds/bomb_explosion.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.1;
    audio.play();
    var targetElementTemp = this.querySelectorAll(".thing-one");
    var targetElement = targetElementTemp[0];
    console.log(targetElement);
    this.querySelector(".thing-one-hitbox").remove();
    targetElement.style.height = "7.5vw";
    targetElement.style.width = "9vw";
    var nowLeft = this.style.getPropertyValue("left");
    var calcLeft = parseInt(nowLeft) - 1;
    this.style.left = calcLeft + "vw";
    this.style.transform = "translateY(-.5vw)";
    targetElement.style.background = "url('img/lvl1/bomb_explosion_sprite.png')" ;
    targetElement.style.animation = "bomb_explosion 390ms steps(8)";
    targetElement.style.backgroundSize= "800% 100%";

    score += 5;
    document.getElementById("score").innerHTML = score;
    

    setTimeout(() => {
        this.remove();
    }, 390);
}



// RED POTIONS

function redPotionEffect(evt) {
    this.classList.remove("unclicked");
    this.removeEventListener("click", redPotionEffect);

    var goneHeartState = document.querySelectorAll(".heart-gone");

    score += 15;
    document.getElementById("score").innerHTML = score;
    var targetElement = this.querySelector(".red-potion");
    if (goneHeartState.length >= 1){
        this.style.zIndex = "1";
        var audio = new Audio('sounds/glass_break.mp3');
        audio.volume = 0.4;
        audio.playbackRate = 1;
        audio.play();
        
        targetElement.style.background = "url('img/red_splash_sprite.png')" ;
        targetElement.style.animation = "red_splash 480ms steps(24)";
        targetElement.style.backgroundSize= "2400% 100%";
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
        targetElement.style.background = "url('img/red_splash_sprite.png')" ;
        targetElement.style.animation = "red_splash 480ms steps(24)";
        targetElement.style.backgroundSize= "2400% 100%";
}

    setTimeout(() => {
        this.remove();
    }, 480);
}


// RARE EXTRA HEART ORB

    function extraHeartOrbEffect(evt) {
        
        var targetElement = this.querySelector(".extra-heart-orb");
        this.classList.remove("unclicked");
        this.removeEventListener("click", extraHeartOrbEffect);
        score += 80;
        document.getElementById("score").innerHTML = score;
        this.style.zIndex = "1";
        var audio = new Audio('sounds/lvl1/heart_orb.mp3');
        audio.volume = 0.2;
        audio.playbackRate = 1;
        audio.play();
        targetElement.style.height = "8vw";
        targetElement.style.width = "8vw";
        
        targetElement.style.background = "url('img/extra_heart_orb_explosion_sprite.png')" ;
        targetElement.style.animation = "extra_heart_orb_explosion 480ms steps(19)";
        targetElement.style.backgroundSize= "1900% 8vw";

        // Insert heart before the first alive heart
        var heartsHere = document.querySelectorAll(".heart-here");
        heartsHere[0].insertAdjacentHTML("beforebegin", "<div class='heart-img heart-here extra-heart' id='heartImage'></div>");

        setTimeout(() => {
            this.remove();
        }, 470);
    }



    