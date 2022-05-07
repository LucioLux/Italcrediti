function myFunction(x) {
if (x.matches) { // If media query matches
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    });
    }
}

window.onscroll = function autohide() {
    var s = window.pageYOffset;
    if (s < 64 && !x.matches) {
        n.style.setProperty("background-color", "transparent", "important");
    } else {
        n.style.setProperty("background-color", "", "");
    }
}

var navLinks = document.querySelectorAll('.nav-item');
var menuToggle = document.getElementById('navbarSupportedContent');
var bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});

var n = document.getElementById('navbar');

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes