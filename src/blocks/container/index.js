import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import Save from './save';
import './style.scss';
import { variations } from './variations';
import deprecated from './deprecated';
const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['container'],
    },
    attributes,
    variations,
    edit: Edit,
    save: Save,
    deprecated: deprecated,
});
