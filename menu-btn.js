const menuBtn = document.querySelector('.open-menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');

menuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('active');
    menuOverlay.style.display = menuBtn.classList.contains('active') ? 'block' : 'none';
}
