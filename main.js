const slides = document.querySelector('.slides');
const slideWidth = 100;
const slideCount = 4;

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


/* 모바일 */
const hamburgerIcon = document.querySelector('.hamburger i');
const mobileMenu = document.querySelector('.mobile_menu');
const header = document.querySelector('.header');

hamburgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');   
  header.classList.toggle('menu_open');    

  if (hamburgerIcon.classList.contains('fa-bars')) {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark');
  } else {
    hamburgerIcon.classList.remove('fa-xmark');
    hamburgerIcon.classList.add('fa-bars');
  }
});
