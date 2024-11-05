import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import { __ } from '@wordpress/i18n';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24} height={24}>
                <path d="M284.448 170.672v170.656H512V170.672H284.448zM496 325.344H300.448V186.672H496v138.672zM0 204.896h227.568v16H0zM0 290.24h227.568v16H0z" />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
