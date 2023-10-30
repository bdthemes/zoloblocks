/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { softMinifyCssStrings, DisplayIcon, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        preset,
        parentClasses,
        image,
        headingTag,
        fancyTitle,
        fancyListText,
        fancyIcon,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        dscTag,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls></BlockControls>
            <div {...blockProps}>
                <div className="zb-container">
                    <div className={`zb-fancy-list-wrap zb-fancy-style-${preset}`}>
                        <div className="zb-fancy-list-item">
                            <div className="zb-fancy-list-content">
                                {imageToggle == true && image && (
                                    <div className="zb-fancy-list-image">
                                        <img src={image} alt="picture" />
                                    </div>
                                )}
                                <div className="zb-fancy-list-number">
                                    <span>1</span>
                                </div>
                                <div className="zb-fancy-list-inner-content">
                                    {titleToggle == true && (
                                        <RichText
                                            tagName={headingTag}
                                            className="zb-fancy-list-title"
                                            value={fancyTitle}
                                            onChange={(v) => setAttributes({ fancyTitle: v })}
                                            placeholder={__('Title Here', 'zolo-block')}
                                        />
                                    )}
                                    {textToggle == true && (
                                        <RichText
                                            tagName={dscTag}
                                            className="zb-fancy-list-text"
                                            value={fancyListText}
                                            onChange={(v) => setAttributes({ fancyListText: v })}
                                            placeholder={__('Description Here', 'zolo-block')}
                                        />
                                    )}
                                </div>
                            </div>
                            {iconToggle == true && (
                                <div>
                                    <div className="zb-fancy-icon">{fancyIcon && <DisplayIcon icon={fancyIcon} />}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
