// Close toggle menu when nav-link clicked
function closeToggle(x) {
    if (x.matches) {
        var navLinks = document.querySelectorAll('.nav-item');
        var menuToggle = document.getElementById('navbarSupportedContent');
        var bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    }
  }
  
  const mmObj = window.matchMedia("(max-width: 992px)")
  
  closeToggle(mmObj);
  
  mmObj.addListener(closeToggle)
  // End Close toggle menu when nav-link clicked