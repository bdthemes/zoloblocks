import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const facebookFeedBlocks = document.querySelectorAll('.zolo-facebook-feed');

    facebookFeedBlocks.forEach((block) => {
        const layoutType = block.dataset.layout;
        const uniqueId = block.dataset.uniqueId;

        if (layoutType === 'carousel') {
            initCarousel(block);
        } else if (layoutType === 'masonry') {
            initMasonry(block);
        }

        // Add click handlers for read more
        const readMoreLinks = block.querySelectorAll('.zolo-fb-read-more');
        readMoreLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const content = link.closest('.zolo-fb-content');
                const fullText = content.dataset.fullText;
                if (fullText) {
                    content.querySelector('p').textContent = fullText;
                    link.style.display = 'none';
                }
            });
        });
    });
});

function initCarousel(block) {
    const container = block.querySelector('.zolo-fb-posts-container');
    if (!container) return;

    const autoplay = block.dataset.carouselAutoplay === 'true';
    const speed = parseInt(block.dataset.carouselSpeed) || 3000;
    const loop = block.dataset.carouselLoop === 'true';

    // Wrap posts in swiper-wrapper
    const posts = container.querySelectorAll('.zolo-fb-post');
    const wrapper = document.createElement('div');
    wrapper.className = 'swiper-wrapper';
    
    posts.forEach((post) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.appendChild(post.cloneNode(true));
        wrapper.appendChild(slide);
    });

    container.innerHTML = '';
    container.appendChild(wrapper);

    // Add navigation
    const navPrev = document.createElement('div');
    navPrev.className = 'swiper-button-prev';
    const navNext = document.createElement('div');
    navNext.className = 'swiper-button-next';
    container.appendChild(navPrev);
    container.appendChild(navNext);

    // Add pagination
    const pagination = document.createElement('div');
    pagination.className = 'swiper-pagination';
    container.appendChild(pagination);

    // Initialize Swiper
    new Swiper(container, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: loop,
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
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

function initMasonry(block) {
    const container = block.querySelector('.zolo-fb-posts-container');
    if (!container) return;

    // Simple masonry layout using CSS Grid
    const posts = container.querySelectorAll('.zolo-fb-post');
    
    // Calculate heights and adjust grid-row-end
    posts.forEach((post) => {
        const height = post.offsetHeight;
        const rowSpan = Math.ceil(height / 10);
        post.style.gridRowEnd = `span ${rowSpan}`;
    });

    // Re-calculate on image load
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('load', () => {
            const post = img.closest('.zolo-fb-post');
            const height = post.offsetHeight;
            const rowSpan = Math.ceil(height / 10);
            post.style.gridRowEnd = `span ${rowSpan}`;
        });
    });
}

// Handle window resize for masonry
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.querySelectorAll('.zolo-facebook-feed[data-layout="masonry"]').forEach((block) => {
            initMasonry(block);
        });
    }, 250);
});
