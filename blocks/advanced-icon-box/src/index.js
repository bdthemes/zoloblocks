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
                    d="M5 1.25A3.75 3.75 0 0 0 1.25 5v14A3.75 3.75 0 0 0 5 22.75h14A3.75 3.75 0 0 0 22.75 19V5A3.75 3.75 0 0 0 19 1.25H5zM2.75 5A2.25 2.25 0 0 1 5 2.75h14A2.25 2.25 0 0 1 21.25 5v14A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V5zm7 4a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0zM12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zM4.25 15a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75zM7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
