var prevScrollpos = window.pageYOffset;
var N = document.getElementById("navbar");
var Y = document.body.scrollTop;
var x = window.matchMedia("(max-width: 768px)");

navbarBG(x) // Call listener function at run time
x.addListener(navbarBG) // Attach listener function on state changes

function navbarBG(x) {
    if (!x.matches) { // If media query  don't matches
        N.setAttribute( 'style', 'background-color: transparent !important' );
        document.getElementById('logo').src="img/logo/italcrediti-logo-orizzontale-negativo-RGB.svg";
    } else {
        N.setAttribute( 'style', 'background-color: rgba(0, 83, 76, 1) !important' );
        N.style.top = "0";
    }
  }

window.onscroll = function autohide() {
    var currentScrollPos = window.pageYOffset;
    var H = N.offsetHeight;
    if (x.matches) {
        N.style.top = "0";
    } else if (prevScrollpos > currentScrollPos) {
        N.style.top = "0";
    } else {
        N.style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}

var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true && !x.matches) {
        N.setAttribute( 'style', 'background-color: transparent !important' );
    } else {
        N.setAttribute( 'style', 'background-color: rgba(0, 83, 76, 1) !important' );
    }
}, { threshold: [1] });

observer.observe(document.querySelector("#header"));

var navLinks = document.querySelectorAll('.nav-item');
var menuToggle = document.getElementById('navbarSupportedContent');
var bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle()})
})






