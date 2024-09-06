import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import Save from './save';
import './style.scss';
const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['star-rating'],
    },

    attributes,
    edit: Edit,
    save: Save,
    deprecated: [deprecated],
});
