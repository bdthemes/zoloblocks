(function ($) {
    $(document).ready(function () {
        const zoloGalleries = $('.zolo-image-gallery');
        zoloGalleries.each(function () {
            const gallery = $(this);
            gallery.magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
                },
            });
        });
    });
})(jQuery);
