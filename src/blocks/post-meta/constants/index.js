import {__} from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-post-meta';
export const META_ALIGN='metaAlign';
export const META_GAP='metaGap';
export const SEPARATOR_SIZE='separatorSize';
export const SEPARATOR_WIDTH='separatorWidth';
export const SEPARATOR_HEIGHT='separatorHeight';
export const ICON_SIZE = 'iconSize';
export const TEXT_INDENT = 'textIndent';

export const META_TYPE = [
  {label: __('Author', 'zoloblocks'), value: 'author'},
  {label: __('Date', 'zoloblocks'), value: 'date'},
  {label: __('Time', 'zoloblocks'), value: 'time'},
  {label: __('Terms', 'zoloblocks'), value: 'terms'},
  {label: __('Comments', 'zoloblocks'), value: 'comments'},
]
export const ICON_TYPE = [
  {label: __('None', 'zoloblocks'), value: 'none'},
  {label: __('Icon', 'zoloblocks'), value: 'icon'},
]
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
