window.addEventListener('DOMContentLoaded', () => {
    const zoloSliders = document.querySelectorAll('.wp-block-zolo-slider');
    if (zoloSliders.length > 0) {
        zoloSliders.forEach((slider) => {
            const sliderSelector = slider.querySelector('.swiper');
            const sliderOptions = slider.dataset.swiperOptions;
            const sliderOptionsObj = JSON.parse(sliderOptions);

            console.log(sliderOptionsObj);

            new Swiper(sliderSelector, sliderOptionsObj);
        });
    }
});
