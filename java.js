/*
window.onscroll = function () { scrollfunc() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function scrollfunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
*/
function openCharacter(evt, CharName) {
  var i, charactercontent, tablinks;
  charactercontent = document.getElementsByClassName("charactercontent");
  for (i = 0; i < charactercontent.length; i++) {
    charactercontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(CharName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("OpenDefault").click();