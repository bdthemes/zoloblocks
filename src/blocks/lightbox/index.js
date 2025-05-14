import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import deprecated from './deprecated';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['lightbox'],
    },
    deprecated,
    attributes,
    edit: Edit,
    save: Save,
});
