import { animate, inView } from 'motion';

document.addEventListener('DOMContentLoaded', function () {
    const handleMotionAnimation = (targetElement, entranceAnimation) => {
        let transformOptions = [];
        if (entranceAnimation.translateX) {
            transformOptions.push(`translateX(${entranceAnimation.translateX}px)`);
        }
        if (entranceAnimation.translateY) {
            transformOptions.push(`translateY(${entranceAnimation.translateY}px)`);
        }
        if (entranceAnimation.rotateX) {
            transformOptions.push(`rotateX(${entranceAnimation.rotateX}deg)`);
        }
        if (entranceAnimation.rotateY) {
            transformOptions.push(`rotateY(${entranceAnimation.rotateY}deg)`);
        }
        if (entranceAnimation.rotateZ) {
            transformOptions.push(`rotateZ(${entranceAnimation.rotateZ}deg)`);
        }
        if (entranceAnimation.scaleX) {
            transformOptions.push(`scaleX(${entranceAnimation.scaleX})`);
        }
        if (entranceAnimation.scaleY) {
            transformOptions.push(`scaleY(${entranceAnimation.scaleY})`);
        }
        if (entranceAnimation.skewX) {
            transformOptions.push(`skewX(${entranceAnimation.skewX}deg)`);
        }
        if (entranceAnimation.skewY) {
            transformOptions.push(`skewY(${entranceAnimation.skewY}deg)`);
        }
        if (entranceAnimation.perspective) {
            transformOptions.push(`perspective(${entranceAnimation.perspective}px)`);
        }

        const otherOptions = {};
        if (entranceAnimation.duration) {
            otherOptions.duration = entranceAnimation.duration / 1000;
        }
        if (entranceAnimation.easing) {
            otherOptions.easing = entranceAnimation.easing;
        }
        if (entranceAnimation.delay) {
            otherOptions.delay = entranceAnimation.delay / 1000;
        }
        if (entranceAnimation.direction) {
            otherOptions.direction = entranceAnimation.direction;
        }
        if (entranceAnimation.repeat === true) {
            otherOptions.repeat = Infinity;
        }
        // array to string
        const transformOptionsion = transformOptions.join('');

        const options = {
            transform: [transformOptionsion, 'none'],
            opacity: [0, 1],

        };
        animate(targetElement, options, otherOptions);
    };
    const zoloBlockItems = document.querySelectorAll('.zolo-block');
    if (zoloBlockItems.length > 0) {
        zoloBlockItems.forEach((item) => {
            const zoloBlockItemClasses = item.classList;
            // find the class name that starts with 'parent-'
            const parentClass = Array.from(zoloBlockItemClasses).find((className) => className.startsWith('parent-'));
            const targetElement = document.querySelector(`.${parentClass}.zolo-entrance-animation`);
            if (targetElement) {
                const entranceAnimation = JSON.parse(targetElement.dataset.animation);
                inView(targetElement, () => {
                    handleMotionAnimation(targetElement, entranceAnimation);
                });
            }
        });
    }
});
