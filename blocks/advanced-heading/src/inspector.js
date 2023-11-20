//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, ColorPalette } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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
    AdvancedOptions,
    TabPanelControl,
} = window.zoloModule;

//block attributes
import objAttributes from './attributes';

//block constants
import {
    SEPARATOR_ALIGN,
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
    TPH_X_OFFSET,
    TPH_Y_OFFSET,
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY, TRANSPARENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

import { TEXT_ALIGN_OPTIONS, DEFAULT_ALIGNS, FLEX_HORIZONTAL_OPTIONS, HEADING } from '../../../src/global/constants';

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
        subTitleTag,
        subTitlePosition,
        showSeparator,
        separatorPosition,

        showTransparentTitle,
        transparentTitleText,
        transparentTitleHide,
        transparentTitleRotateOrigin,

        //design
        titleColor,
        titleBgColor,
        titleHoverColor,

        subTitleColor,
        subTitleBgColor,
        tptColor,
        tptBgColor,
        tptOpacity,
        separatorColor,
        selectedPanel,
        selectedTab,
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

    useEffect(() => {
        // set initial panle to panel11
        if (!selectedPanel) {
            setAttributes({
                selectedPanel: 'general',
            });
        }
    }, [selectedPanel, selectedTab]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
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
                        </PanelBody>
                        <PanelBody
                            title={__('Content', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'content' })}
                            opened={selectedPanel === 'content'}
                        >
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
                        </PanelBody>
                        {showSubTitle && (
                            <PanelBody
                                title={__('Sub Heading', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'subHeading' })}
                                opened={selectedPanel === 'subHeading'}
                            >
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
                            </PanelBody>
                        )}

                        {showSeparator && (
                            <PanelBody
                                title={__('Separator', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'separator' })}
                                opened={selectedPanel === 'separator'}
                            >
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
                                <ResAlignmentControl
                                    label={__('Separator Alignmet', 'zolo-blocks')}
                                    controlName={SEPARATOR_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={FLEX_HORIZONTAL_OPTIONS}
                                />
                            </PanelBody>
                        )}
                        {showTransparentTitle && (
                            <PanelBody
                                title={__('Transparent Heading', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'transparentHeading' })}
                                opened={selectedPanel === 'transparentHeading'}
                            >
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
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
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
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody
                            title={__('Heading', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'headingStyle' })}
                            opened={selectedPanel === 'headingStyle'}
                        >
                            <TypographyDropdown label="Typography" typoPrefixConstant={TITLE_TYPOGRAPHY} requiredProps={requiredProps} />
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

                                    <ColorControl
                                        label={__('Background', 'zolo-blocks')}
                                        color={titleBgColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                titleBgColor: val,
                                            })
                                        }
                                    />
                                </>
                            )}
                            {enableTitleLink && (
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

                                            <ColorControl
                                                label={__('Background', 'zolo-blocks')}
                                                color={titleBgColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        titleBgColor: val,
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
                        </PanelBody>

                        {showSubTitle && (
                            <PanelBody
                                title={__('Sub Heading', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'subheadingStyle' })}
                                opened={selectedPanel === 'subheadingStyle'}
                            >
                                <TypographyDropdown
                                    label="Typography"
                                    typoPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
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
                            </PanelBody>
                        )}

                        {showSeparator && (
                            <PanelBody
                                title={__('Separator', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'separatorStyle' })}
                                opened={selectedPanel === 'separatorStyle'}
                            >
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
                            </PanelBody>
                        )}

                        {showTransparentTitle && (
                            <PanelBody
                                title={__('Advanced Heading', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'advancedHeadingStyle' })}
                                opened={selectedPanel === 'advancedHeadingStyle'}
                            >
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
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
