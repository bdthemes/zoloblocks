// admin-scripts.js
jQuery(document).ready(function ($) {
    $('.zolo-popup-btn').on('click', function () {
        var postId = $(this).data('post-id');
        var nonce = zoloPopup?.nonce;
        var switcher = $(this).find('.switch');
        var newValue = switcher.hasClass('switch-on') ? 0 : 1;

        $.ajax({
            url: zoloPopup?.ajaxurl,
            type: 'POST',
            data: {
                action: 'zolo_update_popup_status',
                post_id: postId,
                nonce: nonce,
            },
            success: function (response) {
                if (response.status === 'success') {
                    if (newValue) {
                        switcher.removeClass('switch-off').addClass('switch-on');
                    } else {
                        switcher.removeClass('switch-on').addClass('switch-off');
                    }
                } else {
                    console.log('Failed to update book featured status');
                }
            },
        });
    });
});
