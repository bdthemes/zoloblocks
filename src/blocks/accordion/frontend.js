document.addEventListener('DOMContentLoaded', function () {
    const zoloAccordions = document.querySelectorAll('.wp-block-zolo-accordion');

    if (zoloAccordions && zoloAccordions.length > 0) {
        zoloAccordions.forEach((accordion) => {
            // options
            const initialOpen = accordion.dataset.initialOpen ? parseInt(accordion.dataset.initialOpen) : 0;
            const allowInitialOpen = accordion.dataset.allowinitialopen ? true : false;
            console.log(initialOpen);
            const allowMultiple = accordion.dataset.multiple === 'true' ? true : false;

            new Accordion(accordion, {
                duration: 400,
                ...(allowInitialOpen && { openOnInit: initialOpen ? [initialOpen - 1] : [0] }),
                showMultiple: allowMultiple ? true : false,
            });
        });
    }
});
