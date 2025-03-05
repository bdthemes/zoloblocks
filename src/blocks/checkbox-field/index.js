import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';
import './style.scss';

const { BlockIcons } = window.zoloIcons;
registerBlockType(metadata, {
    icon: {
        src: BlockIcons['checkbox-field'],
    },

    attributes,
    usesContext: Context,
    edit: Edit,
    save: Save,
});
