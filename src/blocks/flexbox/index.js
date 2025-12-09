import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import Save from './save';
import './style.scss';
import transforms from './transforms';
const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata.name, {
    icon: {
        src: BlockIcons['container'],
    },
    attributes,
    edit: Edit,
    save: Save,
    transforms: transforms,
});
