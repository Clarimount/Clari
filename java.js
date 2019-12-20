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

window.onclick = function () { chartab() };
var char-tab = document.getElementById("char-tab");
var char-body = document.getElementById("char-body");
function chartab() {
    if(window.Onclick = true) {
        char-tab.classList.add("flex")
        char-body.classList.add("flex")
    } else {
     char-tab.classList.remove("flex")
     char-body.classList.remove("flex")
    }
    
}
