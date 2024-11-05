import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
const { BlockIcons } = window.zoloIcons;

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['navigation-submenu'],
    },
    attributes,
    edit: Edit,
    save: Save,
    usesContext: ['menuBreakpoint'],
});
