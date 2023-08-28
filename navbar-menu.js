document.addEventListener("DOMContentLoaded", function() {
    const openMenuButton = document.querySelector(".open-menu-btn");
    const mobileMenu = document.querySelector(".menu");

    openMenuButton.addEventListener("click", function() {
        mobileMenu.classList.add("menu-open");
    });

    closeMenuButton.addEventListener("click", function() {
        mobileMenu.classList.remove("menu-open");
    });
});