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

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resMode,
        //settings
        styles,

        hideIcon,
        hideCounter,
        hideTitle,
        counterNumber,
        counterSuffix,
        titleText,

        showTransparentTitle,

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
                    hideTitle: false,
                    align: 'left',
                });
                break;

            case 'style-1':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    hideTitle: false,
                    align: 'center',
                });
                break;

            case 'style-2':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    hideTitle: false,
                    align: 'center',
                });
                break;

            case 'style-3':
                setAttributes({
                    showSubTitle: true,
                    subTitlePosition: 'top',
                    showTransparentTitle: true,
                    hideTitle: false,
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
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={styles}
                                options={applyFilters('zolo_ah_style_filter', STYLES) || STYLES}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ToggleControl
                                label={__('Hide Icon', 'zolo-blocks')}
                                checked={hideIcon}
                                onChange={() => setAttributes({ hideIcon: !hideIcon })}
                            />
                            <ToggleControl
                                label={__('Hide Counter', 'zolo-blocks')}
                                checked={hideCounter}
                                onChange={() => setAttributes({ hideCounter: !hideCounter })}
                            />
                            <ToggleControl
                                label={__('Hide Title', 'zolo-blocks')}
                                checked={hideTitle}
                                onChange={() => setAttributes({ hideTitle: !hideTitle })}
                            />
                        </PanelBody>
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
                            <TextControl
                                label={__('Counter Number', 'zolo-blocks')}
                                value={counterNumber}
                                onChange={(counterNumber) => setAttributes({ counterNumber })}
                            />
                            <TextControl
                                label={__('Counter Suffix', 'zolo-blocks')}
                                value={counterSuffix}
                                onChange={(counterSuffix) => setAttributes({ counterSuffix })}
                            />
                            <TextControl
                                label={__('Counter Title', 'zolo-blocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Heading', 'zolo-blocks')} initialOpen={false}>
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

                        {hideCounter && (
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

                        {hideTitle && (
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
