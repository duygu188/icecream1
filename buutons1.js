const sliderContainer6 = document.querySelector('.slider-container');
const prevButton6 = document.querySelector('.slider-prev1');
const nextButton6 = document.querySelector('.slider-next1');
let currentIndex6 = 0;
const slideContainers6 = sliderContainer6.querySelectorAll('.product.product-slide');
const slideCount6 = slideContainers6.length;
let isDragging4 = false;
let startPos2 = 0;
let currentTranslate6 = 0;
let prevTranslate6 = 0;

function showSlide(index) {
  if (index < 0) index = 0;
  if (index >= slideCount6) index = slideCount6 - 1;
  sliderContainer6.style.transform = `translateX(-${index * 100}%)`;  
  currentIndex6 = index;
}

sliderContainer6.addEventListener('mousedown', e => {
  isDragging4 = true;
  startPos2 = e.clientX - sliderContainer6.getBoundingClientRect().left;
  prevTranslate6 = currentTranslate6;
  e.preventDefault(); // Sürükleme işlemi sırasında kaymayı engellemek için
});

sliderContainer6.addEventListener('touchstart', e => {
  isDragging4 = true;
  startPos2 = e.touches[0].clientX - sliderContainer6.getBoundingClientRect().left;
  prevTranslate6 = currentTranslate6;
  e.preventDefault(); // Sürükleme işlemi sırasında kaymayı engellemek için
});

sliderContainer6.addEventListener('mousemove', e => {
  if (!isDragging4) return;
  const currentPos = e.clientX - sliderContainer6.getBoundingClientRect().left;
  const moveAmt = currentPos - startPos2;
  currentTranslate6 = prevTranslate6 + moveAmt;
  updateSlidePosition();
});

sliderContainer6.addEventListener('touchmove', e => {
  if (!isDragging4) return;
  const currentPos = e.touches[0].clientX - sliderContainer6.getBoundingClientRect().left;
  const moveAmt = currentPos - startPos2;
  currentTranslate6 = prevTranslate6 + moveAmt;
  updateSlidePosition();
});

sliderContainer6.addEventListener('mouseup', () => {
  isDragging4 = false;
});

sliderContainer6.addEventListener('touchend', () => {
  isDragging4 = false;
});

function updateSlidePosition() {
  sliderContainer6.style.transform = `translateX(${currentTranslate6}px)`;
}

nextButton6.addEventListener('click', () => {
  showSlide(currentIndex6 + 1);
});

prevButton6.addEventListener('click', () => {
  showSlide(currentIndex6 - 1);
});

showSlide(currentIndex6);