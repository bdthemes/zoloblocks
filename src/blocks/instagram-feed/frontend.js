import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, A11y, Keyboard, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

document.addEventListener('DOMContentLoaded', () => {
    const instagramFeedBlocks = document.querySelectorAll('.zolo-instagram-feed');

    instagramFeedBlocks.forEach((block) => {
        const layoutType = block.dataset.layout;

        if (layoutType === 'carousel') {
            initCarousel(block);
        } else if (layoutType === 'masonry') {
            initMasonry(block);
        }
    });
});

function initCarousel(block) {
    const container = block.querySelector('.zolo-ig-carousel');
    if (!container) return;

    const autoplay = block.dataset.carouselAutoplay === 'true';
    const speed = parseInt(block.dataset.carouselSpeed) || 3000;
    const loop = block.dataset.carouselLoop === 'true';
    const desktopColumns = parseInt(block.dataset.desktopColumns) || 3;
    const tabletColumns = parseInt(block.dataset.tabletColumns) || 2;
    const mobileColumns = parseInt(block.dataset.mobileColumns) || 1;
    const gap = parseInt(block.dataset.gap) || 20;

    const swiperContainer = container.querySelector('.swiper');
    if (!swiperContainer) return;

    // Initialize Swiper
    new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Autoplay, A11y, Keyboard],
        slidesPerView: mobileColumns,
        spaceBetween: gap,
        loop: loop,
        centeredSlides: false,
        watchSlidesProgress: true,
        watchOverflow: true,
        autoplay: autoplay ? {
            delay: speed,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        } : false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        a11y: {
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
        },
        navigation: {
            nextEl: container.querySelector('.swiper-button-next'),
            prevEl: container.querySelector('.swiper-button-prev'),
        },
        pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            640: {
                slidesPerView: mobileColumns,
            },
            768: {
                slidesPerView: tabletColumns,
            },
            1024: {
                slidesPerView: desktopColumns,
            },
        },
        on: {
            init: function () {
                // Ensure images are loaded properly
                this.slides.forEach(slide => {
                    const img = slide.querySelector('img');
                    if (img && !img.complete) {
                        img.addEventListener('load', () => {
                            this.update();
                        });
                    }
                });
            },
        },
    });
}

function initMasonry(block) {
    const container = block.querySelector('.zolo-ig-masonry');
    if (!container) return;

    // Masonry layout is handled by CSS columns, but we can ensure images are loaded
    const images = container.querySelectorAll('img');
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) return;

    images.forEach((img) => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.addEventListener('load', () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    // All images loaded, trigger reflow
                    container.style.opacity = '0';
                    setTimeout(() => {
                        container.style.opacity = '1';
                        container.style.transition = 'opacity 0.3s ease';
                    }, 10);
                }
            });
        }
    });

    if (loadedCount === totalImages) {
        container.style.opacity = '1';
    }
}
