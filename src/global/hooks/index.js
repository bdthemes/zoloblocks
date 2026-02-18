// attributes
import './attributes';
import './block-wrapper-props';
// copy paste
import './copy-paste';

import domReady from '@wordpress/dom-ready';
import { getCategories, setCategories } from '@wordpress/blocks';

domReady(() => {
    if(window.location.href.includes("single")) return;
    
    const categories = getCategories();
    // Filter out zoloblocks and zoloblocks-single
    const filtered = categories.filter(c => c.slug !== "zoloblocks" && c.slug !== "zoloblocks-single");

    // Forcefully add zoloblocks at index 0 and zoloblocks-single at index 1
    const reordered = [
        { "slug": "zoloblocks", "title": "ZoloBlocks" },
        { "slug": "zoloblocks-single", "title": "ZoloBlocks Single" },
        ...filtered
    ];

    // Update the categories
    setCategories(reordered);
});