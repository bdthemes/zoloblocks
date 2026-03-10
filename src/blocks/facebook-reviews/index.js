import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata.name, {
    icon: {
        src: BlockIcons['facebook-reviews'],
    },
    attributes,
    edit: Edit,
    save: () => null,
});
