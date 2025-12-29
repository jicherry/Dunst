const slides = document.querySelector('.slides');
const slideWidth = 100;
const slideCount = 5;

let index = 0;

function moveSlide() {
  index = (index + 1) % slideCount;
  slides.style.transform = `translateX(-${index * slideWidth}%)`;
}

setTimeout(function autoSlide() {
  moveSlide();
  setTimeout(autoSlide, 3500);
}, 1000);
