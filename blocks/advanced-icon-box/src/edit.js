/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const {
    softMinifyCssStrings,
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    DisplayIcon,
    classArrayToStr,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    ICON_BOX_ALIGNMENT,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    DESCRIPTION_MARGIN,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_SIZE,
    ICON_PADDING,
    ICON_MARGIN,
    BUTTON_BG_COLOR,
    BUTTON_BG_HOVER_COLOR,
    BUTTON_ICON_SIZE,
    BUTTON_BORDER,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    ICON_TEXT_SPACING,
    BUTTON_BORDER_RADIUS,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    ICON_IMAGE_BORDER_RADIUS,
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        preset,
        parentClasses,
        titleTag,
        zoloStyles,
        showButtonIcon,
        mainIcon,
        containerBorderHoverColor,
        buttonIcon,
        showMainIcon,
        showHeading,
        showDesc,
        showButton,
        textColor,
        descColor,
        descHoverColor,
        iconAlignment,
        iconColor,
        iconHoverColor,
        iconBorderHoverColor,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        buttonText,
        btnColor,
        btnHoverColor,
        btnBgHoverColor,
        btnHoverBorderColor,
        buttonIconColor,
        buttonIconHoverColor,
        presetOneStyles,
        presetTwoStyles,
        presetThreeStyles,
    } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(className, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {iconTypeImage && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        iconTypeImage: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={iconTypeImage && iconTypeImage.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="update"
                                        onClick={open}
                                    />
                                )}
                            />
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        iconTypeImage: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <div {...blockProps}>
                <div className={`zolo-block-advanced-icon-box ${uniqueId} zolo-block-advanced-icon-box-${preset}`}>
                    <div className="zolo-block-item">
                        {showMainIcon && (
                            <div className={`zolo-block-icon-wrap`}>
                                {iconType == 'icon' ? (
                                    <DisplayIcon icon={mainIcon} />
                                ) : iconTypeImage ? (
                                    <img src={iconTypeImage.url} alt={iconTypeImage.alt || 'Team Member'} />
                                ) : (
                                    <MediaPlaceholder
                                        icon="format-image"
                                        labels={{
                                            title: __('Add Photo', 'zolo-blocks'),
                                            instructions: '',
                                        }}
                                        onSelect={(media) => {
                                            setAttributes({
                                                iconTypeImage: media,
                                            });
                                        }}
                                        accept="image/*"
                                        allowedTypes={['image']}
                                    />
                                )}
                            </div>
                        )}

                        <div className="zolo-block-body-content">
                            {showHeading && (
                                <RichText
                                    className={`zolo-block-title`}
                                    tagName={titleTag}
                                    value={iconBoxTitle}
                                    onChange={(text) =>
                                        setAttributes({
                                            iconBoxTitle: text,
                                        })
                                    }
                                    placeholder={__('The Title Goes Here', 'zolo-blocks')}
                                />
                            )}
                            {showDesc && (
                                <RichText
                                    className={`zolo-block-desc`}
                                    tagName="div"
                                    value={iconBoxDescription}
                                    onChange={(text) =>
                                        setAttributes({
                                            iconBoxDescription: text,
                                        })
                                    }
                                    placeholder={__('The Description Goes Here..', 'zolo-blocks')}
                                />
                            )}
                            {showButton && (
                                <div className={`zolo-block-link-btn`}>
                                    <div className={`zolo-box-button`}>
                                        <RichText
                                            value={buttonText}
                                            tagName="p"
                                            onChange={(text) =>
                                                setAttributes({
                                                    buttonText: text,
                                                })
                                            }
                                            placeholder={__('Read More', 'zolo-blocks')}
                                            allowedFormats={['core/bold', 'core/italic']}
                                        />
                                        {showButtonIcon && <DisplayIcon icon={buttonIcon} />}
                                    </div>
                                </div>
                            )}
                        </div>
                        {showMainIcon && (
                            <div className="zolo-block-hover-icon">
                                <DisplayIcon icon={mainIcon} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
