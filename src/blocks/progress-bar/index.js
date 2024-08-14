import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Context from './context';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['progress-bar'],
    },
    providesContext: Context,
    attributes,
    edit: Edit,
    save: Save,
});
