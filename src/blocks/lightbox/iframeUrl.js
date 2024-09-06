const iframeUrl = (props) => {
    const { attributes } = props;
    const { contentType, youtubeUrl, vimeoUrl, googleMapUrl } = attributes;

    let videoUrl;

    // // let videoUrl;
    function get_youtube_viedo_Id(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    }

    function get_vimeo_video_id(url) {
        const regExp = /https:\/\/vimeo.com\/(\d+)/;
        const match = url.match(regExp);
        return match && match[1] ? match[1] : null;
    }

    function get_google_map_id(url) {
        const regExp = /https:\/\/www.google.com\/maps\/embed\?pb=(.*)/;
        const match = url.match(regExp);
        return match && match[1] ? match[1] : null;
    }

    // youtube video embed url
    const youtubeVideoId = get_youtube_viedo_Id('http://www.youtube.com/watch?v=' + youtubeUrl + '');
    if (contentType === 'youtube' && youtubeVideoId !== null) {
        videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    }
    const vimeoVideoId = get_vimeo_video_id(vimeoUrl);

    if (contentType === 'vimeo') {
        videoUrl = `https://player.vimeo.com/video/${vimeoVideoId}`;
    }

    //    // google map embed url
    const googleMapId = get_google_map_id(googleMapUrl);
    if (contentType === 'googleMap' && googleMapId !== null) {
        videoUrl = `https://www.google.com/maps/embed?pb=${googleMapId}`;
    }

    return videoUrl;
};

export default iframeUrl;
