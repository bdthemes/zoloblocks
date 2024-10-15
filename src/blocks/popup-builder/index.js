import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import Save from './save';
import './style.scss';
const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['popup-builder'],
    },
    attributes,
    edit: Edit,
    save: Save,
});

// Function to hide the block in other post types
const hideBlockInOtherPostTypes = () => {
    const currentPostType = wp.data.select('core/editor')?.getCurrentPostType();

    // Only unregister the block if the current post type is not 'zolo-popup'
    if (currentPostType !== 'zolo-popup') {
        const block = wp.blocks.getBlockType('zolo/popup-builder');
        if (block) {
            wp.blocks.unregisterBlockType('zolo/popup-builder');
        }
    }
};

// Hook into the block editor's ready event with a more efficient subscription
wp.data.subscribe(() => {
    const currentPostType = wp.data.select('core/editor')?.getCurrentPostType();
    if (currentPostType) {
        hideBlockInOtherPostTypes();
    }
});

