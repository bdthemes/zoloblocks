document.addEventListener('DOMContentLoaded', () => {
    const zoloRevewCarousel = document.querySelectorAll('.wp-block-zolo-review-carousel');
    if (zoloRevewCarousel.length > 0) {
        zoloRevewCarousel.forEach((carousel) => {
            const carouselSelector = carousel.querySelector('.swiper');
            const carouselOptions = carousel.dataset.swiperOptions;
            const carouselOptionsObj = JSON.parse(carouselOptions);
            new Swiper(carouselSelector, carouselOptionsObj);
        });
    }
});
