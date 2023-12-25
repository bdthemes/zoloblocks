import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        image,
        headingTag,
        fancyTitle,
        fancyLink,
        fancyListText,
        fancyIcon,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        mediaType,
        mediaText,
        zoloId,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zb-fancy-list-content">
                {imageToggle && (
                    <>
                        {mediaType === 'image' && image && (
                            <div className="zb-fancy-list-image">
                                <img src={image.url} alt={image.url || fancyTitle} className={`wp-image-${image.id}`} />
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
        </div>
    );
};

export default Save;
