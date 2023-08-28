document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer5 = document.querySelector('.slider-container1');
  const prevButton5 = document.querySelector('.slider-prev');
  const nextButton5 = document.querySelector('.slider-next');
  let currentIndex5 = 0;
  const slideContainers5 = sliderContainer5.querySelectorAll('.product.product-slide1');
  const slideCount5 = slideContainers5.length;
  let isDragging3 = false;
  let startPos = 0;
  let currentTranslate5 = 0;
  let prevTranslate5 = 0;

  function showSlide(index) {
    if (index < 0) index = 0;
    if (index >= slideCount5) index = slideCount5 - 1;
    sliderContainer5.style.transform = `translateX(-${index * 100}%)`;
    currentIndex5 = index;
  }

  sliderContainer5.addEventListener('mousedown', e => {
    isDragging3 = true;
    startPos = e.clientX - sliderContainer5.getBoundingClientRect().left;
    prevTranslate5 = currentTranslate5;
    e.preventDefault();
  });

  sliderContainer5.addEventListener('touchstart', e => {
    isDragging3 = true;
    startPos = e.touches[0].clientX - sliderContainer5.getBoundingClientRect().left;
    prevTranslate5 = currentTranslate5;
    e.preventDefault();
  });

  sliderContainer5.addEventListener('mousemove', e => {
    if (!isDragging3) return;
    const currentPos = e.clientX - sliderContainer5.getBoundingClientRect().left;
    const moveAmt = currentPos - startPos;
    currentTranslate5 = prevTranslate5 + moveAmt;
    updateSlidePosition();
  });

  sliderContainer5.addEventListener('touchmove', e => {
    if (!isDragging3) return;
    const currentPos = e.touches[0].clientX - sliderContainer5.getBoundingClientRect().left;
    const moveAmt = currentPos - startPos;
    currentTranslate5 = prevTranslate5 + moveAmt;
    updateSlidePosition();
  });

  sliderContainer5.addEventListener('mouseup', () => {
    isDragging3 = false;
  });

  sliderContainer5.addEventListener('touchend', () => {
    isDragging3 = false;
  });

  function updateSlidePosition() {
    sliderContainer5.style.transform = `translateX(${currentTranslate5}px)`;
  }

  nextButton5.addEventListener('click', () => {
    showSlide(currentIndex5 + 1);
  });

  prevButton5.addEventListener('click', () => {
    showSlide(currentIndex5 - 1);
  });

  showSlide(currentIndex5);
});
