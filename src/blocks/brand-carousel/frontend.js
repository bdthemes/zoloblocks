// document.addEventListener('DOMContentLoaded', () => {
//     const zoloBrandCarousel = document.querySelectorAll('.wp-block-zolo-brand-carousel');
//     if (zoloBrandCarousel.length > 0) {
//         zoloBrandCarousel.forEach((carousel) => {
//             const carouselSelector = carousel.querySelector('.swiper');
//             const carouselOptions = carousel.dataset?.swiperOptions || '{}';
//             const carouselOptionsObj = JSON.parse(carouselOptions);
//             const pagination = carousel.querySelector('.swiper-pagination');

//             const defaultOptions = {
//                 pagination: {
//                     el: pagination,
//                     clickable: true,
//                     type: 'bullets',
//                 },
//                 effect: 'slide',
//                 breakpoints: {
//                     1024: {
//                         slidesPerView: 3,
//                         spaceBetween: 30,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                         spaceBetween: 30,
//                     },
//                     640: {
//                         slidesPerView: 1,
//                         spaceBetween: 0,
//                     },
//                 },
//             };

//             new Swiper(carouselSelector, Object.keys(carouselOptionsObj).length > 0 ? carouselOptionsObj : defaultOptions);
//         });
//     }
// });

window.addEventListener('DOMContentLoaded', () => {
    const zoloBrandCarousel = document.querySelectorAll('.wp-block-zolo-post-carousel');
    if (zoloBrandCarousel.length > 0) {
        zoloBrandCarousel.forEach((carousel) => {
            const carouselSelector = carousel.querySelector('.swiper');
            const carouselOptions = carousel.dataset.settings;
            const carouselOptionsObj = JSON.parse(carouselOptions);
            new Swiper(carouselSelector, carouselOptionsObj);
        });
    }
});
