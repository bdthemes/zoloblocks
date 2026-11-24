/**
 * Allow-list sanitizer for marker info-window HTML.
 *
 * The info text is free HTML saved on the block by whoever edits the post, and it is
 * rendered with RawHTML (innerHTML) both in the editor and on the front end, so any
 * markup it carries runs in the session of whoever views it. Parse it in an inert
 * <template> (nothing in it loads or runs there), keep only simple formatting tags and
 * a few safe link and image attributes, and return the cleaned markup.
 */

const ALLOWED_TAGS = {
    a: ['href', 'title', 'target', 'rel'],
    b: [],
    strong: [],
    i: [],
    em: [],
    u: [],
    s: [],
    small: [],
    br: [],
    p: [],
    span: [],
    div: [],
    ul: [],
    ol: [],
    li: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
};

// Removed together with everything inside them.
const DROP_WITH_CONTENT = [
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

const URL_ATTRIBUTES = ['href', 'src'];

const SAFE_SCHEMES = ['http', 'https', 'mailto', 'tel'];

const isSafeUrl = (value) => {
    // Browsers ignore control characters and whitespace inside a scheme
    // ("java\tscript:"), so strip them before reading it.
    const normalized = String(value).replace(/[\u0000-\u0020\u007f-\u009f]/g, '');

    if ('' === normalized) {
        return false;
    }

    const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(normalized);

    // No scheme: a relative path, a query or a fragment.
    return !scheme || SAFE_SCHEMES.includes(scheme[1].toLowerCase());
};

const cleanChildren = (parent) => {
    Array.from(parent.childNodes).forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return;
        }

        if (node.nodeType !== Node.ELEMENT_NODE) {
            node.remove();
            return;
        }

        const tag = node.tagName.toLowerCase();

        if (DROP_WITH_CONTENT.includes(tag)) {
            node.remove();
            return;
        }

        if (!Object.prototype.hasOwnProperty.call(ALLOWED_TAGS, tag)) {
            // Keep the text of an unknown element, drop the element itself.
            cleanChildren(node);
            node.replaceWith(...Array.from(node.childNodes));
            return;
        }

        const allowed = ALLOWED_TAGS[tag];

        Array.from(node.attributes).forEach((attribute) => {
            const name = attribute.name.toLowerCase();

            if (!allowed.includes(name) || (URL_ATTRIBUTES.includes(name) && !isSafeUrl(attribute.value))) {
                node.removeAttribute(attribute.name);
            }
        });

        if ('a' === tag && '_blank' === node.getAttribute('target')) {
            node.setAttribute('rel', 'noopener noreferrer');
        }

        cleanChildren(node);
    });
};

const sanitizeInfoHtml = (html) => {
    if (typeof html !== 'string' || '' === html || typeof document === 'undefined') {
        return '';
    }

    const template = document.createElement('template');
    template.innerHTML = html;
    cleanChildren(template.content);

    return template.innerHTML;
};

export default sanitizeInfoHtml;
