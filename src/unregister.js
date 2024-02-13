import domReady from '@wordpress/dom-ready';
import { unregisterBlockType } from '@wordpress/blocks';
import apiFetch from '@wordpress/api-fetch';

// Get the block states from the API.
async function getBlockStates() {
    try {
        const response = await apiFetch({
            path: '/wp/v2/settings',
            method: 'GET',
        });

        return response.zolo_blocks_settings || [];
    } catch (error) {
        console.error('API Fetch Error:', error);
        return [];
    }
}

// Transform the block name to the format used by the unregisterBlockType function.
function transformBlockName(name) {
    return name.replace('zolo_', 'zolo/').replace(/_/g, '-');
}

// Unregister the blocks that are disabled.
async function unregisterBlocks() {
    const blocks = await getBlockStates();

    blocks.forEach(({ name, status }) => {
        if (!status) {
            const blockName = transformBlockName(name);
            unregisterBlockType(blockName);
        }
    });
}

// Run the unregisterBlocks function when the DOM is ready.
domReady(() => {
    unregisterBlocks();
});




