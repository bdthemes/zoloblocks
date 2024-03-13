document.addEventListener('DOMContentLoaded', function () {
    const handleEntranceAnimationTween = (targetElement, entranceAnimation) => {
        // define the animation tween
        // let tween;
        let tween = gsap.timeline({
            scrollTrigger: {
                trigger: targetElement,
            },
        });

        // Define the initial position and properties of the box
        gsap.set(targetElement, { x: 0, opacity: 0 });

        const transformOptions = {};
        const transformOptionsGlobal = {
            duration: entranceAnimation.duration ? entranceAnimation.duration / 1000 : 2,
            delay: entranceAnimation.delay ? entranceAnimation.delay / 1000 : 0,
            ease: entranceAnimation.easing !== 'custom' ? entranceAnimation.easing : entranceAnimation.easingCustom.split(';')[0],
        };

        if (entranceAnimation.translateX.value !== 0) {
            const xKey = entranceAnimation.translateX.unit === 'px' ? 'x' : 'xPercent';
            transformOptions[xKey] = entranceAnimation.translateX.value;
        }
        if (entranceAnimation.translateY.value !== 0) {
            const yKey = entranceAnimation.translateY.unit === 'px' ? 'y' : 'yPercent';
            transformOptions[yKey] = entranceAnimation.translateY.value;
        }
        if (entranceAnimation.translateZ.value !== 0) {
            const zKey = entranceAnimation.translateZ.unit === 'px' ? 'z' : 'zPercent';
            transformOptions[zKey] = entranceAnimation.translateZ.value;
        }

        // ROTATION
        if (entranceAnimation.rotateX.value !== 0) {
            transformOptions.rotationX = entranceAnimation.rotateX.value;
        }
        if (entranceAnimation.rotateY.value !== 0) {
            transformOptions.rotationY = entranceAnimation.rotateY.value;
        }
        if (entranceAnimation.rotateZ.value !== 0) {
            transformOptions.rotationZ = entranceAnimation.rotateZ.value;
        }
        // SCALE
        if (entranceAnimation.scaleX.value !== 0) {
            transformOptions.scaleX = entranceAnimation.scaleX.value;
        }
        if (entranceAnimation.scaleY.value !== 0) {
            transformOptions.scaleY = entranceAnimation.scaleY.value;
        }
        if (entranceAnimation.scaleZ.value !== 0) {
            transformOptions.scale = entranceAnimation.scaleZ.value;
        }
        // SKEW
        if (entranceAnimation.skewX.value !== 0) {
            transformOptions.skewX = entranceAnimation.skewX.value;
        }
        if (entranceAnimation.skewY.value !== 0) {
            transformOptions.skewY = entranceAnimation.skewY.value;
        }
        // ADDITIONAL
        if (entranceAnimation.perspective !== 0) {
            transformOptions.transformPerspective = entranceAnimation.perspective;
        }
        if (entranceAnimation.opacity !== 0) {
            transformOptions.opacity = entranceAnimation.opacity;
        }
        // Create the animation tween
        if (entranceAnimation.presetAnimation === 'custom') {
            tween = tween.to(targetElement, {
                ...transformOptions,
                ...transformOptionsGlobal,
            });
        } else {
            const presetAnimations = {
                fade: {
                    opacity: 1,
                    duration: 2,
                },
                slide: {
                    xPercent: 100,
                    opacity: 1,
                },
                scale: {
                    scale: 0,
                    opacity: 1,
                },
                rotate: {
                    rotation: 180,
                    opacity: 1,
                },
                flip: {
                    rotationY: 180,
                    opacity: 1,
                },
                zoom: {
                    scale: 0,
                    opacity: 1,
                },
                scaleUp: {
                    scale: 1.5,
                    opacity: 1,
                },
                scaleDown: {
                    scale: 0.5,
                    opacity: 1,
                },
                top: {
                    yPercent: -100,
                    opacity: 1,
                },
                right: {
                    xPercent: 100,
                    opacity: 1,
                },
                bottom: {
                    yPercent: 100,
                    opacity: 1,
                },
                left: {
                    xPercent: -100,
                    opacity: 1,
                },
                topSmall: {
                    yPercent: -20,
                    opacity: 1,
                },
                rightSmall: {
                    xPercent: 20,
                    opacity: 1,
                },
                bottomSmall: {
                    yPercent: 20,
                    opacity: 1,
                },
                leftSmall: {
                    xPercent: -20,
                    opacity: 1,
                },
                topMedium: {
                    yPercent: -50,
                    opacity: 1,
                },
                rightMedium: {
                    xPercent: 50,
                    opacity: 1,
                },
                bottomMedium: {
                    yPercent: 50,
                    opacity: 1,
                },
                leftMedium: {
                    xPercent: -50,
                    opacity: 1,
                },
            };
            const presetAnimation = presetAnimations[entranceAnimation.presetAnimation];
            tween = tween.to(targetElement, {
                ...presetAnimation,
                ...transformOptionsGlobal,
            });
        }
        return tween;
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
                handleEntranceAnimationTween(targetElement, entranceAnimation);
            }
        });
    }
});
