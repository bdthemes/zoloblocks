import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';

import './style.scss';
import './editor.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.73 3.73v1.99h16.54V3.73H3.73zM2.27 3.3c0-.569.461-1.03 1.03-1.03h17.4c.569 0 1.03.461 1.03 1.03v2.85a1.03 1.03 0 0 1-1.03 1.03H3.3a1.03 1.03 0 0 1-1.03-1.03V3.3zm1.46 6.84v4.56h16.54v-4.56H3.73zm-1.46-.43c0-.569.461-1.03 1.03-1.03h17.4c.569 0 1.03.461 1.03 1.03v5.42a1.03 1.03 0 0 1-1.03 1.03H3.3a1.03 1.03 0 0 1-1.03-1.03V9.71zM3 17.66a.73.73 0 0 0-.73.73V21c0 .403.327.73.73.73h6.91a.73.73 0 0 0 .73-.73v-2.61a.73.73 0 0 0-.73-.73H3zm.73 2.61v-1.15h5.45v1.15H3.73z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    providesContext: Context,
    attributes,
    edit: Edit,
    save: Save,
});
