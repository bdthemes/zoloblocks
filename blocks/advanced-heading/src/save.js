import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DynamicTag } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        //settings
        titleText,
        enableTitleLink,
        titleLink,
        titleTagName,
        subTitleText,
        showSubTitle,
        subTitlePosition,
        showSeparator,
        separatorPosition,
        showTransparentTitle,
        transparentTitleText,
        transparentTitleRotateOrigin,
        //styles
        styles,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className={`zolo-block-wrapper zolo-advanced-heading ${'zolo-ah-' + styles} ${uniqueId}`}>
                {showTransparentTitle && (
                    <div className="zolo-transparent-heading-wrap">
                        <h3 className={`zolo-transparent-heading zolo-transform-origin-${transparentTitleRotateOrigin}`}>
                            {transparentTitleText}
                        </h3>
                    </div>
                )}

                {showSeparator && separatorPosition === 'top' && <div className="zolo-ah-separator"></div>}

                {showSubTitle && subTitlePosition == 'top' && (
                    <RichText.Content
                        tagName={'h4'}
                        className="zolo-ah-subtitle"
                        value={subTitleText}
                        formattingControl={['bold', 'italic']}
                    />
                )}

                <DynamicTag tagName={titleTagName} className="zolo-ah-title">
                    <RichText.Content
                        tagName={enableTitleLink && titleLink ? 'a' : 'span'}
                        className="zolo-ah-main-title"
                        value={titleText}
                        formattingControl={['bold', 'italic']}
                        {...(enableTitleLink && titleLink
                            ? {
                                  href: titleLink.url,
                                  target: titleLink.openInNewTab ? '_blank' : '_self',
                                  rel: titleLink.openInNewTab ? 'noopener noreferrer' : 'noopener',
                              }
                            : {})}
                    />
                </DynamicTag>

                {showSubTitle && subTitlePosition == 'bottom' && (
                    <RichText.Content
                        tagName={'h4'}
                        className="zolo-ah-subtitle"
                        value={subTitleText}
                        formattingControl={['bold', 'italic']}
                    />
                )}

                {showSeparator && separatorPosition === 'bottom' && <div className="zolo-ah-separator"></div>}
            </div>
        </div>
    );
};

export default Save;
