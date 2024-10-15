import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
//block css
import './style.scss';
import './editor.scss';
import Context from './context';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['social-count'],
    },
    attributes,
    providesContext: Context,
    edit: Edit,
    save: Save,
});
