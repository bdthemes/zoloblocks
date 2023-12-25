import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        titleTag,
        mainIcon,
        showMainIcon,
        showHeading,
        showDesc,
        showButton,
        showButtonIcon,
        buttonIcon,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        buttonText,
        buttonLink,
        globalLink,
        zoloId,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {globalLink === true ? (
                <a
                    href={buttonLink && buttonLink.url}
                    target={buttonLink && buttonLink.openInNewTab && '_blank'}
                    rel={buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'}
                    className={`zolo-block-advanced-icon-box ${uniqueId} zolo-block-advanced-icon-box-${preset}`}
                >
                    <div className="zolo-block-item">
                        {showMainIcon && (
                            <div className={`zolo-block-icon-wrap`}>
                                {iconType == 'icon' ? (
                                    <DisplayZoloIcon icon={mainIcon} />
                                ) : (
                                    iconTypeImage && <img src={iconTypeImage.url} alt={iconTypeImage.alt || iconBoxTitle} />
                                )}
                            </div>
                        )}
                        <div className="zolo-block-body-content">
                            {showHeading && <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />}
                            {showDesc && <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />}
                            {showButton && (
                                <div className={`zolo-block-link-btn`}>
                                    <div className={`zolo-box-button`} href={buttonLink}>
                                        <RichText.Content value={buttonText} />
                                        {showButtonIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </a>
            ) : (
                <div className={`zolo-block-advanced-icon-box ${uniqueId} zolo-block-advanced-icon-box-${preset}`}>
                    <div className="zolo-block-item">
                        {showMainIcon && (
                            <div className={`zolo-block-icon-wrap`}>
                                {iconType == 'icon' ? (
                                    <DisplayZoloIcon icon={mainIcon} />
                                ) : (
                                    iconTypeImage && <img src={iconTypeImage.url} alt={iconTypeImage.alt || iconBoxTitle} />
                                )}
                            </div>
                        )}

                        <div className="zolo-block-body-content">
                            {showHeading && <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />}
                            {showDesc && <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />}
                            {showButton && (
                                <div className={`zolo-block-link-btn`}>
                                    <a
                                        className="zolo-box-button"
                                        href={buttonLink && buttonLink.url}
                                        target={buttonLink && buttonLink.openInNewTab && '_blank'}
                                        rel={buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'}
                                    >
                                        <RichText.Content tagName="span" value={buttonText} />
                                        {showButtonIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Save;
