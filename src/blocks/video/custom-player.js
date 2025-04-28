import { __ } from '@wordpress/i18n';

const CustomPlayer = ({ src, attributes, anchor, isEdit = false }) => {
    const { autoPlay, loop, mute, playerControl, showDownloadButton, preload, posterImage, imageRes } = attributes;

    const videoProps = {
        autoPlay,
        loop,
        muted: mute || false,
        src,
        controls: playerControl || false,
        playsInline: true,
        className: 'zolo-custom-video-player',
        preload: preload || 'auto',
        controlsList: !showDownloadButton ? 'nodownload' : 'default',
        poster: posterImage?.sizes && posterImage?.sizes?.[imageRes] ? posterImage?.sizes?.[imageRes]?.url : posterImage?.url,
    };

    if (isEdit) {
        videoProps.ref = anchor;
        videoProps.loading = 'lazy';
    } else {
        videoProps.loading = attributes?.isLazyLoad ? 'lazy' : 'eager';
    }

    let playerControls = null;

    return (
        <div className="zolo-custom-player-wrapper">
            <video {...videoProps}>{__('Sorry, your browser doesn’t support embedded videos.', 'zoloblocks')}</video>
            {playerControls}
        </div>
    );
};

export default CustomPlayer;
