document.addEventListener('DOMContentLoaded', () => {
    const sliderMain3 = document.querySelector('.main1');
    const leftButtonMain3 = document.querySelector('.slider-buttonx.left');
    const rightButtonMain3 = document.querySelector('.slider-buttonx.right');
    let currentPositionMain3 = 0;
    let slideWidthMain3 = 220; // Varsayılan her slaytın genişliği
    let numSlidesMain3 = 4;    // Varsayılan toplam slayt sayısı
    const slideGap = 400;       // Slaytlar arası boşluk

    const responsiveWidth = 600;
    const smallSlideWidth = 150; // Küçük ekranlar için her slaytın genişliği
    const smallNumSlides = 6;    // Küçük ekranlar için toplam slayt sayısı

    function updateSliderConfig() {
        if (window.innerWidth < responsiveWidth) {
            slideWidthMain3 = smallSlideWidth;
            numSlidesMain3 = smallNumSlides;
        } else {
            slideWidthMain3 = 220;
            numSlidesMain3 = 4;
        }
        sliderMain3.style.width = (numSlidesMain3 * (slideWidthMain3 + slideGap)) - slideGap + 'px';
    }

    updateSliderConfig();
    window.addEventListener('resize', updateSliderConfig);

    leftButtonMain3.addEventListener('click', () => {
        const slidesToMove = 2; // Her tıklamada kaç slayt hareket ettirileceği
        const newPosition = currentPositionMain3 + (slidesToMove * (slideWidthMain3 + slideGap));

        if (newPosition <= 0) {
            currentPositionMain3 = newPosition;
            sliderMain3.style.left = currentPositionMain3 + 'px';
        }
    });

    rightButtonMain3.addEventListener('click', () => {
        const slidesToMove = 2; // Her tıklamada kaç slayt hareket ettirileceği
        const newPosition = currentPositionMain3 - (slidesToMove * (slideWidthMain3 + slideGap));
        const minPosition = -(numSlidesMain3 - 1) * (slideWidthMain3 + slideGap);

        if (newPosition >= minPosition) {
            currentPositionMain3 = newPosition;
            sliderMain3.style.left = currentPositionMain3 + 'px';
        }
    });

    let isDraggingMain3 = false;
    let startXMain3 = 0;
    let diffXMain3 = 0;

    sliderMain3.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
            isDraggingMain3 = true;
            startXMain3 = event.clientX;
        }
    });

    window.addEventListener('mousemove', (event) => {
        if (isDraggingMain3) {
            diffXMain3 = event.clientX - startXMain3;
            sliderMain3.style.left = currentPositionMain3 + diffXMain3 + 'px';
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDraggingMain3) {
            isDraggingMain3 = false;
            currentPositionMain3 += diffXMain3;
            const minPosition = -(numSlidesMain3 - 1) * (slideWidthMain3 + slideGap);

            if (currentPositionMain3 > 0) {
                currentPositionMain3 = 0;
            } else if (currentPositionMain3 < minPosition) {
                currentPositionMain3 = minPosition;
            }
            sliderMain3.style.left = currentPositionMain3 + 'px';
            diffXMain3 = 0;
        }
    });
});
