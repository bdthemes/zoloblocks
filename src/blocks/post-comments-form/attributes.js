import {
  HEADINGB_SPACE,
  //comment list
  COMMENT_SPACE,
  COMMENT_PADDING,
  AVATAR_BORDER,
  AVATAR_BORDER_RADIUS,
  AVATAR_PADDING,
  AVATAR_SHADOW,
  //Reply Btn
  REPLY_PADDING,
  REPLY_BORDER,
  REPLY_BORDER_RADIUS,
  REPLY_SHADOW,
  REPLY_HOVER_BORDER,
  REPLY_HOVER_BRADIUS,
  REPLY_HOVER_SHADOW,
  //form field
  FORM_HB_SPACE,
  INPUT_SPACE,
  INPUT_PADDING,
  INPUT_MARGIN,
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  //submit btn
  SUBMITBTN_PADDING,
  SUBMITBTN_MARGIN,
  SUBMITBTN_BORDER,
  SUBMITBTN_BORDER_RADIUS
} from './constants';

/**
 * Internal dependencies
 */
const {
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
  generateResRangeAttributies,
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
  //Global Attributes
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
  showCommentTitle: {
    type: 'boolean',
    default: true,
  },
  showCommentCount: {
    type: 'boolean',
    default: true,
  },
  commentTitle: {
    type: 'string',
    default: 'Comments'
  },
  commentFormTitle: {
    type: 'string',
    default: 'Leave a Reply'
  },
  cancelReply: {
    type: 'string',
    default: 'Cancel reply'
  },
  loginAsText: {
    type: 'string',
    default: 'Logged in as'
  },
  logoutText: {
    type: 'string',
    default: 'Log Out?'
  },
  submitBtnText: {
    type: 'string',
    default: 'Post Comment'
  },
  avatarSize: {
    type: 'string',
    default: '80',
  },

  ...generateTypographyAttributes(Object.values(typographyObjs)),
  ...generateResRangeAttributies(HEADINGB_SPACE),
  //comment list
  ...generateDimensionAttributes(COMMENT_PADDING, {
    isLinked: false
  }),
  ...generateResRangeAttributies(COMMENT_SPACE),
  ...generateBorderAttributies(AVATAR_BORDER),
  ...generateDimensionAttributes(AVATAR_BORDER_RADIUS),
  ...generateDimensionAttributes(AVATAR_PADDING),
  ...generateBoxShadowAttributies(AVATAR_SHADOW),
  //reply btn
  ...generateDimensionAttributes(REPLY_PADDING),
  ...generateBorderAttributies(REPLY_BORDER),
  ...generateDimensionAttributes(REPLY_BORDER_RADIUS),
  ...generateBoxShadowAttributies(REPLY_SHADOW),
  ...generateBorderAttributies(REPLY_HOVER_BORDER),
  ...generateDimensionAttributes(REPLY_HOVER_BRADIUS),
  ...generateBoxShadowAttributies(REPLY_HOVER_SHADOW),
  //form field
  ...generateResRangeAttributies(FORM_HB_SPACE),
  ...generateResRangeAttributies(INPUT_SPACE),
  ...generateDimensionAttributes(INPUT_PADDING),
  ...generateDimensionAttributes(INPUT_MARGIN),
  ...generateBorderAttributies(INPUT_BORDER),
  ...generateDimensionAttributes(INPUT_BORDER_RADIUS),
  //submit btn
  ...generateDimensionAttributes(SUBMITBTN_PADDING),
  ...generateDimensionAttributes(SUBMITBTN_MARGIN),
  ...generateBorderAttributies(SUBMITBTN_BORDER),
  ...generateDimensionAttributes(SUBMITBTN_BORDER_RADIUS),

  headingColor: {
    type: 'string'
  },
  //comment list
  authorColor: {
    type: 'string'
  },
  authorHoverColor: {
    type: 'string'
  },
  metaColor: {
    type: 'string'
  },
  metaHoverColor: {
    type: 'string'
  },
  messageColor: {
    type: 'string'
  },
  messageHoverColor: {
    type: 'string'
  },
  //reply btn
  replyColor: {
    type: 'string'
  },
  replyBackground: {
    type: 'string'
  },
  replyHoverColor: {
    type: 'string'
  },
  replyHoverBackground: {
    type: 'string'
  },
  formHeadingColor:{
    type:'string'
  },
  //cancel
  cancelColor: {
    type: 'string'
  },
  cancelHoverColor: {
    type: 'string'
  },
  //form field
  formInfoColor: {
    type: 'string'
  },
  formInfoHoverColor: {
    type: 'string'
  },
  inputColor: {
    type: 'string'
  },
  inputBgColor: {
    type: 'string'
  },
  inputHoverColor: {
    type: 'string'
  },
  inputHoverBgColor: {
    type: 'string'
  },
  inputFocusColor: {
    type: 'string'
  },
  inputFocusBgColor: {
    type: 'string'
  },
  //submit btn
  submitBtnColor: {
    type: 'string'
  },
  submitBtnBgColor: {
    type: 'string'
  },
  submitBtnHoverColor: {
    type: 'string'
  },
  submitBtnBgHoverColor: {
    type: 'string'
  }
};
export default attributes;
