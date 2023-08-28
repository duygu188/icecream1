const slider4 = document.querySelector('.slider4'); // Slider 4
const dotsContainer4 = document.querySelector('.dots4');
const dotList4 = [];
const slideContainers4 = document.querySelectorAll('.slide-container4');
const slideCount4 = slideContainers4.length;
let currentIndex4 = 0;
let touchStartX4;

function showSlide4(index) {
  slider4.style.transform = `translateX(-${index * 100}%)`;
  updateDots4(index);
}

function updateDots4(index) {
  dotList4.forEach((dot3, idx) => {
    if (idx === index) {
      dot3.classList.add('active');
    } else {
      dot3.classList.remove('active');
    }
  });
}

for (let i = 0; i < slideCount4; i++) {
  const dot3 = document.createElement('div'); // "dot" yerine "dot3" olarak değiştiriyorum
  dot3.classList.add('dot3'); // Class adını "dot" olarak değiştiriyorum
  if (i === 0) {
    dot3.classList.add('active');
  }
  dotsContainer4.appendChild(dot3);
  dotList4.push(dot3);

  dot3.addEventListener('click', () => { // "dot" yerine "dot3" olarak değiştiriyorum
    currentIndex4 = i;
    showSlide4(currentIndex4);
  });
}

showSlide4(currentIndex4);

slider4.addEventListener('touchstart', (e) => {
  touchStartX4 = e.touches[0].clientX;
});

slider4.addEventListener('touchend', (e) => {
  const touchEndX4 = e.changedTouches[0].clientX;
  const touchDeltaX4 = touchEndX4 - touchStartX4; // touchDeltaX hesaplamasını düzeltiyorum

  if (touchDeltaX4 > 90) {
    prevSlide4(); // "nextSlide4" yerine "prevSlide4" kullanıyorum
  } else if (touchDeltaX4 < -50) {
    nextSlide4(); // "prevSlide4" yerine "nextSlide4" kullanıyorum
  }
});

function nextSlide4() {
  if (currentIndex4 < slideCount4 - 1) {
    currentIndex4++;
    showSlide4(currentIndex4);
  }
}

function prevSlide4() {
  if (currentIndex4 > 0) {
    currentIndex4--;
    showSlide4(currentIndex4);
  }
}
