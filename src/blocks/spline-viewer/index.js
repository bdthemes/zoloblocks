import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import './style.scss';
const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        // src: BlockIcons['star-rating'],
        src: BlockIcons['spline-viewer'] || 'admin-site-alt2',
    },

    attributes,
    edit: Edit,
    save: Save,
});
