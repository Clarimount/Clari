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


