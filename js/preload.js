"use strict";

window.onload = preloadFunction;

function preloadFunction(){
    var stuffPreload = "";

    var preloadHintHTML = ["Get to a score of 500 for a special ability!", "Get the red potions to heal a lost heart!", "Get the rare glowing orb for an additional heart!", "Animated with sprite sheets!", "Coded in strict mode!", "What is life?", "Made in 2022"];
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



    document.getElementById("preload").insertAdjacentHTML("afterbegin", stuffPreload);



    var i = 0;
    move();
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingBar");
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("preload").remove();
        document.getElementById("preloadScreen").style.display = "none";
        document.getElementById("endScreenWrapper").style.display = "none";
        document.getElementById("startScreenWrapper").style.display = "flex";
        document.getElementById("mainWrapper").style.display = "none";
        currentLvl = "menu";
        document.addEventListener("click", setBackgroundMusic);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
}