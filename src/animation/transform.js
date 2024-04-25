
document.addEventListener('DOMContentLoaded', function () {
    const zoloBlockItems = document.querySelectorAll('.zolo-block');
    if (zoloBlockItems.length > 0) {
        zoloBlockItems.forEach((item) => {
            const zoloBlockItemClasses = item.classList;
            const parentClass = Array.from(zoloBlockItemClasses).find((className) => className.startsWith('parent-'));
            const targetElement = document.querySelector(`.${parentClass}.zolo-transform-animation`);
            if (targetElement) {
                // Create a new parent div element
                const parentDiv = document.createElement('div');
                // Add necessary classes to the parent div
                parentDiv.classList.add('zolo-transform-wrapper');
                parentDiv.classList.add(parentClass);
                // Wrap the targetElement with the parent div
                targetElement.parentNode.insertBefore(parentDiv, targetElement);
                parentDiv.appendChild(targetElement);
            }
        });
    }
});
