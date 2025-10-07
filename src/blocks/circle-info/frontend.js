// /**
//  * ZoloBlocks Circle Info Block – Frontend Script
//  */

// document.addEventListener('DOMContentLoaded', () => {
//     function circleInfoInit(id, circleMoving = true, movingTime = 4000, mouseEvent = 'mouseover') {
//         const wrapper = document.querySelector(`#${id} .zolo-circle-inner`);
//         const circles = document.querySelectorAll(`#${id} .zolo-circle-sub`);
//         const contents = document.querySelectorAll(`#${id} .zolo-circle-item`);
//         let currentIndex = 1;
//         let rotateInterval;

//         if (!wrapper || !circles.length || !contents.length) return;

//         if (!circleMoving || movingTime <= 0) movingTime = 9999999999;

//         // Function: Spread sub-circles around the parent circle
//         const spreadCircles = () => {
//             const rect = wrapper.getBoundingClientRect();
//             const radius = rect.width / 2;

//             circles.forEach((circle, i) => {
//                 const angle = i * (360 / circles.length) * (Math.PI / 180);
//                 const x = radius * Math.cos(angle);
//                 const y = radius * Math.sin(angle);
//                 circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//             });
//         };

//         spreadCircles();
//         window.addEventListener('resize', () => {
//             clearTimeout(window._zoloResizeTimer);
//             window._zoloResizeTimer = setTimeout(spreadCircles, 100);
//         });

//         // Function: Auto rotate
//         const autoRotate = () => {
//             const total = circles.length;
//             if (currentIndex > total) currentIndex = 1;

//             circles.forEach((c) => c.classList.remove('active'));
//             contents.forEach((c) => c.classList.remove('active'));

//             const activeCircle = circles[currentIndex - 1];
//             const activeContent = contents[currentIndex - 1];

//             if (activeCircle && activeContent) {
//                 activeCircle.classList.add('active');
//                 activeContent.classList.add('active');
//             }

//             wrapper.style.transform = `rotate(${(currentIndex - 1) * 36}deg)`;
//             wrapper.style.transition = '1s';

//             document.querySelectorAll(`#${id} .zolo-circle-sub i, #${id} .zolo-circle-sub svg`).forEach((icon) => {
//                 icon.style.transform = `rotate(${360 - (currentIndex - 1) * 36}deg)`;
//                 icon.style.transition = '2s';
//             });

//             currentIndex++;
//         };

//         // Mouse interaction
//         circles.forEach((circle, index) => {
//             const activate = () => {
//                 circles.forEach((c) => c.classList.remove('active'));
//                 contents.forEach((c) => c.classList.remove('active'));
//                 circle.classList.add('active');
//                 contents[index].classList.add('active');
//                 currentIndex = index + 1;
//             };

//             if (mouseEvent === 'click') {
//                 circle.addEventListener('click', activate);
//             } else {
//                 circle.addEventListener('mouseover', activate);
//             }
//         });

//         // Autoplay on/off
//         if (circleMoving) rotateInterval = setInterval(autoRotate, movingTime);
//     }

//     // Observe all Zolo Circle Info Blocks
//     const allCircleBlocks = document.querySelectorAll('.wp-block-zolo-circle-info');

//     allCircleBlocks.forEach((block) => {
//         const settings = block.dataset.settings ? JSON.parse(block.dataset.settings) : {};
//         circleInfoInit(
//             settings.id || block.id,
//             settings.circleMoving ?? true,
//             settings.movingTime ?? 4000,
//             settings.mouseEvent ?? 'mouseover'
//         );
//     });
// });
