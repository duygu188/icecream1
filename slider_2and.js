const slider1 = document.querySelector('.main1');
const prevButton1 = document.querySelector('.slider-buttonx.left');
const nextButton1 = document.querySelector('.slider-buttonx.right');

let currentIndex1 = 0;
const slideContainers1 = document.querySelectorAll('.main3');
const slideCount1 = slideContainers1.length;
let isDragging1 = false;
let startPos1 = 0;
let currentTranslate1 = 0;
let prevTranslate1 = 0;

function showSlide1(index) {
  if (index < 0) index = 0;
  if (index >= slideCount1) index = slideCount1 - 1;
  currentIndex1 = index;
  const translateX = -currentIndex1 * slider1.clientWidth;
  slider1.style.transform = `translateX(${translateX}px)`;
}

slider1.addEventListener('mousedown', e => {
  isDragging1 = true;
  startPos1 = e.clientX;
  prevTranslate1 = currentTranslate1;
});

slider1.addEventListener('touchstart', e => {
  isDragging1 = true;
  startPos1 = e.touches[0].clientX;
  prevTranslate1 = currentTranslate1;
});

slider1.addEventListener('mousemove', e => {
  if (!isDragging1) return;
  const currentPos1 = e.clientX;
  const moveAmt1 = currentPos1 - startPos1;
  currentTranslate1 = prevTranslate1 + moveAmt1;
  updateSlidePosition1();
});

slider1.addEventListener('touchmove', e => {
  if (!isDragging1) return;
  const currentPos1 = e.touches[0].clientX;
  const moveAmt1 = currentPos1 - startPos1;
  currentTranslate1 = prevTranslate1 + moveAmt1;
  updateSlidePosition1();
});

slider1.addEventListener('mouseup', () => {
  isDragging1 = false;
  snapToSlide1();
});

slider1.addEventListener('touchend', () => {
  isDragging1 = false;
  snapToSlide1();
});

function updateSlidePosition1() {
  const minTranslate = -(currentIndex1 * slider1.clientWidth);
  const maxTranslate = -((slideCount1 - 1) * slider1.clientWidth);
  currentTranslate1 = Math.max(Math.min(currentTranslate1, minTranslate), maxTranslate);
  slider1.style.transform = `translateX(${currentTranslate1}px)`;
}

function snapToSlide1() {
  const slideWidth = slider1.clientWidth;
  const threshold = slideWidth / 4;
  if (currentTranslate1 - prevTranslate1 < -threshold && currentIndex1 < slideCount1 - 1) {
    currentIndex1++;
  } else if (currentTranslate1 - prevTranslate1 > threshold && currentIndex1 > 0) {
    currentIndex1--;
  }
  showSlide1(currentIndex1);
}

function adjustScrollAmountResponsive() {
  if (window.innerWidth < 600) {
    scrollAmountResponsive = 121; // Küçük ekranlarda daha az kaydırma miktarı
    scrollCountResponsive = 1;
  } else {       
    scrollAmountResponsive = 100; // Büyük ekranlarda daha fazla kaydırma miktarı
    scrollCountResponsive = 1;
  }
}

window.addEventListener('resize', adjustScrollAmountResponsive);

const productContainers = [...document.querySelectorAll('.product-container')];

productContainers.forEach((item, i) => {
  let isSingleScroll = true;

  item.addEventListener('wheel', e => {
    e.preventDefault();

    if (isSingleScroll) {
      isSingleScroll = false;
      const direction = e.deltaY > 0 ? 1 : -1;

      for (let i = 0; i < scrollCountResponsive; i++) {
        item.scrollLeft += direction * scrollAmountResponsive;
      }

      setTimeout(() => {
        isSingleScroll = true;
      }, 100);
    }
  });

  // ...
});

let isClicking = false;

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}

function nextButtonClickHandler() {
  if (!isClicking) {
    isClicking = true;
    const scrollAmount = 300; // Sağ buton tıklamasında kaydırma miktarı
    currentTranslate1 -= scrollAmount;
    updateSlidePosition1();

    setTimeout(() => {
      isClicking = false;
    }, 1000); // 1 saniye içinde tekrar tıklanmasına izin verme
  }
}

function prevButtonClickHandler() {
  if (!isClicking) {
    isClicking = true;
    const scrollAmount = 300; // Sol buton tıklamasında kaydırma miktarı
    currentTranslate1 += scrollAmount;
    updateSlidePosition1();

    setTimeout(() => {
      isClicking = false;
    }, 1000); // 1 saniye içinde tekrar tıklanmasına izin verme
  }
}

nextButton1.addEventListener('click', nextButtonClickHandler);
prevButton1.addEventListener('click', prevButtonClickHandler);

showSlide1(currentIndex1);
