import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import deprecated from './deprecated';
const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['qrcode'],
    },
    attributes,
    deprecated,
    edit: Edit,
    save: Save,
});
