import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 2.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3zm0 3.791a.75.75 0 0 0 0 1.5h12.375a.75.75 0 0 0 0-1.5H3zM2.25 11.1a.75.75 0 0 1 .75-.75h3.6a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-3.6zm1.5.75v2.1h2.1v-2.1h-2.1zM3 16.65a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h3.6a.75.75 0 0 0 .75-.75v-3.6a.75.75 0 0 0-.75-.75H3zm.75 3.6v-2.1h2.1v2.1h-2.1zm5.959-7.35a.75.75 0 0 1 .75-.75h10.54a.75.75 0 0 1 0 1.5H10.46a.75.75 0 0 1-.75-.75zm.75 5.55a.75.75 0 0 0 0 1.5h10.54a.75.75 0 0 0 0-1.5H10.46z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
