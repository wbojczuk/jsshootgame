var oonlyOne = 1;
var mainContainerr = document.getElementById("mainContainer");
var onlyOne = 1;
var onlyOne1 = 1;
var powerOneToggle = false; 
var power1On = 0;
var allThingOneHitbox;
var allThingOneLengthHitbox;

function lvl1Pre() {
    
    
            

   
        
                currentLvl = "lvl1";
                oonlyOne = 1;

                // SET LEVEL ONE BACKGROUND
                document.getElementById("body").style.backgroundImage = "url('img/lvl1/lvl1_background.jpg')";
                document.getElementById("body").style.backgroundSize = "cover";
                document.getElementById("body").style.backgroundRepeat = "no-repeat";
                document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";

                
                
                currentTime = 1; 

                //  Set InterVals
                
                 generationRepeat = setInterval(lvlOneGeneration, 1000);
                 eventsRepeat = setInterval(lvlOneEvents, 10);
                 testViewportRepeat = setInterval(testViewport, 10);
                 checkPowersrepeat = setInterval(checkPowers, 100);
                 moveItemsRepeat = setInterval(moveItems, 10);
                
                
   
        
}
        // Main Function
            function lvlOneGeneration(){

                
                

                    // GENERATE RANDOMLY PLACED FALLING CELLS
                var fallingHTML = "";

                // Bomb Generation
                if (counter % 3 == 0) {
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                } else if ( counter % 6 == 0){
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                      
                    
                    
                } else if ( counter % 10 == 0){
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";

                }else if ( counter % 20 == 0){
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                }else if ( counter % 15 == 0){
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                }else if ( counter % 13 == 0){
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox bomb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='thing-one'><div class='thing-one-hitbox'></div></div></div></div>";
                    
                    
                    

                } 



                // Healing/Red Potion Generation
                
                    //  sec
                    if ( counter == Math.floor(getRndInteger(20 , 30))) {

                        fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox red-potion-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='red-potion'></div></div></div>";
                     } 

                     if ( counter == Math.floor(getRndInteger(30 , 40))) {

                        fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox red-potion-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='red-potion'></div></div></div>";
                     }

                     if ( counter == Math.floor(getRndInteger(60 , 70)) ) {

                        fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox red-potion-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='red-potion'></div></div></div>";
                     }
                     if ( counter == Math.floor(getRndInteger(100 , 120)) ) {

                        fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox red-potion-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='red-potion'></div></div></div>";
                     }





                    //  RARE EXTRA HEART GENERATION

                    if ( counter == Math.floor(getRndInteger(1, 300)) ) {

                        fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox extra-heart-orb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='extra-heart-orb'></div></div></div>";
                     }
                     
                     if ( counter == Math.floor(getRndInteger(200, 300)) ) {

                        fallingHTML += "<div class='falling-container' value='0' ><div class='pow1 clickbox extra-heart-orb-clickbox no-event unclicked' style='left: " + getRndInteger(1 , 90) +  "vw'><div class='extra-heart-orb'></div></div></div>";
                     } 


                // Print cells to screen
                document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", fallingHTML);

                

                //   Speed things based on time

    
                if (counter == 20) {
                    currentTime = 2;
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 9); 
                }
    
                if (counter == 40) {
                    currentTime = 3;
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 8); 
                }
    
                if (counter == 60) {
                    currentTime = 4; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 6); 
                }
    
                if (counter == 80) {
                    currentTime = 5; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5); 
                }
    
                if (counter == 100) {
                    currentTime = 6; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5);
                }
                if (counter == 120) {
                    currentTime = 7; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5);
                }
    
                if (counter == 140) {
                    currentTime = 8; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 5);
                }
    
                if (counter == 160) {
                    currentTime = 9; 
                    clearInterval(moveItemsRepeat);
                    moveItemsRepeat = setInterval(moveItems, 4);
                }
    
                // TEMP DISABLE COUNTER TRIGGERS
            counter += .0001;
                
                    }


                
                    // SET EVENT LISTENERS ON CELLS

                    function lvlOneEvents() {
                

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
            
                }
                    
            


                // MOVE FALLING CONTAINERS
               function moveItems() {
                  
                   var fallingContainerss = document.querySelectorAll(".falling-container");
                   var fallingContainersLengths = fallingContainerss.length;


                   if ((currentTime == 1) || (currentTime == 2) || (currentTime == 3)){

                   for (let i = 0; i < fallingContainersLengths; i++){
                        var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 1;
                        
                    
                       fallingContainerss[i].style.top = + tempppValue + "px";
                       fallingContainerss[i].setAttribute("value", tempppValue);
                   }
                }else if (currentTime == 4){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
                         
                     
                         fallingContainerss[i].style.top = + tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 } else if (currentTime == 5){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
                         
                     
                         fallingContainerss[i].style.top = + tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 6){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
                         
                     
                         fallingContainerss[i].style.top = + tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 7){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 3;
                         
                     
                         fallingContainerss[i].style.top = + tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 8){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 4;
                         
                     
                         fallingContainerss[i].style.top = + tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }else if (currentTime == 9){
                    
                    for (let i = 0; i < fallingContainersLengths; i++){
                         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 6;
                         
                     
                         fallingContainerss[i].style.top = + tempppValue + "px";
                        fallingContainerss[i].setAttribute("value", tempppValue);
                    }
                 }


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

            function testViewport(){

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

            
    }

            // Test if falling-container is in viewport

            

            



            
            
            function checkPowers() {
                if (score >= 500 && onlyOne11 == 1) {
                    power1Repeat = setInterval(power1Function, 100);
                    onlyOne11 += 1;
                }
            }

            

           


            // Add powers based on score

            function power1Function() {
            // MOUSEOVER BOMBS AKA POWER1
            
                power1On = 1;
                
            

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
                var pow1IconHTML = "<div class='power-icon power1' id='powerIcon'></div>";

                document.getElementById("mainBarRight").insertAdjacentHTML("afterbegin", pow1IconHTML);
                console.log("rlly");
                    
                    onlyOne += 1;
                }

                if (powerOneToggle == true) {
                    document.getElementById("body").style.cursor = "url('img/lvl1/power1.cur'), crosshair"
                   var extraHeartOrbP1 = mainContainerr.querySelectorAll(".pow1.extra-heart-orb-clickbox");
                   var redPotionsP1 = mainContainerr.querySelectorAll(".pow1.red-potion-clickbox");
                   var bombsP1 = mainContainerr.querySelectorAll(".pow1.bomb-clickbox");
                   var bombsLengthP1 = bombsP1.length;
                   var redPotionslengthP1 = redPotionsP1.length;
                   var extraHeartOrblengthP1 = extraHeartOrbP1.length;
                   
                   
                    
                for (let i = 0; i < bombsLengthP1; i++) {
                    bombsP1[i].addEventListener("mouseover", bombClicked);
                    bombsP1[i].classList.remove("pow1");
                    
                }

                for (let i = 0; i < redPotionslengthP1; i++) {
                    redPotionsP1[i].addEventListener("mouseover", redPotionEffect);
                    redPotionsP1[i].classList.remove("pow1");
                }

                for (let i = 0; i < extraHeartOrblengthP1; i++) {
                    extraHeartOrbP1[i].addEventListener("mouseover", extraHeartOrbEffect);
                    extraHeartOrbP1[i].classList.remove("pow1");
                }
                
            
            
            }

                if (powerOneToggle == false) {
                    document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";
                var extraHeartOrbP1 = mainContainerr.querySelectorAll(".extra-heart-orb-clickbox:not(.pow1)");
                   var redPotionsP1 = mainContainerr.querySelectorAll(".red-potion-clickbox:not(.pow1)");
                   var bombsP1 = mainContainerr.querySelectorAll(".bomb-clickbox:not(.pow1)");
                   var bombsLengthP1 = bombsP1.length;
                   var redPotionslengthP1 = redPotionsP1.length;
                   var extraHeartOrblengthP1 = extraHeartOrbP1.length;
                   

                   for (let i = 0; i < bombsLengthP1; i++) {
                    bombsP1[i].removeEventListener("mouseover", bombClicked);
                    bombsP1[i].classList.add("pow1");
                }

                for (let i = 0; i < redPotionslengthP1; i++) {
                    redPotionsP1[i].removeEventListener("mouseover", redPotionEffect);
                    redPotionsP1[i].classList.add("pow1");
                }

                for (let i = 0; i < extraHeartOrblengthP1; i++) {
                    extraHeartOrbP1[i].removeEventListener("mouseover", extraHeartOrbEffect);
                    extraHeartOrbP1[i].classList.add("pow1");
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

            


            
        }
    
    
    
    // REMOVE POWERS
    function removePowers() {
        // POWER ONE REMOVAL

        var power1Current = document.querySelectorAll('.power1.power-icon');

        if (power1Current.length >= 1) { 

        document.getElementById("mainContainer").removeEventListener("mousedown", function(evt) {
            powerOneToggle = true;
        });
        document.getElementById("mainContainer").removeEventListener("mouseup", function(evt) {
            powerOneToggle = false;
        });
        
        powerOneToggle = false;
        power1On = 0;
        onlyOne = 1
        document.querySelector(".power1.power-icon").remove();
    }
    }

    function resetVariables() {
        onlyOne = 1;
        onlyOne1 = 1;
        score = 0;
    }


    
















// ONCLICK FUNCTIONS

// BOMBS

function bombClicked(evt) {
    this.removeEventListener("click", bombClicked);
    this.removeEventListener("mouseover", bombClicked);
    this.classList.remove("unclicked");
    
    this.style.zIndex = "1";
    var audio = new Audio('sounds/bomb_explosion.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.1;
    audio.play();
    var targetElementTemp = this.querySelectorAll(".thing-one");
    var targetElement = targetElementTemp[0];
    
    this.querySelector(".thing-one-hitbox").remove();
    targetElement.style.height = "7.5vw";
    targetElement.style.width = "9.5vw";
    var nowLeft = this.style.getPropertyValue("left");
    var calcLeft = parseInt(nowLeft) - 1;
    this.style.left = calcLeft + "vw";
    
    targetElement.style.background = "url('img/lvl1/bomb_explosion_sprite.png')" ;
    targetElement.style.animation = "bomb_explosion 400ms steps(8)";
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
    this.removeEventListener("mouseover", redPotionEffect);

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
        this.style.zIndex = "1";
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
        this.removeEventListener("mouseover", extraHeartOrbEffect);
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



    