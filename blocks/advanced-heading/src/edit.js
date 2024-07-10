//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
//external dependencies
import classnames from 'classnames';
//internal dependencies
import Inspector from './inspector';
import Style from './style';
import './style.scss';

const { DynamicTag, classArrayToStr, SidebarOpener } = window.zoloModule;

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
    } = attributes;

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <div className={`zolo-block-wrapper zolo-advanced-heading ${'zolo-ah-' + styles} ${uniqueId}`}>
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
                        <RichText
                            tagName={subTitleTag}
                            className="zolo-ah-subtitle"
                            value={subTitleText}
                            formattingControl={['bold', 'italic']}
                            onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />
                    )}
                    <DynamicTag tagName={titleTagName} className="zolo-ah-title">
                        <RichText
                            tagName={enableTitleLink && titleLink ? 'a' : 'span'}
                            className={`zolo-ah-main-title ${enableTitleLink ? 'has-link' : ''}`}
                            value={titleText}
                            formattingControl={['bold', 'italic']}
                            onChange={(titleText) => setAttributes({ titleText })}
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
                        <RichText
                            tagName={'h4'}
                            className="zolo-ah-subtitle"
                            value={subTitleText}
                            formattingControl={['bold', 'italic']}
                            onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />
                    )}
                    {showSeparator && separatorPosition === 'bottom' && (
                        <div className="zolo-separator-wrapper">
                            <div className="zolo-ah-separator"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Edit;
