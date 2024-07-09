window.addEventListener('load', function () {
    const zoloPopups = document.querySelectorAll('.wp-block-zolo-popup-builder');
    zoloPopups &&
        zoloPopups.length > 0 &&
        zoloPopups.forEach(function (popup) {
            const type = popup.getAttribute('data-type');
            // const delay = popup.getAttribute('data-delay');
            const bgFixed = popup.getAttribute('data-bg-fixed');
            const closeBtn = popup.querySelector('.zolo-popup-close-btn');

            if (type === 'popup_box' && bgFixed === 'true') {
                // add class to body
                document.body.classList.add('zolo-popup-fixed');
            }

            closeBtn &&
                closeBtn.addEventListener('click', function () {
                    popup.style.display = 'none';

                    if (type === 'popup_box' && bgFixed === 'true') {
                        // remove class from body
                        document.body.classList.remove('zolo-popup-fixed');
                    }
                });
        });
});
