document.addEventListener('DOMContentLoaded', function () {
    const zoloAccordions = document.querySelectorAll('.wp-block-zolo-accordion');

    if (zoloAccordions && zoloAccordions.length > 0) {
        zoloAccordions.forEach((accordion) => {
            // options
            const initialOpen = accordion.dataset.initialopen ? parseInt(accordion.dataset.initialopen) : 0;
            const allowMultiple = accordion.dataset.multiple === 'true' ? true : false;

            new Accordion(accordion, {
                duration: 400,
                showMultiple: allowMultiple ? true : false,
                openOnInit: initialOpen ? [initialOpen - 1] : [0],
            });
        });
    }
});
