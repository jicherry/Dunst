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
