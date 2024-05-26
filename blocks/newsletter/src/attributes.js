/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
} = window.zoloModule;

import {
  BUTTON_BORDER,
    MSG_BORDER,
    MSG_BORDER_RADIUS,
    MSG_PADDING,
    MSG_MARGIN,
  BUTTON_BORDER_RADIUS,
  BUTTON_BG,
  SUCCESS_MSG_BG,
ERROR_MSG_BG,
SUBSCRIBED_MSG_BG,
  BUTTON_HOVER_BG_COLOR,
  BUTTON_BOX_SHADOW,
  BUTTON_HOVER_BOX_SHADOW,
  FIELD_BOX_SHADOW,
  FIELD_FOCUS_BOX_SHADOW,
  BUTTON_PADDING,
  BUTTON_SPACING,
  ICON_SIZE,
  BUTTON_SIZE,
  LABEL_BORDER,
  LABEL_BORDER_RADIUS,
  LABEL_PADDING,
  LABEL_SPACING,
  LABEL_BG,
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  INPUT_PADDING,
  INPUT_BG,
  LABEL_HOVER_BG_COLOR,
  FOCUS_BORDER_WIDTH,
} from "./constants";

import * as typographyObjs from "./constants/typoPrefixConstant";

const attributes = {
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'advBtnMargin',
            },
            padding: {
                prefix: 'advBtnPadding',
            },
            background: {
                prefix: 'advBtnBg',
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
    // Button Generators
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateBorderAttributies(MSG_BORDER),
    ...generateBorderAttributies(LABEL_BORDER),
    // typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // title
    // description

    ...generateDimensionAttributes(LABEL_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateDimensionAttributes(MSG_BORDER_RADIUS),
    ...generateNormalBGAttributes(BUTTON_BG),
    ...generateNormalBGAttributes(SUCCESS_MSG_BG),
    ...generateNormalBGAttributes(ERROR_MSG_BG),
    ...generateNormalBGAttributes(SUBSCRIBED_MSG_BG),
    ...generateNormalBGAttributes(LABEL_BG),
    ...generateNormalBGAttributes(LABEL_HOVER_BG_COLOR),
    ...generateNormalBGAttributes(INPUT_BG),

    ...generateNormalBGAttributes(BUTTON_HOVER_BG_COLOR),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateBoxShadowAttributies(BUTTON_HOVER_BOX_SHADOW),
    ...generateBoxShadowAttributies(FIELD_BOX_SHADOW),
    ...generateBoxShadowAttributies(FIELD_FOCUS_BOX_SHADOW),
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateDimensionAttributes(MSG_PADDING),
    ...generateDimensionAttributes(MSG_MARGIN),
    ...generateDimensionAttributes(LABEL_PADDING),
    ...generateDimensionAttributes(INPUT_PADDING),

    // button icon generator
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateResRangeAttributies(BUTTON_SIZE),
    ...generateResRangeAttributies(BUTTON_SPACING),
    ...generateResRangeAttributies(LABEL_SPACING),
    ...generateResRangeAttributies(FOCUS_BORDER_WIDTH),

    // presets

    ...generateBorderAttributies(INPUT_BORDER),
    ...generateDimensionAttributes(INPUT_BORDER_RADIUS),

    //Block specific Attributes
    preset: {
        type: 'string',
        default: 'zolo-newslatter-1',
    },
    namePlaceholder: {
        type: 'string',
        default: 'type name here',
    },
    placeholder: {
        type: 'string',
        default: 'type email here',
    },

    buttonType: {
        type: 'string',
        default: 'text',
    },
    buttonIcon: {
        type: 'string',
        default:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>',
    },
    showButtonText: {
        type: 'boolean',
        default: true,
    },
    showIcon: {
        type: 'boolean',
        default: true,
    },
    buttonText: {
        type: 'string',
        default: 'SUBSCRIBE',
    },
    showNameField: {
        type: 'boolean',
        default: false,
    },
    labelName: {
        type: 'string',
        default: 'Name',
    },
    showLabel: {
        type: 'boolean',
        default: false,
    },
    labelText: {
        type: 'string',
        default: 'Email',
    },
    labelColor: {
        type: 'string',
        default: '',
    },
    labelTextHoverColor: {
        type: 'string',
        default: '',
    },
    btnTextColor: {
        type: 'string',
        default: '',
    },
    successTextColor: {
        type: 'string',
        default: '',
    },
    errorTextColor: {
        type: 'string',
        default: '',
    },
    subscribedTextColor: {
        type: 'string',
        default: '',
    },
    btnTextHoverColor: {
        type: 'string',
        default: '',
    },
    inputColor: {
        type: 'string',
        default: '',
    },
    focusColor: {
        type: 'string',
        default: '',
    },
    iconColor: {
        type: 'string',
        default: '',
    },
    iconHoverColor: {
        type: 'string',
        default: '',
    },
    placeholderColor: {
        type: 'string',
        default: '',
    },
    btnLayoutType: {
        type: 'string',
        default: 'zolo-search-button-style-1',
    },
    labelBorderHoverColor: {
        type: 'string',
        default: '',
    },
    btnBorderHoverColor: {
        type: 'string',
        default: '',
    },
    showMessage: {
        type: 'boolean',
        default: false,
    },
    textSuccess: {
        type: 'string',
        default: 'Thank you for subscribing!',
    },
    textSubscribed: {
        type: 'string',
        default: "You're already subscribed with us!",
    },
    textError: {
        type: 'string',
        default: "OOps, someting wrong, Can't process your request",
    },
};

export default attributes;
