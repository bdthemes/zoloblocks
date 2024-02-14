import { animate, scroll, inView } from 'motion';

document.addEventListener('DOMContentLoaded', function () {
    const zoloBlockItems = document.querySelectorAll('.zolo-block');

    if (zoloBlockItems.length > 0) {
        zoloBlockItems.forEach((item) => {
            const zoloBlockItemClasses = item.classList;
            // find the class name that starts with 'parent-'
            const parentClass = Array.from(zoloBlockItemClasses).find((className) => className.startsWith('parent-'));

            const targetElement = document.querySelector(`.${parentClass}.zolo-entrance-animation`);

            if (targetElement) {
                const animationOptions = JSON.parse(targetElement.dataset.animation);
                console.log(animationOptions);
            }
        });
    }
});
