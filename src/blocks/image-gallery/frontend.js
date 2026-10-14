
/**
 * Security: image captions are author-editable and are injected into the lightbox
 * as HTML through the `data-caption` attribute, which FsLightbox renders via
 * innerHTML. Neutralise any scriptable markup at runtime (covers already-saved
 * galleries too) so a malicious caption cannot run as stored XSS.
 */
function zoloSanitizeGalleryCaptions() {
    const DANGER = /^(script|style|iframe|object|embed|img|svg|video|audio|source|link|form|input|button|base|meta|template)$/i;

    document.querySelectorAll('.wp-block-zolo-image-gallery [data-caption]').forEach(function (el) {
        const raw = el.getAttribute('data-caption');
        if (!raw) {
            return;
        }

        let doc;
        try {
            // Parsed in an inert document — no scripts run, no resources load.
            doc = new DOMParser().parseFromString(raw, 'text/html');
        } catch (e) {
            el.setAttribute('data-caption', '');
            return;
        }

        doc.querySelectorAll('*').forEach(function (node) {
            if (DANGER.test(node.tagName)) {
                node.remove();
                return;
            }
            Array.prototype.slice.call(node.attributes).forEach(function (attr) {
                const name = attr.name.toLowerCase();
                const isUrlAttr = name === 'href' || name === 'src' || name === 'xlink:href';
                if (name.indexOf('on') === 0 || (isUrlAttr && /^\s*(javascript|data|vbscript):/i.test(attr.value))) {
                    node.removeAttribute(attr.name);
                }
            });
        });

        el.setAttribute('data-caption', doc.body.innerHTML);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    zoloSanitizeGalleryCaptions();

    const galleries = document.querySelectorAll('.wp-block-zolo-image-gallery');

    if (galleries.length > 0) {
        fsLightbox.props.showThumbsOnMount = false;

        galleries.forEach((gallery) => {
            const uniqueId = gallery.dataset.uniqueid;
            const entranceAnimation = gallery.dataset.entranceanimation;
            const showLightboxThumb = gallery.dataset.showthumb === 'true' ? true : false;

            fsLightboxInstances[`gallery-${uniqueId}`].props.showThumbsOnMount = showLightboxThumb;
            fsLightboxInstances[`gallery-${uniqueId}`].props.showThumbsWithCaptions = showLightboxThumb;
            fsLightboxInstances[`gallery-${uniqueId}`].props.initialAnimation = entranceAnimation;
            fsLightboxInstances[`gallery-${uniqueId}`].props.slideChangeAnimation = entranceAnimation;
        });
    }
});
