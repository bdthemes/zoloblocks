// document.addEventListener('DOMContentLoaded', () => {
//     const lightboxes = document.querySelectorAll('.wp-block-zolo-lightbox');

//     if (lightboxes.length > 0) {
//         lightboxes.forEach((lightbox) => {
//             const anchorElement = lightbox.querySelector('a[data-fslightbox]');

//             if (!anchorElement) return;

//             const uniqueId = anchorElement.getAttribute('data-fslightbox');

//             fsLightboxInstances[uniqueId].props.onOpen = function () {
//                 lightbox.querySelector(`#${uniqueId}`).style.display = 'block';
//             };

//             fsLightboxInstances[uniqueId].props.onClose = function () {
//                 lightbox.querySelector(`#${uniqueId}`).style.display = 'none';
//             };
//         });
//     }
// });
