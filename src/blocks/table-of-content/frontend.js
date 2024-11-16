import {parseTocSlug} from "@/blocks/table-of-content/helper";

window.addEventListener("DOMContentLoaded", function () {

  const tableOfContent = {

    init() {
      this.addLinkInContent();
      this.toggleCollapse();
      this.scrollToTargetElement();
      this.stickyContentShow();
      this.stickyContentHide();
    },

    addLinkInContent() {
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
    toggleCollapse() {
      const tocWrapper = document.querySelector(".wp-block-zolo-table-of-content");
      if (!tocWrapper) return;

      const tocToggleBtn = tocWrapper.querySelector(".zolo-toc-toggle-btn");
      if (!tocToggleBtn) return;

      const isInitiallyCollapsed = tocWrapper.getAttribute("data-collapsed") === "false";
      tocWrapper.classList.toggle("collapsed", isInitiallyCollapsed);

      tocToggleBtn.addEventListener("click", () => {
        const isCollapsed = tocWrapper.classList.contains("collapsed");
        tocWrapper.classList.toggle("collapsed", !isCollapsed);
        tocWrapper.setAttribute("data-collapsed", !isCollapsed);
      });

    },
    scrollToTargetElement() {
      const tocLinks = document.querySelectorAll(".wp-block-zolo-table-of-content a");

      tocLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          const hash = this.hash;
          if (hash !== "") {
            event.preventDefault();

            // Remove active class from all links
            tocLinks.forEach(link => link.closest('li').classList.remove('active'));

            // Add active class to the clicked link's parent <li>
            this.closest('li').classList.add('active');

            const targetElement = document.querySelector(hash);

            if (targetElement) {
              const offset = 150; // Adjust for fixed header or spacing
              const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
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
      document.querySelectorAll(".zolo-toc-close").forEach((crossButton) => {
        crossButton.addEventListener("click", () => {
          const container = crossButton.closest(".wp-block-zolo-table-of-content");
          if (container) {
            container.classList.add("content-hidden");
            container.classList.remove("content-visible");
          }
        });
      });
    },

    stickyContentShow() {
      document.querySelectorAll(".zolo-toc-open").forEach((headerButton) => {
        headerButton.addEventListener("click", () => {
          const container = headerButton.closest(".wp-block-zolo-table-of-content");
          if (container) {
            container.classList.remove("content-hidden");
            container.classList.add("content-visible");
          }
        });
      });
    }


  }

  tableOfContent.init()
})


