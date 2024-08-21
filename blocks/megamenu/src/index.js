import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                <path stroke="#292D32" strokeMiterlimit="10" strokeWidth="1.5" d="m22 7-3 13-3 2H3c-1 0-2-1-2-3L5 6l2-2h13l2 1v2Z"/>
                <path stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M16 22h5l2-2-1-14M10 6l1-4M16 6l1-4M8 12h8M7 16h8"/>
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
