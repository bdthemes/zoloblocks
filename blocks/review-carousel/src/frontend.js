document.addEventListener('DOMContentLoaded', () => {
    const zoloRevewCarousel = document.querySelectorAll('.wp-block-zolo-review-carousel');
    if (zoloRevewCarousel.length > 0) {
        zoloRevewCarousel.forEach((carousel) => {
            const carouselSelector = carousel.querySelector('.swiper');
            const carouselOptions = carousel.dataset?.swiperOptions || '{}';
            const carouselOptionsObj = JSON.parse(carouselOptions);
            const pagination = carousel.querySelector('.swiper-pagination');

            const defaultOptions = {
                pagination: {
                    el: pagination,
                    clickable: true,
                    type: 'bullets',
                },
                effect: 'slide',
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                },
            };

            new Swiper(carouselSelector, Object.keys(carouselOptionsObj).length > 0 ? carouselOptionsObj : defaultOptions);
        });
    }
});
