document.addEventListener('DOMContentLoaded', () => {
    const lottieImages = document.querySelectorAll('.wp-block-zolo-lottie-image');

    lottieImages.forEach((lottie) => {
        const options = JSON.parse(lottie.dataset?.settings || '{}');
        const lottiePlayer = lottie.querySelector('lottie-player');
        const reverse = lottiePlayer?.getAttribute('direction') === '-1';

        const checkLottieLoaded = () => {
            if (lottiePlayer?._lottie) {
                const { totalFrames, goToAndStop } = lottiePlayer._lottie;

                window.addEventListener('scroll', () => {
                    const { top, bottom } = lottiePlayer.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    const isInView = top < windowHeight && bottom > 0;
                    if (isInView) {
                        const progress = Math.min(Math.max((window.scrollY + windowHeight - top) / (bottom - top + windowHeight), 0), 1);
                        let newFrame = Math.round(progress * totalFrames);
                        if (reverse) newFrame = totalFrames - newFrame;
                        if (newFrame < totalFrames) goToAndStop.call(lottiePlayer._lottie, newFrame, true);
                    }
                });
            } else {
                setTimeout(checkLottieLoaded, 100);
            }
        };

        if (lottiePlayer) {
            let isAnimationComplete = true;
            lottiePlayer.addEventListener('complete', () => {
                isAnimationComplete = true;
            });

            if (options?.trigger === 'click') {
                lottiePlayer.addEventListener('click', () => {
                    if (isAnimationComplete || lottiePlayer.currentFrame === 0) {
                        lottiePlayer.stop();
                        lottiePlayer.play();
                        isAnimationComplete = false;
                    }
                });
            }

            if (options?.trigger === 'scroll') checkLottieLoaded();
            if(options?.trigger === 'viewport') {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                                lottiePlayer.play();

                        } else {
                               lottiePlayer.pause();

                        }
                    });
                });

                observer.observe(lottie);
            }
        }
    });
});
