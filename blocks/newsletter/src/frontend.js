document.addEventListener('DOMContentLoaded', function () {
    const newsLetter = document.querySelectorAll('.wp-block-zolo-newsletter');
    if (newsLetter.length > 0) {
        newsLetter.forEach((form) => {
            // form validation
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = form.querySelector('#zolo-newsletter-field').value;
                let fname = '';
                if (form.querySelector('#zolo-newsletter-name')) {
                    fname = form.querySelector('#zolo-newsletter-name').value;
                }
                console.log(fname, email);
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
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        });
    }
});
