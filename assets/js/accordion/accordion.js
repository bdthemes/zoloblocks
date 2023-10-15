class ZoloAccordion {
    constructor(container) {
        this.container = container;
        this.accordionItems = container.querySelectorAll('.wp-block-zolo-accordion-child');

        this.setupAccordion();
        this.openFirstItem();
    }

    setupAccordion() {
        this.accordionItems.forEach((item) => {
            const header = item.querySelector('.accordion-head');
            const toggleButton = item.querySelector('.accordion-toggle');
            const content = item.querySelector('.accordion-body');

            header.addEventListener('click', () => {
                this.toggleAccordion(item, toggleButton, content, header);
            });

            toggleButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleAccordion(item, toggleButton, content, header);
            });
        });
    }

    toggleAccordion(item, toggleButton, content, header) {
        this.accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
                const otherItemHeader = otherItem.querySelector('.accordion-head');
                const otherItemToggleButton = otherItem.querySelector('.accordion-toggle');
                const otherItemContent = otherItem.querySelector('.accordion-body');

                otherItemHeader.setAttribute('aria-expanded', 'false');
                // remove zolo-active class from other accordion items
                otherItemToggleButton.classList.remove('zolo-active');
                otherItemContent.classList.remove('zolo-active');
                otherItemHeader.classList.remove('zolo-active');

                otherItemContent.setAttribute('aria-hidden', 'true');
            }
        });

        item.classList.toggle('open');
        const isOpen = item.classList.contains('open');

        // isOpen ? add zolo-active class to toggleButton : content.classList.remove('zolo-active');
        isOpen ? toggleButton.classList.add('zolo-active') : toggleButton.classList.remove('zolo-active');
        isOpen ? content.classList.add('zolo-active') : content.classList.remove('zolo-active');
        isOpen ? header.classList.add('zolo-active') : header.classList.remove('zolo-active');

        content.setAttribute('aria-hidden', !isOpen);
        item.querySelector('.accordion-head').setAttribute('aria-expanded', isOpen);
    }

    openFirstItem() {
        if (this.accordionItems.length > 0) {
            const firstItem = this.accordionItems[0];
            const firstItemToggleButton = firstItem.querySelector('.accordion-toggle');
            const firstItemContent = firstItem.querySelector('.accordion-body');
            const firstItemHeader = firstItem.querySelector('.accordion-head');

            firstItem.classList.add('open');

            // add zolo-active class to firstItemToggleButton
            firstItemToggleButton.classList.add('zolo-active');
            firstItemContent.classList.add('zolo-active');
            firstItemHeader.classList.add('zolo-active');

            firstItemContent.setAttribute('aria-hidden', 'false');
            firstItem.querySelector('.accordion-head').setAttribute('aria-expanded', 'true');
        }
    }
}
