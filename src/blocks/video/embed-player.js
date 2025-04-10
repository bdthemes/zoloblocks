import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';
import CustomPlayer from './custom-player';

const EmbedPlayer = ({ attributes, anchor, isEdit }) => {
    let iframeMarkup = null;

    switch (attributes?.videoSource) {
        case 'youtube': {
            const youtubeVideoId = new URL(attributes?.youtubeUrl?.url).searchParams.get('v');

            if (!youtubeVideoId) {
                console.warn('Invalid YouTube URL:', attributes?.youtubeUrl?.url);
                break;
            }

            const queryParams = {
                enablejsapi: 1,
                mute: attributes?.mute ? 1 : 0,
                controls: attributes?.playerControl ? 1 : 0,
                playsinline: 1,
                rel: attributes?.youtubeSuggestedvideoType || '0',
                loop: attributes?.loop ? 1 : 0,
                playlist: attributes?.loop ? youtubeVideoId : undefined, // Required for looping
                modestbranding: attributes?.youtubeModestBranding ? 1 : 0,
                autoplay: attributes?.autoPlay ? 1 : 0,
                start: attributes?.startTime || 0, // Add start time (in seconds)
                end: attributes?.endTime || 0, // Add end time (in seconds, optional)
                loading: attributes?.isLazyLoad ? 'lazy' : undefined,
                cc_load_policy: attributes?.showCaption ? '1' : '0',
            };

            const src = addQueryArgs(
                `https://www.youtube${attributes?.isPrivacyMode ? '-nocookie' : ''}.com/embed/${youtubeVideoId}`,
                queryParams
            );

            iframeMarkup = (
                <iframe
                    style={{ width: '100%', aspectRatio: '16 / 9', zIndex: 99999999, border: 0 }}
                    className="youtube-iframe video-iframe"
                    src={src}
                    title={__('YouTube video player', 'zoloblocks')}
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            );
            break;
        }

        case 'vimeo': {
            const vimeoUrl = attributes?.vimeoUrl?.url;
            const vimeoIdMatch = vimeoUrl?.match(/vimeo\.com\/(\d+)/);
            const vimeoVideoId = vimeoIdMatch ? vimeoIdMatch[1] : null;

            if (!vimeoVideoId) {
                console.warn('Invalid Vimeo URL:', vimeoUrl);
                break;
            }

            const queryParams = {
                autoplay: attributes?.autoPlay ? 1 : 0,
                muted: attributes?.mute ? 1 : 0,
                loop: attributes?.loop ? 1 : 0,
                controls: attributes?.playerControl ? 1 : 0,
            };

            const src = addQueryArgs(`https://player.vimeo.com/video/${vimeoVideoId}`, queryParams);

            iframeMarkup = (
                <iframe
                    style={{ width: '100%', aspectRatio: '16 / 9', zIndex: 99999999, border: 0 }}
                    className="vimeo-iframe video-iframe"
                    src={src}
                    title={__('Vimeo video player', 'zoloblocks')}
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            );
            break;
        }

        case 'custom': {
            const customVideoUrl =
                attributes?.isExternalCustomUrl && attributes?.externalCustomVideoUrl?.url
                    ? attributes?.externalCustomVideoUrl?.url
                    : attributes?.customVideo || null;

            if (!customVideoUrl) {
                console.warn('Custom video URL is missing');
                break;
            }

            iframeMarkup = <CustomPlayer src={customVideoUrl} attributes={attributes} anchor={anchor} isEdit={isEdit} />;
            break;
        }

        default:
            iframeMarkup = <p>{__('Unsupported video source.', 'zoloblocks')}</p>;
    }

    return (
        <div className="zolo-video-container">
            {attributes?.videoOverlay && <div className="zolo-video-overlay"></div>}
            {iframeMarkup || <p>{__('No video available.', 'zoloblocks')}</p>}
        </div>
    );
};

export default EmbedPlayer;
