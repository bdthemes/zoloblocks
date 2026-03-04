/**
 * Cloud List Frontend Script
 *
 * Initializes TagCanvas for each .zolo-cloud-list block on page load.
 * The canvas reads tag items from the hidden .zolo-cloud-list-hidden-wrap div.
 */

const parseSettings = (value) => {
    if (!value) return {};
    try {
        return JSON.parse(value);
    } catch (e) {
        return {};
    }
};

const initCloudListBlock = (block) => {
    const canvas = block.querySelector('.zolo-cloud-list-canvas');
    const wrap = block.querySelector('.zolo-cloud-list-hidden-wrap');

    if (!canvas || !wrap) return;
    if (!canvas.id || !wrap.id) return;

    // Normalize whitespace in all anchor text content for TagCanvas
    wrap.querySelectorAll('a').forEach((a) => {
        const text = a.textContent.replace(/\s+/g, ' ').trim();
        a.textContent = text;
    });

    const options = parseSettings(canvas.dataset.tagCanvasSettings);

    // Enable weight system if any tag has data-weight attribute
    const hasWeights = wrap.querySelector('a[data-weight]');
    if (hasWeights) {
        options.weight = true;
        options.weightMode = options.weightMode || 'size';
        options.weightFrom = options.weightFrom || 'data-weight';
        options.weightSize = options.weightSize || 1;
    }

    // Auto-enable per-tag background color if any tag has background-color inline style
    const hasPerTagBg = wrap.querySelector('a[style*="background-color"]');
    if (hasPerTagBg && options.bgColour !== 'tag') {
        options.bgColour = 'tag';
    }

    // Auto-enable per-tag bg outline: TagCanvas reads CSS 'color' for bgOutline when bgOutline='tag'
    const bgOutlineTags = wrap.querySelectorAll('a[data-bg-outline]');
    if (bgOutlineTags.length) {
        options.bgOutline = 'tag';
        let maxThickness = 0;
        bgOutlineTags.forEach((a) => {
            a.style.color = a.getAttribute('data-bg-outline');
            const t = parseInt(a.getAttribute('data-bg-outline-thickness'), 10) || 0;
            if (t > maxThickness) maxThickness = t;
        });
        options.bgOutlineThickness = maxThickness || options.bgOutlineThickness || 2;
        // Hide bg outline on tags that don't have one set
        wrap.querySelectorAll('a:not([data-bg-outline])').forEach((a) => {
            a.style.color = 'transparent';
        });
        if (!options.textColour) {
            options.textColour = '#333333';
        }
    }

    // Enable native tooltips if any tag has title attribute
    const hasTooltips = wrap.querySelector('a[title]');
    if (hasTooltips && !options.tooltip) {
        options.tooltip = 'native';
    }

    try {
        const started = window.TagCanvas.Start(canvas.id, wrap.id, options);
        if (!started) {
            console.warn('[CloudList] TagCanvas could not start for:', canvas.id);
        }
    } catch (e) {
        console.error('[CloudList] TagCanvas error:', e);
    }
};

const initAllCloudLists = () => {
    const blocks = document.querySelectorAll('.zolo-cloud-list');
    if (!blocks.length) return;

    blocks.forEach((block) => {
        initCloudListBlock(block);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initAllCloudLists();
});
