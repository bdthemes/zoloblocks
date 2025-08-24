//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
//external dependencies
import classnames from 'classnames';
//internal dependencies
import Inspector from './inspector';
import Style from './style';
import './style.scss';

const { DynamicTag, classArrayToStr, SidebarOpener, DisplayZoloIcon, sanitizeUrl } = window.zoloModule;

const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        uniqueId,
        preview,
        parentClasses,
        styles,
        enableTitleLink,
        titleText,
        subTitleText,
        showSubTitle,
        subTitleTag,
        titleTagName,
        titleLink,
        showSeparator,
        subTitlePosition,
        separatorPosition,
        showTransparentTitle,
        transparentTag,
        transparentTitleText,
        transparentTitleRotateOrigin,
        zolo_titleFontWeight,

        // text Gradient
        textGradient,
        textGradientType,
        textGradientColorbackgroundType,
        // subTitle styles
        subTitleStyles,
        showSubTitleBadgeText,
        subTitleBadgeText,
        subTitleBadgeIcon,
        showSubTitleBadgeIcon,
        badgeDirection,
    } = attributes;

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const richSubTitleTextProps = {
        tagName: subTitleTag,
        className: 'zolo-ah-subtitle',
        value: subTitleText,
        formatingcontrols: ['bold', 'italic'],
        onChange: (newSubTitleText) => setAttributes({ subTitleText: newSubTitleText }),
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div
                    className={`zolo-block-wrapper zolo-advanced-heading zolo-ah-${styles} ${uniqueId} ${showSubTitle ? subTitleStyles : ''} ${textGradientColorbackgroundType !== 'classic' ? textGradientType : ''}`}
                >
                    {showTransparentTitle && (
                        <div className="zolo-transparent-heading-wrap">
                            <DynamicTag
                                tagName={transparentTag}
                                className={`zolo-transparent-heading zolo-transform-origin-${transparentTitleRotateOrigin}`}
                            >
                                {transparentTitleText}
                            </DynamicTag>
                        </div>
                    )}

                    {showSeparator && separatorPosition === 'top' && (
                        <div className="zolo-separator-wrapper">
                            <div className="zolo-ah-separator"></div>
                        </div>
                    )}

                    {showSubTitle &&
                        subTitlePosition === 'top' &&
                        (subTitleStyles !== 'badge-style-1' ? (
                            <RichText {...richSubTitleTextProps} />
                        ) : (
                            <div className={`zolo-ah-subtitle-badge-wrap ${badgeDirection}`}>
                                {showSubTitleBadgeText && (
                                    <RichText
                                        className="zolo-badge-text"
                                        tagName="span"
                                        value={subTitleBadgeText}
                                        onChange={(v) => setAttributes({ subTitleBadgeText: v })}
                                    />
                                )}
                                <RichText {...richSubTitleTextProps} />
                                {showSubTitleBadgeIcon && <DisplayZoloIcon icon={subTitleBadgeIcon} />}
                            </div>
                        ))}

                    <DynamicTag tagName={titleTagName} className="zolo-ah-title">
                        <RichText
                            tagName={enableTitleLink && titleLink ? 'a' : 'span'}
                            className={`zolo-ah-main-title ${enableTitleLink ? 'has-link' : ''}`}
                            value={titleText}
                            formatingcontrols={['bold', 'italic']}
                            onChange={(titleText) => setAttributes({ titleText })}
                            {...(enableTitleLink && titleLink
                                ? {
                                      href: sanitizeUrl(titleLink.url),
                                      target: titleLink.openInNewTab ? '_blank' : '_self',
                                      rel: titleLink.openInNewTab ? 'noopener noreferrer' : 'noopener',
                                      title: titleText,
                                  }
                                : {})}
                        />
                    </DynamicTag>

                    {showSubTitle &&
                        subTitlePosition === 'bottom' &&
                        (subTitleStyles !== 'badge-style-1' ? (
                            <RichText {...richSubTitleTextProps} />
                        ) : (
                            <div className={`zolo-ah-subtitle-badge-wrap ${badgeDirection}`}>
                                {showSubTitleBadgeText && (
                                    <RichText
                                        className="zolo-badge-text"
                                        tagName="span"
                                        value={subTitleBadgeText}
                                        onChange={(v) => setAttributes({ subTitleBadgeText: v })}
                                    />
                                )}
                                <RichText {...richSubTitleTextProps} />
                                {showSubTitleBadgeIcon && <DisplayZoloIcon icon={subTitleBadgeIcon} />}
                            </div>
                        ))}
                    {showSeparator && separatorPosition === 'bottom' && (
                        <div className="zolo-separator-wrapper">
                            <div className="zolo-ah-separator"></div>
                        </div>
                    )}
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
};

export default Edit;
