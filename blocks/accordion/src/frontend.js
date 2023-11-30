document.addEventListener('DOMContentLoaded', function () {
    const zoloAccordions = document.querySelectorAll('.wp-block-zolo-accordion');

    if (zoloAccordions && zoloAccordions.length > 0) {
        zoloAccordions.forEach((accordion) => {
            new Accordion(accordion, {
                duration: 400,
                showMultiple: false,
                // openOnInit: [0],
            });
        });
    }
});
