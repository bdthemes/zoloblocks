import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';

const { BlockIcons } = window.zoloIcons;
registerBlockType(metadata, {
    icon: {
        src: BlockIcons['select-field'],
    },

    attributes,
    usesContext: Context,
    edit: Edit,
    save: Save,
});
