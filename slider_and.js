
        const slider = document.querySelector('.slider1');
        const leftButton = document.querySelector('.slider-buttons.left');
        const rightButton = document.querySelector('.slider-buttons.right');
        let currentPosition = 0;
        const slideWidth = 200; // Width of each slide
        const numSlides = 4;    // Total number of slides
    
        leftButton.addEventListener('click', () => {
            if (currentPosition !== 0) {
                currentPosition += slideWidth;
                if (currentPosition > 0) {
                    currentPosition = 0;
                }
                slider.style.left = currentPosition + 'px';
            }
        });
    
        rightButton.addEventListener('click', () => {
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
        productContainers.forEach((item, i) => {
            let containerDimension = item.getBoundingClientRect();
            let containerWidth = containerDimension.width;
          
            let isSingleScroll = true; // Bayrak sadece 1 kez sağa kaydırmayı sağlar
          
            item.addEventListener('wheel', e => {
              e.preventDefault(); // Varsayılan kaydırmayı engelle
          
              // Ekran genişliğinin 600 pikselden düşük olup olmadığını kontrol et
              if (window.innerWidth <= 600) {
                const scrollAmount = e.deltaY > 0 ? 10 : -10; // Ayarlanmış kaydırma miktarı
                item.scrollLeft += scrollAmount;
              } else {
                const scrollAmount = e.deltaY > 0 ? 60 : -60; // Varsayılan kaydırma miktarı
                item.scrollLeft += scrollAmount;
              }
            });
          });