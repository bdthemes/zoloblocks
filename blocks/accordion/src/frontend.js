document.addEventListener('DOMContentLoaded', function () {
    const zoloAccordions = document.querySelectorAll('.wp-block-zolo-accordion');

    if (zoloAccordions && zoloAccordions.length > 0) {
        zoloAccordions.forEach((accordion) => {
            // options
            const firstItemOpen = accordion.dataset.firstitem === 'true' ? true : false;
            const allowMultiple = accordion.dataset.multiple === 'true' ? true : false;

            new Accordion(accordion, {
                duration: 400,
                showMultiple: allowMultiple ? true : false,
                openOnInit: firstItemOpen ? [0] : [],
            });
        });
    }
});
