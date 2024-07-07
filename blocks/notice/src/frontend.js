document.addEventListener('DOMContentLoaded', function (event) {
    let notices = document.querySelectorAll('.wp-block-zolo-notice');

    for (let i = 0; i < notices.length; i++) {
        let dismissButton = notices[i].querySelector('.zolo-notice-dismiss');

        // Return if there is no dismiss button
        if (!dismissButton) {
            return;
        }

        notices[i].style.position = 'relative';
        dismissButton.style.position = 'absolute';
        dismissButton.style.right = ' -37px';
        dismissButton.style.top = '-104px';
        // Hide notice if it's already closed
        let noticeId = notices[i].getAttribute('data-id');
        let showAgain = notices[i].getAttribute('data-show-again');
        let alreadyHidden = localStorage.getItem(`zolo-notice-hidden-${noticeId}`);

        showAgain === 'true' && showNoticeAgain(noticeId);
        showAgain === 'false' && alreadyHidden === '1' && removeNotice(notices[i]);

        // Add click listener
        (function (i) {
            dismissButton.addEventListener('click', function () {
                onButtonClick(notices[i]);
            });
        })(i);
    }
});

function hidePermanently(noticeId) {
    localStorage.setItem(`zolo-notice-hidden-${noticeId}`, '1');
}

function showNoticeAgain(noticeId) {
    localStorage.hasOwnProperty(`zolo-notice-hidden-${noticeId}`) && localStorage.removeItem(`zolo-notice-hidden-${noticeId}`);
}

function removeNotice(notice) {
    notice.remove();
}

// Dismiss button click handler. Hide notice when clicked, hide permanently if
// 'Show After Dismiss' toggle is enabled
function onButtonClick(notice) {
    let noticeId = notice.getAttribute('data-id');
    let showAgain = notice.getAttribute('data-show-again');

    showAgain === 'true' && showNoticeAgain(noticeId);
    showAgain === 'false' && hidePermanently(noticeId);
    removeNotice(notice);
}
