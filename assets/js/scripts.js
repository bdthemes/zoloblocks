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
                callbacks: {
                    beforeOpen: function () {
                        // just a hack that adds mfp-anim class to markup
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    },
                },
                closeOnContentClick: true,
                midClick: true,
            });
        });
    });
})(jQuery);
