const slider1 = document.querySelector('.deneme3');
const leftButton1 = document.querySelector('.slider-buttona.left');
const rightButton1 = document.querySelector('.slider-buttona.right');
let currentPosition1 = 0;
const slideWidth1 = 400; // Width of each slide
const numSlides1 = 4;    // Total number of slides

leftButton1.addEventListener('click', () => {
    if (currentPosition1 !== 0) {
        currentPosition1 += slideWidth1;
        if (currentPosition1 > 0) {
            currentPosition1 = 0;
        }
        slider1.style.left = currentPosition1 + 'px';
    }
});

rightButton1.addEventListener('click', () => {
    if (currentPosition1 !== -(numSlides1 - 0) * slideWidth1) {
        currentPosition1 -= slideWidth1;
        if (currentPosition1 < -(numSlides1 - 0) * slideWidth1) {
            currentPosition1 = -(numSlides1 - 0) * slideWidth1;
        }
        slider1.style.left = currentPosition1 + 'px';
    }
});

let isDragging1 = false;
let startX1 = 0;
let diffX1 = 0;

slider1.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        isDragging1 = true;
        startX1 = event.clientX;
    }
});

window.addEventListener('mousemove', (event) => {
    if (isDragging1) {
        diffX1 = event.clientX - startX1;
        slider1.style.left = currentPosition1 + diffX1 + 'px';
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging1) {
        isDragging1 = false;
        currentPosition1 += diffX1;
        if (currentPosition1 > 0) {
            currentPosition1 = 0;
        } else if (currentPosition1 < -(numSlides1 - 0) * slideWidth1) {
            currentPosition1 = -(numSlides1 - 0) * slideWidth1;
        }
        slider1.style.left = currentPosition1 + 'px';
        diffX1 = 0;
    }
});