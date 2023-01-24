 function abrirMenu(){
    let menuMobile = document.querySelector('.header-mobile')
        if(menuMobile.classList.contains('abrir')){
            menuMobile.classList.remove('abrir');
        } else {
            menuMobile.classList.add('abrir');
        }
 }

 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});