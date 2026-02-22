/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { useRef, useEffect } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, SidebarOpener, sanitizeText, sanitizeUrl } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style.js';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
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

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // link

    const flipBoxTitleLink = {
        href: sanitizeUrl(link?.url) || '#',
        target: link?.openInNewTab ? '_blank' : undefined,
        rel: link?.openInNewTab ? 'noopener noreferrer' : undefined,
        className: 'title-link',
        onClick: (e) => e.preventDefault(),
    };

    const flipBoxButtonLink = {
        href: sanitizeUrl(link?.url) || '#',
        target: link?.openInNewTab ? '_blank' : undefined,
        rel: link?.openInNewTab ? 'noopener noreferrer' : undefined,
        className: 'zolo-flip-box_link-btn',
        onClick: (e) => e.preventDefault(),
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.flipbox} alt={__('Flip Box Preview', 'zoloblocks')} />;
    }
    
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
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
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
                                                            title: __('Add Photo', 'zoloblocks'),
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
                                                {showFrontTitle && <h3 className="zolo-flip-box_title">{sanitizeText(frontTitle)}</h3>}
                                                {showFrontContent && <p className="zolo-flip-box_desc">{sanitizeText(frontContent)}</p>}
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
                                                            title: __('Add Photo', 'zoloblocks'),
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
                                                        <a {...flipBoxTitleLink}>
                                                            <h3 className="zolo-flip-box_title">{sanitizeText(backTitle)}</h3>
                                                        </a>
                                                    ) : (
                                                        <h3 className="zolo-flip-box_title">{sanitizeText(backTitle)}</h3>
                                                    ))}
                                                {showBackContent && <p className="zolo-flip-box_desc">{sanitizeText(backContent)}</p>}
                                            </div>
                                        </>
                                    )}
                                    {showBackLinkBtn && (
                                        <div className="zolo-flip-box_link-button-wrap">
                                            <a {...flipBoxButtonLink}>
                                                <span>{sanitizeText(buttonText)}</span>
                                                {buttonIcon && showBackLinkBtnIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
