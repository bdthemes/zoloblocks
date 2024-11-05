import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['post-featured-image'],
    },
    attributes,
    edit: Edit,
    save: () => null,
});
