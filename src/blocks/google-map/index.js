import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

import './style.scss';

import BlockIcons from '../../global/block-icons';
import deprecated from './deprecated';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['google-map'],
    },

    attributes,
    edit: Edit,
    save: Save,
    deprecated: [deprecated],
});
