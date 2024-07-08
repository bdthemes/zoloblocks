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
        // animation
        animationType,
        animationPositionOne,
        animationPositionTwo,
        //notice
        dismissible,
        showAfterDismiss,
        enableIcon,
        noticeType,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-block-notice',
            preset,
            noticeType,
            `${preset === 'style-2' ? iconBoxDirection : ''}`,
            `${(preset === 'style-1' || preset === 'style-2') && animationType ? `animation-${animationType}` : ''}`
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
                        `${(preset === 'style-1' || preset === 'style-2') && animationType === 'style-1' ? `animation-${animationPositionOne}` : ''}`,
                        `${(preset === 'style-1' || preset === 'style-2') && animationType === 'style-2' ? `animation-${animationPositionTwo}` : ''}`
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
                        <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />
                        {dismissible && (
                            <span
                                className={`${enableIcon == false && preset == 'style-1' ? `zolo-notice-closed` : ''} zolo-notice-dismiss`}
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                        <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />
                    </div>
                </div>
            </DynamicTag>
        </div>
    );
};

export default Save;
