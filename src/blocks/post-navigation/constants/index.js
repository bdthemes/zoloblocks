import { __ } from '@wordpress/i18n';
//get all public taxonomy list
export const GET_TAXONOMIEX = (taxonomies) => {
  const allTaxonomies = [
    {
      value: '',
      label: __('Select Type', 'zoloblocks'),
    },
  ];
  // Add public taxonomies to the array
  Object.values(taxonomies).forEach((taxonomy) => {
    if (taxonomy.public) {
      allTaxonomies.push({
        value: taxonomy.name,
        label: taxonomy.label,
      });
    }
  });

  return allTaxonomies;
};

export const HEADINGB_SPACE='headingBSpace';
//comment list
export const COMMENT_SPACE='commentBSpace';
export const COMMENT_PADDING='commentPadding';
export const AVATAR_BORDER = 'avatarBorder';
export const AVATAR_BORDER_RADIUS = 'avatarBRadius';
export const AVATAR_PADDING = 'avatarPadding';
export const AVATAR_SHADOW = 'avatarShadow';

//reply btn
export const REPLY_PADDING = 'replyPadding';
export const REPLY_BORDER = 'reply';
export const REPLY_BORDER_RADIUS = 'reply';
export const REPLY_SHADOW = 'reply';
export const REPLY_HOVER_BORDER = 'reply';
export const REPLY_HOVER_BRADIUS = 'reply';
export const REPLY_HOVER_SHADOW = 'reply';

//form field
export const FORM_HB_SPACE='formHBSpace';
export const INPUT_SPACE = 'inputSpace';
export const INPUT_PADDING = 'inputPadding';
export const INPUT_MARGIN = 'inputMargin';
export const INPUT_BORDER = 'inputBorder';
export const INPUT_BORDER_RADIUS = 'inputBRadius';

//submit btn
export const SUBMITBTN_PADDING = 'sbtnPadding';
export const SUBMITBTN_MARGIN = 'sbtnMargin';
export const SUBMITBTN_BORDER = 'sbtnBorder';
export const SUBMITBTN_BORDER_RADIUS = 'sbtnBRadius';
