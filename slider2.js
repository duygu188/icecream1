const slider = document.querySelector(".box");
const slides = document.querySelectorAll(".image-container");
const dots1 = document.querySelectorAll(".dot1");
const dots2 = document.querySelectorAll(".dot2");
const slideWidth = slides[0].clientWidth;
let index = 0; // İlk fotoğrafta başla
let startPosX = 0;
let currentTranslate = 0; // Başlangıç pozisyonu
let prevTranslate = currentTranslate;
let touchStartX = 0;
let touchEndX = 0;

function updateSlider() {
  slider.style.transform = `translateX(${currentTranslate}px)`;

  // Dot renkleri güncelleme
  dots1.forEach((dot, dotIndex) => {
    dot.classList.remove("active");
    if (dotIndex === index) {
      dot.classList.add("active");
    }
  });

  dots2.forEach((dot, dotIndex) => {
    dot.classList.remove("active");
    if (dotIndex === index - 0 && dotIndex >= slides.length - 3) {
      dot.classList.add("active");
    }
  });
}

// Mouse hareketi üstüne tıklandığında geçiş yap
slider.addEventListener("mousedown", () => {
  index++;
  if (index === 3) { // 4. fotoğrafa atlamayı engelle
    index++;
  }
  if (index === slides.length) {
    index = 0;
  }
  currentTranslate = -index * slideWidth;
  updateSlider();
});

// Dokunmatik ekran desteği
document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
  touchEndX = e.touches[0].clientX;
});

document.addEventListener("touchend", () => {
  const movedBy = touchEndX - touchStartX;
  if (movedBy < -100) {
    index++;
    if (index === 3) { // 4. fotoğrafa atlamayı engelle
      index++;
    }
    if (index === slides.length) {
      index = 0;
    }
  } else if (movedBy > 100) {
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
  }
  currentTranslate = -index * slideWidth;
  updateSlider();
});

function goToSlide(slideIndex) {
  index = slideIndex;
  currentTranslate = -index * slideWidth;
  updateSlider();
}

// Otomatik geçiş işlevi kaldırıldı
