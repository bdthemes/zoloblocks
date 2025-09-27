/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloBaseControl,
    ZoloButton,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TextShadowControl,
    TextStrokeControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    IconicBtnGroup,
    NormalBGControl,
    ImageAvatar,
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    ImageSizes,
    MaskControl,
    TabPanelControl,
    LinkControl,
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
    BUTTON_TWO_BG,
    BUTTON_TWO_BORDER,
    BUTTON_TWO_BORDER_RADIUS,
    BUTTON_TWO_MARGIN,
    BUTTON_TWO_PADDING,
    BUTTON_TWO_SHADOW,
    BUTTON_TWO_ALIGN,
    MIDDLE_TEXT_BG,
    MIDDLE_TEXT_MARGIN,
    MIDDLE_TEXT_PADDING,
    MIDDLE_TEXT_SHADOW,
    MIDDLE_TEXT_BORDER,
    MIDDLE_TEXT_BORDER_RADIUS,
} from './constants';

import { BUTTON_ONE_TYPO, BUTTON_TWO_TYPO, MIDDLE_TEXT_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        buttonOneText,
        buttonTwoText,
        middleText,
        buttonOneLink,
        buttonOneIconAdd,
        buttonOneIcon,
        buttonOneIconPosition,
        buttonOneColor,
        buttonTwoColor,
        middleTextColor,
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

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={BUTTON_ALIGNMENT}
                                requiredProps={requiredProps}
                            />

                            <ResRangeControl
                                label={__('Button Width', 'zoloblocks')}
                                controlName={BUTTON_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button One', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <ZoloTextControl
                                label={__('Button One Text', 'zoloblocks')}
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
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
                                    value={buttonOneIcon}
                                    onChange={(value) => setAttributes({ buttonOneIcon: value })}
                                />
                            )}

                            <ZoloSelectControl
                                label={__('Icon Position', 'zoloblocks')}
                                value={buttonOneIconPosition}
                                options={BUTTON_ONE_ICON_POSITIONS}
                                onChange={(value) => setAttributes({ buttonOneIconPosition: value })}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button Two', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <ZoloTextControl
                                label={__('Button Two Text', 'zoloblocks')}
                                value={buttonTwoText}
                                onChange={(value) => setAttributes({ buttonTwoText: value })}
                            />
                            <LinkControl
                                label={__('Link', 'zoloblocks')}
                                value={attributes.buttonTwoLink}
                                onChange={(value) => setAttributes({ buttonTwoLink: value })}
                            />
                            <ZoloToggleControl
                                label={__('Add Icon', 'zoloblocks')}
                                checked={attributes.buttonTwoIconAdd}
                                onChange={() => setAttributes({ buttonTwoIconAdd: !attributes.buttonTwoIconAdd })}
                            />
                            {attributes.buttonTwoIconAdd && (
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
                                    value={attributes.buttonTwoIcon}
                                    onChange={(value) => setAttributes({ buttonTwoIcon: value })}
                                />
                            )}
                            <ZoloSelectControl
                                label={__('Icon Position', 'zoloblocks')}
                                value={attributes.buttonTwoIconPosition}
                                options={BUTTON_ONE_ICON_POSITIONS}
                                onChange={(value) => setAttributes({ buttonTwoIconPosition: value })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Button One')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button Two', 'zoloblocks')} panelProps={props} firstOpen={false}>
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
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Middle Text', 'zoloblocks')} firstOpen={false} panelProps={props}>
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
                        </ZoloPanelBody>
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
