import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        preset,
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        description,
        label,
        Slabel,
        link,
        Slink,
        iconType,
        SiconType,
        iconPosition,
        SiconPosition,
        icon,
        Sicon,
        showSecondaryBtn,
        reversePosition,
        zoloId,
    } = attributes;
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className={`zolo-call-out ${preset} ${reversePosition ? 'reserve-position' : ''}`}>
                <div className="zolo-call-out__content">
                    {showTitle && <RichText.Content tagName={titleTag} className={`zolo-call-out__title`} value={title} />}
                    {showDescription && <RichText.Content tagName="p" className={`zolo-call-out__text`} value={description} />}
                </div>

                {(showBtn || showSecondaryBtn) && (
                    <div className="zolo-call-out__buttons">
                        <div className="zolo-call-out-btns-group">
                            {showBtn && (
                                <div className={`zolo-call-out__button zolo-call-out__icon-${iconPosition}`}>
                                    <a
                                        className={`zolo-button primary ${iconPosition}`}
                                        href={link && link.url}
                                        rel={link && link.openInNewTab && 'noreferrer noopener'}
                                        target={link && link.openInNewTab && '_blank'}
                                        title={label}
                                    >
                                        {iconType !== 'iconOnly' && (
                                            <RichText.Content tagName="span" className={`zolo-text`} value={label} />
                                        )}
                                        {iconType !== 'none' && (
                                            <span className="zolo-icon primary-icon">
                                                <DisplayZoloIcon icon={icon} />
                                            </span>
                                        )}
                                    </a>
                                </div>
                            )}
                            {showSecondaryBtn && (
                                <div className={`zolo-call-out__button zolo-call-out__secondary zolo-call-out__icon-${SiconPosition}`}>
                                    <a
                                        className={`zolo-button secondary ${SiconPosition}`}
                                        href={Slink && Slink.url}
                                        rel={Slink && Slink.openInNewTab && 'noreferrer noopener'}
                                        target={Slink && Slink.openInNewTab && '_blank'}
                                        title={Slabel}
                                    >
                                        {SiconType !== 'iconOnly' && (
                                            <RichText.Content tagName="span" className={`zolo-text`} value={Slabel} />
                                        )}
                                        {SiconType !== 'none' && (
                                            <span className="zolo-icon secondary-icon">
                                                <DisplayZoloIcon icon={Sicon} />
                                            </span>
                                        )}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Save;
