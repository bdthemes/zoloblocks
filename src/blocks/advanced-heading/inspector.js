//wrodpress dependencies
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, SelectControl, ToggleControl, BaseControl, CardDivider } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const {
    BorderControl,
    BoxShadowControl,
    ColorControl,
    ResDimensionsControl,
    TypographyDropdown,
    ResRangeControl,
    ResAlignmentControl,
    TextShadowControl,
    TextStrokeControl,
    RangeResetControl,
    HeaderTabs,
    LinkControl,
    TextGradientControl,
    IconicBtnGroup,
    AdvancedOptions,
    TabPanelControl,
    ZoloPanelBody,
    ImageAvatar,
    BackgroundControl,
    ZoloIconPicker,
    NormalBGControl,
} = window.zoloModule;

const { zolo_pro_status } = window.zoloParams;


import { TextControl } from '../../components/Core';


//block attributes
import objAttributes from './attributes';

//block constants
import {
    SEPARATOR_HEIGHT,
    SEPARATOR_SPACING,
    SEPARATOR_WIDTH,
    STYLES,
    ST_POSITION,
    SUBTITLE_MARGIN,
    SUBTITLE_PADDING,
    SUBTITE_BORDER,
    SUBTITLE_BORDER_RADIUS,
    SUBTITLE_TEXT_SHADOW,
    SUBTITLE_TEXT_STROKE,
    TITLE_ALIGN,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TPT_BORDER,
    TPT_BORDER_RADIUS,
    TPT_HIDE,
    TPT_MARGIN,
    TPT_PADDING,
    TPT_ROTATE_ORIGIN,
    TPT_SHADOW,
    TPT_TEXT_SHADOW,
    TPT_TEXT_STROKE,
    TPH_X_OFFSET,
    TPH_Y_OFFSET,
    TEXT_GRADIENT_COLOR,
    SUB_TITLE_BADGE_STYLES,
    ZOLO_SUB_TITLE_BADGE_DIRECTION,
    // sub title badge styles,
    SUBTITLE_BADGE_BG,
    SUBTITLE_BADGE_PADDING,
    SUBTITLE_BADGE_MARGIN,
    SUBTITE_BADGE_BORDER,
    SUBTITLE_BADGE_BORDER_RADIUS,
    // sub title icon styles
    SUBTITLE_ICON_SIZE,
    SUBTITLE_ICON_BG,
    SUBTITLE_ICON_PADDING,
    SUBTITLE_ICON_MARGIN,
    SUBTITLE_ICON_BORDER,
    SUBTITLE_ICON_BORDER_RADIUS,
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY, SUBTITLE_BADGE_TYPOGRAPHY } from './constants/typoPrefixConstant';

import { TEXT_ALIGN_OPTIONS, HEADING } from '../../../src/global/constants';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        //settings
        styles,
        titleText,
        enableTitleLink,
        titleLink,
        titleTagName,
        showSubTitle,
        subTitleText,
        subTitleTag,
        subTitlePosition,
        showSeparator,
        separatorPosition,

        showTransparentTitle,
        transparentTag,
        transparentTitleText,
        transparentTitleHide,
        transparentTitleRotateOrigin,

        //design
        titleColor,
        titleBgColor,
        titleHoverColor,
        presetBg,

        subTitleColor,
        subTitleBgColor,
        tptColor,
        tptBgColor,
        tptOpacity,
        separatorColor,
        subTitleStyles,
        showSubTitleBadgeText,
        subTitleBadgeText,
        subTitleBadgeIcon,
        showSubTitleBadgeIcon,
        badgeDirection,
        subTitleBadgeColor,
        subTitleIconColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const changePremade = (selected) => {
        setAttributes({ styles: selected });
        switch (selected) {
            case 'style-0':
                setAttributes({
                    showSubTitle: false,
                    showTransparentTitle: false,
                    showSeparator: false,
                });
                break;

            case 'style-1':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    showSeparator: false,
                });
                break;

            case 'style-2':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    showSeparator: false,
                });
                break;

            case 'style-3':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    showSeparator: false,
                });
                break;
            default:
                return false;
        }
    };

    // animation panel
    const animationPanels = applyFilters('zolo.advancedHeading.animationPanels', [], 'zolo/advanced-heading', props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/advanced-heading"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={styles}
                                options={applyFilters('zolo.advancedHeading.presets', STYLES) || STYLES}
                                onChange={(selected) => changePremade(selected)}
                            />

                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>

                            <ToggleControl
                                label={__('Enable Heading Link', 'zoloblocks')}
                                checked={enableTitleLink}
                                onChange={() => setAttributes({ enableTitleLink: !enableTitleLink })}
                            />

                            <ToggleControl
                                label={__('Sub Heading', 'zoloblocks')}
                                checked={showSubTitle}
                                onChange={() => setAttributes({ showSubTitle: !showSubTitle })}
                            />

                            <ToggleControl
                                label={__('Separator', 'zoloblocks')}
                                checked={showSeparator}
                                onChange={() => setAttributes({ showSeparator: !showSeparator })}
                            />
                            <ToggleControl
                                label={__('Transparent Heading', 'zoloblocks')}
                                checked={showTransparentTitle}
                                onChange={() => setAttributes({ showTransparentTitle: !showTransparentTitle })}
                            />

                            <CardDivider />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={TITLE_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Heading', 'zoloblocks')} panelProps={props}>
                            <TextControl
                                label={__('Text', 'zoloblocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('Tag', 'zoloblocks')}
                                options={HEADING}
                                onChange={(value) => setAttributes({ titleTagName: value })}
                                value={titleTagName}
                            />
                            {enableTitleLink && (
                                <>
                                    <CardDivider />
                                    <LinkControl
                                        label={__('Link', 'zoloblocks')}
                                        value={titleLink}
                                        onChange={(value) => setAttributes({ titleLink: value })}
                                        help={__('http://your-link.com', 'zoloblocks')}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {showSubTitle && (
                            <ZoloPanelBody title={__('Sub Heading', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={subTitleText}
                                    onChange={(subTitleText) => setAttributes({ subTitleText })}
                                />
                                <SelectControl
                                    label={__('Tag', 'zoloblocks')}
                                    options={HEADING}
                                    onChange={(value) => setAttributes({ subTitleTag: value })}
                                    value={subTitleTag}
                                />
                                <CardDivider />
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Position', 'zoloblocks')}
                                        value={subTitlePosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                subTitlePosition: value,
                                            })
                                        }
                                        options={ST_POSITION}
                                    />
                                </div>
                                <div className="zolo-custom-heading">{__('Badge', 'zoloblocks')}</div>
                                <SelectControl
                                    label={__('Badge Style', 'zoloblocks')}
                                    value={subTitleStyles}
                                    options={applyFilters('zolo.advancedHeading.presets', SUB_TITLE_BADGE_STYLES) || SUB_TITLE_BADGE_STYLES}
                                    onChange={(value) => setAttributes({ subTitleStyles: value })}
                                />
                                {subTitleStyles === 'badge-style-1' && (
                                    <>
                                        <div className="zolo-flex-row-control-tab">
                                            <IconicBtnGroup
                                                label={__('Direction', 'zoloblocks')}
                                                value={badgeDirection}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        badgeDirection: value,
                                                    })
                                                }
                                                options={ZOLO_SUB_TITLE_BADGE_DIRECTION}
                                            />
                                        </div>
                                        <CardDivider />
                                        <ToggleControl
                                            label={__('Badge', 'zoloblocks')}
                                            checked={showSubTitleBadgeText}
                                            onChange={() => setAttributes({ showSubTitleBadgeText: !showSubTitleBadgeText })}
                                        />
                                        <ToggleControl
                                            label={__('Icon', 'zoloblocks')}
                                            checked={showSubTitleBadgeIcon}
                                            onChange={() => setAttributes({ showSubTitleBadgeIcon: !showSubTitleBadgeIcon })}
                                        />
                                        {showSubTitleBadgeText && (
                                            <TextControl
                                                label={__('Badge Text', 'zoloblocks')}
                                                value={subTitleBadgeText}
                                                onChange={(subTitleBadgeText) => setAttributes({ subTitleBadgeText })}
                                            />
                                        )}

                                        {showSubTitleBadgeIcon && (
                                            <ZoloIconPicker
                                                label={__('Icon', 'zoloblocks')}
                                                value={subTitleBadgeIcon}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        subTitleBadgeIcon: value,
                                                    })
                                                }
                                            />
                                        )}
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}

                        {showSeparator && (
                            <ZoloPanelBody title={__('Separator', 'zoloblocks')} panelProps={props}>
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Position', 'zoloblocks')}
                                        value={separatorPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                separatorPosition: value,
                                            })
                                        }
                                        options={ST_POSITION}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                        {showTransparentTitle && (
                            <ZoloPanelBody title={__('Transparent Heading', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={transparentTitleText}
                                    onChange={(transparentTitleText) =>
                                        setAttributes({
                                            transparentTitleText,
                                        })
                                    }
                                    help={__(
                                        'This heading will show as style as background and you can move and style many way.',
                                        'zoloblocks'
                                    )}
                                />

                                <SelectControl
                                    label={__('Tag', 'zoloblocks')}
                                    options={HEADING}
                                    onChange={(value) => setAttributes({ transparentTag: value })}
                                    value={transparentTag}
                                />

                                <CardDivider />

                                <ResRangeControl
                                    label={__('X Offset', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={TPH_X_OFFSET}
                                    min={-800}
                                    max={800}
                                    step={1}
                                />

                                <ResRangeControl
                                    label={__('Y Offset', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={TPH_Y_OFFSET}
                                    min={-800}
                                    max={800}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Rotate', 'zoloblocks')}
                                    controlName={'transparentTitleRotate'}
                                    requiredProps={requiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />

                                <SelectControl
                                    label={__('Rotate Origin', 'zoloblocks')}
                                    value={transparentTitleRotateOrigin}
                                    options={TPT_ROTATE_ORIGIN}
                                    onChange={(transparentTitleRotateOrigin) =>
                                        setAttributes({
                                            transparentTitleRotateOrigin,
                                        })
                                    }
                                />

                                <CardDivider />

                                <SelectControl
                                    label={__('Hide Device', 'zoloblocks')}
                                    value={transparentTitleHide}
                                    options={TPT_HIDE}
                                    onChange={(transparentTitleHide) =>
                                        setAttributes({
                                            transparentTitleHide,
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {animationPanels && animationPanels.length > 0 && animationPanels}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Heading', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            {zolo_pro_status === 'active' ? (
                                <>
                                    <TextGradientControl
                                        noMainBGImg={true}
                                        controlName={TEXT_GRADIENT_COLOR}
                                        requiredProps={requiredProps}
                                        defaultColor={titleColor}
                                        onChangeDefault={(val) => {
                                            setAttributes({
                                                titleColor: val,
                                            });
                                        }}
                                    />
                                </>
                            ) : (
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={titleColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            titleColor: val,
                                        })
                                    }
                                />
                            )}
                            {enableTitleLink && (
                                <ColorControl
                                    label={__('Hover Color', 'zoloblocks')}
                                    color={titleHoverColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            titleHoverColor: val,
                                        })
                                    }
                                />
                            )}
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={200}
                            />

                            <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                            <CardDivider />
                            <ColorControl
                                label={__('Background', 'zoloblocks')}
                                color={titleBgColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleBgColor: val,
                                    })
                                }
                            />

                            {styles === 'style-3' && (
                                <BaseControl label={__('Background Image', 'zoloblocks')} className="zolo-flex-col-control">
                                    {presetBg ? (
                                        <ImageAvatar
                                            imageUrl={presetBg && presetBg.url}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    presetBg: null,
                                                })
                                            }
                                            imageId={presetBg && presetBg.id}
                                            onEditImage={(media) => {
                                                setAttributes({
                                                    presetBg: media,
                                                });
                                            }}
                                        />
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    presetBg: media,
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={presetBg && presetBg.id}
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
                                                    {__(' Upload', 'zoloblocks')}
                                                </Button>
                                            )}
                                        />
                                    )}
                                </BaseControl>
                            )}

                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TITLE_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TITLE_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={TITLE_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={TITLE_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={TITLE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <CardDivider />
                        </ZoloPanelBody>

                        {showSubTitle && (
                            <ZoloPanelBody title={__('Sub Heading', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={subTitleColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            subTitleColor: val,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={100}
                                />

                                <TextShadowControl
                                    controlName={SUBTITLE_TEXT_SHADOW}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />

                                <TextStrokeControl
                                    controlName={SUBTITLE_TEXT_STROKE}
                                    requiredProps={requiredProps}
                                    enableTransition={false}
                                />

                                <CardDivider />

                                <ColorControl
                                    label={__('Background', 'zoloblocks')}
                                    color={subTitleBgColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            subTitleBgColor: val,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={SUBTITLE_PADDING}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={SUBTITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={SUBTITE_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={SUBTITLE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}

                        {showSubTitleBadgeText && subTitleStyles === 'badge-style-1' && (
                            <>
                                <ZoloPanelBody title={__('Sub Heading Badge', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={subTitleBadgeColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                subTitleBadgeColor: val,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={SUBTITLE_BADGE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={100}
                                    />
                                    <CardDivider />
                                    <NormalBGControl requiredProps={requiredProps} controlName={SUBTITLE_BADGE_BG} noMainBGImg={true} />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={SUBTITLE_BADGE_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={SUBTITLE_BADGE_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <CardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={SUBTITE_BADGE_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={SUBTITLE_BADGE_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        {showSubTitleBadgeIcon && subTitleStyles === 'badge-style-1' && (
                            <>
                                <ZoloPanelBody title={__('Sub Heading Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={subTitleIconColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                subTitleIconColor: val,
                                            })
                                        }
                                    />
                                    <ResRangeControl
                                        label={__('Size', 'zoloblocks')}
                                        controlName={SUBTITLE_ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                    />
                                    <CardDivider />
                                    <NormalBGControl requiredProps={requiredProps} controlName={SUBTITLE_ICON_BG} noMainBGImg={true} />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={SUBTITLE_ICON_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={SUBTITLE_ICON_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <CardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={SUBTITLE_ICON_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={SUBTITLE_ICON_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        {showSeparator && (
                            <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={separatorColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            separatorColor: val,
                                        })
                                    }
                                />
                                <CardDivider />
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={SEPARATOR_WIDTH}
                                    min={0}
                                    max={300}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={SEPARATOR_HEIGHT}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <CardDivider />
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={SEPARATOR_SPACING}
                                    min={0}
                                    max={50}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        {showTransparentTitle && (
                            <ZoloPanelBody title={__('Transparent Heading', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={tptColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            tptColor: val,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={TRANSPARENT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={300}
                                />
                                <TextShadowControl controlName={TPT_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <TextStrokeControl controlName={TPT_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <RangeResetControl
                                    label={__('Opacity', 'zoloblocks')}
                                    controlName="tptOpacity"
                                    requiredProps={requiredProps}
                                    min={0.05}
                                    max={1}
                                    step={0.01}
                                />
                                <CardDivider />
                                <ColorControl
                                    label={__('Background', 'zoloblocks')}
                                    color={tptBgColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            tptBgColor: val,
                                        })
                                    }
                                />

                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={TPT_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TPT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={TPT_BORDER} requiredProps={requiredProps} />
                                <BoxShadowControl controlName={TPT_SHADOW} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={TPT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
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
                            block="zolo/advanced-heading"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
