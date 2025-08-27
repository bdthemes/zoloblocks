import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import deprecated from './deprecated';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['icon'],
    },
    attributes,
    edit: Edit,
    save: Save,
    deprecated,
});
