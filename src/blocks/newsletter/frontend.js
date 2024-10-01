document.addEventListener('DOMContentLoaded', function () {
    const newsLetterForms = document.querySelectorAll('.wp-block-zolo-newsletter');

    const createNotice = (form, message, status) => {
        if (form?.nextElementSibling?.classList.contains('zolo-newsletter-message')) {
            form.nextElementSibling.remove();
        }

        const noticeDiv = document.createElement('div');
        noticeDiv.className = 'zolo-newsletter-message';
        noticeDiv.innerHTML = `<span id="zolo-newsletter-info-text" class="zolo-newsletter-info-text status-${status}">${message}</span>`;
        form.append(noticeDiv);
    };

    if (newsLetterForms.length > 0) {
        newsLetterForms.forEach((form) => {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Input Validation
                const emailField = form.querySelector('#zolo-newsletter-email-field');
                const email = emailField ? emailField.value.trim() : '';
                let fname = '';
                const nameField = form.querySelector('#zolo-newsletter-name-field');
                if (nameField) {
                    fname = nameField.value.trim();
                }

                if (!email) {
                    createNotice(form, 'Please enter a valid email address.', 'error');
                    return;
                }

                const newsletterMsg = form.querySelector('.zolo-newsletter-form')?.dataset.settings || '';

                const data = new FormData();
                data.append('email', email);
                data.append('list', zoloSettings.list_id);
                data.append('fname', fname);
                data.append('action', 'zolo_subscribe_newsletter');
                data.append('nonce', zoloSettings.zolo_nonce);
                data.append('data', newsletterMsg);

                // Send the AJAX request
                fetch(zoloSettings.ajaxurl, {
                    method: 'POST',
                    body: data,
                    credentials: 'same-origin',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest', // Prevent CSRF attacks
                    },
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((responseData) => {
                        if (responseData.status === 'success') {
                            emailField.value = '';
                            if (nameField) nameField.value = '';

                            createNotice(form, responseData.message, 'success');
                        } else {
                            createNotice(form, responseData.message, 'error');
                        }
                    })
                    .catch((error) => {
                        createNotice(form, `An error occurred: ${error.message}`, 'error');
                    });
            });
        });
    }
});
