import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const facebookReviewsBlocks = document.querySelectorAll('.zolo-facebook-reviews');

    facebookReviewsBlocks.forEach((block) => {
        const layoutType = block.dataset.layout;

        if (layoutType === 'carousel') {
            initCarousel(block);
        } else if (layoutType === 'masonry') {
            initMasonry(block);
        }

        // Add click handlers for read more
        const readMoreLinks = block.querySelectorAll('.zolo-fb-review-read-more');
        readMoreLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const reviewText = link.closest('.zolo-fb-review-text');
                const fullText = reviewText.dataset.fullText;
                if (fullText) {
                    reviewText.querySelector('p').textContent = fullText;
                    link.style.display = 'none';
                }
            });
        });
    });
});

function initCarousel(block) {
    const container = block.querySelector('.zolo-fb-reviews-container');
    if (!container) return;

    const autoplay = block.dataset.carouselAutoplay === 'true';
    const speed = parseInt(block.dataset.carouselSpeed) || 3000;
    const loop = block.dataset.carouselLoop === 'true';
    const columns = parseInt(block.dataset.columns) || 3;

    // Create swiper container if it doesn't exist
    let swiperContainer = container.querySelector('.swiper');
    if (!swiperContainer) {
        // Wrap reviews in swiper-wrapper
        const reviews = container.querySelectorAll('.zolo-fb-review-card');
        const wrapper = document.createElement('div');
        wrapper.className = 'swiper-wrapper';
        
        reviews.forEach((review) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.appendChild(review.cloneNode(true));
            wrapper.appendChild(slide);
        });

        swiperContainer = document.createElement('div');
        swiperContainer.className = 'swiper';
        container.innerHTML = '';
        swiperContainer.appendChild(wrapper);

        // Add navigation
        const navPrev = document.createElement('div');
        navPrev.className = 'swiper-button-prev';
        navPrev.setAttribute('role', 'button');
        navPrev.setAttribute('aria-label', 'Previous slide');
        navPrev.setAttribute('tabindex', '0');
        const navNext = document.createElement('div');
        navNext.className = 'swiper-button-next';
        navNext.setAttribute('role', 'button');
        navNext.setAttribute('aria-label', 'Next slide');
        navNext.setAttribute('tabindex', '0');
        swiperContainer.appendChild(navPrev);
        swiperContainer.appendChild(navNext);

        // Add pagination
        const pagination = document.createElement('div');
        pagination.className = 'swiper-pagination';
        pagination.setAttribute('role', 'group');
        pagination.setAttribute('aria-label', 'Carousel pagination');
        swiperContainer.appendChild(pagination);

        container.appendChild(swiperContainer);
    }

    // Initialize Swiper
    new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Autoplay, A11y, Keyboard],
        slidesPerView: columns,
        spaceBetween: 20,
        loop: loop,
        centeredSlides: false,
        watchSlidesProgress: true,
        watchOverflow: true,
        autoplay: autoplay ? {
            delay: speed,
            disableOnInteraction: false,
        } : false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            type: 'bullets',
            bulletElement: 'button',
        },
        a11y: {
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            paginationBulletMessage: 'Go to slide {{index}}',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: columns,
                spaceBetween: 20,
            },
        },
    });
}

function initMasonry(block) {
    const container = block.querySelector('.zolo-fb-reviews-container');
    if (!container) return;

    // Get columns setting from data attribute or calculate from window width
    const columns = parseInt(block.dataset.columns) || 3;
    
    // Set column count based on columns attribute and screen size
    if (window.innerWidth > 1024) {
        container.style.columnCount = columns;
    } else if (window.innerWidth > 640) {
        container.style.columnCount = Math.min(columns, 2);
    } else {
        container.style.columnCount = 1;
    }
}

// Handle window resize for masonry
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.querySelectorAll('.zolo-facebook-reviews[data-layout="masonry"]').forEach((block) => {
            initMasonry(block);
        });
    }, 100);
});
