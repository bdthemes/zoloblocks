const iframeUrl = (props) => {
    const { attributes } = props;
    const { contentType, youtubeUrl, vimeoUrl, googleMapUrl } = attributes;

    let videoUrl;

        function get_youtube_video_id(url) {
            const regExp = /^(?:.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=))([^#&?]{11}).*/;
            const match = url.match(regExp);
            return match ? match[1] : null; // Changed to match[1] to get the ID directly
        }

    // Function to extract Vimeo video ID
    function get_vimeo_video_id(url) {
        const regExp = /https:\/\/vimeo.com\/(\d+)/;
        const match = url.match(regExp);
        return match && match[1] ? match[1] : null;
    }

    // Function to extract Google Map embed ID
    function get_google_map_id(url) {
        const regExp = /https:\/\/www.google.com\/maps\/embed\?pb=(.*)/;
        const match = url.match(regExp);
        return match && match[1] ? match[1] : null;
    }

    // Handling YouTube video URL or embed code
    const youtubeVideoId = get_youtube_video_id(youtubeUrl);
    if (contentType === 'youtube' && youtubeVideoId !== null) {
        videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    }

    console.log('videoUrl', get_youtube_video_id(youtubeUrl));
    // Handling Vimeo video URL
    const vimeoVideoId = get_vimeo_video_id(vimeoUrl);
    if (contentType === 'vimeo' && vimeoVideoId !== null) {
        videoUrl = `https://player.vimeo.com/video/${vimeoVideoId}`;
    }

    // Handling Google Map embed URL
    const googleMapId = get_google_map_id(googleMapUrl);
    if (contentType === 'googleMap' && googleMapId !== null) {
        videoUrl = `https://www.google.com/maps/embed?pb=${googleMapId}`;
    }

    return videoUrl;
};

export default iframeUrl;
