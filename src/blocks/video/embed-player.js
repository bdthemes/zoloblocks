import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';
import { SandBox } from '@wordpress/components';
import CustomPlayer from './custom-player';

const EmbedPlayer = ({ attributes = {}, anchor, isEdit }) => {
    let iframeMarkup = null;
    let externalVideoUrl = null;
    let openInNewTab = false;

    const {
        videoSource,
        youtubeUrl,
        vimeoUrl,
        customVideo,
        externalCustomVideoUrl,
        isExternalCustomUrl,
        mute,
        loop,
        autoPlay,
        playerControl,
        youtubeSuggestedvideoType,
        youtubeModestBranding,
        isPrivacyMode,
        isLazyLoad,
        showCaption,
        startTime,
        endTime,
        videoOverlay,
    } = attributes;

    switch (videoSource) {
        case 'youtube': {
            const rawUrl = youtubeUrl?.url;

            if (!rawUrl) {
                console.warn('Missing YouTube URL');
                break;
            }

            let youtubeVideoId;
            try {
                // Support for various YouTube URL formats:
                // - standard: youtube.com/watch?v=ID
                // - short: youtu.be/ID
                // - embed: youtube.com/embed/ID
                // - shorts: youtube.com/shorts/ID
                const match = rawUrl.match(
                    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([^?&"'>]+)/
                );
                youtubeVideoId = match && match[1];
            } catch (err) {
                console.warn('Invalid YouTube URL format:', rawUrl);
                break;
            }

            if (!youtubeVideoId) {
                console.warn('Could not extract video ID from YouTube URL:', rawUrl);
                break;
            }

            const queryParams = {
                mute: mute ? 1 : 0,
                controls: playerControl ? 1 : 0,
                playsinline: 1,
                rel: youtubeSuggestedvideoType || '0',
                loop: loop ? 1 : 0,
                playlist: loop ? youtubeVideoId : undefined,
                modestbranding: youtubeModestBranding ? 1 : 0,
                autoplay: autoPlay ? 1 : 0,
                start: startTime || undefined,
                end: endTime || undefined,
                cc_load_policy: showCaption ? '1' : '0',
            };

            const src = addQueryArgs(`https://www.youtube${isPrivacyMode ? '-nocookie' : ''}.com/embed/${youtubeVideoId}`, queryParams);

            externalVideoUrl = rawUrl;
            openInNewTab = youtubeUrl?.openInNewTab || false;

            if (isEdit) {
                // In editor: use WordPress SandBox component to avoid nested iframe referrer issues (Error 153)
                const sandboxHtml = `<iframe style="width:100%; aspect-ratio:16/9; border:0;" src="${src}" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                iframeMarkup = (
                    <div
                        key={`youtube-sandbox-${youtubeVideoId}`}
                        className="youtube-iframe video-iframe"
                        style={{ width: '100%', aspectRatio: '16 / 9' }}
                    >
                        <SandBox html={sandboxHtml} />
                    </div>
                );
            } else {
                // On frontend: render the actual iframe directly
                iframeMarkup = (
                    <iframe
                        key={`youtube-${youtubeVideoId}`}
                        style={{ width: '100%', aspectRatio: '16 / 9', zIndex: 9, border: 0 }}
                        className="youtube-iframe video-iframe"
                        src={src}
                        title={__('YouTube video player', 'zoloblocks')}
                        allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading={isLazyLoad ? 'lazy' : 'auto'}
                    />
                );
            }
            break;
        }

        case 'vimeo': {
            const rawUrl = vimeoUrl?.url;
            const vimeoIdMatch = rawUrl?.match(/vimeo\.com\/(\d+)/);
            const vimeoVideoId = vimeoIdMatch?.[1];

            if (!vimeoVideoId) {
                console.warn('Invalid Vimeo URL:', rawUrl);
                break;
            }

            const queryParams = {
                autoplay: autoPlay ? 1 : 0,
                muted: mute ? 1 : 0,
                loop: loop ? 1 : 0,
                controls: playerControl ? 1 : 0,
            };

            const src = addQueryArgs(`https://player.vimeo.com/video/${vimeoVideoId}`, queryParams);

            externalVideoUrl = rawUrl;
            openInNewTab = vimeoUrl?.openInNewTab || false;

            iframeMarkup = (
                <iframe
                    style={{ width: '100%', aspectRatio: '16 / 9', zIndex: 9, border: 0 }}
                    className="vimeo-iframe video-iframe"
                    src={src}
                    title={__('Vimeo video player', 'zoloblocks')}
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading={isLazyLoad ? 'lazy' : 'auto'}
                />
            );
            break;
        }

        case 'custom': {
            const customVideoUrl = isExternalCustomUrl ? externalCustomVideoUrl?.url : customVideo;

            if (!customVideoUrl) {
                console.warn('Missing custom video URL');
                break;
            }

            externalVideoUrl = customVideoUrl;
            openInNewTab = externalCustomVideoUrl?.openInNewTab || false;

            iframeMarkup = <CustomPlayer src={customVideoUrl} attributes={attributes} anchor={anchor} isEdit={isEdit} />;
            break;
        }

        default: {
            iframeMarkup = <p>{__('Unsupported video source.', 'zoloblocks')}</p>;
        }
    }

    return (
        <div className="zolo-video-container">
            {videoOverlay && <div className="zolo-video-overlay"></div>}
            <div className="default-video-message">{iframeMarkup || <p>{__('No video available.', 'zoloblocks')}</p>}</div>
        </div>
    );
};

export default EmbedPlayer;
