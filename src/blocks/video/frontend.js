document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.wp-block-zolo-video');

    videos.forEach((element) => {
        const video = element.querySelector ? element.querySelector('video') : element.getElementsByTagName('video')[0];
        const settings = JSON.parse(element?.getAttribute('data-settings'));
        const playButton = element.querySelector('.zolo-video-play');
        const startTime = settings?.startTime;
        const endTime = settings?.endTime;
        const hoverPlayPause = settings?.hoverPlayPause;
        const autoPlay = settings?.autoPlay;

        // Initialize FsLightbox for popup videos
        const popupTrigger = element.querySelector('.popup-trigger-button');
        const popupContent = element.querySelector('.video-player-popup-content');

        if (popupTrigger && popupContent && typeof FsLightbox !== 'undefined') {
            // Check if it should open in new tab (has target="_blank")
            const shouldOpenInNewTab = popupTrigger.hasAttribute('target') && popupTrigger.getAttribute('target') === '_blank';

            if (!shouldOpenInNewTab) {
                // Normal popup behavior
                const lightbox = new FsLightbox();
                lightbox.props.sources = [popupContent];

                popupTrigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    lightbox.open();
                });
            }
        }

        // Inline thumbnail click-to-play
        const thumbnailOverlay = element.querySelector('.zolo-inline-thumbnail-overlay');
        if (thumbnailOverlay) {
            const videoWrapper = element.querySelector('.default-video-message');
            const iframe = element.querySelector('iframe.video-iframe');

            // If thumbnail is showing, initially hide the iframe to save load (optional, lazy)
            // We do NOT hide it—just let thumbnail sit on top visually

            thumbnailOverlay.addEventListener('click', function () {
                // Fade out thumbnail
                thumbnailOverlay.style.transition = 'opacity 0.3s ease';
                thumbnailOverlay.style.opacity = '0';
                thumbnailOverlay.style.pointerEvents = 'none';
                setTimeout(function () {
                    thumbnailOverlay.style.display = 'none';
                }, 320);

                // Play custom <video>
                if (video) {
                    video.play().catch(function (err) {
                        console.error('Video play error:', err);
                    });
                }

                // Play YouTube / Vimeo iframe — reload src with autoplay=1
                if (iframe) {
                    var currentSrc = iframe.getAttribute('src') || '';
                    if (currentSrc) {
                        var newSrc;
                        if (currentSrc.indexOf('autoplay=') !== -1) {
                            newSrc = currentSrc.replace(/autoplay=\d/, 'autoplay=1');
                        } else {
                            newSrc = currentSrc + (currentSrc.indexOf('?') !== -1 ? '&' : '?') + 'autoplay=1';
                        }
                        // Mute is required for autoplay policy in most browsers
                        if (newSrc.indexOf('mute=') === -1 && newSrc.indexOf('muted=') === -1) {
                            if (newSrc.indexOf('youtube') !== -1 || newSrc.indexOf('youtu.be') !== -1) {
                                newSrc += '&mute=1';
                            }
                        }
                        iframe.setAttribute('src', newSrc);
                    }
                }
            });
        }

        if (!video) return;

        // play video
        if (autoPlay) {
            video.play().catch((error) => {
                console.error('Error Playing video:', error);
            });
        }

        // set start and end time
        if (startTime && startTime > 0) {
            video.currentTime = startTime;
        }

        if (endTime && endTime > 0) {
            video.ontimeupdate = function () {
                if (video.currentTime > endTime) {
                    video.pause();
                }
            };
        }

        //hover play pause
        if (hoverPlayPause) {
            const handleMouseEnter = () => video.play();
            const handleMouseLeave = () => video.pause();

            video.addEventListener('mouseenter', handleMouseEnter);
            video.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                video.removeEventListener('mouseenter', handleMouseEnter);
                video.removeEventListener('mouseleave', handleMouseLeave);
            };
        }

        //small play pause button
        if (playButton) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playButton.textContent = 'Pause';
                } else {
                    video.pause();
                    playButton.textContent = 'Play';
                }
            });
        }
    });
});
