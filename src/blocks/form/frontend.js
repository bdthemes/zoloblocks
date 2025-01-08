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

function setupFormHandlers(form) {
  const formId = form.dataset.formId;
  let formNoticeContainer = form.parentNode.querySelector('.zolo-form-msg');
  let formNotice = form.parentNode.querySelector('.zolo-msg-desc');
  const closeBtn = form.parentNode.querySelector('.zolo-msg-close');

  // form validation
  let pristine = new Pristine(form);

  //phone number validation
  const inputs = form.querySelectorAll('input.invalid-number');
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
    let valid = pristine.validate();
    if (valid) {
      const formData = new FormData(form);
      const values = [...formData.entries()];

      // add the formId to the data
      values.push(['formId', formId]);

      // add nonce to the data
      values.push(['nonce', zoloSettings.zolo_nonce]);

      const formattedData = values.reduce((acc, [key, value]) => {
        acc[key] = key === 'file' ? value.name : value;
        return acc;
      }, {});

      const dataString = JSON.stringify(formattedData);

      // create an ajax request
      const xhr = new XMLHttpRequest();
      xhr.open('POST', zoloSettings.ajaxurl, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const {
              validationStatus,
              validationMessage,
              successStatus,
              successMessage,
              failStatus,
              failMessage,
              nonceValidationFail,
            } = response;
            if (validationStatus || nonceValidationFail) {
              formNotice.innerHTML = validationMessage;
              formNoticeContainer.classList.add('zolo-form-error-msg', 'show');
            }
            if (successStatus) {
              formNotice.innerHTML = successMessage;
              formNoticeContainer.classList.add('zolo-form-success-msg', 'show');
            }
            if (failStatus) {
              formNotice.innerHTML = failMessage;
              formNoticeContainer.classList.add('zolo-form-error-msg', 'show');
            }

            // reset the form after submission
            form.reset();

            // remove the notice after 5 seconds
            setTimeout(() => {
              formNotice.innerHTML = '';
              formNoticeContainer.classList.remove('validation-error', 'success', 'fail', 'show');
            }, 5000);

            // close the notice
            closeBtn.addEventListener('click', function () {
              formNotice.innerHTML = '';
              formNoticeContainer.classList.remove('validation-error', 'success', 'fail', 'show');
            });
          } else {
            console.error('Error:', xhr.statusText);
          }
        }
      };

      xhr.send('action=send_form_data&formData=' + encodeURIComponent(dataString));
    }
  });
}

