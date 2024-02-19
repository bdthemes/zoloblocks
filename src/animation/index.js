import { animate, inView } from 'motion';

document.addEventListener('DOMContentLoaded', function () {
    const handleMotionAnimation = (targetElement, entranceAnimation) => {
        let transformOptions = [];
        if (entranceAnimation.translateX.value !== 0) {
            transformOptions.push(`translateX(${entranceAnimation.translateX.value}${entranceAnimation.translateX.unit})`);
        }
        if (entranceAnimation.translateY.value !== 0) {
            transformOptions.push(`translateY(${entranceAnimation.translateY.value}${entranceAnimation.translateY.unit})`);
        }
        if (entranceAnimation.translateZ.value !== 0) {
            transformOptions.push(`translateZ(${entranceAnimation.translateZ.value}${entranceAnimation.translateZ.unit})`);
        }
        if (entranceAnimation.rotateX.value !== 0) {
            transformOptions.push(`rotateX(${entranceAnimation.rotateX.value}deg)`);
        }
        if (entranceAnimation.rotateY.value !== 0) {
            transformOptions.push(`rotateY(${entranceAnimation.rotateY.value}deg)`);
        }
        if (entranceAnimation.rotateZ.value !== 0) {
            transformOptions.push(`rotateZ(${entranceAnimation.rotateZ.value}deg)`);
        }
        if (entranceAnimation.scaleX.value !== 0) {
            transformOptions.push(`scaleX(${entranceAnimation.scaleX.value})`);
        }
        if (entranceAnimation.scaleY.value !== 0) {
            transformOptions.push(`scaleY(${entranceAnimation.scaleY.value})`);
        }
        if (entranceAnimation.scaleZ.value !== 0) {
            transformOptions.push(`scaleZ(${entranceAnimation.scaleZ.value})`);
        }
        if (entranceAnimation.skewX.value !== 0) {
            transformOptions.push(`skewX(${entranceAnimation.skewX.value}deg)`);
        }
        if (entranceAnimation.skewY.value !== 0) {
            transformOptions.push(`skewY(${entranceAnimation.skewY.value}deg)`);
        }

        const otherOptions = {};
        if (entranceAnimation.duration) {
            otherOptions.duration = entranceAnimation.duration / 1000;
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
        if (entranceAnimation.perspective !== 0) {
            otherOptions.perspective = entranceAnimation.perspective;
        }
        if (entranceAnimation.easing !== 'custom') {
            otherOptions.easing = entranceAnimation.easing;
        } else {
            otherOptions.easing = [entranceAnimation.easingCustom.split(';')[0]];
        }
        // array to string
        const transformOptionsion = transformOptions.join('');

        const options = {
            transform: [transformOptionsion, 'none'],
            opacity: [entranceAnimation.opacity ? entranceAnimation.opacity : 0, 1],
            transformOrigin: entranceAnimation.transformOrigin,
        };

          if (entranceAnimation.perspective !== 0) {
              options.perspective = [`${entranceAnimation.perspective}px`, 'none'];
              options.transformStyle = 'preserve-3d';
          }

        if (entranceAnimation.presetAnimation === 'custom') {
            animate(targetElement, options, otherOptions);
        } else {
            const presetAnimations = {
                fade: {
                    transform: ['none', 'none'],
                    opacity: [0, 1],
                },
                slide: {
                    transform: ['translateX(100%)', 'none'],
                    opacity: [0, 1],
                },
                scale: {
                    transform: ['scale(0)', 'none'],
                    opacity: [0, 1],
                },
                rotate: {
                    transform: ['rotate(180deg)', 'none'],
                    opacity: [0, 1],
                },
                flip: {
                    transform: ['rotateY(180deg)', 'none'],
                    opacity: [0, 1],
                },
                zoom: {
                    transform: ['scale(0)', 'none'],
                    opacity: [0, 1],
                },
                scaleUp: {
                    transform: ['scale(0)', 'none'],
                    opacity: [0, 1],
                },
                scaleDown: {
                    transform: ['scale(2)', 'none'],
                    opacity: [0, 1],
                },
                top: {
                    transform: ['translateY(-100px)', 'none'],
                    opacity: [0, 1],
                },
                right: {
                    transform: ['translateX(100px)', 'none'],
                    opacity: [0, 1],
                },
                bottom: {
                    transform: ['translateY(100px)', 'none'],
                    opacity: [0, 1],
                },
                left: {
                    transform: ['translateX(-100px)', 'none'],
                    opacity: [0, 1],
                },
                topSmall: {
                    transform: ['translateY(-20px)', 'none'],
                    opacity: [0, 1],
                },
                rightSmall: {
                    transform: ['translateX(20px)', 'none'],
                    opacity: [0, 1],
                },

                bottomSmall: {
                    transform: ['translateY(20px)', 'none'],
                    opacity: [0, 1],
                },
                leftSmall: {
                    transform: ['translateX(-20px)', 'none'],
                    opacity: [0, 1],
                },
                topMedium: {
                    transform: ['translateY(-50px)', 'none'],
                    opacity: [0, 1],
                },
                rightMedium: {
                    transform: ['translateX(50px)', 'none'],
                    opacity: [0, 1],
                },
                bottomMedium: {
                    transform: ['translateY(50px)', 'none'],
                    opacity: [0, 1],
                },
                leftMedium: {
                    transform: ['translateX(-50px)', 'none'],
                    opacity: [0, 1],
                },
            };
            const presetAnimation = presetAnimations[entranceAnimation.presetAnimation];
            animate(targetElement, presetAnimation, otherOptions);
        }
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
