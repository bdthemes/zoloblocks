import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

import BlockIcons from '../../global/block-icons';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['image-compare'],
    },
    attributes,
    edit: Edit,
    save: Save,
});
