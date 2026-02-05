/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloButton,
    ZoloCardDivider,
    ZoloBaseControl,
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloTextControl,
    ZoloTextareaControl,
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
    LinkControl,
    NormalBGControl,
    ImageAvatar,
    ResAlignmentControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
    RangeResetControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    ANIMATION_POSITIONS_ONE,
    ANIMATION_POSITIONS_TWO,
    ANIMATION_TYPES,
    BUTTON_BG_COLOR,
    BUTTON_BG_HOVER_COLOR,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    BUTTON_ICON_SIZE,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    CONTENT_ALIGNMENT,
    DESCRIPTION_MARGIN,
    //Animation
    ICON_ANIMATION_BG,
    ICON_ANIMATION_RADIUS,
    ICON_ANIMATION_SIZE,
    ICON_ANIMATION_THICKNESS,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_IMAGE_BORDER_RADIUS,
    ICON_IMAGE_SIZE,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_SIZE,
    ICON_TEXT_SPACING,
    ICON_WRAPPER_BG_COLOR,
    IMAGE_BORDER,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BOX_SHADOW,
    ITEM_BRADIUS,
    ITEM_HBOX_SHADOW,
    ITEM_HOVER_BG,
    ITEM_MARGIN,
    ITEM_PADDING,
    PRESETS,
    PRESETS_ALIGNMENT,
    RIBBON_BG,
    RIBBON_BORDER,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    RIBBON_POSITIONS,
    RIBBON_RADIUS,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,

    // Ribbon
    RIBBON_X_POSITION,
    RIBBON_Y_POSITION,

    // Preset Three
    ICON_BOX_PRESET_THREE_DIRECTION,
} from './constants';

import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS, HEADING, ICON_BOX_OPTIONS, POSITIONS } from '../../../src/global/constants';
import { BUTTON_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY, RIBBON_TYPOGRAPHY, TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        itemHBorderColor,
        titleTag,
        resMode,
        showButtonIcon,
        showButtonText,
        mainIcon,
        showMainIcon,
        iconTypeImage,
        buttonIcon,
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
        showHeading,
        showDesc,
        showButton,
        iconType,
        btnColor,
        btnHoverColor,
        btnHoverBorderColor,
        buttonText,
        buttonLink,
        globalLink,
        iconPosition,
        imageRes,
        //ribbon
        showRibbon,
        ribbonTitle,
        ribbonPosition,
        //ribbon style
        ribbonColor,
        iconBoxDirection,

        // animation
        animationType,
        animationPositionOne,
        animationPositionTwo,

        //preset three
        iconBoxPresetThreeDirection,
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
                block="zolo/advanced-icon-box"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
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
                            {preset === 'style-3' && iconType === 'image' && (
                                <IconicBtnGroup
                                    label={__('Direction', 'zoloblocks')}
                                    value={iconBoxPresetThreeDirection}
                                    onChange={(value) => setAttributes({ iconBoxPresetThreeDirection: value })}
                                    options={ICON_BOX_PRESET_THREE_DIRECTION}
                                    isPro={true}
                                />
                            )}
                            {
                                // If preset is not selected, show alignment control
                                preset === 'style-2' && (
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Direction', 'zoloblocks')}
                                            value={iconBoxDirection}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBoxDirection: value,
                                                })
                                            }
                                            options={PRESETS_ALIGNMENT}
                                        />
                                    </div>
                                )
                            }
                            <div className="zolo-custom-heading">{__('Show hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Ribbon', 'zoloblocks')}
                                checked={showRibbon}
                                onChange={() => setAttributes({ showRibbon: !showRibbon })}
                            />
                            <ZoloToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={showMainIcon}
                                onChange={() =>
                                    setAttributes({
                                        showMainIcon: !showMainIcon,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Heading', 'zoloblocks')}
                                checked={showHeading}
                                onChange={() =>
                                    setAttributes({
                                        showHeading: !showHeading,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showDesc}
                                onChange={() =>
                                    setAttributes({
                                        showDesc: !showDesc,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Button', 'zoloblocks')}
                                checked={showButton}
                                onChange={() =>
                                    setAttributes({
                                        showButton: !showButton,
                                    })
                                }
                            />

                            {showButton && (
                                <>
                                    <ZoloToggleControl
                                        label={__('Button Text', 'zoloblocks')}
                                        checked={showButtonText}
                                        onChange={() =>
                                            setAttributes({
                                                showButtonText: !showButtonText,
                                            })
                                        }
                                    />
                                </>
                            )}

                            {showButton && (
                                <>
                                    <ZoloToggleControl
                                        label={__('Button Icon', 'zoloblocks')}
                                        checked={showButtonIcon}
                                        onChange={() =>
                                            setAttributes({
                                                showButtonIcon: !showButtonIcon,
                                            })
                                        }
                                    />
                                </>
                            )}

                            <ZoloToggleControl
                                label={__('Use Link as Global', 'zoloblocks')}
                                checked={globalLink}
                                onChange={() =>
                                    setAttributes({
                                        globalLink: !globalLink,
                                    })
                                }
                            />

                            <ZoloCardDivider />

                            <ResAlignmentControl
                                label={__('Content Alignment', 'zoloblocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        {preset !== 'style-3' && (
                            <>
                                {applyFilters(
                                    'zolo.advancedIconBox.animation',
                                    <ZoloPanelBody title={__('Animation', 'zoloblocks')} panelProps={props} isPro={true} isDisabled={true}>
                                        <ZoloSelectControl
                                            label={__('Type', 'zoloblocks')}
                                            value={animationType}
                                            options={ANIMATION_TYPES}
                                            onChange={(value) => {
                                                setAttributes({
                                                    animationType: value,
                                                });

                                                if (value === 'style-1') {
                                                    setAttributes({
                                                        animationPositionOne: 'top-right',
                                                    });
                                                } else if (value === 'style-2') {
                                                    setAttributes({
                                                        animationPositionTwo: 'left',
                                                    });
                                                }
                                            }}
                                        />
                                        {animationType === 'style-1' && (
                                            <ZoloSelectControl
                                                label={__('Position', 'zoloblocks')}
                                                value={animationPositionOne}
                                                options={ANIMATION_POSITIONS_ONE}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        animationPositionOne: value,
                                                    })
                                                }
                                            />
                                        )}

                                        {animationType === 'style-2' && (
                                            <ZoloSelectControl
                                                label={__('Position', 'zoloblocks')}
                                                value={animationPositionTwo}
                                                options={ANIMATION_POSITIONS_TWO}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        animationPositionTwo: value,
                                                    })
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showMainIcon && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Icon', 'zoloblocks')}
                                    </div>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Type', 'zoloblocks')}
                                            value={iconType}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconType: value,
                                                })
                                            }
                                            options={ICON_BOX_OPTIONS}
                                        />
                                    </div>
                                    {iconType === 'icon' && (
                                        <>
                                            <ZoloIconPicker
                                                label={__('Icon', 'zoloblocks')}
                                                value={mainIcon}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        mainIcon: value,
                                                    })
                                                }
                                            />
                                        </>
                                    )}

                                    {iconType === 'image' && (
                                        <>
                                            <ZoloBaseControl label={__('Image', 'zoloblocks')} className="zolo-flex-col-control">
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
                                                        allowedTypes={['image', 'image/svg+xml']}
                                                        value={iconTypeImage && iconTypeImage.id}
                                                        render={({ open }) => (
                                                            <ZoloButton className="zolo-image-upload-btn" onClick={open}>
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
                                                            </ZoloButton>
                                                        )}
                                                    />
                                                )}
                                            </ZoloBaseControl>
                                            <ImageSizes
                                                label={__('Resolution', 'zoloblocks')}
                                                value={imageRes}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        imageRes: value,
                                                    })
                                                }
                                            />
                                        </>
                                    )}
                                    <ZoloCardDivider />
                                </>
                            )}

                            {showHeading && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Title', 'zoloblocks')}
                                    </div>
                                    <ZoloSelectControl
                                        label={__('Tag', 'zoloblocks')}
                                        options={HEADING}
                                        onChange={(tag) => {
                                            setAttributes({
                                                titleTag: tag,
                                            });
                                        }}
                                        value={titleTag}
                                    />

                                    <ZoloTextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(title) =>
                                            setAttributes({
                                                iconBoxTitle: title,
                                            })
                                        }
                                        value={iconBoxTitle}
                                        placeholder={__('Title Goes Here', 'zoloblocks')}
                                    />
                                    <ZoloCardDivider />
                                </>
                            )}

                            {showDesc && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Description', 'zoloblocks')}
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloTextareaControl
                                            label={__('Text', 'zoloblocks')}
                                            value={iconBoxDescription}
                                            onChange={(desc) =>
                                                setAttributes({
                                                    iconBoxDescription: desc,
                                                })
                                            }
                                            placeholder={__('Description Goes Here', 'zoloblocks')}
                                        />
                                    </div>

                                    <ZoloCardDivider />
                                </>
                            )}

                            {showButton && showButtonText && (
                                <>
                                    <ZoloTextControl
                                        label={__('Button Text', 'zoloblocks')}
                                        onChange={(btnText) =>
                                            setAttributes({
                                                buttonText: btnText,
                                            })
                                        }
                                        value={buttonText}
                                        placeholder={__('Read More', 'zoloblocks')}
                                    />
                                </>
                            )}
                            {showButton || globalLink ? (
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={buttonLink}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonLink: value,
                                        })
                                    }
                                />
                            ) : null}
                        </ZoloPanelBody>
                        {showRibbon && (
                            <ZoloPanelBody title={__('Ribbon', 'zoloblocks')} panelProps={props}>
                                <ZoloTextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={ribbonTitle}
                                    onChange={(ribbonTitle) => setAttributes({ ribbonTitle })}
                                />
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Position', 'zoloblocks')}
                                        value={ribbonPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                ribbonPosition: value,
                                            })
                                        }
                                        options={RIBBON_POSITIONS}
                                    />
                                </div>
                                {/* <CardDivider /> */}
                                <div className="zolo-custom-heading">{__('Offset', 'zoloblocks')}</div>
                                {/* <RangeResetControl
                                    className="zolo-flex-row-control"
                                    label={__('Horizontal', 'zoloblocks')}
                                    controlName={'ribbonXPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                /> */}
                                <ResRangeControl
                                    label={__('Horizontal', 'zoloblocks')}
                                    controlName={RIBBON_X_POSITION}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />
                                {/* <RangeResetControl
                                    label={__('Vertical', 'zoloblocks')}
                                    controlName={'ribbonYPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                /> */}

                                <ResRangeControl
                                    label={__('Vertical', 'zoloblocks')}
                                    controlName={RIBBON_Y_POSITION}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Rotate', 'zoloblocks')}
                                    controlName={'ribbonRotate'}
                                    requiredProps={requiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />

                                {/* <ResRangeControl
                                    label={__('Rotate', 'zoloblocks')}
                                    controlName={RIBBON_ROTATE}
                                    requiredProps={requiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                /> */}
                            </ZoloPanelBody>
                        )}

                        {showButton && showButtonIcon && (
                            <ZoloPanelBody title={__('Button Icon', 'zoloblocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
                                    value={buttonIcon}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonIcon: value,
                                        })
                                    }
                                />
                                <IconicBtnGroup
                                    label={__('Position', 'zoloblocks')}
                                    value={iconPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconPosition: value,
                                        })
                                    }
                                    options={POSITIONS}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} panelProps={props} stylePanel={true} firstOpen={true}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={ITEM_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
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
                                        <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
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
                        {showRibbon && (
                            <ZoloPanelBody title={__('Ribbon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={ribbonColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            ribbonColor: val,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={RIBBON_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={72}
                                />
                                <ZoloCardDivider />
                                <NormalBGControl noMainBGImg={true} controlName={RIBBON_BG} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={RIBBON_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={RIBBON_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ZoloCardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={RIBBON_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={RIBBON_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}

                        {showMainIcon && (
                            <ZoloPanelBody
                                title={iconType === 'image' ? __('Image', 'zoloblocks') : __('Icon', 'zoloblocks')}
                                panelProps={props}
                                stylePanel={true}
                            >
                                {iconType === 'image' && (
                                    <>
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={ICON_IMAGE_SIZE}
                                            requiredProps={requiredProps}
                                            min={200}
                                            max={1000}
                                        />
                                        {preset == 'style-2' && (
                                            <div className="zolo-flex-row-control-tab">
                                                <IconicBtnGroup
                                                    label={__('Alignment', 'zoloblocks')}
                                                    value={iconAlignment}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconAlignment: value,
                                                        })
                                                    }
                                                    options={FLEX_ALIGN_OPTIONS}
                                                />
                                            </div>
                                        )}
                                        <ZoloCardDivider />
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
                                        <ZoloCardDivider />
                                    </>
                                )}
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
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                />

                                                {preset == 'style-2' && (
                                                    <IconicBtnGroup
                                                        label={__('Alignment', 'zoloblocks')}
                                                        value={iconAlignment}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                iconAlignment: value,
                                                            })
                                                        }
                                                        options={FLEX_ALIGN_OPTIONS}
                                                    />
                                                )}

                                                <ZoloCardDivider />
                                                <ColorControl
                                                    label={__('Background', 'zoloblocks')}
                                                    color={iconBackgroundColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            iconBackgroundColor: value,
                                                        })
                                                    }
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={ICON_PADDING}
                                                    requiredProps={requiredProps}
                                                />

                                                <ZoloCardDivider />
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
                                                <BoxShadowControl
                                                    controlName={ICON_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={ICON_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
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
                                <div className="zolo-custom-heading">{__('Wrapper', 'zoloblocks')}</div>
                                {preset === 'style-3' && (
                                    <NormalBGControl requiredProps={requiredProps} controlName={ICON_WRAPPER_BG_COLOR} noMainBGImg={true} />
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={ICON_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showHeading && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props} stylePanel={true}>
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
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <ZoloCardDivider />

                                            <TextShadowControl
                                                controlName={TITLE_TEXT_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <TextStrokeControl
                                                controlName={TITLE_TEXT_STROKE}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={TITLE_MARGIN}
                                                requiredProps={requiredProps}
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
                        {showDesc && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} panelProps={props} stylePanel={true}>
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
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={DESCRIPTION_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <ZoloCardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={DESCRIPTION_MARGIN}
                                                requiredProps={requiredProps}
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
                        {showButton && (
                            <>
                                <ZoloPanelBody title={__('Button', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={btnColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            btnColor: value,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                                <ZoloCardDivider />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BUTTON_BG_COLOR}
                                                    noMainBGImg={true}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={BUTTON_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={BUTTON_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                                <ZoloCardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={BUTTON_BORDER}
                                                    requiredProps={requiredProps}
                                                    hoverControl={
                                                        <ColorControl
                                                            label={__('Border Color', 'zoloblocks')}
                                                            color={btnHoverBorderColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    btnHoverBorderColor: value,
                                                                })
                                                            }
                                                        />
                                                    }
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={BUTTON_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
                                                />
                                                <BoxShadowControl
                                                    controlName={BUTTON_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={btnHoverColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            btnHoverColor: value,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BUTTON_BG_HOVER_COLOR}
                                                    noMainBGImg={true}
                                                />

                                                <BoxShadowControl
                                                    controlName={BUTTON_HOVER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        {showButton && showButtonIcon && (
                            <ZoloPanelBody title={__('Button Icon', 'zoloblocks')} panelProps={props} stylePanel={true}>
                                <ResRangeControl
                                    label={__('Size', 'zoloblocks')}
                                    controlName={BUTTON_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={ICON_TEXT_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
                        {preset !== 'style-3' && (
                            <>
                                {applyFilters(
                                    'zolo.advancedIconBox.animationStyle',
                                    <ZoloPanelBody
                                        title={__('Animation', 'zoloblocks')}
                                        panelProps={props}
                                        stylePanel={true}
                                        isPro={true}
                                        isDisabled={true}
                                    >
                                        {animationType === 'style-1' && (
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={ICON_ANIMATION_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={500}
                                                step={1}
                                            />
                                        )}

                                        <NormalBGControl requiredProps={requiredProps} controlName={ICON_ANIMATION_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICON_ANIMATION_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        {animationType === 'style-2' && (
                                            <ResRangeControl
                                                label={__('Thickness', 'zoloblocks')}
                                                controlName={ICON_ANIMATION_THICKNESS}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={100}
                                                step={1}
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/advanced-icon-box"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
