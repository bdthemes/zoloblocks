import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import { variations } from './variations';
import './editor.scss';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 3.75C2 2.784 2.784 2 3.75 2h16c.966 0 1.75.784 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-16A1.75 1.75 0 0 1 2 8.75v-5zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25h-16zM2 14.75c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 2 19.75v-5zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25h-5zm11-1.5A1.75 1.75 0 0 0 13 14.75v5c0 .966.784 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75v-5A1.75 1.75 0 0 0 19.75 13h-5zm-.25 1.75a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5a.25.25 0 0 1-.25.25h-5a.25.25 0 0 1-.25-.25v-5z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },

    attributes,
    variations,
    edit: Edit,
    save: Save,
});
