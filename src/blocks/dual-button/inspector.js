/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    NormalBGControl,
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    TabPanelControl,
    LinkControl,
    IconicBtnGroup,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    BUTTON_ALIGNMENT,
    BUTTON_WIDTH,
    BUTTON_ONE_ICON_POSITIONS,
    BUTTON_ONE_BG,
    BUTTON_ONE_BORDER,
    BUTTON_ONE_BORDER_RADIUS,
    BUTTON_ONE_MARGIN,
    BUTTON_ONE_PADDING,
    BUTTON_ONE_SHADOW,
    BUTTON_ONE_ALIGN,
    BUTTON_ONE_BG_HOVER,
    BUTTON_ONE_BORDER_HOVER,
    BUTTON_ONE_SHADOW_HOVER,
    BUTTON_TWO_BG,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    BUTTON_TWO_ALIGN,
    BUTTON_TWO_BG_HOVER,
    BUTTON_TWO_BORDER_HOVER,
    BUTTON_TWO_SHADOW_HOVER,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_BORDER_RADIUS,
    MIDDLE_TEXT_BG_HOVER,
    MIDDLE_TEXT_BORDER_HOVER,
    MIDDLE_TEXT_SHADOW_HOVER,
} from './constants';

import { ICON_HPOSITIONS } from '../../../src/global/constants';
import { BUTTON_ONE_TYPO, BUTTON_TWO_TYPO, MIDDLE_TEXT_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        buttonOneText,
        buttonTwoText,
        buttonOneLink,
        buttonOneIconAdd,
        buttonOneIcon,
        buttonOneIconPosition,
        buttonOneColor,
        buttonOneColorHover,
        buttonTwoLink,
        buttonTwoIconAdd,
        buttonTwoIcon,
        buttonTwoIconPosition,
        buttonTwoColor,
        buttonTwoColorHover,
        middleText,
        middleTextColor,
        middleTextColorHover,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/dual-button"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloToggleControl
                                label={__('Middle Text', 'zoloblocks')}
                                checked={middleText}
                                onChange={() => setAttributes({ middleText: !middleText })}
                            />

                            <ResRangeControl
                                label={__('Button Width', 'zoloblocks')}
                                controlName={BUTTON_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button One', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <ZoloTextControl
                                label={__('Text', 'zoloblocks')}
                                value={buttonOneText}
                                onChange={(value) => setAttributes({ buttonOneText: value })}
                            />
                            <LinkControl
                                label={__('Link', 'zoloblocks')}
                                value={buttonOneLink}
                                onChange={(value) => setAttributes({ buttonOneLink: value })}
                            />

                            <ZoloToggleControl
                                label={__('Add Icon', 'zoloblocks')}
                                checked={buttonOneIconAdd}
                                onChange={() => setAttributes({ buttonOneIconAdd: !buttonOneIconAdd })}
                            />

                            {buttonOneIconAdd && (
                                <>
                                    <ZoloIconPicker
                                        label={__('Icon', 'zoloblocks')}
                                        value={buttonOneIcon}
                                        onChange={(value) => setAttributes({ buttonOneIcon: value })}
                                    />
                                    <IconicBtnGroup
                                        label={__('Icon Position', 'zoloblocks')}
                                        value={buttonOneIconPosition}
                                        options={ICON_HPOSITIONS}
                                        onChange={(value) => setAttributes({ buttonOneIconPosition: value })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button Two', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <ZoloTextControl
                                label={__('Text', 'zoloblocks')}
                                value={buttonTwoText}
                                onChange={(value) => setAttributes({ buttonTwoText: value })}
                            />
                            <LinkControl
                                label={__('Link', 'zoloblocks')}
                                value={buttonTwoLink}
                                onChange={(value) => setAttributes({ buttonTwoLink: value })}
                            />
                            <ZoloToggleControl
                                label={__('Add Icon', 'zoloblocks')}
                                checked={buttonTwoIconAdd}
                                onChange={() => setAttributes({ buttonTwoIconAdd: !buttonTwoIconAdd })}
                            />
                            {buttonTwoIconAdd && (
                                <>
                                    <ZoloIconPicker
                                        label={__('Icon', 'zoloblocks')}
                                        value={buttonTwoIcon}
                                        onChange={(value) => setAttributes({ buttonTwoIcon: value })}
                                    />
                                    <IconicBtnGroup
                                        label={__('Icon Position', 'zoloblocks')}
                                        value={buttonTwoIconPosition}
                                        options={ICON_HPOSITIONS}
                                        onChange={(value) => setAttributes({ buttonTwoIconPosition: value })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Button One')} firstOpen={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={buttonOneColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    buttonOneColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BUTTON_ONE_TYPO}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_ONE_BG} noMainBGImg={true} />

                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={BUTTON_ONE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BUTTON_ONE_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_ONE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={BUTTON_ONE_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={BUTTON_ONE_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResAlignmentControl
                                            label={__('Text Alignment', 'zoloblocks')}
                                            controlName={BUTTON_ONE_ALIGN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={buttonOneColorHover}
                                            onChange={(value) =>
                                                setAttributes({
                                                    buttonOneColorHover: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_ONE_BG_HOVER} />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_ONE_BORDER_HOVER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={BUTTON_ONE_SHADOW_HOVER} requiredProps={requiredProps} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button Two', 'zoloblocks')} panelProps={props} firstOpen={false}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={buttonTwoColor}
                                            onChange={(value) => setAttributes({ buttonTwoColor: value })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BUTTON_TWO_TYPO}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_TWO_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={BUTTON_TWO_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BUTTON_TWO_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_TWO_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={BUTTON_TWO_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={BUTTON_TWO_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResAlignmentControl
                                            label={__('Text Alignment', 'zoloblocks')}
                                            controlName={BUTTON_TWO_ALIGN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={buttonTwoColorHover}
                                            onChange={(value) =>
                                                setAttributes({
                                                    buttonTwoColorHover: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_TWO_BG_HOVER} />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_TWO_BORDER_HOVER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={BUTTON_TWO_SHADOW_HOVER} requiredProps={requiredProps} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Middle Text', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={middleTextColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    middleTextColor: value,
                                                })
                                            }
                                        />

                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={MIDDLE_TEXT_TYPO}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />

                                        <NormalBGControl requiredProps={requiredProps} controlName={MIDDLE_TEXT_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={MIDDLE_TEXT_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={MIDDLE_TEXT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />

                                        <BoxShadowControl controlName={MIDDLE_TEXT_SHADOW} requiredProps={requiredProps} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={MIDDLE_TEXT_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={MIDDLE_TEXT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={middleTextColorHover}
                                            onChange={(value) =>
                                                setAttributes({
                                                    middleTextColorHover: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={MIDDLE_TEXT_BG_HOVER}
                                            noMainBGImg={true}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={MIDDLE_TEXT_BORDER_HOVER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={MIDDLE_TEXT_SHADOW_HOVER} requiredProps={requiredProps} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Icon', 'zoloblocks')} firstOpen={false} panelProps={props}></ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/dual-button"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
