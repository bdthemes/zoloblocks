import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width={24} height={24} aria-hidden="true">
                <path d="M2 3 0 5v2l2 2h21l2-2V5l-2-2zm0 1h21l1 1v2l-1 1H2L1 7V5l1-1zm0 18v2h7l-1 1 1 1 2-2v-1l-2-2-1 1 1 1H3v-1H2zm14-1-2 2v2l2 2h12l2-2v-2l-2-2zm0 1h12l1 1v2l-1 1H16l-1-1v-2l1-1zM2 12l-2 2v2l2 2h21l2-2v-2l-2-2zm0 1h21l1 1v2l-1 1H2l-1-1v-2l1-1z" />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
    usesContext: ['menuBreakpoint'],
});
