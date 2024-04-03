// toggleButton
var navbarToggler = document.getElementById("navbar-toggler");
var closeMenu = document.getElementById("closeMenu");
var openMenu = document.getElementById("openMenu");

if (navbarToggler.classList.contains("collapsed")) {
        closeMenu.classList.add("d-none");
        openMenu.classList.remove("d-none");
      };
  navbarToggler.addEventListener('click', function() {

    if(navbarToggler.classList.contains("collapsed")) {
        closeMenu.classList.add("d-none");
        openMenu.classList.remove("d-none");
    } else {
        closeMenu.classList.remove("d-none");
        openMenu.classList.add("d-none");
    }
  
  });