var slidesIndexa = 1;
var slideIntervalla = setInterval(function() {
  pluSlides(1);
}, 10000);

function pluSlides(k) {
  showSlides((slidesIndexa += k));
}

function currentSlide(k) {
  clearInterval(slideIntervalla);
  showSlides((slidesIndexa = k));
}

function showSlides(k) {
  var a;
  var slidesa = document.getElementsByClassName("slide2");
  var dots1 = document.getElementsByClassName("dot3");

  if (k > slidesa.length) {
    slidesIndexa = 1;
  }
  if (k < 1) {
    slidesIndexa = slidesa.length;
  }

  for (a = 0; a < slidesa.length; a++) {
    slidesa[a].style.display = "none";
  }

  for (a = 0; a < dots1.length; a++) {
    dots1[a].className = dots1[a].className.replace(" active", "");
  }

  slidesa[slidesIndexa - 1].style.display = "block";
  dots1[slidesIndexa - 1].className += " active";

  clearInterval(slideIntervalla);

  // Son slayta geldiğinde başa dönecek kontrol
  slideIntervalla = setInterval(function() {
    pluSlides(1);
  }, 10000);
}

showSlides(slidesIndexa);