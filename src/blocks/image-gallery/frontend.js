document.addEventListener('DOMContentLoaded', function () {
    const galleries = document.querySelectorAll('.wp-block-zolo-image-gallery');

    if (galleries.length > 0) {
        fsLightbox.props.showThumbsOnMount = false;

        galleries.forEach((gallery) => {
            const uniqueId = gallery.dataset.uniqueid;
            const entranceAnimation = gallery.dataset.entranceanimation;
            const showLightboxThumb = gallery.dataset.showthumb === 'true' ? true : false;

            fsLightboxInstances[`gallery-${uniqueId}`].props.showThumbsOnMount = showLightboxThumb;
            fsLightboxInstances[`gallery-${uniqueId}`].props.showThumbsWithCaptions = showLightboxThumb;
            fsLightboxInstances[`gallery-${uniqueId}`].props.initialAnimation = entranceAnimation;
            fsLightboxInstances[`gallery-${uniqueId}`].props.slideChangeAnimation = entranceAnimation;
        });
    }
});
