document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.zolo-video-player');

    videos.forEach((video) => {
        const startTime = parseFloat(video.getAttribute('data-start-time')) || 0;
        const endTime = parseFloat(video.getAttribute('data-end-time')) || 0;

        video.onloadedmetadata = function () {
            if (startTime > 0 && startTime < video.duration) {
                video.currentTime = startTime;
            }
        };
        video.ontimeupdate = function () {
            if (endTime > 0 && video.currentTime >= endTime) {
                video.pause();
            }
        };
    });
});
