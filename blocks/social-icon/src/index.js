import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={7} cy={12} r="4.25" stroke="#4D4D4D" strokeWidth="1.5" />
                <circle cx="18.5" cy="5.5" r="2.75" stroke="#4D4D4D" strokeWidth="1.5" />
                <circle cx="18.5" cy="18.5" r="2.75" stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M16 17L11 14" stroke="#4D4D4D" strokeWidth="1.5" />
                <path d="M16 7L11 10" stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
