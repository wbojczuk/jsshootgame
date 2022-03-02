window.onload = preloadFunction;

function preloadFunction(){
    var stuffPreload = "";

    var i = 0;
    move();
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingBar");
    var width = 1;
    var id = setInterval(frame, 18);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("mainWrapper").style.display = "none";

    stuffPreload += "<div class='red-potion-preload preload'></div>";
    
    stuffPreload += "<div class='bomb-preload preload'></div>";

    stuffPreload += "<div class='bomb-explosion-preload preload'></div>";



    document.getElementById("preload").insertAdjacentHTML("afterbegin", stuffPreload);
    setTimeout( function() {
        document.getElementById("preload").remove();
        document.getElementById("preloadScreen").style.display = "none";
        document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "flex";
    document.getElementById("mainWrapper").style.display = "none";
    },2000);
}