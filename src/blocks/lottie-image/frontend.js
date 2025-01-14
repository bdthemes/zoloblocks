document.addEventListener('DOMContentLoaded', () => {
    const lottieImages = document.querySelectorAll('.wp-block-zolo-lottie-image');

    if (lottieImages.length > 0) {
        lottieImages.forEach((lottie) => {
            const settings = lottie.dataset?.settings || '{}';
            const options = JSON.parse(settings);

            const lottiePlayer = lottie.querySelector('lottie-player');

            if (lottiePlayer && options.trigger === 'click') {
                // Check if trigger is 'click'
                let isAnimationComplete = true;

                lottiePlayer.addEventListener('complete', () => {
                    isAnimationComplete = true;
                });

                // Play animation on click
                lottie.addEventListener('click', () => {
                    if (isAnimationComplete || lottiePlayer.currentFrame === 0) {
                        lottiePlayer.stop();
                        lottiePlayer.play();
                        isAnimationComplete = false;
                    }
                });
            }
        });
    }
});
