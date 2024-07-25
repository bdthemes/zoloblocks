import { __ } from '@wordpress/i18n';
const { registerBlockVariation } = wp.blocks;

const popupVariations = [
    {
        name: 'info_bar',
        title: 'Info Bar',
        description: 'A simple info bar that can be used to display important information to your visitors.',
        icon: 'admin-appearance',
        innerBlocks: [
            ['core/paragraph', { placeholder: 'Add your message here...' }],
            ['core/button', { text: 'Dismiss', url: '#' }],
        ],
    },
    {
        name: 'popup_box',
        title: 'Popup Box',
        description: 'A simple popup box that can be used to display important information to your visitors.',
        icon: 'admin-appearance',
        innerBlocks: [['core/cover']],
    },
];

registerBlockVariation('zolo/popup-builder', popupVariations);
