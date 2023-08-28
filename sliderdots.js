const slider = document.querySelector('.slider2');
const dotsContainer = document.querySelector('.dots2');
const dotList = [];
const slideContainers = document.querySelectorAll('.slide2');
const slideCount = slideContainers.length;
let currentIndex = 0;
let startX;
let touchStartX;

function showSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots(index);
}

function updateDots(index) {
  dotList.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) {
    dot.classList.add('active');
  }
  dotsContainer.appendChild(dot);
  dotList.push(dot);

  dot.addEventListener('click', (event) => {
    const clickedDotIndex = dotList.indexOf(event.currentTarget);
    if (clickedDotIndex !== -1) {
      showSlide(clickedDotIndex);
    }
  });
}

showSlide(currentIndex);

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchDeltaX = touchEndX - touchStartX; // Dokunmatik hareket yönü tersine çevrildi

  if (touchDeltaX > 50) {
    prevSlide(); // prevSlide() çağrısı
  } else if (touchDeltaX < -50) {
    nextSlide(); // nextSlide() çağrısı
  }
});

function nextSlide() {
  if (currentIndex < slideCount - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
}
