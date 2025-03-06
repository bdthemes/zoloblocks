/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        preset,
        label,
        Slabel,
        link,
        Slink,
        iconType,
        SiconType,
        icon,
        Sicon,
        iconPosition,
        SiconPosition,
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        description,
        reversePosition,
        showSecondaryBtn,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const ctaPrimaryLinkButton = {
        className: `zolo-button primary ${iconPosition}`,
        href: link?.url || '#',
        rel: link?.openInNewTab ? 'noreferrer noopener' : undefined,
        target: link?.openInNewTab ? '_blank' : undefined,
        title: label,
        onClick: (e) => e.preventDefault(),
    };

    const ctaSecondaryLinkButton = {
        className: `zolo-button secondary ${SiconPosition}`,
        href: Slink?.url || '#',
        rel: Slink?.openInNewTab ? 'noreferrer noopener' : undefined,
        target: Slink?.openInNewTab ? '_blank' : undefined,
        title: Slabel,
        onClick: (e) => e.preventDefault(),
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.cta} alt={__('Call to Action Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                {renderHookBefore && renderHookBefore}
                <div className={`zolo-call-out ${preset} ${reversePosition ? 'reserve-position' : ''}`}>
                    <div className="zolo-call-out__content">
                        {showTitle && (
                            <RichText
                                tagName={titleTag}
                                className={`zolo-call-out__title`}
                                value={title}
                                onChange={(text) => setAttributes({ title: text })}
                                placeholder={__('Call Out Title', 'zoloblocks')}
                            />
                        )}
                        {showDescription && (
                            <RichText
                                tagName="p"
                                className={`zolo-call-out__text`}
                                value={description}
                                onChange={(text) => setAttributes({ description: text })}
                                placeholder={__('Call Out Description', 'zoloblocks')}
                            />
                        )}
                    </div>

                    {(showBtn || showSecondaryBtn) && (
                        <div className="zolo-call-out__buttons">
                            <div className="zolo-call-out-btns-group">
                                {showBtn && (
                                    <div className={`zolo-call-out__button zolo-call-out__icon-${iconPosition}`}>
                                        <a {...ctaPrimaryLinkButton}>
                                            {iconType !== 'iconOnly' && (
                                                <RichText
                                                    tagName="span"
                                                    className={`zolo-text`}
                                                    value={label}
                                                    onChange={(text) => setAttributes({ label: text })}
                                                    placeholder={__('button text', 'zoloblocks')}
                                                    allowedFormats={['zolo/dynamic-content']}
                                                />
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
                                        <a {...ctaSecondaryLinkButton}>
                                            {SiconType !== 'iconOnly' && (
                                                <RichText
                                                    tagName="span"
                                                    className={`zolo-text`}
                                                    value={Slabel}
                                                    onChange={(text) => setAttributes({ Slabel: text })}
                                                    placeholder={__('Secondary text', 'zoloblocks')}
                                                    allowedFormats={['zolo/dynamic-content']}
                                                />
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
        </>
    );
}
