document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.wp-block-zolo-video');

    videos.forEach((element) => {
        const video = element.querySelector ? element.querySelector('video') : element.getElementsByTagName('video')[0];
        const settings = JSON.parse(element?.getAttribute('data-settings'));
        const startTime = settings?.startTime;
        const endTime = settings?.endTime;

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
    });
});
