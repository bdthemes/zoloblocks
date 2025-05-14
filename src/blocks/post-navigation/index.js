import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata.name, {
    icon: BlockIcons['post-navigation'],
    attributes,
    edit: Edit,
    save: () => null,
});
