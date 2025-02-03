import { addFilter } from '@wordpress/hooks';
import domReady from '@wordpress/dom-ready';
import { getQueryArg } from '@wordpress/url';
const blocks = [
    "zolo/post-featured-image",
    "zolo/post-meta",
    "zolo/post-title"
];
addFilter('blocks.registerBlockType', 'zolo/zoloBlocksPro/metadataModify', (settings, name) => {
    if(blocks.includes(name)) {
        domReady(() => {
            const currentUrl = window.location.href;
            const postId = getQueryArg(currentUrl, 'postId');
            if(postId) {
                const templateId = postId?.split('//')?.[1];
                if(templateId && templateId === 'single') {
                    settings.ancestor = null;
                }
            }
        });
    }
    return settings;    
});