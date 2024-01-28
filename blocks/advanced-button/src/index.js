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
                    d="M1.25 10A2.75 2.75 0 0 1 4 7.25h16A2.75 2.75 0 0 1 22.75 10v4A2.75 2.75 0 0 1 20 16.75H4A2.75 2.75 0 0 1 1.25 14v-4zM4 8.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25H4zM5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm6-1a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
