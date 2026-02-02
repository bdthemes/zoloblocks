import { parseTocSlug } from '@/blocks/table-of-content/helper';


// Utility function to sanitize HTML content
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Function to parse headers from DOM content
function parseHeadersFromDOM() {
    const tocWrapper = document.querySelector('.wp-block-zolo-table-of-content');
    if (!tocWrapper) return [];

    // Get the allowed heading tags from the wrapper attributes
    const visibleHeaders = JSON.parse(tocWrapper.getAttribute('data-tags') || '{}');
    const allowedHTags =
        Object.entries(visibleHeaders)
            .filter(([, isVisible]) => isVisible)
            .map(([tag]) => tag)
            .join(',') || 'h1, h2, h3, h4, h5, h6';

    // Find all heading elements in the main content area
    const allHeaders = document.querySelectorAll(allowedHTags);
    const headerList = [];


    allHeaders.forEach((header, index) => {
        const level = parseInt(header.tagName.charAt(1));
        const content = header.textContent.trim();

        if (content) {
            headerList.push({
                level,
                content,
                anchor: parseTocSlug(content),
            });
        }
    });

    return headerList;
}

// Function to update table of contents with current headers
function updateTableOfContents() {
    const tocWrapper = document.querySelector('.wp-block-zolo-table-of-content');
    if (!tocWrapper) return;

    const headers = parseHeadersFromDOM(); //added this due to dynamic content loading
    const visibleHeaders = JSON.parse(tocWrapper.getAttribute('data-tags') || '{}');
    const ListTag = tocWrapper.querySelector('.zolo-toc-list')?.tagName.toLowerCase() || 'ul';

    // Clear existing TOC content
    const tocContent = tocWrapper.querySelector('.zolo-toc-content');
    if (tocContent) {
        // Generate new TOC HTML
        if (headers.length > 0) {
            const formattedHeaders = headers.filter((header) => visibleHeaders[`h${header.level}`]);
            const tocHTML = formattedHeaders
                .map((header, index) => {
                    return `<li key="${header.anchor}-${index}">
                    <a href="#${header.anchor}">${sanitizeHTML(header.content)}</a>
                </li>`;
                })
                .join('');

            tocContent.innerHTML = `<${ListTag} class="zolo-toc-list">${tocHTML}</${ListTag}>`;
        } else {
            tocContent.innerHTML = '<p>Add heading to create table of content</p>';
        }
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const tableOfContent = {
        init() {
            // Initial TOC generation
            updateTableOfContents();

            // Set up other functionality
            this.addLinkInContent();
            this.toggleCollapse();
            this.scrollToTargetElement();
            this.stickyContentShow();
            this.stickyContentHide();

            // Watch for content changes (for dynamic content)
            this.observeContentChanges();
        },

        observeContentChanges() {
            const contentArea = document.querySelector('.entry-content, .post-content, main, article');
            if (contentArea) {
                const observer = new MutationObserver(() => {
                    updateTableOfContents();
                    this.addLinkInContent(); // Re-add anchors
                });

                observer.observe(contentArea, {
                    childList: true,
                    subtree: true,
                    characterData: true,
                });
            }
        },

        addLinkInContent() {
            const tocWrapper = document.querySelector('.wp-block-zolo-table-of-content');
            if (!tocWrapper) return null;

            const headers = parseHeadersFromDOM();
            const visibleHeaders = JSON.parse(tocWrapper.getAttribute('data-tags') || '{}');

            const allowedHTags =
                Object.entries(visibleHeaders)
                    .filter(([, isVisible]) => isVisible)
                    .map(([tag]) => tag)
                    .join(',') || 'h1, h2, h3, h4, h5, h6';
            const allHeaders = document.querySelectorAll(allowedHTags);

            if (headers.length === 0 || allHeaders.length === 0) return;

            // Remove existing anchors first
            allHeaders.forEach((header) => {
                const existingAnchor = header.querySelector('.zolo-toc-anchor');
                if (existingAnchor) {
                    existingAnchor.remove();
                }
            });

            headers.forEach(({ content: elementText }) => {
                const elementSlug = parseTocSlug(elementText);

                allHeaders.forEach((header) => {
                    const headerSlug = parseTocSlug(header.textContent);
                    if (elementSlug === headerSlug) {
                        // Create anchor element safely
                        const anchor = document.createElement('span');
                        anchor.id = headerSlug;
                        anchor.className = 'zolo-toc-anchor';

                        // Insert anchor at the beginning of the header
                        header.insertBefore(anchor, header.firstChild);
                    }
                });
            });
        },

        toggleCollapse() {
            const tocWrapper = document.querySelector('.wp-block-zolo-table-of-content');
            if (!tocWrapper) return;

            const tocToggleBtn = tocWrapper.querySelector('.zolo-toc-toggle-btn');
            if (!tocToggleBtn) return;

            const isInitiallyCollapsed = tocWrapper.getAttribute('data-collapsed') === 'false';
            tocWrapper.classList.toggle('collapsed', isInitiallyCollapsed);

            tocToggleBtn.addEventListener('click', () => {
                const isCollapsed = tocWrapper.classList.contains('collapsed');
                tocWrapper.classList.toggle('collapsed', !isCollapsed);
                tocWrapper.setAttribute('data-collapsed', !isCollapsed);
            });
        },
        scrollToTargetElement() {
            const tocLinks = document.querySelectorAll('.wp-block-zolo-table-of-content a');

            tocLinks.forEach((link) => {
                link.addEventListener('click', function (event) {
                    const hash = this.hash;
                    if (hash !== '') {
                        event.preventDefault();

                        // Remove active class from all links
                        tocLinks.forEach((link) => link.closest('li').classList.remove('active'));

                        // Add active class to the clicked link's parent <li>
                        this.closest('li').classList.add('active');

                        const targetElement = document.querySelector(hash);

                        if (targetElement) {
                            const offset = 150; // Adjust for fixed header or spacing
                            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                            const offsetPosition = elementPosition - offset;

                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth',
                            });

                            // Add and remove the 'active' class for the target element
                            targetElement.classList.add('active');
                            setTimeout(() => {
                                targetElement.classList.remove('active');
                            }, 800);
                        }
                    }
                });
            });
        },
        stickyContentHide() {
            document.querySelectorAll('.zolo-toc-close').forEach((crossButton) => {
                crossButton.addEventListener('click', () => {
                    const container = crossButton.closest('.wp-block-zolo-table-of-content');
                    if (container) {
                        container.classList.add('content-hidden');
                        container.classList.remove('content-visible');
                    }
                });
            });
        },

        stickyContentShow() {
            document.querySelectorAll('.zolo-toc-open').forEach((headerButton) => {
                headerButton.addEventListener('click', () => {
                    const container = headerButton.closest('.wp-block-zolo-table-of-content');
                    if (container) {
                        container.classList.remove('content-hidden');
                        container.classList.add('content-visible');
                    }
                });
            });
        },
    };

    tableOfContent.init();
});
