
/**
 * Lightbox captions are cleaned by assets/js/localize/index.js (zolo-block-localize), which
 * fslightbox depends on, so they are safe before FsLightbox reads them.
 */
document.addEventListener('DOMContentLoaded', function () {
    const galleries = document.querySelectorAll('.wp-block-zolo-image-gallery');

    if (galleries.length > 0) {
        fsLightbox.props.showThumbsOnMount = false;

        galleries.forEach((gallery) => {
            const uniqueId = gallery.dataset.uniqueid;
            const entranceAnimation = gallery.dataset.entranceanimation;
            const showLightboxThumb = gallery.dataset.showthumb === 'true' ? true : false;
            const instance = fsLightboxInstances[`gallery-${uniqueId}`];

            // A gallery without lightbox links has no FsLightbox instance.
            if (!instance) {
                return;
            }

            instance.props.showThumbsOnMount = showLightboxThumb;
            instance.props.showThumbsWithCaptions = showLightboxThumb;
            instance.props.initialAnimation = entranceAnimation;
            instance.props.slideChangeAnimation = entranceAnimation;
        });
    }
});
