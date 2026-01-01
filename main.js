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


/* 스크롤 버튼 */
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
    scrollBtn.classList.remove("hide");
  } else {
    scrollBtn.classList.add("hide");
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
