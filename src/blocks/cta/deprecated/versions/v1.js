import { RichText, useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

// attributes.js
import attributes from '../../attributes';

const v1 = {
    attributes: {
        ...attributes,
    },
    save(props) {
        const { attributes } = props;
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
        // filter hooks for render
        const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
        const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

        return (
            <div
                {...useBlockProps.save({
                    className: classnames(uniqueId, classArrayToStr(parentClasses)),
                })}
                {...(zoloId && {
                    id: zoloId,
                })}
            >
                {renderHookBefore && renderHookBefore}
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
                                            rel={link && link.openInNewTab ? 'noreferrer noopener' : undefined}
                                            target={link && link.openInNewTab ? '_blank' : undefined}
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
                                            rel={Slink && Slink.openInNewTab ? 'noreferrer noopener' : undefined}
                                            target={Slink && Slink.openInNewTab ? '_blank' : undefined}
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
                {renderHookAfter && renderHookAfter}
            </div>
        );
    },
};

export default v1;
