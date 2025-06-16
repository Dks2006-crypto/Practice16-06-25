const favPhotosSlider = new Swiper('.favorite-photos-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    loopedSlides: 5, // Должно быть не меньше количества видимых слайдов
    speed: 600,
    resistanceRatio: 0.5,
    grabCursor: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            loopedSlides: 3
        },
        480: {
            slidesPerView: 1.5,
            loopedSlides: 3
        },
        640: {
            slidesPerView: 2,
            loopedSlides: 4
        },
        768: {
            slidesPerView: 2.5,
            loopedSlides: 5
        },
        1024: {
            slidesPerView: 3,
            loopedSlides: 5
        },
        1280: {
            slidesPerView: 4,
            loopedSlides: 5
        }
    },
    on: {
        afterInit: function () {
            // Дополнительная инициализация после загрузки
            this.update();
        }
    }
});

// Улучшенные обработчики кнопок
document.querySelector('.slider-button-next').addEventListener('click', function () {
    favPhotosSlider.slideNext(600); // 600 - скорость анимации
});
document.querySelector('.slider-button-prev').addEventListener('click', function () {
    favPhotosSlider.slidePrev(600);
});