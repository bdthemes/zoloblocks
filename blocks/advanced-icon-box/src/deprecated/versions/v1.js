import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DynamicTag } = window.zoloModule;

// attributes.js
import attributes from '../../attributes';

const v1 = {
    attributes: {
        ...attributes,
    },
    save({ attributes }) {
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
            imageRes,
            showRibbon,
            ribbonTitle,
            ribbonPosition,
            iconBoxDirection,

            // animation
            animationType,
            animationPositionOne,
            animationPositionTwo,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(
                uniqueId,
                classArrayToStr(parentClasses),
                'zolo-block-advanced-icon-box',
                preset,
                `${preset === 'style-2' ? iconBoxDirection : ''}`,
                `${(preset === 'style-1' || preset === 'style-2') && animationType ? `animation-${animationType}` : ''}`
            ),
        });

        return (
            <DynamicTag
                {...blockProps}
                {...(zoloId && {
                    id: zoloId,
                })}
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
                    {showRibbon && ribbonTitle && <div className={`zolo-ribbon-btn ${ribbonPosition}`}>{ribbonTitle}</div>}
                    {showMainIcon && (
                        <div className={`zolo-block-icon-wrap`}>
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
                        {showHeading && <RichText.Content value={iconBoxTitle} tagName={titleTag} className={`zolo-block-title`} />}
                        {showDesc && <RichText.Content value={iconBoxDescription} tagName="div" className={`zolo-block-desc`} />}
                        {showButton && (
                            <div className={`zolo-block-link-btn`}>
                                <DynamicTag
                                    tagName={globalLink === true ? 'div' : 'a'}
                                    className="zolo-box-button"
                                    {...(globalLink !== true && {
                                        href: buttonLink && buttonLink.url,
                                        target: buttonLink && buttonLink.openInNewTab && '_blank',
                                        rel: buttonLink && buttonLink.openInNewTab && 'noopener noreferrer',
                                    })}
                                >
                                    <RichText.Content tagName="span" value={buttonText} />
                                    {showButtonIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                </DynamicTag>
                            </div>
                        )}
                    </div>
                </div>
            </DynamicTag>
        );
    },
};

export default v1;
