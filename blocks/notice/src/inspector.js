/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, TextareaControl, BaseControl, Button, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TextShadowControl,
    TextStrokeControl,
    TypographyDropdown,
    TabPanelControl,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    TITLE_MARGIN,
    DESCRIPTION_MARGIN,
    PRESETS,
    ICON_SIZE,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    ICON_IMAGE_SIZE,
    IMAGE_BORDER,
    ICON_IMAGE_BORDER_RADIUS,
    CONTENT_ALIGNMENT,
    ITEM_BG,
    ITEM_HOVER_BG,
    ITEM_BORDER,
    ITEM_BRADIUS,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BOX_SHADOW,
    ITEM_HBOX_SHADOW,
    PRESETS_ALIGNMENT,
    ICON_WRAPPER_BG_COLOR,
    NOTICE_TYPE,

    CLOSE_ICON_SIZE,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BG,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BG,
    CLOSE_ICON_HOVER_BOX_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, ICON_BOX_OPTIONS, FLEX_ALIGN_OPTIONS, POSITIONS, HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        itemHBorderColor,
        titleTag,
        resMode,
        mainIcon,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        iconAlignment,
        iconColor,
        iconBorderHoverColor,
        iconHoverColor,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        textColor,
        textHoverColor,
        descColor,
        descHoverColor,
        iconType,
        imageRes,
        iconBoxDirection,
        //notice
        dismissible,
        showAfterDismiss,
        enableIcon,
        showTitle,
        showText,
        noticeType,

        closedColor,
        closeIconHoverColor,
        closeIconBorderHoverColor,
    } = attributes;
    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/notice"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Layouts', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.advancedIconBox.presets', PRESETS)}
                                onChange={(value) => {
                                    setAttributes({
                                        preset: value,
                                    });

                                    if (value === 'style-3') {
                                        setAttributes({
                                            iconType: 'image',
                                        });
                                    }
                                }}
                            />
                            {
                                // If preset is not selected, show alignment control
                                enableIcon && preset === 'style-1' && (
                                    <IconicBtnGroup
                                        label={__('Layout Direction', 'zoloblocks')}
                                        value={iconBoxDirection}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconBoxDirection: value,
                                            })
                                        }
                                        options={PRESETS_ALIGNMENT}
                                    />
                                )
                            }
                            <ToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={enableIcon}
                                onChange={() => setAttributes({ enableIcon: !enableIcon })}
                            />

                             <ToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                            />

                            <ToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showText}
                                onChange={() => setAttributes({ showText: !showText })}
                            />

                            <ToggleControl
                                label={__('Dismisible', 'zoloblocks')}
                                checked={dismissible}
                                onChange={() => setAttributes({ dismissible: !dismissible })}
                            />
                            <ToggleControl
                                label={__('Show After Dismiss', 'zoloblocks')}
                                checked={showAfterDismiss}
                                onChange={() => setAttributes({ showAfterDismiss: !showAfterDismiss })}
                            />
                            <ResAlignmentControl
                                label={__('Content Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />

                            <SelectControl
                                label={__('type', 'zoloblocks')}
                                value={noticeType}
                                options={NOTICE_TYPE}
                                onChange={(v) => setAttributes({ noticeType: v })}
                            />
                        </ZoloPanelBody>
                        
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            <>
                                {enableIcon && (
                                    <IconicBtnGroup
                                        label={__('Icon Type', 'zoloblocks')}
                                        value={iconType}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconType: value,
                                            })
                                        }
                                        options={ICON_BOX_OPTIONS}
                                    />
                                )}
                                {enableIcon && iconType === 'icon' && (
                                    <Fragment>
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zoloblocks')}
                                            value={mainIcon}
                                            onChange={(value) =>
                                                setAttributes({
                                                    mainIcon: value,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}

                                {enableIcon && iconType === 'image' && (
                                    <>
                                        <BaseControl label={__('Image', 'zoloblocks')}>
                                            {iconTypeImage ? (
                                                <ImageAvatar
                                                    imageUrl={iconTypeImage && iconTypeImage.url}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            iconTypeImage: null,
                                                        })
                                                    }
                                                    imageId={iconTypeImage && iconTypeImage.id}
                                                    onEditImage={(media) => {
                                                        setAttributes({
                                                            iconTypeImage: media,
                                                        });
                                                    }}
                                                />
                                            ) : (
                                                <MediaUpload
                                                    onSelect={(media) => {
                                                        setAttributes({
                                                            iconTypeImage: media,
                                                        });
                                                    }}
                                                    allowedTypes={['image']}
                                                    value={iconTypeImage && iconTypeImage.id}
                                                    render={({ open }) => (
                                                        <Button className="zolo-image-upload-btn" onClick={open}>
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                            >
                                                                <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                            </svg>
                                                            {__(' Upload Photo', 'zoloblocks')}
                                                        </Button>
                                                    )}
                                                />
                                            )}
                                        </BaseControl>
                                        <ImageSizes
                                            label={__('Image Resolution', 'zoloblocks')}
                                            value={imageRes}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imageRes: value,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </>
                            {showTitle && (
                                <>
                                    <SelectControl
                                        label={__('Title Tag', 'zoloblocks')}
                                        options={HEADING}
                                        onChange={(tag) => {
                                            setAttributes({
                                                titleTag: tag,
                                            });
                                        }}
                                        value={titleTag}
                                    />
        
                                    <TextControl
                                        label={__('Title', 'zoloblocks')}
                                        onChange={(title) =>
                                            setAttributes({
                                                iconBoxTitle: title,
                                            })
                                        }
                                        value={iconBoxTitle}
                                        placeholder={__('Title Goes Here..', 'zoloblocks')}
                                    />
                                </>
                            )}

                            {showText &&(
                                <TextareaControl
                                    label={__('Description', 'zoloblocks')}
                                    value={iconBoxDescription}
                                    onChange={(desc) =>
                                        setAttributes({
                                            iconBoxDescription: desc,
                                        })
                                    }
                                    placeholder={__('Description goes here..', 'zoloblocks')}
                                />
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} panelProps={props} stylePanel={true} firstOpen={true}>
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={ITEM_BORDER}
                                requiredProps={requiredProps}
                                hoverControl={
                                    <ColorControl
                                        label={__('Border Color', 'zoloblocks')}
                                        color={itemHBorderColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                itemHBorderColor: value,
                                            })
                                        }
                                    />
                                }
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                                        <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={false} />
                                        <BoxShadowControl
                                            controlName={ITEM_HBOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        
                        {enableIcon && (
                            <ZoloPanelBody
                                title={iconType === 'image' ? __('Image', 'zoloblocks') : __('Icon', 'zoloblocks')}
                                panelProps={props}
                                stylePanel={true}
                            >
                                {preset === 'style-3' && (
                                    <NormalBGControl requiredProps={requiredProps} controlName={ICON_WRAPPER_BG_COLOR} noMainBGImg={true} />
                                )}
                                {iconType === 'image' && (
                                    <>
                                        <ResRangeControl
                                            label={__('Image Size', 'zoloblocks')}
                                            controlName={ICON_IMAGE_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={500}
                                        />
                                        {preset == 'style-2' && (
                                            <IconicBtnGroup
                                                label={__('Image Alignment', 'zoloblocks')}
                                                value={iconAlignment}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconAlignment: value,
                                                    })
                                                }
                                                options={FLEX_ALIGN_OPTIONS}
                                            />
                                        )}
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={IMAGE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICON_IMAGE_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                )}
                                {iconType == 'icon' && (
                                    <>
                                        <ResRangeControl
                                            label={__('Icon Size', 'zoloblocks')}
                                            controlName={ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        {preset == 'style-2' && (
                                            <IconicBtnGroup
                                                label={__('Icon Alignment', 'zoloblocks')}
                                                value={iconAlignment}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        iconAlignment: value,
                                                    })
                                                }
                                                options={FLEX_ALIGN_OPTIONS}
                                            />
                                        )}
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ICON_BORDER}
                                            requiredProps={requiredProps}
                                            hoverControl={
                                                <ColorControl
                                                    label={__('Border Color', 'zoloblocks')}
                                                    color={iconBorderHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconBorderHoverColor: value,
                                                        })
                                                    }
                                                />
                                            }
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ICON_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={ICON_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {iconType == 'icon' && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconColor: value,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Background', 'zoloblocks')}
                                                    color={iconBackgroundColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconBackgroundColor: value,
                                                        })
                                                    }
                                                />
                                                <BoxShadowControl
                                                    controlName={ICON_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconHoverColor: value,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__('Background', 'zoloblocks')}
                                                    color={iconBackgroundHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconBackgroundHoverColor: value,
                                                        })
                                                    }
                                                />
                                                <BoxShadowControl
                                                    controlName={ICON_HOVER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                    />
                                )}
                            </ZoloPanelBody>
                        )}

                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={textColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        textColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={textHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        textHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showText && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={DESCRIPTION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={DESCRIPTION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={descColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        descColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={descHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        descHoverColor: value,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {dismissible && (
                            <ZoloPanelBody title={__('Close Button', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={closedColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                closedColor: value,
                                            })
                                        }
                                    />

                                    <ResRangeControl
                                        label={__('Icon Size', 'zoloblocks')}
                                        controlName={CLOSE_ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />

                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={CLOSE_ICON_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={closeIconBorderHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        closeIconBorderHoverColor: value,
                                                    })
                                                }
                                            />
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={CLOSE_ICON_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={CLOSE_ICON_PADDING}
                                        requiredProps={requiredProps}
                                    />

                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={CLOSE_ICON_MARGIN}
                                        requiredProps={requiredProps}
                                    />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_BG} noMainBGImg={false} />
                                            <BoxShadowControl controlName={CLOSE_ICON_BOX_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                             <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={closeIconHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        closeIconHoverColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_HOVER_BG} noMainBGImg={false} />
                                            <BoxShadowControl
                                                controlName={CLOSE_ICON_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={true}
                                            />
                                        </>
                                    }
                                />

                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/notice"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
