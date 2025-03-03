import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useRef, useEffect } from '@wordpress/element';

/**
 * Internal Dependencies
 */
const { classArrayToStr } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const { uniqueId, parentClasses, video, autoPlay, playerControl, loop, mute, posterImage, startTime, endTime } = attributes;

    const blocksProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            <div {...blocksProps}>
                <div className="zolo-video-wrapper">
                    <video
                        className="video-player"
                        width={640}
                        height={360}
                        src={video}
                        autoPlay={autoPlay}
                        controls={playerControl}
                        loop={loop}
                        muted={mute}
                        poster={posterImage}
                        data-start-time={startTime}
                        data-end-time={endTime}
                    />
                </div>
            </div>
        </>
    );
}
