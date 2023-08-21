//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
const {
    BackgroundControl,
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
} = window.zoloModule;

//block attributes
import objAttributes from './attributes';

//block constants
import {
    HEADING_TAG,
    SEPARATOR_HEIGHT,
    SEPARATOR_SPACING,
    SEPARATOR_WIDTH,
    STYLES,
    ST_POSITION,
    SUBTITLE_MARGIN,
    SUBTITLE_TEXT_SHADOW,
    SUBTITLE_TEXT_STROKE,
    TEXT_ALIGN,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TPT_ALIGNMENT,
    TPT_BORDER,
    TPT_BORDER_RADIUS,
    TPT_HIDE,
    TPT_MARGIN,
    TPT_PADDING,
    TPT_ROTATE_ORIGIN,
    TPT_SHADOW,
    TPT_TEXT_SHADOW,
    TPT_TEXT_STROKE,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

import { TEXT_ALIGN_OPTIONS, DEFAULT_ALIGNS } from '../../../src/global/constants';

const Inspector = ({ attributes, setAttributes }) => {
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
        subTitlePosition,
        showSeparator,
        separatorPosition,
        align,

        showTransparentTitle,
        transparentTitleText,
        transparentTitleHide,
        transparentTitleRotateOrigin,

        //design
        titleColor,
        titleBgColor,

        subTitleColor,
        tptColor,
        tptBgColor,
        tptOpacity,
        separatorColor,
    } = attributes;

    const resRequiredProps = {
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
                    align: 'left',
                });
                break;

            case 'style-1':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    showSeparator: false,
                    align: 'center',
                });
                break;

            case 'style-2':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    showSeparator: false,
                    align: 'center',
                });
                break;

            case 'style-3':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    showSeparator: false,
                    align: 'center',
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('General', 'zolo-blocks')} initialOpen={true}>
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
                        </PanelBody>
                        <PanelBody title={__('Main Heading', 'zolo-blocks')} initialOpen={false}>
                            <TextControl
                                label={__('Main Heading', 'zolo-blocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('Heading Tag', 'zolo-blocks')}
                                options={HEADING_TAG}
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
                            <IconicBtnGroup
                                label={__('Alignment', 'zolo-blocks')}
                                value={align}
                                onChange={(value) =>
                                    setAttributes({
                                        align: value,
                                    })
                                }
                                options={TEXT_ALIGN_OPTIONS}
                            />
                        </PanelBody>
                        {showSubTitle && (
                            <PanelBody title={__('Sub Heading', 'zolo-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Text', 'zolo-blocks')}
                                    value={subTitleText}
                                    onChange={(subTitleText) => setAttributes({ subTitleText })}
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
                            </PanelBody>
                        )}

                        {showSeparator && (
                            <PanelBody title={__('Separator', 'zolo-blocks')} initialOpen={false}>
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
                            </PanelBody>
                        )}
                        {showTransparentTitle && (
                            <PanelBody title={__('Transparent Heading', 'zolo-blocks')} initialOpen={false}>
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

                                <ResAlignmentControl
                                    label={__('Alignmet', 'zolo-blocks')}
                                    controlName={TPT_ALIGNMENT}
                                    resRequiredProps={resRequiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />

                                <RangeResetControl
                                    label={__('X Offset', 'zolo-blocks')}
                                    controlName={'transparentTitleXOffset'}
                                    resRequiredProps={resRequiredProps}
                                    min={-800}
                                    max={800}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Y Offset', 'zolo-blocks')}
                                    controlName={'transparentTitleYOffset'}
                                    resRequiredProps={resRequiredProps}
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
                                    resRequiredProps={resRequiredProps}
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
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Main Heading', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label="Typography"
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={titleColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleColor: val,
                                    })
                                }
                            />

                            <ColorControl
                                label={__('Background', 'zolo-blocks')}
                                color={titleBgColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleBgColor: val,
                                    })
                                }
                            />

                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TITLE_PADDING}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TITLE_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />

                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={TITLE_BORDER}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TITLE_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />

                            <BoxShadowControl controlName={TITLE_SHADOW} resRequiredProps={resRequiredProps} />

                            <TextShadowControl
                                controlName={TITLE_TEXT_SHADOW}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />

                            <TextStrokeControl
                                controlName={TITLE_TEXT_STROKE}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />
                        </PanelBody>

                        {showSubTitle && (
                            <PanelBody title={__('Sub Heading', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
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

                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={SUBTITLE_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />

                                <TextShadowControl
                                    controlName={SUBTITLE_TEXT_SHADOW}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />

                                <TextStrokeControl
                                    controlName={SUBTITLE_TEXT_STROKE}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />
                            </PanelBody>
                        )}

                        {showSeparator && (
                            <PanelBody title={__('Separator', 'zolo-blocks')} initialOpen={false}>
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
                                    resRequiredProps={resRequiredProps}
                                    controlName={SEPARATOR_WIDTH}
                                    min={0}
                                    max={300}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
                                    resRequiredProps={resRequiredProps}
                                    controlName={SEPARATOR_HEIGHT}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Spacing', 'zolo-blocks')}
                                    resRequiredProps={resRequiredProps}
                                    controlName={SEPARATOR_SPACING}
                                    min={0}
                                    max={50}
                                    step={1}
                                />
                            </PanelBody>
                        )}

                        {showTransparentTitle && (
                            <PanelBody title={__('Advanced Heading', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={TRANSPARENT_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
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
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TPT_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                />

                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={TPT_BORDER}
                                    resRequiredProps={resRequiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={TPT_BORDER_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />

                                <BoxShadowControl controlName={TPT_SHADOW} resRequiredProps={resRequiredProps} />
                                <TextShadowControl
                                    controlName={TPT_TEXT_SHADOW}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />

                                <TextStrokeControl
                                    controlName={TPT_TEXT_STROKE}
                                    resRequiredProps={resRequiredProps}
                                    enableTransition={false}
                                />

                                <RangeControl
                                    label={__('Opacity', 'zolo-blocks')}
                                    value={tptOpacity}
                                    onChange={(tptOpacity) =>
                                        setAttributes({
                                            tptOpacity,
                                        })
                                    }
                                    min={0.05}
                                    max={1}
                                    step={0.01}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <PanelBody title={__('Wrapper Margin & Padding', 'zolo-blocks')} initialOpen={true}>
                            <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} resRequiredProps={resRequiredProps} />
                            <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} resRequiredProps={resRequiredProps} />
                        </PanelBody>

                        <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={false}>
                            <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} />
                        </PanelBody>

                        <PanelBody title={__('Border & BoxShadow', 'zolo-blocks')} initialOpen={false}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={WRAPPER_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <BoxShadowControl controlName={WRAPPER_SHADOW} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
