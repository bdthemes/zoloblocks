/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { useRef, useEffect } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style.js';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const {
        preview,
        uniqueId,
        flipEffect,
        parentClasses,
        frontIcon,
        backIcon,
        showFrontIcon,
        showFrontTitle,
        frontTitle,
        showFrontContent,
        frontContent,
        showBackIcon,
        showBackTitle,
        backTitle,
        showBackContent,
        backContent,
        showBackLinkBtn,
        buttonText,
        buttonIcon,
        showBackLinkBtnIcon,
        link,
        triggerType,
        frontIconType,
        backIconType,
        frontIconTypeImage,
        backIconTypeImage,
        imageRes,
    } = attributes;

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.flipbox} alt={__('Flip Box Preview', 'zolo-blocks')} />;
    }

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // click event for flip box
    const flipboxRef = useRef(null);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} flipboxRef={flipboxRef} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className={`zolo-flip-box_wrap zolo-flip-box_animation_style-${flipEffect}`}>
                    <div ref={flipboxRef} className={`zolo-flip-box_item zolo-flip-box_hover`}>
                        <div className="zolo-flip-box_inner-item">
                            <div className="zolo-flip-box_face zolo-flip-box_front">
                                <div className="zolo-flip-box-content zolo-flip-box_front-content">
                                    {showFrontIcon && (
                                        <div className="zolo-flip-box_icon">
                                            <span
                                                className={`zolo-flip-box_inner-icon ${
                                                    frontIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'
                                                }`}
                                            >
                                                {frontIconType == 'icon' ? (
                                                    <>{frontIcon && <DisplayZoloIcon icon={frontIcon} />}</>
                                                ) : frontIconTypeImage ? (
                                                    <>
                                                        <img
                                                            src={
                                                                frontIconTypeImage.sizes && frontIconTypeImage.sizes[imageRes]
                                                                    ? frontIconTypeImage.sizes[imageRes].url
                                                                    : frontIconTypeImage.url
                                                            }
                                                            alt={frontIconTypeImage.alt || 'Flipbox Icon'}
                                                        />
                                                    </>
                                                ) : (
                                                    <MediaPlaceholder
                                                        icon="format-image"
                                                        labels={{
                                                            title: __('Add Photo', 'zolo-blocks'),
                                                            instructions: '',
                                                        }}
                                                        onSelect={(media) => {
                                                            setAttributes({
                                                                frontIconTypeImage: {
                                                                    id: media.id,
                                                                    url: media.url,
                                                                    alt: media.alt,
                                                                    sizes: media.sizes,
                                                                    caption: media.caption,
                                                                },
                                                            });
                                                        }}
                                                        accept="image/*"
                                                        allowedTypes={['image']}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                    )}
                                    {(showFrontTitle || showFrontContent) && (
                                        <>
                                            <div>
                                                {showFrontTitle && <h3 className="zolo-flip-box_title">{frontTitle}</h3>}
                                                {showFrontContent && <p className="zolo-flip-box_desc">{frontContent}</p>}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="zolo-flip-box_face zolo-flip-box_back">
                                <div className="zolo-flip-box-content zolo-flip-box_back-content">
                                    {showBackIcon && (
                                        <div className="zolo-flip-box_icon">
                                            <span
                                                className={`zolo-flip-box_inner-icon ${
                                                    backIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'
                                                }`}
                                            >
                                                {backIconType == 'icon' ? (
                                                    <>{backIcon && <DisplayZoloIcon icon={backIcon} />}</>
                                                ) : backIconTypeImage ? (
                                                    <>
                                                        <img
                                                            src={
                                                                backIconTypeImage.sizes && backIconTypeImage.sizes[imageRes]
                                                                    ? backIconTypeImage.sizes[imageRes].url
                                                                    : backIconTypeImage.url
                                                            }
                                                            alt={backIconTypeImage.alt || 'Flipbox Icon'}
                                                        />
                                                    </>
                                                ) : (
                                                    <MediaPlaceholder
                                                        icon="format-image"
                                                        labels={{
                                                            title: __('Add Photo', 'zolo-blocks'),
                                                            instructions: '',
                                                        }}
                                                        onSelect={(media) => {
                                                            setAttributes({
                                                                backIconTypeImage: {
                                                                    id: media.id,
                                                                    url: media.url,
                                                                    alt: media.alt,
                                                                    sizes: media.sizes,
                                                                    caption: media.caption,
                                                                },
                                                            });
                                                        }}
                                                        accept="image/*"
                                                        allowedTypes={['image']}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                    )}
                                    {(showBackTitle || showBackContent) && (
                                        <>
                                            <div>
                                                {showBackTitle &&
                                                    (link ? (
                                                        <a
                                                            href={link && link?.url}
                                                            target={link && link?.openInNewTab && '_blank'}
                                                            rel={link && link?.openInNewTab && 'noopener noreferrer'}
                                                            className="title-link"
                                                        >
                                                            <h3 className="zolo-flip-box_title">{backTitle}</h3>
                                                        </a>
                                                    ) : (
                                                        <h3 className="zolo-flip-box_title">{backTitle}</h3>
                                                    ))}
                                                {showBackContent && <p className="zolo-flip-box_desc">{backContent}</p>}
                                            </div>
                                        </>
                                    )}
                                    {showBackLinkBtn && (
                                        <div className="zolo-flip-box_link-button-wrap">
                                            <a
                                                href={link && link?.url}
                                                target={link && link?.openInNewTab && '_blank'}
                                                rel={link && link?.openInNewTab && 'noopener noreferrer'}
                                                className="zolo-flip-box_link-btn"
                                            >
                                                <span>{buttonText}</span>
                                                {buttonIcon && showBackLinkBtnIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
