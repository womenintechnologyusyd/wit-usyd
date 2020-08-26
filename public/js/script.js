//FINDING THE FILE NAME TO HIGHLIGHT NAV

var path = window.location.pathname;
var currentPage = path.split("/").pop();

var allNavPaths = ['about', 'news-events', 'careers', 'newsletters', 'resources'];

for (var i = 0; i < allNavPaths.length; i ++) {
  if (currentPage !== allNavPaths[i]) {

  } else {
    document.getElementsByClassName(currentPage)[0].style.fontWeight = "600";
    document.getElementsByClassName(currentPage)[1].style.fontWeight = "600";
  }
}

function iconCopyLink(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const menuButton = document.getElementsByClassName('menu-arrow')[0];
const menuArrow = document.querySelectorAll('.menu-arrow svg')[0];
const nav = document.getElementsByTagName('nav')[0];
var menuButtonToggle = true;

menuButton.addEventListener('click', function() {
    if (menuButtonToggle == false) {
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
        nav.style.transform = "translateY(-12px)";
        menuArrow.style.transform = "rotate(0deg)";
        menuButtonToggle = true;
    } else if (menuButtonToggle == true) {
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
        nav.style.transform = "translateY(0)";
        menuArrow.style.transform = "rotate(180deg)";
        menuButtonToggle = false;
    }
})

function resizeTest(media) {
  if (media.matches) { // If media query matches
      nav.style.visibility = "hidden";
      nav.style.opacity = "0";
      nav.style.transform = "translateY(-12px)";
      menuArrow.style.transform = "rotate(0deg)";
      menuButtonToggle = true;
  } else {
      nav.style.visibility = "visible";
      nav.style.opacity = "1";
      nav.style.transform = "translateY(0)";
      menuArrow.style.transform = "rotate(180deg)";
      menuButtonToggle = false;
  }
}

const media600 = window.matchMedia("(max-width: 500px)")
resizeTest(media600) // Call listener function at run time
media600.addListener(resizeTest) // Attach listener function on state changes
