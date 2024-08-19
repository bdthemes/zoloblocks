document.addEventListener('DOMContentLoaded', () => {
    // Initialize FSLightbox with the option to hide thumbnails
    const lightbox = new FsLightbox({ showThumbsOnMount: false });

    // Event delegation to handle clicks on lightbox triggers
    document.body.addEventListener('click', (event) => {
        const trigger = event.target.closest('.lightbox-trigger');
        if (trigger) {
            event.preventDefault();
            lightbox.open(trigger.getAttribute('href'));
            refreshFsLightbox();
        }
    });
});
