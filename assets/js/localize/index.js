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


/**
 * Lightbox captions.
 *
 * FsLightbox copies the data-caption of every [data-fslightbox] link on the page when it
 * loads, and renders that copy with innerHTML when the lightbox opens. Captions are saved
 * by whoever edits the post, so they are cleaned with an allow-list first: this script is
 * a dependency of fslightbox, so the attributes are cleaned before FsLightbox reads them,
 * and every copy FsLightbox holds is cleaned again once the page has loaded.
 */
const ZOLO_CAPTION_ALLOWED_TAGS = {
    a: ['class', 'href', 'title', 'target', 'rel'],
    b: ['class'],
    strong: ['class'],
    i: ['class'],
    em: ['class'],
    u: ['class'],
    s: ['class'],
    small: ['class'],
    sub: ['class'],
    sup: ['class'],
    mark: ['class'],
    br: [],
    p: ['class'],
    span: ['class'],
    div: ['class'],
    h3: ['class'],
};

// Removed together with everything inside them; any other unknown tag is unwrapped.
const ZOLO_CAPTION_DROP_WITH_CONTENT = [
    'script',
    'style',
    'iframe',
    'object',
    'embed',
    'template',
    'noscript',
    'svg',
    'math',
    'textarea',
    'select',
    'xmp',
    'noembed',
    'noframes',
    'frameset',
    'frame',
];

function zoloIsSafeCaptionUrl(value) {
    // Browsers ignore control characters and whitespace inside a scheme ("java\tscript:").
    const normalized = String(value).replace(/[\u0000- \u007f-\u009f]/g, '');
    const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(normalized);

    return '' !== normalized && (!scheme || ['http', 'https', 'mailto', 'tel'].includes(scheme[1].toLowerCase()));
}

function zoloCleanCaptionNodes(parent) {
    Array.from(parent.childNodes).forEach((node) => {
        if (node.nodeType === window.Node.TEXT_NODE) {
            return;
        }

        if (node.nodeType !== window.Node.ELEMENT_NODE) {
            node.remove();
            return;
        }

        const tag = node.tagName.toLowerCase();

        if (ZOLO_CAPTION_DROP_WITH_CONTENT.includes(tag)) {
            node.remove();
            return;
        }

        if (!Object.prototype.hasOwnProperty.call(ZOLO_CAPTION_ALLOWED_TAGS, tag)) {
            zoloCleanCaptionNodes(node);
            node.replaceWith(...Array.from(node.childNodes));
            return;
        }

        Array.from(node.attributes).forEach((attribute) => {
            const name = attribute.name.toLowerCase();

            if (!ZOLO_CAPTION_ALLOWED_TAGS[tag].includes(name) || ('href' === name && !zoloIsSafeCaptionUrl(attribute.value))) {
                node.removeAttribute(attribute.name);
            }
        });

        if ('a' === tag && '_blank' === node.getAttribute('target')) {
            node.setAttribute('rel', 'noopener noreferrer');
        }

        zoloCleanCaptionNodes(node);
    });
}

function zoloSanitizeCaptionHtml(input) {
    if (typeof input !== 'string' || '' === input) {
        return '';
    }

    // An inert <template>: nothing parsed into it loads or runs.
    const template = document.createElement('template');
    template.innerHTML = input;
    zoloCleanCaptionNodes(template.content);

    return template.innerHTML;
}

window.zoloSanitizeCaptionHtml = zoloSanitizeCaptionHtml;

// Runs now, before fslightbox (which depends on this script) copies the attributes.
document.querySelectorAll('[data-fslightbox][data-caption]').forEach((el) => {
    el.setAttribute('data-caption', zoloSanitizeCaptionHtml(el.getAttribute('data-caption')));
});

document.addEventListener('DOMContentLoaded', function () {
    const instances = window.fsLightboxInstances || {};

    Object.keys(instances).forEach((key) => {
        const props = instances[key] && instances[key].props;

        if (props && Array.isArray(props.captions)) {
            props.captions = props.captions.map((caption) => (caption ? zoloSanitizeCaptionHtml(String(caption)) : caption));
        }
    });
});

