function setupSlider(sliderSelector, prevButtonSelector, nextButtonSelector) {
    const slider = document.querySelector(sliderSelector);
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);
  
    let currentPosition = 0;
    const slideWidth = 200; // Width of each slide
    const numSlides = 4;    // Total number of slides
  
    prevButton.addEventListener('click', () => {
      if (currentPosition !== 0) {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
          currentPosition = 0;
        }
        slider.style.left = currentPosition + 'px';
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentPosition !== -(numSlides - 1) * slideWidth) {
        currentPosition -= slideWidth;
        if (currentPosition < -(numSlides - 1) * slideWidth) {
          currentPosition = -(numSlides - 1) * slideWidth;
        }
        slider.style.left = currentPosition + 'px';
      }
    });
  
    let isDragging = false;
    let startX = 0;
    let diffX = 0;
  
    slider.addEventListener('mousedown', (event) => {
      if (event.button === 0) {
        isDragging = true;
        startX = event.clientX;
      }
    });
  
    window.addEventListener('mousemove', (event) => {
      if (isDragging) {
        diffX = event.clientX - startX;
        slider.style.left = currentPosition + diffX + 'px';
      }
    });
  
    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        currentPosition += diffX;
        if (currentPosition > 0) {
          currentPosition = 0;
        } else if (currentPosition < -(numSlides - 0) * slideWidth) {
          currentPosition = -(numSlides - 0) * slideWidth;
        }
        slider.style.left = currentPosition + 'px';
        diffX = 0;
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    setupSlider('.main1', '.slider-buttonx.left', '.slider-buttonx.right');
    setupSlider('.box', '.slider-buttons.left', '.slider-buttons.right');
    // Diğer slayt gösterileri için gerekirse aynı şekilde setupSlider çağrıları ekleyebilirsiniz.
  });
  