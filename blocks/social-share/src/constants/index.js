/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'social-icon';
// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zolo-blocks'), value: 'preset-1' },
    { label: __('Preset 2', 'zolo-blocks'), value: 'preset-2' },
    { label: __('Preset 3', 'zolo-blocks'), value: 'preset-3' },
];

// social media
export const socialMediaInfo = [
    {
        id: 1,
        value: 'twitter',
        label: __('Twitter', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',
    },
    {
        id: 2,
        value: 'facebook',
        label: __('Facebook', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
    },
    {
        id: 3,
        value: 'linkedin',
        label: __('Linkedin', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
    },
    {
        id: 4,
        label: __('Email', 'zolo-blocks'),
        value: 'email',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 57.6c-4.5-4.5-10.6-7.6-17.4-8.6-6.8-1-13.8.2-19.8 3.4L256 192 46.6 55.4c-6-3.2-13-4.4-19.8-3.4-6.8 1-12.9 4.1-17.4 8.6C4.1 62.1 0 68.2 0 75v362c0 6.8 4.1 13 10.6 17.4 4.5 4.5 10.6 7.6 17.4 8.6 2.3.3 4.6.4 6.9.4 5.9 0 11.8-1.1 17.4-3.4L256 320l209.4 136.6c5.6 2.3 11.5 3.4 17.4 3.4 2.3 0 4.6-.1 6.9-.4 6.8-1 12.9-4.1 17.4-8.6 6.5-4.5 10.6-10.6 10.6-17.4V75c0-6.8-4.1-13-10.6-17.4zM256 256L32 96h448L256 256z"></path></svg>',
    },
    {
        id: 5,
        value: 'whatsapp',
        label: __('Whatsapp', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112L400 32zM320 384c0 13.3-10.7 24-24 24H80c-13.3 0-24-10.7-24-24V112h264v272z"></path></svg>',
    },
    {
        id: 6,
        value: 'telegram',
        label: __('Telegram', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm92.8 177.6l-14.4 67.2-67.2 67.2c-4.8 4.8-11.2 4.8-16 0l-32-32-80 80c-4.8 4.8-11.2 4.8-16 0l-96-96c-4.8-4.8-4.8-11.2 0-16l240-240c4.8-4.8 11.2-4.8 16 0l96 96c4.8 4.8 4.8 11.2 0 16l-80 80 32 32c4.8 4.8 4.8 11.2 0 16z"></path></svg>',
    },
    {
        id: 7,
        value: 'viber',
        label: __('Viber', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Viber</title><path d="M12 0C5.383 0 0 5.383 0 12c0 4.5 2.5 8.5 6.5 10.5v-9.5c0-1.5 1-2.5 2.5-2.5h1c1.5 0 2.5 1 2.5 2.5v9.5c4-2 6.5-6 6.5-10.5C24 5.383 18.617 0 12 0zm0 2.5c3.5 0 6.5 2.5 6.5 7s-3 7-6.5 7-6.5-2.5-6.5-7 3-7 6.5-7zm0 1.5c-2.5 0-4.5 2-4.5 5s2 5 4.5 5 4.5-2 4.5-5-2-5-4.5-5zm0 1.5c1.5 0 2.5 1 2.5 3s-1 3-2.5 3-2.5-1-2.5-3 1-3 2.5-3z"/></svg>',
    },
    {
        id: 8,
        value: 'pinterest',
        label: __('Pinterest', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>Pinterest</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>',
    },
    {
        id: 9,
        value: 'tumblr',
        label: __('Tumblr', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 114.6 114.6 0 256 0s192 114.6 192 256zM224.1 384h-64.2v-96.1h-64.2V224h64.2v-64.2c0-35.4 28.7-64.1 64.2-64.1h64.2v96.1h64.2v96.1h-64.2V384z"></path></svg>',
    },
    {
        id: 10,
        value: 'hackernews',
        label: __('Hacker News', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm338.5 225.5h-80.3v80.3h-48.2v-80.3h-80.3v-48.2h80.3v-80.3h48.2v80.3h80.3v48.2z"></path></svg>',
    },
    {
        id: 11,
        value: 'reddit',
        label: __('Reddit', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>',
    },
    {
        id: 12,
        value: 'vk',
        label: __('VK', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 32v448H0V32h576zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 13,
        value: 'buffer',
        label: __('Buffer', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm-64 352h-64v-64h64v-64h64v64h64v64h-64v64h-64v-64zm128-192h-64v-64h64v64z"></path></svg>',
    },
    {
        id: 14,
        value: 'xing',
        label: __('Xing', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M480 32l-192 96-192-96v160l192 96 192-96zm-192 96l-192 96 192 96 192-96zm-96-96l-192 96 192 96 192-96zm-96 96l-192 96 192 96 192-96z"></path></svg>',
    },
    {
        id: 15,
        value: 'line',
        label: __('Line', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm-64 352h-64v-64h64v-64h64v64h64v64h-64v64h-64v-64zm128-192h-64v-64h64v64z"></path></svg>',
    },
    {
        id: 16,
        value: 'instapaper',
        label: __('Instapaper', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 32v448H0V32h384zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 17,
        value: 'pocket',
        label: __('Pocket', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 32v448H0V32h448zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 18,
        value: 'flipboard',
        label: __('Flipboard', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 32v448H0V32h448zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 19,
        value: 'weibo',
        label: __('Weibo', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 32v448H0V32h576zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 20,
        value: 'blogger',
        label: __('Bloggger', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 32v448H0V32h448zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 21,
        value: 'baidu',
        label: __('Baidu', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 32v448H0V32h576zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 22,
        value: 'ok',
        label: __('OK', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 32v448H0V32h384zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 23,
        value: 'evernote',
        label: __('Evernote', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 32v448H0V32h384zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 24,
        value: 'skype',
        label: __('Skype', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 32v448H0V32h448zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
    {
        id: 25,
        value: 'trello',
        label: __('Trello', 'zolo-blocks'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 32v448H0V32h448zM192 384l-64-64-64 64-48-48 64-64-64-64 48-48 64 64 64-64 48 48-64 64 64 64-48 48zm192-64l-64 64-64-64-48 48 64 64-64 64 48 48 64-64 64 64 48-48-64-64 64-64z"></path></svg>',
    },
];
    // { label: __('Xing', 'zolo-blocks'), value: 'xing' },
    // { label: __('Line', 'zolo-blocks'), value: 'line' },
    // { label: __('Instapaper', 'zolo-blocks'), value: 'instapaper' },
    // { label: __('Pocket', 'zolo-blocks'), value: 'pocket' },
    // { label: __('Flipboard', 'zolo-blocks'), value: 'flipboard' },
    // { label: __('Weibo', 'zolo-blocks'), value: 'weibo' },
    // { label: __('Bloggger', 'zolo-blocks'), value: 'blogger' },
    // { label: __('Baidu', 'zolo-blocks'), value: 'baidu' },
    // { label: __('OK', 'zolo-blocks'), value: 'ok' },
    // { label: __('Evernote', 'zolo-blocks'), value: 'evernote' },
    // { label: __('Skype', 'zolo-blocks'), value: 'skype' },
    // { label: __('Trello', 'zolo-blocks'), value: 'trello' },

// button icon positions
export const ICON_POSITIONS = [
    {
        label: 'Left',
        value: 'left',
    },
    {
        label: 'Right',
        value: 'right',
    },
    {
        label: 'Top',
        value: 'top',
    },
    {
        label: 'Bottom',
        value: 'bottom',
    },
];

// social icon color
export const SOCIAL_ICON_COLOR = [
    {
        label: __('Original', 'zolo-blocks'),
        value: 'original',
    },
    {
        label: __('Custom', 'zolo-blocks'),
        value: 'custom',
    },
];

// column count
export const COLUMN_COUNT = 'columnCount';

//columns Number
export const COLUMNS_NUMBER = 'columns';
export const COLUMNS_GAP = 'columnsGap';
export const ROW_GAP = 'rowGap';

//button
export const BUTTON_PADDING = 'btnPadding';
export const BUTTON_SIZE = 'btnSize';
export const BUTTON_BORDER = 'btnBorder';
export const BTN_BORDER_RADIUS = 'btnBorderRadius';
export const BTN_SHADOW = 'btnShadow';
export const BTN_HOVER_SHADOW = 'btnHoverShadow';

// Icon
export const ICON_TEXT_SPACING = 'iconTextSpacing';

// Block Margin
export const BLOCK_MARGIN = 'blockMargin';

// preset 3 icon
export const PT_ICON_WIDTH = 'ptIconWidth';
export const PT_ICON_HEIGHT = 'ptIconHeight';
