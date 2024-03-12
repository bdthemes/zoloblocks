document.addEventListener('DOMContentLoaded', function () {
    const handleFloatingAnimationTween = (targetElement, floatingAnimation) => {
        // define the animation tween
        let tween;
        let startValue = [];
        let endValue = [];

        // translate x
        if (floatingAnimation.translateX.minValue !== 0) {
            const xKey = floatingAnimation.translateX.unit === 'px' ? 'x' : 'xPercent';
            startValue[xKey] = floatingAnimation.translateX.minValue;
        }
        if (floatingAnimation.translateX.maxValue !== 0) {
            const xKey = floatingAnimation.translateX.unit === 'px' ? 'x' : 'xPercent';
            endValue[xKey] = floatingAnimation.translateX.maxValue;
        }
        // translate y
        if (floatingAnimation.translateY.minValue !== 0) {
            const yKey = floatingAnimation.translateY.unit === 'px' ? 'y' : 'yPercent';
            startValue[yKey] = floatingAnimation.translateY.minValue;
        }
        if (floatingAnimation.translateY.maxValue !== 0) {
            const yKey = floatingAnimation.translateY.unit === 'px' ? 'y' : 'yPercent';
            endValue[yKey] = floatingAnimation.translateY.maxValue;
        }
        // translate z

        if (floatingAnimation.translateZ.minValue !== 0) {
            const zkey = floatingAnimation.translateZ.unit === 'px' ? 'z' : 'ZPercent';
            startValue[zkey] = floatingAnimation.translateZ.minValue;
        }
        if (floatingAnimation.translateZ.maxValue !== 0) {
            const zkey = floatingAnimation.translateZ.unit === 'px' ? 'z' : 'ZPercent';
            endValue[zkey] = floatingAnimation.translateZ.maxValue;
        }
        // scale x
        if (floatingAnimation.scaleX.minValue !== 0) {
            startValue.scaleX = floatingAnimation.scaleX.minValue;
        }
        if (floatingAnimation.scaleX.maxValue !== 0) {
            endValue.scaleX = floatingAnimation.scaleX.maxValue;
        }
        if (floatingAnimation.scaleY.minValue !== 0) {
            startValue.scaleY = floatingAnimation.scaleY.minValue;
        }
        if (floatingAnimation.scaleY.maxValue !== 0) {
            endValue.scaleY = floatingAnimation.scaleY.maxValue;
        }
        if (floatingAnimation.scaleZ.minValue !== 0) {
            startValue.scale = floatingAnimation.scaleZ.minValue;
        }
        if (floatingAnimation.scaleZ.maxValue !== 0) {
            endValue.scale = floatingAnimation.scaleZ.maxValue;
        }
        // skew x
        if (floatingAnimation.skewX.minValue !== 0) {
            startValue.skewX = floatingAnimation.skewX.minValue;
        }
        if (floatingAnimation.skewX.maxValue !== 0) {
            endValue.skewX = floatingAnimation.skewX.maxValue;
        }
        if (floatingAnimation.skewY.minValue !== 0) {
            startValue.skewY = floatingAnimation.skewY.minValue;
        }
        if (floatingAnimation.skewY.maxValue !== 0) {
            endValue.skewY = floatingAnimation.skewY.maxValue;
        }
        // rotate x
        if (floatingAnimation.rotateX.minValue !== 0) {
            startValue.rotationX = floatingAnimation.rotateX.minValue;
        }
        if (floatingAnimation.rotateX.maxValue !== 0) {
            endValue.rotationX = floatingAnimation.rotateX.maxValue;
        }
        if (floatingAnimation.rotateY.minValue !== 0) {
            startValue.rotationY = floatingAnimation.rotateY.minValue;
        }
        if (floatingAnimation.rotateY.maxValue !== 0) {
            endValue.rotationY = floatingAnimation.rotateY.maxValue;
        }
        if (floatingAnimation.rotateZ.minValue !== 0) {
            startValue.rotation = floatingAnimation.rotateZ.minValue;
        }
        if (floatingAnimation.rotateZ.maxValue !== 0) {
            endValue.rotation = floatingAnimation.rotateZ.maxValue;
        }
        // opacity
        if (floatingAnimation.opacity.minValue !== 0) {
            startValue.opacity = floatingAnimation.opacity.minValue;
        }
        if (floatingAnimation.opacity.maxValue !== 0) {
            endValue.opacity = floatingAnimation.opacity.maxValue;
        }

        tween = gsap.fromTo(
            targetElement,
            {
                ...startValue,
            },
            {
                ...endValue,
                repeat: -1,
                yoyo: true,
                duration: floatingAnimation.duration / 1000,
                delay: floatingAnimation.delay / 1000,
                ease: floatingAnimation.easing !== 'custom' ? floatingAnimation.easing : floatingAnimation.easingCustom.split(';')[0],
            }
        );

        // Function to start or reset the animation
        if (isPlaying) {
            tween.restart(); // Restart the animation
        } else {
            tween.pause(); // Pause the animation
            gsap.set(targetElement, { clearProps: 'all' }); // Reset the position and properties
        }
        return tween;
    };

    const zoloBlockItems = document.querySelectorAll('.zolo-block');
    if (zoloBlockItems.length > 0) {
        zoloBlockItems.forEach((item) => {
            const zoloBlockItemClasses = item.classList;
            // find the class name that starts with 'parent-'
            const parentClass = Array.from(zoloBlockItemClasses).find((className) => className.startsWith('parent-'));
            const targetElement = document.querySelector(`.${parentClass}.zolo-floating-animation`);
            if (targetElement) {
                const floatingAnimation = JSON.parse(targetElement.dataset.floating);
                handleFloatingAnimationTween(targetElement, floatingAnimation);
            }
        });
    }
});
