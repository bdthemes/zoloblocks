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
