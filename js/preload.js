"use strict";

window.onload = preloadFunction;

function preloadFunction(){
    var stuffPreload = "";
    var preloadHintHTML = ["Get to a score of 500 for a special ability!", "Get the red potions to heal a lost heart!", "Get the glowing orb for an additional heart!", "Animated with sprite sheets!", "Coded in strict mode!", "Why did I make this?", "Made in 2022"];
  var u = preloadHintHTML.length - 1;
    document.getElementById("preloadHint").textContent = preloadHintHTML[Math.floor(getRndInteger(0, u))];

    
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("mainWrapper").style.display = "none";

    stuffPreload += "<div class='red-potion-preload preload'></div>";
    
    stuffPreload += "<div class='bomb-preload preload'></div>";

    stuffPreload += "<div class='bomb-explosion-preload preload'></div>";

    stuffPreload += "<div class='red-splash-preload preload'></div>";

    stuffPreload += "<div class='extra-heart-orb-preload preload'></div>";

    stuffPreload += "<div class='extra-heart-orb-explosion-preload preload'></div>";

    stuffPreload += "<div class='blue-crystal-preload preload'></div>";

    stuffPreload += "<div class='blue-crystal-explosion-preload preload'></div>";



    document.getElementById("preload").insertAdjacentHTML("afterbegin", stuffPreload);



    
   
      setTimeout(function(){
        document.getElementById("preload").remove();
        document.getElementById("body").style.backgroundImage = "url('img/main_screen_background.jpg')";
        document.getElementById("preloadScreen").style.display = "none";
        document.getElementById("endScreenWrapper").style.display = "none";
        document.getElementById("startScreenWrapper").style.display = "block";
        document.getElementById("mainWrapper").style.display = "none";
        currentLvl = "menu";
        document.addEventListener("click", setBackgroundMusic);
      }, 3000);
        
      
      }