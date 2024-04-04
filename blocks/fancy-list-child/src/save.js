import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr, DynamicTag } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        image,
        headingTag,
        fancyTitle,
        fancyListText,
        fancyIcon,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        mediaType,
        mediaText,
        zoloId,
        fancyLinkToggle,
        fancyLink,
        imageRes,
        fancyDirection,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), fancyDirection),
    });

    return (
        <DynamicTag
            tagName={fancyLinkToggle ? 'a' : 'div'}
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            {...(fancyLinkToggle && {
                href: fancyLink.url,
                ...(fancyLink.openInNewTab && {
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    title: fancyTitle,
                }),
            })}
        >
            <div className="zb-fancy-list-content">
                {imageToggle && (
                    <>
                        {mediaType === 'image' && image && (
                            <div className="zb-fancy-list-image">
                                <img
                                    src={image.sizes && image.sizes[imageRes] ? image.sizes[imageRes].url : image.url}
                                    alt={image.url || fancyTitle}
                                    className={`wp-image-${image.id}`}
                                />
                            </div>
                        )}
                        {mediaType === 'text' && <div className="zb-fancy-list-number">{mediaText}</div>}
                    </>
                )}
                <div className="zb-fancy-list-inner-content">
                    {titleToggle == true && <RichText.Content tagName={headingTag} className="zb-fancy-list-title" value={fancyTitle} />}
                    {textToggle == true && <RichText.Content tagName="div" className="zb-fancy-list-text" value={fancyListText} />}
                </div>
            </div>
            {iconToggle == true && <div className="zb-fancy-icon">{fancyIcon && <DisplayZoloIcon icon={fancyIcon} />}</div>}
        </DynamicTag>
    );
};

export default Save;
