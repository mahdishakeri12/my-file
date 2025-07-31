$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        slidesPerView: 1,
    });
});

