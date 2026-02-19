import { getQueryArgs } from '@wordpress/url';
export const getVideoId = (url) => {
    const match = url?.match(
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([^?&"'>]+)/
    );
    return match ? match[1] : getQueryArgs(url)?.v || null;
};

export const getYoutubeHtml = (attributes) => {
    return `<iframe  style="width:100%; height:100%; z-index: 99999999; border: 0;" class="youtube-iframe video-sandbox-iframe" src="https://www.youtube.com/embed/${attributes?.youtubeUrl ? getVideoId(attributes.youtubeUrl.url) : ''}?mute=${attributes?.mute ? '1' : '0'}&controls=${attributes?.playerControl ? '1' : '0'}&playsinline=${attributes?.isPlayOnMobile ? '1' : '0'}&rel=${attributes?.isSuggestedVideo ? '1' : '0'}&start=${attributes?.videoStartTime || ''}&end=${attributes?.videoEndTime || ''}&loop=${attributes?.isVideoLoop}&autoplay=${attributes?.overlayPlay ? '1' : attributes?.isAutoPlay ? '1' : '0'}" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>`;
};
