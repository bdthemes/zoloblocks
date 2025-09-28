const zoloGenerateUniqueName = (uniqueId, customNameAttribute, defaultName = 'field_name') => {
    const lastPart = uniqueId && typeof uniqueId === 'string' ? uniqueId.split('-').pop() : 'unknown';
    const sanitizedCustomName = customNameAttribute
        ? customNameAttribute
            .trim()
            .replace(/[^a-zA-Z0-9]/g, '_')
            .replace(/\s+/g, '_')
        : null;

    return sanitizedCustomName ? sanitizedCustomName : `${defaultName}_${lastPart}`;
};

// Make the function available on the window object
window.zoloGenerateUniqueName = zoloGenerateUniqueName;


function decodeEntities(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

function sanitizeHtml(input) {
    // Decode any HTML entities (e.g., &lt;img&gt; → <img>)
    const decoded = decodeEntities(input);

    // Parse into a DOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(decoded, 'text/html');

    // Allowed tags & attributes
    const allowedTags = ['b', 'i', 'em', 'strong', 'u', 'span', 'div', 'h3', 'p'];
    const allowedAttrs = ['class', 'style'];

    // Walk all elements
    doc.body.querySelectorAll('*').forEach(el => {
        const tag = el.nodeName.toLowerCase();

        // Remove disallowed tags
        if (!allowedTags.includes(tag)) {
            el.remove();
            return '';
        }

        // Clean attributes
        [...el.attributes].forEach(attr => {
            const name = attr.name.toLowerCase();
            const value = attr.value.trim().toLowerCase();

            if (
                !allowedAttrs.includes(name) ||
                name.startsWith('on') || // onerror, onclick, etc.
                value.startsWith('javascript:')
            ) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return doc.body.innerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    const galleries = document.querySelectorAll('.wp-block-zolo-image-gallery');

    if (galleries.length > 0) {
        galleries.forEach((gallery) => {
            const uniqueId = gallery.dataset.uniqueid;

            // Collect captions into an array
            const items = gallery.querySelectorAll('.zolo-item[data-caption]');
            const captions = [];

            items.forEach((item) => {
                const rawCaption = item.getAttribute('data-caption');
                if (rawCaption) {
                    const cleanCaption = sanitizeHtml(rawCaption);
                    captions.push(cleanCaption);
                } else {
                    captions.push(''); // placeholder if no caption
                }
            });

            // Assign all captions at once
            fsLightboxInstances[`gallery-${uniqueId}`].props.captions = captions;
        });
    }
});

