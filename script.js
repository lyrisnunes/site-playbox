const optionMenu = document.querySelector('.select-menu');
      selectBtn = optionMenu.querySelector('.select-btn'),
      options = optionMenu.querySelectorAll('.option'),
      sBtn_text = optionMenu.querySelector('.option-text');

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

options.forEach(Option => {
    Option.addEventListener('click', () => {
        let selectOption = Option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectOption;

        optionMenu.classList.remove('active');
    });

});


const optionMenu2 = document.querySelector('.select-menu2');
      selectBtn = optionMenu2.querySelector('.select-btn2'),
      options = optionMenu2.querySelectorAll('.option2'),
      sBtn_text = optionMenu2.querySelector('.option-text2');

selectBtn.addEventListener('click', () => optionMenu2.classList.toggle('active'));

options.forEach(Option => {
    Option.addEventListener('click', () => {
        let selectOption = Option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectOption;

        optionMenu.classList.remove('active');
    });

});

const optionMenu3 = document.querySelector('.select-menu3');
      selectBtn = optionMenu3.querySelector('.select-btn3'),
      options = optionMenu3.querySelectorAll('.option3'),
      sBtn_text = optionMenu3.querySelector('.option-text3');

selectBtn.addEventListener('click', () => optionMenu3.classList.toggle('active'));

options.forEach(Option => {
    Option.addEventListener('click', () => {
        let selectOption = Option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectOption;

        optionMenu.classList.remove('active');
    });

});

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

  breakpoints:{
    0: {
      slidesPerView:1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    }
  }
});