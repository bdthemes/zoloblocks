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
        fsLightbox.props.showThumbsOnMount = false;

        galleries.forEach((gallery) => {
            const uniqueId = gallery.dataset.uniqueid;
            const entranceAnimation = gallery.dataset.entranceanimation;
            const showLightboxThumb = gallery.dataset.showthumb === 'true';

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

            // Other props
            fsLightboxInstances[`gallery-${uniqueId}`].props.showThumbsOnMount = showLightboxThumb;
            fsLightboxInstances[`gallery-${uniqueId}`].props.showThumbsWithCaptions = showLightboxThumb;
            fsLightboxInstances[`gallery-${uniqueId}`].props.initialAnimation = entranceAnimation;
            fsLightboxInstances[`gallery-${uniqueId}`].props.slideChangeAnimation = entranceAnimation;
        });
    }
});

