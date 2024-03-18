import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.038 6.025a.957.957 0 0 1 .672-.275h14.58c.311 0 .588.148.763.378l-6.68 5.681a2.104 2.104 0 0 1-2.75-.024l-.001-.001-6.584-5.76zM3.75 7.766v9.124c0 .53.43.96.96.96h14.58c.53 0 .96-.43.96-.96V7.93l-5.904 5.02a3.604 3.604 0 0 1-4.708-.034l-.002-.002L3.75 7.767zm.96-3.516a2.46 2.46 0 0 0-2.46 2.46v10.18a2.46 2.46 0 0 0 2.46 2.46h14.58a2.46 2.46 0 0 0 2.46-2.46V6.71a2.46 2.46 0 0 0-2.46-2.46H4.71z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },

    attributes,
    edit: Edit,
    save: Save,
});
