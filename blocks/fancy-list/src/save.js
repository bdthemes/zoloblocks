import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon, classArrayToStr } = window.zoloModule;
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
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}
        >
            <div className="zb-container">
                <div className={`zb-fancy-list-wrap zb-fancy-style-${preset}`}>
                    <div className="zb-fancy-list-item">
                        <div className="zb-fancy-list-content">
                            {imageToggle == true && image && (
                                <div className="zb-fancy-list-image">
                                    <img src={image} alt="picture" />
                                </div>
                            )}
                            <div className="zb-fancy-list-number">
                                <span>1</span>
                            </div>
                            <div className="zb-fancy-list-inner-content">
                                {titleToggle == true && (
                                    <RichText.Content tagName={headingTag} className="zb-fancy-list-title" value={fancyTitle} />
                                )}
                                {textToggle == true && (
                                    <RichText.Content tagName="div" className="zb-fancy-list-text" value={fancyListText} />
                                )}
                            </div>
                        </div>
                        {iconToggle == true && (
                            <div>
                                <div className="zb-fancy-icon">{fancyIcon && <DisplayIcon icon={fancyIcon} />}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
