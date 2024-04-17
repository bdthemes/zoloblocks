/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'googleMap';

// Map Type
export const MAP_TYPES = [
    {
        label: __('Roadmap', 'zoloblocks'),
        value: 'roadmap',
    },
    {
        label: __('Satellite', 'zoloblocks'),
        value: 'satellite',
    },
    {
        label: __('Hybrid', 'zoloblocks'),
        value: 'hybrid',
    },
    {
        label: __('Terrain', 'zoloblocks'),
        value: 'terrain',
    },
];

// languages list
export const LANGUAGES = [
    {
        value: 'af',
        label: __('Afrikaans', 'zoloblocks'),
    },
    {
        value: 'sq',
        label: __('Albanian', 'zoloblocks'),
    },
    {
        value: 'am',
        label: __('Amharic', 'zoloblocks'),
    },
    {
        value: 'ar',
        label: __('Arabic', 'zoloblocks'),
    },
    {
        value: 'hy',
        label: __('Armenian', 'zoloblocks'),
    },
    {
        value: 'az',
        label: __('Azerbaijani', 'zoloblocks'),
    },
    {
        value: 'eu',
        label: __('Basque', 'zoloblocks'),
    },
    {
        value: 'be',
        label: __('Belarusian', 'zoloblocks'),
    },
    {
        value: 'bn',
        label: __('Bengali', 'zoloblocks'),
    },
    {
        value: 'bs',
        label: __('Bosnian', 'zoloblocks'),
    },
    {
        value: 'bg',
        label: __('Bulgarian', 'zoloblocks'),
    },
    {
        value: 'my',
        label: __('Burmese', 'zoloblocks'),
    },
    {
        value: 'ca',
        label: __('Catalan', 'zoloblocks'),
    },
    {
        value: 'zh',
        label: __('Chinese', 'zoloblocks'),
    },
    {
        value: 'hr',
        label: __('Croatian', 'zoloblocks'),
    },
    {
        value: 'cs',
        label: __('Czech', 'zoloblocks'),
    },
    {
        value: 'da',
        label: __('Danish', 'zoloblocks'),
    },
    {
        value: 'nl',
        label: __('Dutch', 'zoloblocks'),
    },
    {
        value: 'en',
        label: __('English', 'zoloblocks'),
    },
    {
        value: 'et',
        label: __('Estonian', 'zoloblocks'),
    },
    {
        value: 'fa',
        label: __('Farsi', 'zoloblocks'),
    },
    {
        value: 'fi',
        label: __('Finnish', 'zoloblocks'),
    },
    {
        value: 'fr',
        label: __('French', 'zoloblocks'),
    },
    {
        value: 'gl',
        label: __('Galician', 'zoloblocks'),
    },
    {
        value: 'ka',
        label: __('Georgian', 'zoloblocks'),
    },
    {
        value: 'de',
        label: __('German', 'zoloblocks'),
    },
    {
        value: 'el',
        label: __('Greek', 'zoloblocks'),
    },
    {
        value: 'gu',
        label: __('Gujarati', 'zoloblocks'),
    },
    {
        value: 'iw',
        label: __('Hebrew', 'zoloblocks'),
    },
    {
        value: 'hi',
        label: __('Hindi', 'zoloblocks'),
    },
    {
        value: 'hu',
        label: __('Hungarian', 'zoloblocks'),
    },
    {
        value: 'is',
        label: __('Icelandic', 'zoloblocks'),
    },
    {
        value: 'id',
        label: __('Indonesian', 'zoloblocks'),
    },
    {
        value: 'it',
        label: __('Italian', 'zoloblocks'),
    },
    {
        value: 'ja',
        label: __('Japanese', 'zoloblocks'),
    },
    {
        value: 'kn',
        label: __('Kannada', 'zoloblocks'),
    },
    {
        value: 'kk',
        label: __('Kazakh', 'zoloblocks'),
    },
    {
        value: 'km',
        label: __('Khmer', 'zoloblocks'),
    },
    {
        value: 'ko',
        label: __('Korean', 'zoloblocks'),
    },
    {
        value: 'ky',
        label: __('Kyrgyz', 'zoloblocks'),
    },
    {
        value: 'lo',
        label: __('Lao', 'zoloblocks'),
    },
    {
        value: 'lv',
        label: __('Latvian', 'zoloblocks'),
    },
    {
        value: 'lt',
        label: __('Lithuanian', 'zoloblocks'),
    },
    {
        value: 'mk',
        label: __('Macedonian', 'zoloblocks'),
    },
    {
        value: 'ms',
        label: __('Malay', 'zoloblocks'),
    },
    {
        value: 'ml',
        label: __('Malayalam', 'zoloblocks'),
    },
    {
        value: 'mr',
        label: __('Marathi', 'zoloblocks'),
    },
    {
        value: 'mn',
        label: __('Mongolian', 'zoloblocks'),
    },
    {
        value: 'ne',
        label: __('Nepali', 'zoloblocks'),
    },
    {
        value: 'no',
        label: __('Norwegian', 'zoloblocks'),
    },
    {
        value: 'pl',
        label: __('Polish', 'zoloblocks'),
    },
    {
        value: 'pt',
        label: __('Portuguese', 'zoloblocks'),
    },
    {
        value: 'pa',
        label: __('Punjabi', 'zoloblocks'),
    },
    {
        value: 'ro',
        label: __('Romanian', 'zoloblocks'),
    },
    {
        value: 'ru',
        label: __('Russian', 'zoloblocks'),
    },
    {
        value: 'sr',
        label: __('Serbian', 'zoloblocks'),
    },
    {
        value: 'si',
        label: __('Sinhalese', 'zoloblocks'),
    },
    {
        value: 'sk',
        label: __('Slovak', 'zoloblocks'),
    },
    {
        value: 'sl',
        label: __('Slovenian', 'zoloblocks'),
    },
    {
        value: 'es',
        label: __('Spanish', 'zoloblocks'),
    },
    {
        value: 'sw',
        label: __('Swahili', 'zoloblocks'),
    },
    {
        value: 'sv',
        label: __('Swedish', 'zoloblocks'),
    },
    {
        value: 'ta',
        label: __('Tamil', 'zoloblocks'),
    },
    {
        value: 'te',
        label: __('Telugu', 'zoloblocks'),
    },
    {
        value: 'th',
        label: __('Thai', 'zoloblocks'),
    },
    {
        value: 'tr',
        label: __('Turkish', 'zoloblocks'),
    },
    {
        value: 'uk',
        label: __('Ukrainian', 'zoloblocks'),
    },
    {
        value: 'ur',
        label: __('Urdu', 'zoloblocks'),
    },
    {
        value: 'uz',
        label: __('Uzbek', 'zoloblocks'),
    },
    {
        value: 'vi',
        label: __('Vietnamese', 'zoloblocks'),
    },
    {
        value: 'zu',
        label: __('Zulu', 'zoloblocks'),
    },
];

// Block Settings
export const MAP_HEIGHT = 'mapHeight';

// border radius
export const MAP_BRADIUS = 'mapBRadius';
