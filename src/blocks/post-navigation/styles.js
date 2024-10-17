import {applyFilters} from '@wordpress/hooks';

import {
  HEADING_TYPOGRAPHY,
  AUTHOR_TYPOGRAPHY,
  META_TYPOGRAPHY,
  MESSAGE_TYPOGRAPHY,
  REPLY_TYPOGRAPHY,
  FORMH_TYPOGRAPHY,
  CANCEL_TYPOGRAPHY,
  FORMINFO_TYPOGRAPHY,
  INPUT_TYPOGRAPHY,
  SUBMITBTN_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import {
  HEADINGB_SPACE,
  //Comment list
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
  //form input field
  FORM_HB_SPACE,
  INPUT_SPACE,
  INPUT_PADDING,
  INPUT_MARGIN,
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  //submit btn
  SUBMITBTN_PADDING,
  SUBMITBTN_BORDER_RADIUS,
  SUBMITBTN_MARGIN,
  SUBMITBTN_BORDER,
} from './constants';

const {
  generateResRangeStyle,
  generateDimensionStyle,
  generateBorderStyle,
  generateBoxShadowStyles,
  generateTypographyStyles,
  GlobalStyleHanlder
} = window.zoloModule;

function Style({props}) {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    headingColor,
    //comment list
    authorColor,
    authorHoverColor,
    metaColor,
    metaHoverColor,
    messageColor,
    messageHoverColor,
    //reply btn
    replyColor,
    replyBackground,
    replyHoverColor,
    replyHoverBackground,
    formHeadingColor,
    //cancel
    cancelColor,
    cancelHoverColor,
    //input field
    formInfoColor,
    formInfoHoverColor,
    inputColor,
    inputBgColor,
    inputFocusColor,
    inputFocusBgColor,
    //submit btn
    submitBtnColor,
    submitBtnBgColor,
    submitBtnHoverColor,
    submitBtnBgHoverColor
  } = attributes;

  const {
    typoStylesDesktop: headingTypoDesk,
    typoStylesTab: headingTypoTab,
    typoStylesMobile: headingTypoMob,
  } = generateTypographyStyles({
    prefixConstant: HEADING_TYPOGRAPHY,
    attributes,
  });

  const {
    desktopRangeStyle: headingSpaceDesk,
    tabRangeStyle: headingSpaceTab,
    mobRangeStyle: headingSpaceMob,
  } = generateResRangeStyle({
    controlName: HEADINGB_SPACE,
    property: 'margin-bottom',
    attributes,
  });
  //comment list
  const {
    dimensionStylesDesktop: commentPaddingDesk,
    dimensionStylesTab: commentPaddingTab,
    dimensionStylesMobile: commentPaddingMob,
  } = generateDimensionStyle({
    controlName: COMMENT_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopRangeStyle: commentSpaceDesk,
    tabRangeStyle: commentSpaceTab,
    mobRangeStyle: commentSpaceMob,
  } = generateResRangeStyle({
    controlName: COMMENT_SPACE,
    property: 'margin-bottom',
    attributes,
  });
  const {
    dimensionStylesDesktop: avatarPaddingDesk,
    dimensionStylesTab: avatarPaddingTab,
    dimensionStylesMobile: avatarPaddingMob,
  } = generateDimensionStyle({
    controlName: AVATAR_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopBorderStyle: avatarBorderDesk,
    tabBorderStyle: avatarBorderTab,
    mobBorderStyle: avatarBorderMob,
  } = generateBorderStyle({
    controlName: AVATAR_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: avatarBorderRadiusDesk,
    dimensionStylesTab: avatarBorderRadiusTab,
    dimensionStylesMobile: avatarBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: AVATAR_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: avatarBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: AVATAR_SHADOW,
  });
  const {
    typoStylesDesktop: authorTypoDesk,
    typoStylesTab: authorTypoTab,
    typoStylesMobile: authorTypoMob,
  } = generateTypographyStyles({
    prefixConstant: AUTHOR_TYPOGRAPHY,
    attributes,
  });
  const {
    typoStylesDesktop: metaTypoDesk,
    typoStylesTab: metaTypoTab,
    typoStylesMobile: metaTypoMob,
  } = generateTypographyStyles({
    prefixConstant: META_TYPOGRAPHY,
    attributes,
  });
  const {
    typoStylesDesktop: messageTypoDesk,
    typoStylesTab: messageTypoTab,
    typoStylesMobile: messageTypoMob,
  } = generateTypographyStyles({
    prefixConstant: MESSAGE_TYPOGRAPHY,
    attributes,
  });

  //reply btn
  const {
    typoStylesDesktop: replyTypoDesk,
    typoStylesTab: replyTypoTab,
    typoStylesMobile: replyTypoMob,
  } = generateTypographyStyles({
    prefixConstant: REPLY_TYPOGRAPHY,
    attributes,
  });
  const {
    dimensionStylesDesktop: replyPaddingDesk,
    dimensionStylesTab: replyPaddingTab,
    dimensionStylesMobile: replyPaddingMob,
  } = generateDimensionStyle({
    controlName: REPLY_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    desktopBorderStyle: replyBorderDesk,
    tabBorderStyle: replyBorderTab,
    mobBorderStyle: replyBorderMob,
  } = generateBorderStyle({
    controlName: REPLY_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: replyBorderRadiusDesk,
    dimensionStylesTab: replyBorderRadiusTab,
    dimensionStylesMobile: replyBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: REPLY_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: replyBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: REPLY_SHADOW,
  });
  //reply hover
  const {
    desktopBorderStyle: replyHBorderDesk,
    tabBorderStyle: replyHBorderTab,
    mobBorderStyle: replyHBorderMob,
  } = generateBorderStyle({
    controlName: REPLY_HOVER_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: replyHBorderRadiusDesk,
    dimensionStylesTab: replyHBorderRadiusTab,
    dimensionStylesMobile: replyHBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: REPLY_HOVER_BRADIUS,
    styleFor: 'border-radius',
    attributes,
  });
  const {boxShadowStyle: replyHBoxShadow} = generateBoxShadowStyles({
    attributes,
    controlName: REPLY_HOVER_SHADOW,
  });
  //cancel
  const {
    typoStylesDesktop: cancelTypoDesk,
    typoStylesTab: cancelTypoTab,
    typoStylesMobile: cancelTypoMob,
  } = generateTypographyStyles({
    prefixConstant: CANCEL_TYPOGRAPHY,
    attributes,
  });

  //from field
  const {
    typoStylesDesktop: formHeadingTypoDesk,
    typoStylesTab: formHeadingTypoTab,
    typoStylesMobile: formHeadingTypoMob,
  } = generateTypographyStyles({
    prefixConstant: FORMH_TYPOGRAPHY,
    attributes,
  });
  const {
    desktopRangeStyle: formHeadingBSpaceDesk,
    tabRangeStyle: formHeadingBSpaceTab,
    mobRangeStyle: formHeadingBSpaceMob,
  } = generateResRangeStyle({
    controlName: FORM_HB_SPACE,
    property: 'margin-bottom',
    attributes,
  });
  const {
    typoStylesDesktop: formInfoTypoDesk,
    typoStylesTab: formInfoTypoTab,
    typoStylesMobile: formInfoTypoMob,
  } = generateTypographyStyles({
    prefixConstant: FORMINFO_TYPOGRAPHY,
    attributes,
  });
  const {
    desktopRangeStyle: inputSpaceDesk,
    tabRangeStyle: inputSpaceTab,
    mobRangeStyle: inputSpaceMob,
  } = generateResRangeStyle({
    controlName: INPUT_SPACE,
    property: 'gap',
    attributes,
  });
  const {
    typoStylesDesktop: inputTypoDesk,
    typoStylesTab: inputTypoTab,
    typoStylesMobile: inputTypoMob,
  } = generateTypographyStyles({
    prefixConstant: INPUT_TYPOGRAPHY,
    attributes,
  });

  const {
    dimensionStylesDesktop: inputPaddingDesk,
    dimensionStylesTab: inputPaddingTab,
    dimensionStylesMobile: inputPaddingMob,
  } = generateDimensionStyle({
    controlName: INPUT_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    dimensionStylesDesktop: inputMarginDesk,
    dimensionStylesTab: inputMarginTab,
    dimensionStylesMobile: inputMarginMob,
  } = generateDimensionStyle({
    controlName: INPUT_MARGIN,
    styleFor: 'margin',
    attributes,
  });
  const {
    desktopBorderStyle: inputBorderDesk,
    tabBorderStyle: inputBorderTab,
    mobBorderStyle: inputBorderMob,
  } = generateBorderStyle({
    controlName: INPUT_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: inputBorderRadiusDesk,
    dimensionStylesTab: inputBorderRadiusTab,
    dimensionStylesMobile: inputBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: INPUT_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  //submit btn
  const {
    typoStylesDesktop: submitBtnTypoDesk,
    typoStylesTab: submitBtnTypoTab,
    typoStylesMobile: submitBtnTypoMob,
  } = generateTypographyStyles({
    prefixConstant: SUBMITBTN_TYPOGRAPHY,
    attributes,
  });
  const {
    dimensionStylesDesktop: submitBtnPaddingDesk,
    dimensionStylesTab: submitBtnPaddingTab,
    dimensionStylesMobile: submitBtnPaddingMob,
  } = generateDimensionStyle({
    controlName: SUBMITBTN_PADDING,
    styleFor: 'padding',
    attributes,
  });
  const {
    dimensionStylesDesktop: submitBtnMarginDesk,
    dimensionStylesTab: submitBtnMarginTab,
    dimensionStylesMobile: submitBtnMarginMob,
  } = generateDimensionStyle({
    controlName: SUBMITBTN_MARGIN,
    styleFor: 'margin',
    attributes,
  });
  const {
    desktopBorderStyle: submitBtnBorderDesk,
    tabBorderStyle: submitBtnBorderTab,
    mobBorderStyle: submitBtnBorderMob,
  } = generateBorderStyle({
    controlName: SUBMITBTN_BORDER,
    attributes,
  });
  const {
    dimensionStylesDesktop: submitBtnBRadiusDesk,
    dimensionStylesTab: submitBtnBRadiusTab,
    dimensionStylesMobile: submitBtnBRadiusMob,
  } = generateDimensionStyle({
    controlName: SUBMITBTN_BORDER_RADIUS,
    styleFor: 'border-radius',
    attributes,
  });

  const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-count{
     ${headingTypoDesk}
     ${headingSpaceDesk}
     ${headingColor ? `color:${headingColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list{
      ${commentSpaceDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list .comment-body{
     ${commentPaddingDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list img.avatar{
      ${avatarPaddingDesk}
      ${avatarBorderDesk}
      ${avatarBorderRadiusDesk}
      ${avatarBoxShadow}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a{
      ${authorTypoDesk}
      ${authorColor ? `color:${authorColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a:hover{
      ${authorHoverColor ? `color:${authorHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a{
      ${metaTypoDesk}
      ${metaColor ? `color:${metaColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a:hover{
      ${metaHoverColor ? `color:${metaHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p{
      ${messageTypoDesk}
      ${messageColor ? `color:${messageColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p:hover{
      ${messageHoverColor ? `color:${messageHoverColor};` : ''}
    }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link{
    ${replyTypoDesk}
    ${replyPaddingDesk}
    ${replyBorderDesk}
    ${replyBorderRadiusDesk}
    ${replyBoxShadow}
    ${replyColor ? `color:${replyColor};` : ''}
    ${replyBackground ? `color:${replyBackground};` : ''}
   }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link:hover{
    ${replyHBorderDesk}
    ${replyHBorderRadiusDesk}
    ${replyHBoxShadow}
    ${replyHoverColor ? `color:${replyHoverColor};` : ''}
    ${replyHoverBackground ? `color:${replyHoverBackground};` : ''}
   }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title{
     ${formHeadingTypoDesk}
     ${formHeadingBSpaceDesk}
     ${formHeadingColor ? `color:${formHeadingColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a{
     ${cancelTypoDesk}
     ${cancelColor ? `color:${cancelColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a:hover{
     ${cancelHoverColor ? `color:${cancelHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .must-log-in,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a{
     ${formInfoTypoDesk}
     ${formInfoColor ? `color:${formInfoColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a:hover{
      ${formInfoHoverColor ? `color:${formInfoHoverColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form{
     ${inputSpaceDesk}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment{
      ${inputTypoDesk}
      ${inputPaddingDesk}
      ${inputMarginDesk}
      ${inputBorderDesk}
      ${inputBorderRadiusDesk}
      ${inputColor ? `color:${inputColor};` : ''}
      ${inputBgColor ? `background-color:${inputBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block input::placeholder,
     .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block textarea::placeholder{
      ${inputColor ? `color:${inputColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author:focus,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email:focus,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url:focus,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment:focus{
      ${inputFocusColor ? `color:${inputFocusColor};` : ''}
      ${inputFocusBgColor ? `background-color:${inputFocusBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block input:focus::placeholder,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block textarea:focus::placeholder{
      ${inputFocusColor ? `color:${inputFocusColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit{
      ${submitBtnTypoDesk}
      ${submitBtnPaddingDesk}
      ${submitBtnMarginDesk}
      ${submitBtnBorderDesk}
      ${submitBtnBRadiusDesk}
      ${submitBtnColor ? `color:${submitBtnColor};` : ''}
      ${submitBtnBgColor ? `background-color:${submitBtnBgColor};` : ''}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit:hover{
      ${submitBtnHoverColor ? `color:${submitBtnHoverColor};` : ''}
      ${submitBtnBgHoverColor ? `background-color:${submitBtnBgHoverColor};` : ''}
    }
  `;

  const tabletAllStyle = `
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-count{
     ${headingTypoTab}
     ${headingSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list{
      ${commentSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list .comment-body{
     ${commentPaddingTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list img.avatar{
      ${avatarPaddingTab}
      ${avatarBorderTab}
      ${avatarBorderRadiusTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a{
      ${authorTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a{
      ${metaTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p{
      ${messageTypoTab}
    }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link{
    ${replyTypoTab}
    ${replyPaddingTab}
    ${replyBorderTab}
    ${replyBorderRadiusTab}
   }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link:hover{
    ${replyHBorderTab}
    ${replyHBorderRadiusTab}
   }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title{
     ${formHeadingTypoTab}
     ${formHeadingBSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a{
     ${cancelTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .must-log-in,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a{
     ${formInfoTypoTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form{
     ${inputSpaceTab}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment{
      ${inputTypoTab}
      ${inputPaddingTab}
      ${inputMarginTab}
      ${inputBorderTab}
      ${inputBorderRadiusTab}
    }

    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit{
      ${submitBtnTypoTab}
      ${submitBtnPaddingTab}
      ${submitBtnMarginTab}
      ${submitBtnBorderTab}
      ${submitBtnBRadiusTab}
    }

  `;
  const mobileAllStyle = `
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-count{
     ${headingTypoMob}
     ${headingSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list{
      ${commentSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list .comment-body{
     ${commentPaddingMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-list img.avatar{
      ${avatarPaddingMob}
      ${avatarBorderMob}
      ${avatarBorderRadiusMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-author a{
      ${authorTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-metadata a{
      ${metaTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-content p{
      ${messageTypoMob}
    }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link{
    ${replyTypoMob}
    ${replyPaddingMob}
    ${replyBorderMob}
    ${replyBorderRadiusMob}
   }
   .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-link:hover{
    ${replyHBorderMob}
    ${replyHBorderRadiusMob}
   }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title{
     ${formHeadingTypoMob}
     ${formHeadingBSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .comment-reply-title small a{
     ${cancelTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .must-log-in,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .logged-in-as a{
     ${formInfoTypoMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form{
     ${inputSpaceMob}
    }
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #author,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #email,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #url,
    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form textarea#comment{
      ${inputTypoMob}
      ${inputPaddingMob}
      ${inputMarginMob}
      ${inputBorderMob}
      ${inputBorderRadiusMob}
    }

    .${uniqueId}.wp-block-zolo-post-comments-form.zolo-block .zolo-comment-form #submit{
      ${submitBtnTypoMob}
      ${submitBtnPaddingMob}
      ${submitBtnMarginMob}
      ${submitBtnBorderMob}
      ${submitBtnBRadiusMob}
    }
  `;
  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={applyFilters('zolo.postNavigation.desktopAllStyle', desktopAllStyle, props)}
        tabAllStyle={applyFilters('zolo.postNavigation.tabletAllStyle', tabletAllStyle, props)}
        mobileAllStyle={applyFilters('zolo.postNavigation.mobileAllStyle', mobileAllStyle, props)}
      />
    </>
  );
}

export default Style;
