import { registerBlockType } from '@wordpress/blocks';
import BlockIcons from '../../global/block-icons';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import Save from './save';
import './style.scss';
import { variations } from './variations';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['container'],
    },

    attributes,
    variations,
    edit: Edit,
    save: Save,
});
