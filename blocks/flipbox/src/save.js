import { useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        zoloId,
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
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div className={`zolo-flip-box_wrap zolo-flip-box_animation_style-${flipEffect}`}>
                <div
                    className={`zolo-flip-box_item ${triggerType === 'hover' ? 'zolo-flip-box_hover' : ''}`}
                    data-triggerType={triggerType}
                >
                    <div className="zolo-flip-box_inner-item">
                        <div className="zolo-flip-box_face zolo-flip-box_front">
                            <div className="zolo-flip-box-content zolo-flip-box_front-content">
                                {showFrontIcon && (
                                    <div className="zolo-flip-box_icon">
                                        <span
                                            className={`zolo-flip-box_inner-icon ${frontIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`}
                                        >
                                            {frontIconType == 'icon' ? (
                                                <>{frontIcon && <DisplayZoloIcon icon={frontIcon} />}</>
                                            ) : (
                                                frontIconTypeImage && (
                                                    <img
                                                        src={
                                                            frontIconTypeImage.sizes && frontIconTypeImage.sizes[imageRes]
                                                                ? frontIconTypeImage.sizes[imageRes].url
                                                                : frontIconTypeImage.url
                                                        }
                                                        alt={frontIconTypeImage.alt || 'front icon'}
                                                        className={`wp-image-${frontIconTypeImage.id}`}
                                                        loading="lazy"
                                                    />
                                                )
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
                                            className={`zolo-flip-box_inner-icon ${backIconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`}
                                        >
                                            {backIconType == 'icon' ? (
                                                <> {backIcon && <DisplayZoloIcon icon={backIcon} />}</>
                                            ) : (
                                                backIconTypeImage && (
                                                    <img
                                                        src={
                                                            backIconTypeImage.sizes && backIconTypeImage.sizes[imageRes]
                                                                ? backIconTypeImage.sizes[imageRes].url
                                                                : backIconTypeImage.url
                                                        }
                                                        alt={backIconTypeImage.alt || ''}
                                                        className={`wp-image-${backIconTypeImage.id}`}
                                                        loading="lazy"
                                                    />
                                                )
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
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
