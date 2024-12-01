import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Context from './context';
import Edit from './edit';
import './editor.scss';
import Save from './save';
import './style.scss';
import deprecated from './deprecated';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['form'],
    },
    providesContext: Context,
    attributes,
    deprecated,
    edit: Edit,
    save: Save,
});
