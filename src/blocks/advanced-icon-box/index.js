import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import Save from './save';

import BlockIcons from '../../global/block-icons';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['advanced-icon-box'],
    },
    deprecated,
    attributes,
    edit: Edit,
    save: Save,
});
