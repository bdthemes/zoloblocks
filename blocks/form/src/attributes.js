/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateDimensionAttributes,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateTypographyAttributes,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    BTN_ALIGNMENT,
    BTN_BG,
    BTN_HBG,
    BTN_BORDER,
    BTN_BRADIUS,
    BTN_PADDING,
    BTN_MARGIN,
    LABEL_MARGIN,
    ICON_SIZE,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    FIELD_PADDING,
    SCC_BORDER,
    SCC_BRADIUS,
    SCC_BG,
    SCC_PADDING,
    ERR_BORDER,
    ERR_BRADIUS,
    ERR_BG,
    ERR_PADDING,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

const attributes = {
    // global Attributes
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
            },
            background: {
                prefix: 'mainBg',
            },
            border: {
                prefix: 'mainBorder',
            },
            borderRadius: {
                prefix: 'mainBorderRadius',
            },
            boxShadow: {
                prefix: 'mainBoxShadow',
            },
            responsiveControls: true,
        },
    },
    // block attributes
    formId: {
        type: 'string',
        default: '',
    },

    preset: {
        type: 'string',
        default: 'style-1',
    },

    // context field
    showFieldIcon: {
        type: 'boolean',
        default: false,
    },

    btnLabel: {
        type: 'string',
        default: 'Submit Now',
    },
    showBtnIcon: {
        type: 'boolean',
        default: false,
    },
    icon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M285.6 444.1C279.8 458.3 264.8 466.3 249.8 463.4C234.8 460.4 223.1 447.3 223.1 432V256H47.1C32.71 256 19.55 245.2 16.6 230.2C13.65 215.2 21.73 200.2 35.88 194.4L387.9 50.38C399.8 45.5 413.5 48.26 422.6 57.37C431.7 66.49 434.5 80.19 429.6 92.12L285.6 444.1z"></path></svg>',
    },
    iconPosition: {
        type: 'string',
        default: 'right',
    },
    // label
    labelColor: {
        type: 'string',
    },
    requiredColor: {
        type: 'string',
    },
    iconColor: {
        type: 'string',
    },

    // input field
    textColor: {
        type: 'string',
    },
    placeholderColor: {
        type: 'string',
    },

    // button
    btnColor: {
        type: 'string',
    },
    btnHoverColor: {
        type: 'string',
    },

    // message
    errMsgColor: {
        type: 'string',
    },

    sccMsgColor: {
        type: 'string',
    },

    closeBtnColor: {
        type: 'string',
    },

    // form settings
    formSettings: {
        type: 'object',
        default: {
            formTitle: 'Contact Form',
            notificationType: 'send_mail',
            emailTo: zoloParams?.admin_email,
            emailCC: '',
            emailBCC: '',
            emailSubject: 'New Form Submission',
        },
    },

    // success
    submissionSettings: {
        type: 'object',
        default: {
            successType: 'message',
            successMessage: 'Thank you for your submission',
            failMessage: 'Sorry, form submission failed',
            validationMessage: 'Form validation failed',
        },
    },

    // validation rules
    validationRules: {
        type: 'object',
        default: {
            name: false,
            email: true,
            message: true,
        },
    },

    messagePosition: {
        type: 'string',
        default: 'form_top',
    },

    // field focus
    focusBorderColor: {
        type: 'string',
    },
    focusBorderWidth: {
        type: 'number',
    },

    // generator
    ...generateResAlignmentAttributies(BTN_ALIGNMENT),
    ...generateNormalBGAttributes(BTN_BG),
    ...generateNormalBGAttributes(BTN_HBG),
    ...generateBorderAttributies(BTN_BORDER),
    ...generateDimensionAttributes(BTN_BRADIUS),
    ...generateDimensionAttributes(BTN_PADDING),
    ...generateDimensionAttributes(BTN_MARGIN),

    // Label
    ...generateDimensionAttributes(LABEL_MARGIN),

    // Field icon
    ...generateResRangeAttributies(ICON_SIZE, {}),

    // input fields
    ...generateDimensionAttributes(FIELD_PADDING),
    ...generateNormalBGAttributes(FIELD_BG),
    ...generateBorderAttributies(FIELD_BORDER),
    ...generateDimensionAttributes(FIELD_BRADIUS),

    // Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // success message
    ...generateBorderAttributies(SCC_BORDER),
    ...generateDimensionAttributes(SCC_BRADIUS),
    ...generateNormalBGAttributes(SCC_BG),
    ...generateDimensionAttributes(SCC_PADDING),

    // error message
    ...generateBorderAttributies(ERR_BORDER),
    ...generateDimensionAttributes(ERR_BRADIUS),
    ...generateNormalBGAttributes(ERR_BG),
    ...generateDimensionAttributes(ERR_PADDING),
};

export default attributes;
