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

export const POST_TITLE_ANIMATION = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('Background (Pro)', 'zoloblocks'), value: 'zolo-post-title-type-1', disabled: false },
    { label: __('Underline (Pro)', 'zoloblocks'), value: 'zolo-post-title-type-2', disabled: false },
    { label: __('Middle Underline (Pro)', 'zoloblocks'), value: 'zolo-post-title-type-3', disabled: false },
    { label: __('Overline (Pro)', 'zoloblocks'), value: 'zolo-post-title-type-4', disabled: false },
    { label: __('Middle Overline (Pro)', 'zoloblocks'), value: 'zolo-post-title-type-5', disabled: false },
];

//title
export const TITLE_MARGIN = 'titleMargin';
//image
export const THUMBNAIL_HEIGHT = 'thumbHeight';
export const THUMBNAIL_BORDER = 'thumbBorder';
export const THUMBNAIL_BRADIUS = 'thumbBRadius';
export const THUMBNAIL_BOX_SHADOW = 'thumbShadow';

//button
export const BTN_PADDING = 'btnPadding';
export const BTN_MARGIN = 'btnMargin';
export const BTN_BORDER = 'btnBorder';
export const BTN_BORDER_RADIUS = 'btnBRadius';
