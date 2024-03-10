//wrodpress dependencies
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, RangeControl, SelectControl, TextControl, ToggleControl, BaseControl, CardDivider } from '@wordpress/components';
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
    IconicBtnGroup,
    AdvancedOptions,
    TabPanelControl,
    ZoloPanelBody,
    ImageAvatar,
} = window.zoloModule;

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
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={styles}
                                options={applyFilters('zolo_ah_style_filter', STYLES) || STYLES}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ToggleControl
                                label={__('Enable Heading Link', 'zolo-blocks')}
                                checked={enableTitleLink}
                                onChange={() => setAttributes({ enableTitleLink: !enableTitleLink })}
                            />
                            <ToggleControl
                                label={__('Show Sub Heading', 'zolo-blocks')}
                                checked={showSubTitle}
                                onChange={() => setAttributes({ showSubTitle: !showSubTitle })}
                            />
                            <ToggleControl
                                label={__('Show Separator', 'zolo-blocks')}
                                checked={showSeparator}
                                onChange={() => setAttributes({ showSeparator: !showSeparator })}
                            />
                            <ToggleControl
                                label={__('Show Transparent Heading', 'zolo-blocks')}
                                checked={showTransparentTitle}
                                onChange={() => setAttributes({ showTransparentTitle: !showTransparentTitle })}
                            />
                            <ResAlignmentControl
                                label={__('Alignmet', 'zolo-blocks')}
                                controlName={TITLE_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            <TextControl
                                label={__('Main Heading', 'zolo-blocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('Heading Tag', 'zolo-blocks')}
                                options={HEADING}
                                onChange={(value) => setAttributes({ titleTagName: value })}
                                value={titleTagName}
                            />
                            {enableTitleLink && (
                                <LinkControl
                                    label={__('Link', 'zolo-blocks')}
                                    value={titleLink}
                                    onChange={(value) => setAttributes({ titleLink: value })}
                                    help={__('http://your-link.com', 'zolo-blocks')}
                                />
                            )}
                        </ZoloPanelBody>
                        {showSubTitle && (
                            <ZoloPanelBody title={__('Sub Heading', 'zolo-blocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zolo-blocks')}
                                    value={subTitleText}
                                    onChange={(subTitleText) => setAttributes({ subTitleText })}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'zolo-blocks')}
                                    options={HEADING}
                                    onChange={(value) => setAttributes({ subTitleTag: value })}
                                    value={subTitleTag}
                                />
                                <IconicBtnGroup
                                    label={__('Sub Heading Position', 'zolo-blocks')}
                                    value={subTitlePosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            subTitlePosition: value,
                                        })
                                    }
                                    options={ST_POSITION}
                                />
                            </ZoloPanelBody>
                        )}

                        {showSeparator && (
                            <ZoloPanelBody title={__('Separator', 'zolo-blocks')} panelProps={props}>
                                <IconicBtnGroup
                                    label={__('Separator Position', 'zolo-blocks')}
                                    value={separatorPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            separatorPosition: value,
                                        })
                                    }
                                    options={ST_POSITION}
                                />
                            </ZoloPanelBody>
                        )}
                        {showTransparentTitle && (
                            <ZoloPanelBody title={__('Transparent Heading', 'zolo-blocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zolo-blocks')}
                                    value={transparentTitleText}
                                    onChange={(transparentTitleText) =>
                                        setAttributes({
                                            transparentTitleText,
                                        })
                                    }
                                    help={__(
                                        'This heading will show as style as background and you can move and style many way.',
                                        'zolo-blocks'
                                    )}
                                />

                                <SelectControl
                                    label={__('Heading Tag', 'zolo-blocks')}
                                    options={HEADING}
                                    onChange={(value) => setAttributes({ transparentTag: value })}
                                    value={transparentTag}
                                />

                                <ResRangeControl
                                    label={__('X Offset', 'zolo-blocks')}
                                    requiredProps={requiredProps}
                                    controlName={TPH_X_OFFSET}
                                    min={-800}
                                    max={800}
                                    step={1}
                                />

                                <ResRangeControl
                                    label={__('Y Offset', 'zolo-blocks')}
                                    requiredProps={requiredProps}
                                    controlName={TPH_Y_OFFSET}
                                    min={-800}
                                    max={800}
                                    step={1}
                                />

                                <SelectControl
                                    label={__('Rotate Origin', 'zolo-blocks')}
                                    value={transparentTitleRotateOrigin}
                                    options={TPT_ROTATE_ORIGIN}
                                    onChange={(transparentTitleRotateOrigin) =>
                                        setAttributes({
                                            transparentTitleRotateOrigin,
                                        })
                                    }
                                />

                                <RangeResetControl
                                    label={__('Rotate', 'zolo-blocks')}
                                    controlName={'transparentTitleRotate'}
                                    requiredProps={requiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />

                                <SelectControl
                                    label={__('Hide At', 'zolo-blocks')}
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
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Heading', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            {!enableTitleLink && (
                                <>
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={titleColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                titleColor: val,
                                            })
                                        }
                                    />
                                </>
                            )}
                            {enableTitleLink && (
                                <>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={titleColor}
                                                    onChange={(val) =>
                                                        setAttributes({
                                                            titleColor: val,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Hover Color', 'zolo-blocks')}
                                                    color={titleHoverColor}
                                                    onChange={(val) =>
                                                        setAttributes({
                                                            titleHoverColor: val,
                                                        })
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                    <CardDivider />
                                </>
                            )}

                            <ColorControl
                                label={__('Background', 'zolo-blocks')}
                                color={titleBgColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleBgColor: val,
                                    })
                                }
                            />

                            {styles === 'style-3' && (
                                <BaseControl label={__('Background Image', 'zolo-blocks')}>
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
                                                    {__(' Upload', 'zolo-blocks')}
                                                </Button>
                                            )}
                                        />
                                    )}
                                </BaseControl>
                            )}

                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={TITLE_BORDER} requiredProps={requiredProps} />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TITLE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />

                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TITLE_PADDING}
                                requiredProps={requiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TITLE_MARGIN}
                                requiredProps={requiredProps}
                            />

                            <BoxShadowControl controlName={TITLE_SHADOW} requiredProps={requiredProps} />
                            <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>

                        {showSubTitle && (
                            <ZoloPanelBody title={__('Sub Heading', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={64}
                                />

                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={subTitleColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            subTitleColor: val,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__('Background', 'zolo-blocks')}
                                    color={subTitleBgColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            subTitleBgColor: val,
                                        })
                                    }
                                />

                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={SUBTITE_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={SUBTITLE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={SUBTITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={SUBTITLE_PADDING}
                                    requiredProps={requiredProps}
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
                            </ZoloPanelBody>
                        )}

                        {showSeparator && (
                            <ZoloPanelBody title={__('Separator', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={separatorColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            separatorColor: val,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Width', 'zolo-blocks')}
                                    requiredProps={requiredProps}
                                    controlName={SEPARATOR_WIDTH}
                                    min={0}
                                    max={300}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
                                    requiredProps={requiredProps}
                                    controlName={SEPARATOR_HEIGHT}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Spacing', 'zolo-blocks')}
                                    requiredProps={requiredProps}
                                    controlName={SEPARATOR_SPACING}
                                    min={0}
                                    max={50}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        {showTransparentTitle && (
                            <ZoloPanelBody title={__('Advanced Heading', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={TRANSPARENT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />

                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={tptColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            tptColor: val,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__('Background', 'zolo-blocks')}
                                    color={tptBgColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            tptBgColor: val,
                                        })
                                    }
                                />

                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={TPT_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TPT_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={TPT_BORDER} requiredProps={requiredProps} />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={TPT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                <BoxShadowControl controlName={TPT_SHADOW} requiredProps={requiredProps} />
                                <TextShadowControl controlName={TPT_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />

                                <TextStrokeControl controlName={TPT_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <RangeResetControl
                                    label={__('Opacity', 'zolo-blocks')}
                                    controlName="tptOpacity"
                                    requiredProps={requiredProps}
                                    min={0.05}
                                    max={1}
                                    step={0.01}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
