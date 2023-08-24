import { RichText, useBlockProps } from '@wordpress/block-editor';

const { DisplayIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        titleTag,
        showIcon,
        mainIcon,
        buttonIcon,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        buttonText,
        buttonLink,
        globalLink,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {globalLink === true ? (
                <a
                    href={buttonLink && buttonLink.url}
                    target={buttonLink && buttonLink.openInNewTab && '_blank'}
                    rel={buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'}
                    className={`zolo-block-advanced-icon-box ${uniqueId} zolo-block-advanced-icon-box-${preset}`}
                >
                    <div className="zolo-block-item">
                        <div className={`zolo-block-icon-wrap`}>{iconType == 'icon' && <DisplayIcon icon={mainIcon} />}</div>

                        <div className="zolo-block-body-content">
                            <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />
                            <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />
                            <div>
                                <div className={`zolo-box-button`} href={buttonLink}>
                                    <RichText.Content value={buttonText} />
                                    {showIcon && <DisplayIcon icon={buttonIcon} />}
                                </div>
                            </div>
                        </div>

                        <div className="zolo-block-hover-icon">
                            <DisplayIcon icon={mainIcon} />
                        </div>
                    </div>
                </a>
            ) : (
                <div className={`zolo-block-advanced-icon-box ${uniqueId} zolo-block-advanced-icon-box-${preset}`}>
                    <div className="zolo-block-item">
                        <div className={`zolo-block-icon-wrap`}>
                            {iconType == 'icon' ? (
                                <DisplayIcon icon={mainIcon} />
                            ) : (
                                iconTypeImage && <img src={iconTypeImage.url} alt={iconTypeImage.alt || iconBoxTitle} />
                            )}
                        </div>

                        <div className="zolo-block-body-content">
                            <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />
                            <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />
                            <div className={`zolo-block-link-btn`}>
                                <a
                                    className={`zolo-icon-link`}
                                    href={buttonLink && buttonLink.url}
                                    target={buttonLink && buttonLink.openInNewTab && '_blank'}
                                    rel={buttonLink && buttonLink.openInNewTab && 'noopener noreferrer'}
                                >
                                    <div className={`zolo-box-button`}>
                                        <RichText.Content tagName="p" value={buttonText} />
                                        {showIcon && <DisplayIcon icon={buttonIcon} />}
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="zolo-block-hover-icon">
                            <DisplayIcon icon={mainIcon} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Save;
