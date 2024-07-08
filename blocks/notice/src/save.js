import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon, DynamicTag } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        titleTag,
        mainIcon,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        buttonText,
        buttonLink,
        globalLink,
        zoloId,
        imageRes,
        iconBoxDirection,
        dismissible,
        showAfterDismiss,
        enableIcon,
        showTitle,
        showText,
        noticeType,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-block-notice',
            preset,
            noticeType,
            `${preset === 'style-1' ? iconBoxDirection : ''}`,
        ),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-id={uniqueId}
            data-show-again={showAfterDismiss}
        >
            <DynamicTag
                tagName={globalLink === true ? 'a' : 'div'}
                {...(globalLink === true && {
                    href: buttonLink && buttonLink.url,
                    target: buttonLink && buttonLink.openInNewTab && '_blank',
                    rel: buttonLink && buttonLink.openInNewTab && 'noopener noreferrer',
                    title: buttonText,
                })}
            >
                <div
                    className={classnames(
                        'zolo-block-item',
                        `${(preset === 'style-1' || preset === 'style-2') && ''}`,
                        `${(preset === 'style-1' || preset === 'style-2') && ''}`
                    )}
                >

                    {enableIcon && (
                        <div className="zolo-block-icon-wrap">
                            {iconType == 'icon' ? (
                                <DisplayZoloIcon icon={mainIcon} />
                            ) : (
                                iconTypeImage && (
                                    <img
                                        src={
                                            iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                ? iconTypeImage.sizes[imageRes].url
                                                : iconTypeImage.url
                                        }
                                        alt={iconTypeImage.alt || iconBoxTitle}
                                        className={`wp-image-${iconTypeImage.id}`}
                                        loading="lazy"
                                    />
                                )
                            )}
                        </div>
                    )}

                    <div className="zolo-block-body-content">
                        {showTitle && (
                          <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />
                        )}

                        {showText && (
                          <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />
                        )}
                    </div>

                    {dismissible && (
                        <span
                            className={`${enableIcon == false && preset == 'style-1' ? `zolo-notice-closed` : ''} zolo-notice-dismiss`} >
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                        </span>
                    )}
                </div>
            </DynamicTag>
        </div>
    );
};

export default Save;
