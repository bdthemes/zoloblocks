import { animate, inView } from 'motion';

document.addEventListener('DOMContentLoaded', function () {
    const handleFloatingAnimation = (targetElement, floatingAnimation) => {
        let startValue = [];
        let endValue = [];
        const otherOptions = {
            repeat: Infinity,
            direction: 'alternate',
        };

        if (floatingAnimation.translateX.minValue !== 0) {
            startValue.push(`translateX(${floatingAnimation.translateX.minValue}${floatingAnimation.translateX.unit})`);
        }
        if (floatingAnimation.translateY.minValue !== 0) {
            startValue.push(`translateY(${floatingAnimation.translateY.minValue}${floatingAnimation.translateY.unit})`);
        }
        if (floatingAnimation.translateZ.minValue !== 0) {
            startValue.push(`translateZ(${floatingAnimation.translateZ.minValue}${floatingAnimation.translateZ.unit})`);
        }

        if (floatingAnimation.scaleX.minValue !== 0) {
            startValue.push(`scaleX(${floatingAnimation.scaleX.minValue}${floatingAnimation.scaleX.unit})`);
        }
        if (floatingAnimation.scaleY.minValue !== 0) {
            startValue.push(`scaleY(${floatingAnimation.scaleY.minValue}${floatingAnimation.scaleY.unit})`);
        }
        if (floatingAnimation.scaleZ.minValue !== 0) {
            startValue.push(`scaleZ(${floatingAnimation.scaleZ.minValue}${floatingAnimation.scaleZ.unit})`);
        }

        if (floatingAnimation.skewX.minValue !== 0) {
            startValue.push(`skewX(${floatingAnimation.skewX.minValue}${floatingAnimation.skewX.unit})`);
        }
        if (floatingAnimation.skewY.minValue !== 0) {
            startValue.push(`skewY(${floatingAnimation.skewY.minValue}${floatingAnimation.skewY.unit})`);
        }

        if (floatingAnimation.rotateX.minValue !== 0) {
            startValue.push(`rotateX(${floatingAnimation.rotateX.minValue}deg)`);
        }
        if (floatingAnimation.rotateY.minValue !== 0) {
            startValue.push(`rotateY(${floatingAnimation.rotateY.minValue}deg)`);
        }
        if (floatingAnimation.rotateZ.minValue !== 0) {
            startValue.push(`rotateZ(${floatingAnimation.rotateZ.minValue}deg)`);
        }

        // end value
        if (floatingAnimation.translateX.maxValue !== 0) {
            endValue.push(`translateX(${floatingAnimation.translateX.maxValue}${floatingAnimation.translateX.unit})`);
        }
        if (floatingAnimation.translateY.maxValue !== 0) {
            endValue.push(`translateY(${floatingAnimation.translateY.maxValue}${floatingAnimation.translateY.unit})`);
        }
        if (floatingAnimation.translateZ.maxValue !== 0) {
            endValue.push(`translateZ(${floatingAnimation.translateZ.maxValue}${floatingAnimation.translateZ.unit})`);
        }
        if (floatingAnimation.skewX.maxValue !== 0) {
            endValue.push(`skewX(${floatingAnimation.skewX.maxValue}${floatingAnimation.skewX.unit})`);
        }
        if (floatingAnimation.skewY.maxValue !== 0) {
            endValue.push(`skewY(${floatingAnimation.skewY.maxValue}${floatingAnimation.skewY.unit})`);
        }
        if (floatingAnimation.rotateX.maxValue !== 0) {
            endValue.push(`rotateX(${floatingAnimation.rotateX.maxValue}deg)`);
        }
        if (floatingAnimation.rotateY.maxValue !== 0) {
            endValue.push(`rotateY(${floatingAnimation.rotateY.maxValue}deg)`);
        }
        if (floatingAnimation.rotateZ.maxValue !== 0) {
            endValue.push(`rotateZ(${floatingAnimation.rotateZ.maxValue}deg)`);
        }

        if (floatingAnimation.duration !== 0) {
            otherOptions.duration = floatingAnimation.duration / 1000;
        }
        if (floatingAnimation.delay !== 0) {
            otherOptions.delay = floatingAnimation.delay / 1000;
        }
        if (floatingAnimation.easing !== 'custom') {
            otherOptions.easing = floatingAnimation.easing;
        } else {
            otherOptions.easing = [floatingAnimation.easingCustom.split(';')[0]];
        }
        const transformValueStart = startValue.join('');
        const transformValueEnd = endValue.join('');
        const animation = animate(
            targetElement,
            {
                transform: [transformValueStart, transformValueEnd],
                opacity: [floatingAnimation.opacity.minValue, floatingAnimation.opacity.maxValue],
            },
            otherOptions
        );
        return animation;
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
                inView(targetElement, () => {
                    handleFloatingAnimation(targetElement, floatingAnimation);
                });
            }
        });
    }
});
