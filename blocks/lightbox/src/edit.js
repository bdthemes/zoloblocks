/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import FsLightbox from 'fslightbox-react';
import { useState } from '@wordpress/element';

/**
 * Internal depencencies
 */
import Inspector from './inspector';
import LightboxContent from './content';
import Style from './style';
import './style.scss';

const { classArrayToStr, DynamicTag, DisplayZoloIcon } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

    const {
        uniqueId,
        parentClasses,
        lightboxType,
        imagePoster,
        imageSize,
        buttonText,
        enableHeading,
        enableSubHeading,
        buttonHeadingText,
        posterIcon,
        contentCaption,
    } = attributes;
    const [toggler, setToggler] = useState(false);

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
    });

    return (
        <>
            <div {...blocksProps}>
                {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
                <Style props={props} />
                <div className="zolo-lightbox-btn">
                    <button
                        className="zolo-play-btn zolo-lightbox-btn-1"
                        onClick={() => {
                            setToggler(!toggler);
                        }}
                    >
                        {lightboxType !== 'poster' && (
                            <span className="zolo-btn-text">
                                <small>{enableSubHeading && buttonHeadingText}</small>
                                {enableHeading && buttonText}
                            </span>
                        )}
                        <span className="zolo-btn-icon">
                            <DisplayZoloIcon icon={posterIcon} />
                        </span>
                    </button>
                </div>
                {lightboxType === 'poster' && (
                    <div className="zolo-poster-img">
                        <img
                            src={imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url}
                            alt={imagePoster.alt}
                        />
                    </div>
                )}

                <FsLightbox
                    toggler={toggler}
                    sources={[
                        <div id={`${uniqueId}`} className="zolo-lightbox-content-editor">
                            {LightboxContent(props)}
                        </div>,
                    ]}
                    captions={[contentCaption]}
                />
            </div>
        </>
    );
}
