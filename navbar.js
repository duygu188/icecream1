document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".header");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  