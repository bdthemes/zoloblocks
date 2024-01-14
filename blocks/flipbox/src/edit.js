/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload, AlignmentToolbar } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style.js';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const {
        uniqueId,
        preset,
        flipEffect,
        parentClasses,
        memberPhoto,
        isHover,
        flipType,
        selectedSide,
        frontIconOrImage,
        frontIcon,
        frontImageUrl,
        backIconOrImage,
        backIcon,
        backImageUrl,
        showFrontIcon,
        showFrontTitle,
        frontTitle,
        showFrontContent,
        frontContent,
        showBackIcon,
        showBackTitle,
        backTitle,
        showBackContent,
        backContent,
        linkType,
        showBackLinkBtn,
        buttonText,
        buttonIcon,
        buttonIconPos,
        link,
        frontTitleColor,
        backTitleColor,
        frontContentColor,
        backContentColor,
        frontIconColor,
        backIconColor,
        buttonStyle,
        buttonClasses,
        buttonBackground,
        buttonColor,
        frontIconBackground,
        backIconBackground,
        transitionSpeed,
        displayButtonIcon,
        align,
        contentPosition,
        classHook,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            addDetailPageLink: context['zolo/addDetailPageLink'],
            showDesignation: context['zolo/showDesignation'],
            showShortBio: context['zolo/showShortBio'],
            showSocialProfiles: context['zolo/showSocialProfiles'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />

            {/* <BlockControls>
                {memberPhoto && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        memberPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls> */}

            <div {...blockProps}>
                <div className={`zolo-flip-box_wrap zolo-flip-box_animation_style-${flipEffect}`}>
                    <div className={`zolo-flip-box_item ${
                            isHover || selectedSide === 'back' ? ' zolo-flip-box_active' : 'zolo-flip-box_hover'
                        }`}
                    >
                        <div className="zolo-flip-box_inner-item">
                            <div className="zolo-flip-box_face zolo-flip-box_front">
                                <div className="zolo-flip-box_img">
                                    <img src="https://demo.elementpack.pro/wp-content/uploads/2020/07/01-2-1-1.jpg" alt="image" />
                                </div>
                                <div className="zolo-flip-box-content zolo-flip-box_front-content">
                                    {showFrontIcon && (
                                        <div className="zolo-flip-box_icon">
                                            <span className="zolo-flip-box_inner-icon">
                                                {frontIcon && <DisplayZoloIcon icon={frontIcon} />}
                                            </span>
                                        </div>
                                    )}
                                    {showFrontTitle &&
                                        (linkType === 'title' && link ? (
                                            <a href={link ? link : '#'} className="title-link">
                                                <h3 className="zolo-flip-box_title">{frontTitle}</h3>
                                            </a>
                                        ) : (
                                            <h3 className="zolo-flip-box_title">{frontTitle}</h3>
                                        ))}
                                    {showFrontContent && <p className="zolo-flip-box_desc">{frontContent}</p>}
                                </div>
                            </div>
                            <div className="zolo-flip-box_face zolo-flip-box_back">
                                <div className="zolo-flip-box-content zolo-flip-box_back-content">
                                    {showBackIcon && (
                                        <div className="zolo-flip-box_icon">
                                            <span className="zolo-flip-box_inner-icon">
                                                {backIcon && <DisplayZoloIcon icon={backIcon} />}
                                            </span>
                                        </div>
                                    )}
                                    {showBackTitle &&
                                        (linkType === 'title' && link ? (
                                            <a href={link ? link : '#'} className="title-link">
                                                <h3 className="zolo-flip-box_title">{backTitle}</h3>
                                            </a>
                                        ) : (
                                            <h3 className="zolo-flip-box_title">{backTitle}</h3>
                                        ))}
                                    {showBackContent && <p className="zolo-flip-box_desc">{backContent}</p>}
                                    <div className="zolo-flip-box_link-button-wrap">
                                        {linkType === 'button' && showBackLinkBtn && (
                                            <a href={link ? link : '#'} className="zolo-flip-box_link-btn">
                                                <span>{buttonText}</span>
                                                {buttonIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
