const parseOptions = (value) => {
    if (!value) {
        return {};
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        return {};
    }
};

const initTagCanvasBlock = (block) => {
    const canvas = block.querySelector('.zolo-tag-cloud-canvas');
    const wrap = block.querySelector('.zolo-tag-cloud-wrap');

    if (!canvas.id || !wrap.id) return;
    wrap.querySelectorAll('a').forEach(a => {
        // Normalize all whitespace
        const text = a.textContent.replace(/\s+/g, ' ').trim();
        a.textContent = text;
    });
    const options = parseOptions(canvas.dataset.tagCanvasSettings);

    let started = window?.TagCanvas.Start(canvas.id, wrap.id, options);

    if (!started) {
        console.warn('TagCanvas not started');
    }
};

const initTagCanvas = () => {
    const blocks = document.querySelectorAll('.zolo-tag-cloud.zolo-tag-skin-animated');

    if (!blocks.length) {
        return;
    }

    blocks.forEach((block) => {
        initTagCanvasBlock(block);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initTagCanvas();
});
