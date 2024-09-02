document.addEventListener('DOMContentLoaded', function () {
    const zoloNotices = document.querySelectorAll('.wp-block-zolo-notice');

    if (zoloNotices && zoloNotices.length > 0) {
        zoloNotices.forEach(function (notice) {
            const dismissBtn = notice.querySelector('.zolo-notice-dismiss');
            const id = notice.getAttribute('data-id');

            if (!dismissBtn) {
                return;
            }

            // close notice on click event
            dismissBtn.addEventListener('click', function () {
                // add a class to the notice to hide it
                notice.classList.add('is-hidden');
                // create a dynamic cookie name based on the notice id and set it to true for 30 days
                document.cookie = `zolo_${id}=true; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
            });
        });
    }
});
