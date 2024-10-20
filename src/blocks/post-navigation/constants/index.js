import {__} from '@wordpress/i18n';
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
//title
export const TITLE_MARGIN = 'titleMargin';
//image
export const THUMBNAIL_HEIGHT = 'thumbHeight';
export const THUMBNAIL_BG = 'thumbBg';
export const THUMBNAIL_PADDING = 'thumbPadding';
export const THUMBNAIL_MARGIN = 'thumbMargin';
export const THUMBNAIL_BORDER = 'thumbBorder';
export const THUMBNAIL_BRADIUS = 'thumbBRadius';
export const THUMBNAIL_BOX_SHADOW = 'thumbShadow';

//button
export const BTN_PADDING = 'sbtnPadding';
export const BTN_MARGIN = 'sbtnMargin';
export const BTN_BORDER = 'sbtnBorder';
export const BTN_BORDER_RADIUS = 'sbtnBRadius';
