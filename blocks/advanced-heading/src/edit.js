//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
//external dependencies
import classnames from 'classnames';
//internal dependencies
import Inspector from './inspector';
import Style from './style';
import './style.scss';

const { DynamicTag, DisplayIcon, classArrayToStr } = window.zoloModule;

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        styles,
        headingIcon,
        enableTitleLink,
        titleText,
        subTitleText,
        showSubTitle,
        titleTagName,
        titleLink,
        showSeparator,
        subTitlePosition,
        separatorPosition,
        showTransparentTitle,
        transparentTitleText,
        transparentTitleRotateOrigin,
    } = attributes;

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(className, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className={`zolo-block-wrapper zolo-advanced-heading ${'zolo-ah-' + styles} ${uniqueId}`}>
                    <DisplayIcon icon={headingIcon} />

                    {showTransparentTitle && (
                        <div className="zolo-transparent-heading-wrap">
                            <h3 className={`zolo-transparent-heading zolo-transform-origin-${transparentTitleRotateOrigin}`}>
                                {transparentTitleText}
                            </h3>
                        </div>
                    )}

                    {showSeparator && separatorPosition === 'top' && (
                        <div className="zolo-separator-wrapper">
                            <div className="zolo-ah-separator"></div>
                        </div>
                    )}

                    {showSubTitle && subTitlePosition == 'top' && (
                        <RichText
                            tagName={'h4'}
                            className="zolo-ah-subtitle"
                            value={subTitleText}
                            formattingControl={['bold', 'italic']}
                            onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />
                    )}
                    <DynamicTag tagName={titleTagName} className="zolo-ah-title">
                        <RichText
                            tagName={enableTitleLink && titleLink ? 'a' : 'span'}
                            className="zolo-ah-main-title"
                            value={titleText}
                            formattingControl={['bold', 'italic']}
                            onChange={(titleText) => setAttributes({ titleText })}
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
                        <RichText
                            tagName={'h4'}
                            className="zolo-ah-subtitle"
                            value={subTitleText}
                            formattingControl={['bold', 'italic']}
                            onChange={(subTitleText) => setAttributes({ subTitleText })}
                        />
                    )}

                    {showSeparator && separatorPosition === 'bottom' && <div className="zolo-ah-separator"></div>}
                </div>
            </div>
        </>
    );
};

export default Edit;
