document.addEventListener('DOMContentLoaded', function () {
    const newsLetter = document.querySelectorAll('.wp-block-zolo-newsletter');

    const createNotice = (node, data) => {
        node.after(Object.assign(document.createElement('div'), data));
    };

    if (newsLetter.length > 0) {
        newsLetter.forEach((form) => {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = form.querySelector('#zolo-newsletter-email-field').value;
                let fname = '';
                if (form.querySelector('#zolo-newsletter-name-field')) {
                    fname = form.querySelector('#zolo-newsletter-name-field').value;
                }
                const apiData = {
                    provider: 'mailchimp',
                    textSuccess: 'Thank you for subscribing!',
                    textError: 'Please enter a valid email address',
                    textSubscribed: 'You are already subscribed',
                };

                const data = new FormData();
                data.append('email', email);
                data.append('list', zoloSettings.list_id);
                data.append('fname', fname);
                data.append('action', 'zolo_subscribe_newsletter');
                data.append('nonce', zoloSettings.zolo_nonce);
                data.append('data', JSON.stringify(apiData));
                fetch(zoloSettings.ajaxurl, {
                    method: 'POST',
                    body: data,
                    credentials: 'same-origin',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data) {
                            if (form?.nextElementSibling?.classList.contains('zolo-newsletter-message')) {
                                form.nextElementSibling.remove();
                            }

                            if (data.status == 'success') {
                                form.querySelector('#zolo-newsletter-email-field').value = '';
                                if (form.querySelector('#zolo-newsletter-name-field')) {
                                    form.querySelector('#zolo-newsletter-name-field').value = '';
                                }
                            }
                            createNotice(form, {
                                innerHTML: `<span id="zolo-newsletter-info-text" class="zolo-newsletter-info-text status-${data.status}">${data.message}</span>`,
                                className: 'zolo-newsletter-message',
                            });
                        }
                    })
                    .catch((error) => {
                        createNotice(form, {
                            innerHTML: `<span id="zolo-newsletter-info-text" class="zolo-newsletter-info-text status-${data.status}">${error}</span>`,
                            className: 'zolo-newsletter-message',
                        });
                    });
            });
        });
    }
});
