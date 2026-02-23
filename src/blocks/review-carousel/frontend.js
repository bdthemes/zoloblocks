document.addEventListener('DOMContentLoaded', () => {
    const zoloRevewCarousel = document.querySelectorAll('.wp-block-zolo-review-carousel');
    if (zoloRevewCarousel.length > 0) {
        zoloRevewCarousel.forEach((carousel) => {
            carousel.querySelectorAll('.zb-review-item').forEach((item) => item.classList.add('swiper-slide'));
            const sliderOptions = JSON.parse(carousel.dataset?.swiperOptions) || '{}';
            // const pagination = carousel.querySelector('.swiper-pagination');
        const sliderSelector = carousel.querySelector('.swiper');

            const {
                speed = 800,
                autoplay = true,
                autoplayDelay = 3000,
                pauseOnMouseEnter = true,
                loop = true,
                navigation = false,
                effect = 'slide',
                pagination = true,
                paginationType = 'bullets',
                perviewDesktop = 3,
                perviewTab = 2,
                perviewMobile = 1,
                spacingDesktop = 30,
                spacingTab = 20,
                spacingMob = 10,
            } = sliderOptions;

            const defaultOptions = {
                // loop: loop && carousel.querySelectorAll('.swiper-slide').length > (perviewDesktop || 4) ? true : false,
                autoplay: autoplay
                    ? { delay: autoplayDelay || 3000, disableOnInteraction: false, pauseOnMouseEnter: pauseOnMouseEnter || false }
                    : false,
                speed: speed || 800,
                effect: effect || 'slide',
                observer: true,
                // slidesPerView: perviewMobile || 1,
                spaceBetween: spacingMob ? spacingMob : 10,
                navigation: navigation
                    ? {
                          nextEl: sliderSelector.querySelector('.swiper-button-next'),
                          prevEl: sliderSelector.querySelector('.swiper-button-prev'),
                      }
                    : false,
                pagination: pagination ? { el: '.swiper-pagination', type: paginationType || 'bullets', clickable: true } : false,

                breakpoints: {
                    768: {
                        slidesPerView: perviewTab ? perviewTab : 2,
                        spaceBetween: spacingTab ? spacingTab : 20,
                    },
                    1024: {
                        slidesPerView: perviewDesktop ? perviewDesktop : 5,
                        spaceBetween: spacingDesktop ? spacingDesktop : 30,
                    },
                },
            };
            // Initialize Swiper
            new Swiper(sliderSelector, defaultOptions);
        });
    }
});
