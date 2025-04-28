document.addEventListener('DOMContentLoaded', function () {
    const zoloForms = document.querySelectorAll('.zolo-contact-form');
    if (zoloForms.length > 0) {
        zoloForms.forEach((form) => {
            const reCaptcha = form.dataset.recaptcha == 'true';

            if (reCaptcha) {
                return;
            }

            const initializeFormWhenReady = (form, retries = 10) => {
                let datePickerInput = form.querySelector('.zolo-form-date-picker');
                if (datePickerInput || retries === 0) {
                    setupFormHandlers(form);
                } else {
                    setTimeout(() => {
                        initializeFormWhenReady(form, retries - 1);
                    }, 10);
                }
            };
            // Call the function to check for the date picker
            initializeFormWhenReady(form);
        });
    }
});

const reverseValueToLabel = (value) => {
    // Replace underscores with spaces, capitalize the first letter of each word
    return value
        .replace(/_/g, ' ') // Replace underscores with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

function setupFormHandlers(form) {
    const formId = form.dataset.formId;
    let formNoticeContainer = form.parentNode.querySelector('.zolo-form-msg');
    let formNotice = form.parentNode.querySelector('.zolo-msg-desc');
    const closeBtn = form.parentNode.querySelector('.zolo-msg-close');

    // form validation
    let pristine = new Pristine(form);

    //phone number validation
    const inputs = form.querySelectorAll('input.invalid-number, input.invalid-country');
    if (inputs.length > 0) {
        inputs.forEach((input) => {
            const errorMessage = input.getAttribute('data-pristine-required-message') || 'This field is required.';
            pristine.addValidator(
                input,
                function (value) {
                    if (input.classList.contains('invalid-number')) {
                        return false;
                    }
                    return value.trim() !== '';
                },
                errorMessage
            );
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.zolo-submit-btn button');

        let valid = pristine.validate();

        const reverseValueToLabel = (value) => {
            // Replace underscores with spaces, capitalize the first letter of each word
            return value
                .replace(/_/g, ' ') // Replace underscores with spaces
                .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
        };

        if (valid) {
            const formData = new FormData(form);
            const values = [...formData.entries()];

            // add the formId to the data
            values.push(['formId', formId]);

            // add nonce to the data
            values.push(['nonce', zoloSettings.zolo_nonce]);

            const formattedData = values.reduce((acc, [key, value]) => {
                if (key === 'file') {
                    value = value?.name;
                }

                if (acc[key]) {
                    acc[key] = `${reverseValueToLabel(acc[key])}, ${reverseValueToLabel(value)}`;
                } else {
                    acc[key] = value;
                }

                return acc;
            }, {});

            values.forEach(([name, value]) => {
                form.querySelectorAll(`[name="${name}"]`).forEach((input) => {
                    const wrapper = input.closest('[data-field-settings]');
                    if (wrapper) {
                        const settings = JSON.parse(wrapper.dataset.fieldSettings);
                        if (!formattedData[name]?.value) {
                            formattedData[name] = {
                                value: formattedData[name],
                                ...settings,
                            };
                        }
                    }
                });
            });

            const dataString = JSON.stringify(formattedData);

            submitBtn.disabled = true;
            submitBtn.classList.add('loading');

            // create an ajax request
            fetch(zoloSettings.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'send_form_data',
                    formData: dataString,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    const { data: responseData, success } = data;

                    submitBtn.disabled = false;
                    submitBtn.classList.remove('loading');

                    if (success) {
                        formNotice.innerHTML = responseData;
                        formNoticeContainer.classList.add('zolo-form-success-msg', 'show');
                    } else {
                        formNotice.innerHTML = responseData;
                        formNoticeContainer.classList.add('zolo-form-error-msg', 'show');
                    }

                    // reset the form after submission
                    form.reset();

                    // remove the notice after 5 seconds
                    const noticeTimeout = setTimeout(() => {
                        formNotice.innerHTML = '';
                        formNoticeContainer.classList.remove('validation-error', 'success', 'fail', 'show');
                    }, 5000);

                    // close the notice
                    closeBtn.addEventListener('click', function () {
                        clearTimeout(noticeTimeout); // Clear the timeout when the close button is clicked
                        formNotice.innerHTML = '';
                        formNoticeContainer.classList.remove('validation-error', 'success', 'fail', 'show');
                    });
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    // You can use finally for resetting states if needed (e.g., re-enable submit button)
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('loading');
                });
        }
    });
}
