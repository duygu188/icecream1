const slider2 = document.querySelector('.deneme3');
const prevButton2 = document.querySelector('.slider-buttona.left');
const nextButton2 = document.querySelector('.slider-buttona.right');

let currentIndex2 = 0;
const slideContainers2 = document.querySelectorAll('.deneme3 .texture1');
const slideCount2 = slideContainers2.length;
let isDragging5 = false;
let startPos9 = 0;
let currentTranslate2 = 0;
let prevTranslate2 = 0;

function showSlide2(index) {
  if (index < 0) index = 0;
  if (index >= slideCount2) index = slideCount2 - 1;
  slider2.style.transform = `translateX(-${index * 40}%)`;
  currentIndex2 = index;
}

slider2.addEventListener('mousedown', e => {
  isDragging5 = true;
  startPos9 = e.clientX - slider2.getBoundingClientRect().left;
  prevTranslate2 = currentTranslate2;
});

slider2.addEventListener('touchstart', e => {
  isDragging5 = true;
  startPos9 = e.touches[0].clientX - slider2.getBoundingClientRect().left;
  prevTranslate2 = currentTranslate2;
});

slider2.addEventListener('mousemove', e => {
  if (!isDragging5) return;
  const currentPos2 = e.clientX - slider2.getBoundingClientRect().left;
  const moveAmt2 = currentPos2 - startPos9;
  currentTranslate2 = prevTranslate2 + moveAmt2;
  updateSlidePosition2();
});

slider2.addEventListener('touchmove', e => {
  if (!isDragging5) return;
  const currentPos2 = e.touches[0].clientX - slider2.getBoundingClientRect().left;
  const moveAmt2 = currentPos2 - startPos9;
  currentTranslate2 = prevTranslate2 + moveAmt2;
  updateSlidePosition2();
});

slider2.addEventListener('mouseup', () => {
  isDragging5 = false;
});

slider2.addEventListener('touchend', () => {
  isDragging5 = false;
});

function updateSlidePosition2() {
  slider2.style.transform = `translateX(${currentTranslate2}px)`;
}

nextButton2.addEventListener('click', () => {
  showSlide2(currentIndex2 + 1);
});

prevButton2.addEventListener('click', () => {
  showSlide2(currentIndex2 - 1);
});

showSlide2(currentIndex2);
