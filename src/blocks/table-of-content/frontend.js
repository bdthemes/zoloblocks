import {parseTocSlug} from "@/blocks/table-of-content/helper";

window.addEventListener("DOMContentLoaded", function () {

  const tableOfContent = {

    init: function () {
      this.addLinkInContent()
      this.toggleCollapse()
    },

    addLinkInContent: () => {
      const tocWrapper = document.querySelector(".wp-block-zolo-table-of-content");

      if (!tocWrapper) return null;

      const headers = JSON.parse(tocWrapper.getAttribute("data-headers") || "[]");
      const visibleHeaders = JSON.parse(tocWrapper.getAttribute("data-tags") || "{}");

      const allowedHTags = Object.entries(visibleHeaders)
        .filter(([, isVisible]) => isVisible)
        .map(([tag]) => tag)
        .join(",") || "h1, h2, h3, h4, h5, h6";

      const allHeaders = document.querySelectorAll(allowedHTags);
      if (headers.length === 0 || allHeaders.length === 0) return;

      headers.forEach(({content: elementText}) => {
        const elementSlug = parseTocSlug(elementText);

        allHeaders.forEach(header => {
          const headerSlug = parseTocSlug(header.textContent);
          if (elementSlug === headerSlug) {
            header.innerHTML = `<span id="${headerSlug}" class="zolo-toc-anchor"></span>${header.innerHTML}`;
          }
        });
      });
    },
    toggleCollapse: () => {
      const tocWrapper = document.querySelector(".wp-block-zolo-table-of-content");
      const tocToggleBtn = tocWrapper.querySelector('.zolo-toc-toggle-btn');

      if (tocToggleBtn && tocWrapper) {
        const isInitiallyCollapsed = tocWrapper.getAttribute('data-collapsed') === 'false';
        if (isInitiallyCollapsed) {
          tocToggleBtn.classList.add('collapsed');
        } else {
          tocToggleBtn.classList.remove('collapsed');
        }

        tocToggleBtn.addEventListener('click', () => {
          const isCollapsed = tocWrapper.getAttribute('data-collapsed') === 'true';
          tocWrapper.setAttribute('data-collapsed', !isCollapsed);
          tocWrapper.classList.toggle('collapsed', isCollapsed);
        });
      }

    }

  }

  tableOfContent.init()
})


