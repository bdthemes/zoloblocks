
    console.log(fetch);
document.addEventListener('DOMContentLoaded', function () {
    const newsLetter = document.querySelectorAll('.wp-block-zolo-newsletter');
    console.log(newsLetter);
    if (newsLetter.length > 0) {
        newsLetter.forEach((form) => {
          console.log(form);
            // form validation
            form.addEventListener('click', function (e) {
                e.preventDefault();
                const email = form.querySelector('.zolo-newsletter-field').value;
                console.log(email);
                const apiData = {
                    provider: 'mailchimp',
                    mailchimpApiKey: 'b977124615e8f40b3a13e9f5cd3ff591-us17',
                    mailchimpListID: 'dba21cf7e6',
                    textSuccess: 'Thank you for subscribing!',
                    textError: 'Please enter a valid email address',
                    textSubscribed: 'You are already subscribed',
                };

                const data = new FormData();
                data.append('email', email);
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
