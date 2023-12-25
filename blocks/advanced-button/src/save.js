import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, preset, label, link, iconType, iconPosition, icon, parentClasses, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}>
                <a
                    className={`zolo-button ${iconPosition}`}
                    href={link && link.url}
                    rel={link && link.openInNewTab && 'noreferrer noopener'}
                    target={link && link.openInNewTab && '_blank'}
                >
                    {iconType !== 'iconOnly' && <RichText.Content tagName="span" className={`zolo-button-content`} value={label} />}
                    {iconType !== 'none' && <DisplayZoloIcon icon={icon} />}
                </a>
            </div>
        </div>
    );
};

export default Save;
