document.addEventListener('DOMContentLoaded', () => {
    const zoloSliders = document.querySelectorAll('.wp-block-zolo-slider');
    if (zoloSliders.length > 0) {
        zoloSliders.forEach((slider) => {
            const sliderSelector = slider.querySelector('.swiper');
            const sliderOptions = slider.dataset?.swiperOptions || '{}';
            const sliderOptionsObj = JSON.parse(sliderOptions);
            const nextEl = slider.querySelector('.swiper-button-next');
            const prevEl = slider.querySelector('.swiper-button-prev');

            const defaultOptions = {
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl,
                },
                loop: false,
                autoplay: false,
                speed: 800,
                effect: 'slide',
            };

            new Swiper(sliderSelector, Object.keys(sliderOptionsObj).length > 1 ? sliderOptionsObj : defaultOptions);
        });
    }
});
