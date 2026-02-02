// Simplified & optimized Table of Contents (TOC) script

import { parseTocSlug } from '@/blocks/table-of-content/helper';

// Utility: safe text -> HTML
const sanitizeHTML = (str) => {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
};

// Read visible header tags from wrapper data
const getAllowedHeaderSelector = (tocWrapper) => {
    const visible = tocWrapper && tocWrapper.getAttribute('data-tags');
    try {
        const tags = JSON.parse(visible || '{}');
        const selector = Object.entries(tags)
            .filter(([, v]) => v)
            .map(([k]) => k)
            .join(',');
        return selector || 'h1,h2,h3,h4,h5,h6';
    } catch {
        return 'h1,h2,h3,h4,h5,h6';
    }
};

// Parse headers within content scope and return simplified header objects
const parseHeaders = (tocWrapper) => {
    if (!tocWrapper) return [];

    // Get content selector from wrapper data attribute with safe fallback
    const contentSelector = tocWrapper.getAttribute('data-content-selector') || '';

    // Ensure contentSelector is a string
    const safeSelector = typeof contentSelector === 'string' ? contentSelector : '';

    let searchScope = document;

    // Use custom selector if provided, otherwise use entire document
    if (safeSelector) {
        try {
            const selectedElement = document.querySelector(safeSelector);
            searchScope = selectedElement || document;
        } catch (error) {
            console.warn('Invalid CSS selector provided:', safeSelector, error);
            searchScope = document;
        }
    }

    const selector = getAllowedHeaderSelector(tocWrapper);
    const nodes = Array.from(searchScope.querySelectorAll(selector));

    return nodes
        .map((el) => {
            const level = Math.max(1, Math.min(6, parseInt(el.tagName.slice(1), 10) || 1));
            const content = (el.textContent || '').trim();
            if (!content) return null;
            return { level, content, el, anchor: parseTocSlug(content) };
        })
        .filter(Boolean);
};

// Build hierarchical TOC using a stack (handles arbitrary level jumps)
const buildHierarchy = (headers) => {
    const root = [];
    const stack = [];

    headers.forEach((h) => {
        const node = { ...h, children: [] };

        while (stack.length && stack[stack.length - 1].level >= node.level) {
            stack.pop();
        }

        if (!stack.length) {
            root.push(node);
        } else {
            stack[stack.length - 1].children.push(node);
        }

        stack.push(node);
    });

    return root;
};

// Generate TOC HTML (safe content)
const generateTOCHTML = (items, ListTag = 'ul') =>
    items
        .map((it) => {
            const hasChildren = it.children && it.children.length > 0;
            const childHTML = hasChildren ? generateTOCHTML(it.children, ListTag) : '';
            const id = `toc-${it.anchor}`;
            return `<li class="toc-item ${hasChildren ? 'has-children' : ''}" data-level="${it.level}">
        <div class="toc-header">
          <a href="#${it.anchor}" class="toc-link">${sanitizeHTML(it.content)}</a>
          ${
              hasChildren
                  ? `<button class="toc-toggle" aria-expanded="false" aria-controls="${id}" aria-label="Toggle section">
                  <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </button>`
                  : ''
          }
        </div>
        ${hasChildren ? `<${ListTag} id="${id}" class="child-list" hidden>${childHTML}</${ListTag}>` : ''}
      </li>`;
        })
        .join('');

// Insert anchors into headers (id spans) — avoids duplicating anchors
const injectAnchors = (headers, tocWrapper) => {
    if (!headers || !headers.length || !tocWrapper) return;
    const selector = getAllowedHeaderSelector(tocWrapper);
    const allHeaders = Array.from(document.querySelectorAll(selector));
    if (!allHeaders.length) return;

    // Remove any old anchors we managed
    allHeaders.forEach((h) => {
        const existing = h.querySelector('.zolo-toc-anchor');
        if (existing) existing.remove();
    });

    headers.forEach(({ anchor }) => {
        const matching = allHeaders.find((h) => parseTocSlug(h.textContent) === anchor);
        if (matching) {
            const span = document.createElement('span');
            span.id = anchor;
            span.className = 'zolo-toc-anchor';
            matching.insertBefore(span, matching.firstChild);
        }
    });
};

// Collapse everything
const collapseAll = (tocWrapper) => {
    if (!tocWrapper) return;
    tocWrapper.querySelectorAll('.child-list').forEach((cl) => (cl.hidden = true));
    tocWrapper.querySelectorAll('.toc-toggle').forEach((t) => {
        t.setAttribute('aria-expanded', 'false');
        t.style.transform = 'rotate(0deg)';
    });
};

// Expand parents for a given .toc-link element
const expandParents = (link) => {
    let item = link.closest('.toc-item');
    while (item) {
        const list = item.querySelector(':scope > .child-list');
        if (list) {
            list.hidden = false;
            const toggle = item.querySelector(':scope > .toc-header .toc-toggle');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'true');
                toggle.style.transform = 'rotate(180deg)';
            }
        }
        item = item.parentElement.closest('.toc-item');
    }
};

// Single delegated click handler for toggles & links
const attachDelegatedClicks = (tocWrapper) => {
    if (!tocWrapper) return;
    tocWrapper.addEventListener('click', (e) => {
        const toggle = e.target.closest('.toc-toggle');
        if (toggle) {
            e.preventDefault();
            const ctl = toggle.getAttribute('aria-controls');
            const childList = document.getElementById(ctl);
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                toggle.setAttribute('aria-expanded', 'false');
                if (childList) childList.hidden = true;
                toggle.style.transform = 'rotate(0deg)';
            } else {
                // collapse others, then expand this
                collapseAll(tocWrapper);
                toggle.setAttribute('aria-expanded', 'true');
                if (childList) childList.hidden = false;
                toggle.style.transform = 'rotate(180deg)';
            }
            return;
        }

        const link = e.target.closest('.toc-link');
        if (link) {
            // Handle internal clicks (smooth scroll)
            const hash = link.getAttribute('href') || '';
            tocWrapper.querySelectorAll('.toc-item').forEach((li) => li.classList.remove('active'));
            link.closest('.toc-item').classList.add('active');

            collapseAll(tocWrapper);
            expandParents(link);

            if (hash.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    const offset = 150;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });

                    // flash active on target
                    target.classList.add('active');
                    setTimeout(() => target.classList.remove('active'), 800);
                }
            }
        }
    });
};

// Scroll-based IntersectionObserver to mark active TOC link
const initScrollObserver = (tocWrapper) => {
    if (!tocWrapper) return;

    // Get content selector from wrapper data attribute with safe fallback
    const contentSelector = tocWrapper.getAttribute('data-content-selector') || '';

    // Ensure contentSelector is a string
    const safeSelector = typeof contentSelector === 'string' ? contentSelector : '';

    let searchScope = document;

    // Use custom selector if provided, otherwise use entire document
    if (safeSelector) {
        try {
            const selectedElement = document.querySelector(safeSelector);
            searchScope = selectedElement || document;
        } catch (error) {
            console.warn('Invalid CSS selector provided:', safeSelector, error);
            searchScope = document;
        }
    }

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
                tocWrapper.querySelectorAll('.toc-item').forEach((li) => li.classList.remove('active'));
                link.closest('.toc-item').classList.add('active');
                collapseAll(tocWrapper);
                expandParents(link);
            });
        },
        { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return observer;
};


// Utility: debounce
const debounce = (fn, wait = 100) => {
    let t = null;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
};

// Main updater: rebuilds TOC & anchors
const updateTOC = (tocWrapper) => {
    if (!tocWrapper) return;
    const ListTag = tocWrapper.querySelector('.zolo-toc-list')?.tagName?.toLowerCase() || 'ul';
    const headers = parseHeaders(tocWrapper);
    const visible = (() => {
        try {
            return JSON.parse(tocWrapper.getAttribute('data-tags') || '{}');
        } catch {
            return {};
        }
    })();

    const filtered = headers.filter((h) => visible[`h${h.level}`]);
    const hierarchy = buildHierarchy(filtered);
    const tocContent = tocWrapper.querySelector('.zolo-toc-content');

    if (!tocContent) return;

    if (hierarchy.length) {
        tocContent.innerHTML = `<${ListTag} class="zolo-toc-list">${generateTOCHTML(hierarchy, ListTag)}</${ListTag}>`;
        injectAnchors(headers, tocWrapper);
    } else {
        tocContent.innerHTML = '<p>Add heading to create table of content</p>';
    }
};

// Hook up toggle collapse button (container-level collapsed state)
const initCollapseToggle = (tocWrapper) => {
    if (!tocWrapper) return;
    const toggleBtn = tocWrapper.querySelector('.zolo-toc-toggle-btn');
    if (!toggleBtn) return;
    const initial = tocWrapper.getAttribute('data-collapsed') === 'false';
    tocWrapper.classList.toggle('collapsed', initial);
    toggleBtn.addEventListener('click', () => {
        const is = tocWrapper.classList.contains('collapsed');
        tocWrapper.classList.toggle('collapsed', !is);
        tocWrapper.setAttribute('data-collapsed', !is);
    });
};

// Sticky show/hide
const initStickyControls = (tocWrapper) => {
    if (!tocWrapper) return;
    tocWrapper.querySelectorAll('.zolo-toc-close').forEach((btn) =>
        btn.addEventListener('click', () => {
            tocWrapper.classList.add('content-hidden');
            tocWrapper.classList.remove('content-visible');
        })
    );
    tocWrapper.querySelectorAll('.zolo-toc-open').forEach((btn) =>
        btn.addEventListener('click', () => {
            tocWrapper.classList.remove('content-hidden');
            tocWrapper.classList.add('content-visible');
        })
    );
};

// Initialize everything
window.addEventListener('DOMContentLoaded', () => {

    const tocWrapper = document.querySelector('.wp-block-zolo-table-of-content');
    if (!tocWrapper) return;

    // initial build
    updateTOC(tocWrapper);

    // single delegated click handler
    attachDelegatedClicks(tocWrapper);

    // scroll observer for active section
    initScrollObserver(tocWrapper);

    // collapse toggle and sticky controls
    initCollapseToggle(tocWrapper);
    initStickyControls(tocWrapper);

    // MutationObserver for dynamic content with debounce
    const getMutationObserverScope = () => {
        const contentSelector = tocWrapper.getAttribute('data-content-selector') || '';

        // Ensure contentSelector is a string
        const safeSelector = typeof contentSelector === 'string' ? contentSelector : '';

        if (safeSelector) {
            try {
                return document.querySelector(safeSelector) || document.querySelector('.entry-content, .post-content, main, article');
            } catch (error) {
                console.warn('Invalid CSS selector provided:', safeSelector, error);
                return document.querySelector('.entry-content, .post-content, main, article');
            }
        }
        return document.querySelector('.entry-content, .post-content, main, article');
    };

    const contentArea = getMutationObserverScope();
    if (contentArea) {
        const mo = new MutationObserver(debounce(() => updateTOC(tocWrapper), 120));
        mo.observe(contentArea, { childList: true, subtree: true, characterData: true });
    }
});
