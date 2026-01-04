import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['facebook-reviews'] || BlockIcons['facebook-feed'],
    },
    edit: Edit,
    save: () => null,
});
