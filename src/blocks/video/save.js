import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import EmbedPlayer from './embed-player';

/**
 * Internal Dependencies
 */
const { classArrayToStr } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;
    const blocksProps = useBlockProps.save({
        className: classnames(attributes?.uniqueId, classArrayToStr(attributes?.parentClasses)),
    });

    let markup = null;

    if (attributes?.videoLayoutType === 'popup') {
        markup = (
            <>
                <div className="video-player-popoup">
                    <div className="video-player-popup-inline-content">
                        <a
                            href={`#video-player-popup-${attributes?.uniqueId}`}
                            className="popup-trigger-button"
                            data-fslightbox={`video-player-popup-${attributes?.uniqueId}`}
                        >
                            <>
                                {attributes?.popupType === 'button' && (
                                    <>
                                        <span className="popup-button-icon">{attributes?.popupButtonIcon}</span>
                                        {attributes?.popupButtonLebelWrap && (
                                            <span className="popup-button-label-wrap">
                                                <span className="popup-button-sub-label">{attributes?.popupButtonSubLabel}</span>
                                                <span className="popup-button-label">{attributes?.popupButtonLabel}</span>
                                            </span>
                                        )}
                                    </>
                                )}
                                {attributes?.popupType === 'image' && (
                                    <img
                                        data-fslightbox={`video-player-popup-${attributes?.uniqueId}`}
                                        className="popup-trigger-image"
                                        src={attributes?.popoupImage}
                                        alt={attributes?.popupButtonLabel}
                                        sizes={attributes?.popupImageSizes}
                                    />
                                )}
                            </>
                        </a>
                        <div className="video-player-popup-content" id={`video-player-popup-${attributes?.uniqueId}`}>
                            <EmbedPlayer attributes={attributes} anchor={null} />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (attributes?.videoLayoutType === 'inline') {
        markup = <EmbedPlayer attributes={attributes} anchor={null} />;
    }

    return <div {...blocksProps}>{markup}</div>;
}
