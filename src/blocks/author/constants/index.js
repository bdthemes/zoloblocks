import { __ } from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-post-category';
export const PRESETS = [
    { label: __('Grid', 'zoloblocks'), value: 'grid' },
    { label: __('List (Pro)', 'zoloblocks'), value: 'list', disabled: true },
];
export const ORDER_BY = [
    { value: 'display_name', label: __('Nicename', 'zoloblocks') },
    { value: 'post_count', label: __('Post Count', 'zoloblocks') },
    { value: 'registered', label: __('Registered', 'zoloblocks') },
    { value: 'rand', label: __('Random', 'zoloblocks') },
];
export const USER_ROLE = [
    { value: 'subscriber', label: __('Subscriber', 'zoloblocks') },
    { value: 'contributor', label: __('Contributor', 'zoloblocks') },
    { value: 'author', label: __('Author', 'zoloblocks') },
    { value: 'editor', label: __('Editor', 'zoloblocks') },
    { value: 'administrator', label: __('Administrator', 'zoloblocks') },
];

export const AVATAR_SIZE = [
    { value: '25', label: __('25 x 25') },
    { value: '35', label: __('35 x 35') },
    { value: '45', label: __('45 x 45') },
    { value: '60', label: __('60 x 60') },
    { value: '80', label: __('80 x 80') },
    { value: '100', label: __('100 x 100') },
    { value: '150', label: __('150 x 150') },
    { value: '200', label: __('200 x 200') },
    { value: '250', label: __('250 x 250') },
];
export const TEXT_ALIGNMENT = 'textAlignment';
export const META_ALIGNMENT = 'metaAlignment';
export const GRID_COLUMNS = 'gridColumns';
export const COLUMNS_GAP = 'columnsGap';
//count
export const COUNT_BG = 'countBg';
export const COUNT_PADDING = 'countPadding';
export const COUNT_MARGIN = 'countMargin';
export const COUNT_BORDER = 'countBorder';
export const COUNT_BORDER_RADIUS = 'countBRadius';
export const COUNT_SHADOW = 'countShadow';
export const COUNT_SPACING = 'countSpacing';
//item
export const CONTENT_PADDING = 'contentPadding';
export const ITEM_PADDING = 'itemPadding';
export const ITEM_BG = 'itemBg';
export const ITEM_BORDER = 'itemBorder';
export const ITEM_BORDER_RADIUS = 'itemBRadius';
export const ITEM_SHADOW = 'itemShadow';
//avatar
export const AVATAR_MASK = 'avatar';
export const AVATAR_BORDER = 'avatarBorder';
export const AVATAR_BORDER_RADIUS = 'avatarBRadius';
export const AVATAR_SHADOW = 'avatarShadow';
export const AVATAR_PADDING = 'avatarPadding';
export const AVATAR_MARGIN = 'avatarMargin';
export const AVATAR_IMG_SIZE = 'avatarImgSize';
export const AVATAR_IMG_H_SIZE = 'avatarImgHSize';

//name
export const NAME_TEXT_SHADOW = 'nameTShadow';
//role
export const ROLE_SPACING = 'roleSpacing';
//desc
export const DESC_SPACING = 'descSpacing';
//social link
export const LINK_SPACING = 'linkSpacing';
export const LINK_PADDING = 'linkPadding';
export const LINK_BG = 'linkBg';
export const LINK_BORDER = 'linkBorder';
export const LINK_BORDER_RADIUS = 'linkBRadius';
export const LINK_SHADOW = 'linkShadow';
export const LINK_SPACE = 'linkSpace';
export const Link_ICON_SIZE = 'linkIconIsize';
export const LINK_HOVER_BG = 'linkHoverBg';
export const LINK_HOVER_BORDER_RADIUS = 'linkHoverBRadius';
