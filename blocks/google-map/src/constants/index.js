/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'googleMap';

// Map Type
export const MAP_TYPES = [
    {
        label: __('Roadmap', 'zolo-blocks'),
        value: 'roadmap',
    },
    {
        label: __('Satellite', 'zolo-blocks'),
        value: 'satellite',
    },
    {
        label: __('Hybrid', 'zolo-blocks'),
        value: 'hybrid',
    },
    {
        label: __('Terrain', 'zolo-blocks'),
        value: 'terrain',
    },
];

// languages list
export const LANGUAGES = [
    {
        value: 'af',
        label: __('Afrikaans', 'zolo-blocks'),
    },
    {
        value: 'sq',
        label: __('Albanian', 'zolo-blocks'),
    },
    {
        value: 'am',
        label: __('Amharic', 'zolo-blocks'),
    },
    {
        value: 'ar',
        label: __('Arabic', 'zolo-blocks'),
    },
    {
        value: 'hy',
        label: __('Armenian', 'zolo-blocks'),
    },
    {
        value: 'az',
        label: __('Azerbaijani', 'zolo-blocks'),
    },
    {
        value: 'eu',
        label: __('Basque', 'zolo-blocks'),
    },
    {
        value: 'be',
        label: __('Belarusian', 'zolo-blocks'),
    },
    {
        value: 'bn',
        label: __('Bengali', 'zolo-blocks'),
    },
    {
        value: 'bs',
        label: __('Bosnian', 'zolo-blocks'),
    },
    {
        value: 'bg',
        label: __('Bulgarian', 'zolo-blocks'),
    },
    {
        value: 'my',
        label: __('Burmese', 'zolo-blocks'),
    },
    {
        value: 'ca',
        label: __('Catalan', 'zolo-blocks'),
    },
    {
        value: 'zh',
        label: __('Chinese', 'zolo-blocks'),
    },
    {
        value: 'hr',
        label: __('Croatian', 'zolo-blocks'),
    },
    {
        value: 'cs',
        label: __('Czech', 'zolo-blocks'),
    },
    {
        value: 'da',
        label: __('Danish', 'zolo-blocks'),
    },
    {
        value: 'nl',
        label: __('Dutch', 'zolo-blocks'),
    },
    {
        value: 'en',
        label: __('English', 'zolo-blocks'),
    },
    {
        value: 'et',
        label: __('Estonian', 'zolo-blocks'),
    },
    {
        value: 'fa',
        label: __('Farsi', 'zolo-blocks'),
    },
    {
        value: 'fi',
        label: __('Finnish', 'zolo-blocks'),
    },
    {
        value: 'fr',
        label: __('French', 'zolo-blocks'),
    },
    {
        value: 'gl',
        label: __('Galician', 'zolo-blocks'),
    },
    {
        value: 'ka',
        label: __('Georgian', 'zolo-blocks'),
    },
    {
        value: 'de',
        label: __('German', 'zolo-blocks'),
    },
    {
        value: 'el',
        label: __('Greek', 'zolo-blocks'),
    },
    {
        value: 'gu',
        label: __('Gujarati', 'zolo-blocks'),
    },
    {
        value: 'iw',
        label: __('Hebrew', 'zolo-blocks'),
    },
    {
        value: 'hi',
        label: __('Hindi', 'zolo-blocks'),
    },
    {
        value: 'hu',
        label: __('Hungarian', 'zolo-blocks'),
    },
    {
        value: 'is',
        label: __('Icelandic', 'zolo-blocks'),
    },
    {
        value: 'id',
        label: __('Indonesian', 'zolo-blocks'),
    },
    {
        value: 'it',
        label: __('Italian', 'zolo-blocks'),
    },
    {
        value: 'ja',
        label: __('Japanese', 'zolo-blocks'),
    },
    {
        value: 'kn',
        label: __('Kannada', 'zolo-blocks'),
    },
    {
        value: 'kk',
        label: __('Kazakh', 'zolo-blocks'),
    },
    {
        value: 'km',
        label: __('Khmer', 'zolo-blocks'),
    },
    {
        value: 'ko',
        label: __('Korean', 'zolo-blocks'),
    },
    {
        value: 'ky',
        label: __('Kyrgyz', 'zolo-blocks'),
    },
    {
        value: 'lo',
        label: __('Lao', 'zolo-blocks'),
    },
    {
        value: 'lv',
        label: __('Latvian', 'zolo-blocks'),
    },
    {
        value: 'lt',
        label: __('Lithuanian', 'zolo-blocks'),
    },
    {
        value: 'mk',
        label: __('Macedonian', 'zolo-blocks'),
    },
    {
        value: 'ms',
        label: __('Malay', 'zolo-blocks'),
    },
    {
        value: 'ml',
        label: __('Malayalam', 'zolo-blocks'),
    },
    {
        value: 'mr',
        label: __('Marathi', 'zolo-blocks'),
    },
    {
        value: 'mn',
        label: __('Mongolian', 'zolo-blocks'),
    },
    {
        value: 'ne',
        label: __('Nepali', 'zolo-blocks'),
    },
    {
        value: 'no',
        label: __('Norwegian', 'zolo-blocks'),
    },
    {
        value: 'pl',
        label: __('Polish', 'zolo-blocks'),
    },
    {
        value: 'pt',
        label: __('Portuguese', 'zolo-blocks'),
    },
    {
        value: 'pa',
        label: __('Punjabi', 'zolo-blocks'),
    },
    {
        value: 'ro',
        label: __('Romanian', 'zolo-blocks'),
    },
    {
        value: 'ru',
        label: __('Russian', 'zolo-blocks'),
    },
    {
        value: 'sr',
        label: __('Serbian', 'zolo-blocks'),
    },
    {
        value: 'si',
        label: __('Sinhalese', 'zolo-blocks'),
    },
    {
        value: 'sk',
        label: __('Slovak', 'zolo-blocks'),
    },
    {
        value: 'sl',
        label: __('Slovenian', 'zolo-blocks'),
    },
    {
        value: 'es',
        label: __('Spanish', 'zolo-blocks'),
    },
    {
        value: 'sw',
        label: __('Swahili', 'zolo-blocks'),
    },
    {
        value: 'sv',
        label: __('Swedish', 'zolo-blocks'),
    },
    {
        value: 'ta',
        label: __('Tamil', 'zolo-blocks'),
    },
    {
        value: 'te',
        label: __('Telugu', 'zolo-blocks'),
    },
    {
        value: 'th',
        label: __('Thai', 'zolo-blocks'),
    },
    {
        value: 'tr',
        label: __('Turkish', 'zolo-blocks'),
    },
    {
        value: 'uk',
        label: __('Ukrainian', 'zolo-blocks'),
    },
    {
        value: 'ur',
        label: __('Urdu', 'zolo-blocks'),
    },
    {
        value: 'uz',
        label: __('Uzbek', 'zolo-blocks'),
    },
    {
        value: 'vi',
        label: __('Vietnamese', 'zolo-blocks'),
    },
    {
        value: 'zu',
        label: __('Zulu', 'zolo-blocks'),
    },
];

// Block Settings
export const MAP_HEIGHT = 'mapHeight';

// border radius
export const MAP_BRADIUS = 'mapBRadius';
