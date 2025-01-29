import { RichText, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import classnames from 'classnames';
const { classArrayToStr, DynamicTag } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        titleText,
        enableTitleLink,
        titleLink,
        titleTagName,
        subTitleText,
        showSubTitle,
        subTitleTag,
        subTitlePosition,
        showSeparator,
        separatorPosition,
        showTransparentTitle,
        transparentTag,
        transparentTitleText,
        transparentTitleRotateOrigin,
        //styles
        styles,
        zoloId,
        textGradient,
        textGradientType,
        textGradientColorbackgroundType,
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
            <div
                className={`zolo-block-wrapper zolo-advanced-heading ${'zolo-ah-' + styles} ${uniqueId}  ${textGradientColorbackgroundType !== 'classic' ? textGradientType : ''}`}
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

                {showSubTitle && subTitlePosition == 'top' && (
                    <RichText.Content
                        tagName={subTitleTag}
                        className="zolo-ah-subtitle"
                        value={subTitleText}
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                )}

                <DynamicTag tagName={titleTagName} className="zolo-ah-title">
                    <RichText.Content
                        tagName={enableTitleLink && titleLink ? 'a' : 'span'}
                        className={`zolo-ah-main-title ${enableTitleLink ? 'has-link' : ''}`}
                        value={titleText}
                        allowedFormats={['core/bold', 'core/italic']}
                        {...(enableTitleLink && titleLink
                            ? {
                                  href: titleLink.url,
                                  target: titleLink.openInNewTab ? '_blank' : '_self',
                                  rel: titleLink.openInNewTab ? 'noopener noreferrer' : 'noopener',
                                  title: titleText,
                              }
                            : {})}
                    />
                </DynamicTag>

                {showSubTitle && subTitlePosition == 'bottom' && (
                    <RichText.Content
                        tagName={subTitleTag}
                        className="zolo-ah-subtitle"
                        value={subTitleText}
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                )}

                {showSeparator && separatorPosition === 'bottom' && (
                    <div className="zolo-separator-wrapper">
                        <div className="zolo-ah-separator"></div>
                    </div>
                )}
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
