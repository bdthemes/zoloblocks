import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, A11y, Keyboard, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

// Constants
const DEFAULT_GAP = 20;
const DEFAULT_SPEED = 3000;
const DEFAULT_DESKTOP_COLUMNS = 3;
const DEFAULT_TABLET_COLUMNS = 2;
const DEFAULT_MOBILE_COLUMNS = 1;

document.addEventListener('DOMContentLoaded', () => {
    const instagramFeedBlocks = document.querySelectorAll('.zolo-instagram-feed');

    instagramFeedBlocks.forEach((block) => {
        const layoutType = block.dataset.layout;
        const enableLightbox = block.dataset.lightbox === 'true';
        const uniqueId = block.dataset.uniqueId;

        // Initialize lightbox if enabled
        if (enableLightbox && uniqueId) {
            const entranceAnimation = block.dataset.entranceanimation || 'zolo-zoom-in';
            const showLightboxThumb = block.dataset.showthumb === 'true';

            const galleryKey = `instagram-gallery-${uniqueId}`;
            
            // Set lightbox properties directly like image-gallery does
            if (typeof fsLightboxInstances !== 'undefined' && fsLightboxInstances[galleryKey]) {
                fsLightboxInstances[galleryKey].props.showThumbsOnMount = showLightboxThumb;
                fsLightboxInstances[galleryKey].props.showThumbsWithCaptions = showLightboxThumb;
                fsLightboxInstances[galleryKey].props.initialAnimation = entranceAnimation;
                fsLightboxInstances[galleryKey].props.slideChangeAnimation = entranceAnimation;
            }
        }

        if (layoutType === 'carousel') {
            initCarousel(block);
        }
    });
});

function initCarousel(block) {
    const container = block.querySelector('.zolo-ig-carousel');
    if (!container) return;

    const autoplay = block.dataset.carouselAutoplay === 'true';
    const speed = parseInt(block.dataset.carouselSpeed) || DEFAULT_SPEED;
    const loop = block.dataset.carouselLoop === 'true';
    const desktopColumns = parseInt(block.dataset.desktopColumns) || DEFAULT_DESKTOP_COLUMNS;
    const tabletColumns = parseInt(block.dataset.tabletColumns) || DEFAULT_TABLET_COLUMNS;
    const mobileColumns = parseInt(block.dataset.mobileColumns) || DEFAULT_MOBILE_COLUMNS;
    const gap = parseInt(block.dataset.gap) || DEFAULT_GAP;

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


