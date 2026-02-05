// Optimized Table of Contents (TOC) script
import { parseTocSlug } from '@/blocks/table-of-content/helper';

// === UTILITIES ===
const sanitizeHTML = (str) => {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
};

const debounce = (fn, wait = 100) => {
    let t = null;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
};

// Get search scope from wrapper's data-content-selector
const getSearchScope = (tocWrapper) => {
    const selector = tocWrapper?.getAttribute('data-content-selector');
    if (!selector) return document;

    try {
        return document.querySelector(selector) || document;
    } catch {
        return document;
    }
};

// Get allowed header selector from wrapper's data-tags
const getAllowedHeaderSelector = (tocWrapper) => {
    try {
        const tags = JSON.parse(tocWrapper?.getAttribute('data-tags') || '{}');
        const selector = Object.entries(tags)
            .filter(([, v]) => v)
            .map(([k]) => k)
            .join(',');
        return selector || 'h1,h2,h3,h4,h5,h6';
    } catch {
        return 'h1,h2,h3,h4,h5,h6';
    }
};

// === HEADER PARSING & HIERARCHY ===
const parseHeaders = (tocWrapper) => {
    if (!tocWrapper) return [];

    const searchScope = getSearchScope(tocWrapper);
    const selector = getAllowedHeaderSelector(tocWrapper);
    const nodes = searchScope.querySelectorAll(selector);

    return Array.from(nodes)
        .map((el) => {
            const level = Math.max(1, Math.min(6, parseInt(el.tagName[1], 10) || 1));
            const content = el.textContent?.trim();
            if (!content) return null;
            return { level, content, el, anchor: parseTocSlug(content) };
        })
        .filter(Boolean);
};

const buildHierarchy = (headers) => {
    const root = [];
    const stack = [];

    headers.forEach((h) => {
        const node = { ...h, children: [] };

        while (stack.length && stack[stack.length - 1].level >= node.level) {
            stack.pop();
        }

        (stack.length ? stack[stack.length - 1].children : root).push(node);
        stack.push(node);
    });

    return root;
};

// === HTML GENERATION ===
const generateTOCHTML = (items, ListTag = 'ul') =>
    items.map((it) => {
        const hasChildren = it.children?.length > 0;
        const id = `toc-${it.anchor}`;
        return `<li class="toc-item ${hasChildren ? 'has-children' : ''}" data-level="${it.level}">
        <div class="toc-header">
          <a href="#${it.anchor}" class="toc-link">${sanitizeHTML(it.content)}</a>
          ${hasChildren ? `<button class="toc-toggle" aria-expanded="false" aria-controls="${id}" aria-label="Toggle section">
                  <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </button>` : ''}
        </div>
        ${hasChildren ? `<${ListTag} id="${id}" class="child-list" hidden>${generateTOCHTML(it.children, ListTag)}</${ListTag}>` : ''}
      </li>`;
    }).join('');

// === ANCHOR INJECTION ===
const injectAnchors = (headers, tocWrapper) => {
    if (!headers?.length || !tocWrapper) return;

    const selector = getAllowedHeaderSelector(tocWrapper);
    const allHeaders = Array.from(document.querySelectorAll(selector));
    if (!allHeaders.length) return;

    // Remove old anchors
    allHeaders.forEach((h) => h.querySelector('.zolo-toc-anchor')?.remove());

    // Inject new anchors
    headers.forEach(({ anchor }) => {
        const matching = allHeaders.find((h) => parseTocSlug(h.textContent) === anchor);
        if (matching) {
            const span = document.createElement('span');
            span.id = anchor;
            span.className = 'zolo-toc-anchor';
            matching.prepend(span);
        }
    });
};

// === ANIMATIONS ===
const animate = (target, isOpening, duration = 300) => {
    if (isOpening && !target.hidden) return;
    if (!isOpening && target.hidden) return;

    const props = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom'];
    const cleanup = () => {
        props.forEach(p => target.style.removeProperty(p));
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    };

    if (isOpening) {
        target.hidden = false;
        const height = target.offsetHeight;
        target.style.height = '0';
        target.style.overflow = 'hidden';
        props.slice(1).forEach(p => target.style[p] = '0');
        target.offsetHeight; // reflow

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.height = `${height}px`;
        props.slice(1).forEach(p => target.style.removeProperty(p));

        setTimeout(cleanup, duration);
    } else {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.boxSizing = 'border-box';
        target.style.height = `${target.offsetHeight}px`;
        target.offsetHeight; // reflow
        target.style.overflow = 'hidden';
        target.style.height = '0';
        props.slice(1).forEach(p => target.style[p] = '0');

        setTimeout(() => {
            target.hidden = true;
            cleanup();
        }, duration);
    }
};

// === STATE MANAGEMENT ===
const updateExpandedState = (tocWrapper, activeLinkItem) => {
    if (!tocWrapper || !activeLinkItem) return;

    // Collect ancestor lists
    const ancestorLists = new Set();
    let curr = activeLinkItem;
    while (curr && curr !== tocWrapper) {
        if (curr.classList.contains('toc-item')) {
            const childList = curr.querySelector(':scope > .child-list');
            if (childList) ancestorLists.add(childList);
        }
        curr = curr.parentElement;
    }

    // Update all lists
    tocWrapper.querySelectorAll('.child-list').forEach(list => {
        const shouldBeOpen = ancestorLists.has(list);
        const isOpen = !list.hidden;
        const toggle = list.closest('.toc-item')?.querySelector(':scope > .toc-header .toc-toggle');

        if (shouldBeOpen !== isOpen) {
            animate(list, shouldBeOpen);
            if (toggle) {
                toggle.setAttribute('aria-expanded', shouldBeOpen);
                toggle.style.transform = shouldBeOpen ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        }
    });
};

// === EVENT HANDLERS ===
const attachDelegatedClicks = (tocWrapper) => {
    if (!tocWrapper) return;

    tocWrapper.addEventListener('click', (e) => {
        // Handle toggle clicks
        const toggle = e.target.closest('.toc-toggle');
        if (toggle) {
            e.preventDefault();
            const childList = document.getElementById(toggle.getAttribute('aria-controls'));
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            animate(childList, !isExpanded);
            toggle.setAttribute('aria-expanded', !isExpanded);
            toggle.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
            return;
        }

        // Handle link clicks
        const link = e.target.closest('.toc-link');
        if (link) {
            const item = link.closest('.toc-item');
            tocWrapper.querySelectorAll('.toc-item').forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            updateExpandedState(tocWrapper, item);

            const hash = link.getAttribute('href');
            if (hash?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY - 150,
                        behavior: 'smooth'
                    });
                    target.classList.add('active');
                    setTimeout(() => target.classList.remove('active'), 800);
                }
            }
        }
    });
};

const initScrollObserver = (tocWrapper) => {
    if (!tocWrapper) return;

    const searchScope = getSearchScope(tocWrapper);
    const selector = getAllowedHeaderSelector(tocWrapper);
    const headings = Array.from(searchScope.querySelectorAll(selector));
    if (!headings.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = parseTocSlug(entry.target.textContent.trim());
                const link = tocWrapper.querySelector(`.toc-link[href="#${id}"]`);
                if (!link) return;

                const item = link.closest('.toc-item');
                tocWrapper.querySelectorAll('.toc-item').forEach(li => li.classList.remove('active'));
                item.classList.add('active');
                updateExpandedState(tocWrapper, item);
            });
        },
        { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    headings.forEach(h => observer.observe(h));
    return observer;
};

// === TOC UPDATE ===
const updateTOC = (tocWrapper) => {
    if (!tocWrapper) return;

    const tocContent = tocWrapper.querySelector('.zolo-toc-content');
    if (!tocContent) return;

    const ListTag = tocWrapper.querySelector('.zolo-toc-list')?.tagName?.toLowerCase() || 'ul';
    const headers = parseHeaders(tocWrapper);

    let visible;
    try {
        visible = JSON.parse(tocWrapper.getAttribute('data-tags') || '{}');
    } catch {
        visible = {};
    }

    const filtered = headers.filter(h => visible[`h${h.level}`]);
    const hierarchy = buildHierarchy(filtered);

    if (hierarchy.length) {
        tocContent.innerHTML = `<${ListTag} class="zolo-toc-list">${generateTOCHTML(hierarchy, ListTag)}</${ListTag}>`;
        injectAnchors(headers, tocWrapper);
    } else {
        tocContent.innerHTML = '<p>Add heading to create table of content</p>';
    }
};

// === INITIALIZATION ===
const initCollapseToggle = (tocWrapper) => {
    const toggleBtn = tocWrapper?.querySelector('.zolo-toc-toggle-btn');
    if (!toggleBtn) return;

    const isCollapsed = tocWrapper.getAttribute('data-collapsed') === 'false';
    tocWrapper.classList.toggle('collapsed', isCollapsed);

    toggleBtn.addEventListener('click', () => {
        const collapsed = tocWrapper.classList.toggle('collapsed');
        tocWrapper.setAttribute('data-collapsed', collapsed);
    });
};

const initStickyControls = (tocWrapper) => {
    if (!tocWrapper) return;

    tocWrapper.querySelectorAll('.zolo-toc-close').forEach(btn =>
        btn.addEventListener('click', () => {
            tocWrapper.classList.add('content-hidden');
            tocWrapper.classList.remove('content-visible');
        })
    );

    tocWrapper.querySelectorAll('.zolo-toc-open').forEach(btn =>
        btn.addEventListener('click', () => {
            tocWrapper.classList.remove('content-hidden');
            tocWrapper.classList.add('content-visible');
        })
    );
};

// === MAIN ===
window.addEventListener('DOMContentLoaded', () => {
    const tocWrapper = document.querySelector('.wp-block-zolo-table-of-content');
    if (!tocWrapper) return;

    // Initial build
    updateTOC(tocWrapper);
    attachDelegatedClicks(tocWrapper);
    initScrollObserver(tocWrapper);
    initCollapseToggle(tocWrapper);
    initStickyControls(tocWrapper);

    // Watch for content changes
    const contentArea = getSearchScope(tocWrapper) !== document
        ? getSearchScope(tocWrapper)
        : document.querySelector('.entry-content, .post-content, main, article');

    if (contentArea) {
        const mo = new MutationObserver(debounce(() => updateTOC(tocWrapper), 120));
        mo.observe(contentArea, { childList: true, subtree: true, characterData: true });
    }
});
