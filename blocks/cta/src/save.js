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
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        description,
        label,
        link,
        iconType,
        iconPosition,
        icon,
        parentClasses,
        reversePosition,
    } = attributes;
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}
        >
            <div className={`zolo-call-out ${preset} ${reversePosition ? 'reserve-position' : ''}`}>
                <div className="zolo-call-out__content">
                    {showTitle && <RichText.Content tagName={titleTag} className={`zolo-call-out__title`} value={title} />}
                    {showDescription && <RichText.Content tagName="p" className={`zolo-call-out__text`} value={description} />}
                </div>
                {showBtn && (
                    <div className={`zolo-call-out__button zolo-call-out__icon-${iconPosition}`}>
                        <a
                            className={`zolo-button ${iconPosition}`}
                            href={link && link.url}
                            rel={link && link.openInNewTab && 'noreferrer noopener'}
                            target={link && link.openInNewTab && '_blank'}
                        >
                            {iconType !== 'iconOnly' && <RichText.Content tagName="span" className="zolo-text" value={label} />}
                            {iconType !== 'none' && (
                                <span className="zolo-icon">
                                    <DisplayZoloIcon icon={icon} />
                                </span>
                            )}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Save;
