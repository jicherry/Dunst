const swiper = new Swiper(".swiper-container", {
  loop: true, // 무한 루프
  autoplay: {
    delay: 3000, // 3초마다 자동으로 슬라이드 전환
  },
  slidesPerView: 1, // 한 번에 하나의 슬라이드 보기
  spaceBetween: 0, // 슬라이드 사이 간격
  navigation: {
    nextEl: ".swiper-button-next", // 다음 버튼
    prevEl: ".swiper-button-prev", // 이전 버튼
  },
  pagination: {
    el: ".swiper-pagination", // 페이지네이션 요소
    clickable: true, // 클릭 가능
  },
  grabCursor: true, // 마우스로 끌 때 커서 모양 변경
});
