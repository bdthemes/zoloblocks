// Form Update handle form settings and validation rules on publish
// only for Admin area

import domReady from '@wordpress/dom-ready';
(function ($) {
    domReady(() => {
        $(document).on('click', '.editor-post-publish-button', function () {
            // get block by name 'zolo/form'
            const zoloFormBlocks = wp.data.select('core/block-editor').getBlocks();

            if (zoloFormBlocks) {
                zoloFormBlocks.map((block) => {
                    const { name, attributes } = block;
                    if (name !== 'zolo/form') {
                        return;
                    }

                    // get all innerblocks by form block
                    const formInnerBlocks = wp.data.select('core/block-editor').getBlocks(block.clientId);

                    let updatedValidationRules = {};
                    // get all child blocks
                    if (formInnerBlocks.length > 0) {
                        formInnerBlocks.map((block) => {
                            const { name, attributes } = block;
                            const { isRequired, label } = attributes;

                            let updatedLabel = label
                                ? label.toLowerCase().replace(/\s/g, '-')
                                : name.replace('zolo/', '').replace(/\s/g, '-');

                            updatedValidationRules = {
                                ...updatedValidationRules,
                                [updatedLabel]: isRequired,
                            };
                        });
                    }

                    const { formId, formSettings, submissionSettings, validationRules } = attributes;

                    if (formId) {
                        $.ajax({
                            url: zoloParams.ajaxurl,
                            type: 'POST',
                            data: {
                                action: 'update_form_settings',
                                formId: formId,
                                formSettings: formSettings,
                                submissionSettings: submissionSettings,
                                validationRules: validationRules,
                                security: zoloParams.zolo_nonce,
                            },
                        });
                    }
                });
            }
        });
    });
})(jQuery);
