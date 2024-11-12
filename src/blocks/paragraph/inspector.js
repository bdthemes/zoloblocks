/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ResAlignmentControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ZoloIconPicker,
    ResDimensionsControl,
    NormalBGControl,
    TabPanelControl,
    TextShadowControl,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';

import { TEXT_TYPO, HOVER_TEXT_TYPO, LINK_TYPO, FOCUS_TEXT_TYPO, DROP_CROP_TYPO } from './constants/typoPrefixConstant';

import {
    COLUMNS,
    TEXT_ALIGNMENT,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    FOCUS_TEXT_PADDING,
    USE_TEXT_BG_COLOR,
    USE_BG_RADIUS,
    USE_FILL_BG_COLOR,
    DROP_CROP_SHADOW,
    DROP_CROP_BG_COLOR,
    DROP_CROP_BORDER,
    DROP_CROP_RADIUS,
    DROP_CROP_PADDING,
    DROP_CROP_MARGIN,
} from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;

    const {
        resMode,
        dropcap,
        textColor,
        hoverTextColor,
        linkColor,
        hoverLinkColor,
        focusTextColor,
        focusHoverTextColor,
        textDecorColor,
        useBgOnText,
        useTextFill,
        dropcapColor,
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
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Columns', 'zoloblocks')}
                                controlName={COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                step={1}
                            />
                            <ToggleControl
                                label={__('Dropcap', 'zoloblocks')}
                                checked={dropcap}
                                onChange={() => setAttributes({ dropcap: !dropcap })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Text', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={textColor}
                                onChange={(color) => setAttributes({ textColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEXT_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={TEXT_ALIGNMENT}
                                requiredProps={requiredProps}
                            />

                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={textColor}
                                            onChange={(color) => setAttributes({ textColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TEXT_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Hover Color', 'zoloblocks')}
                                            color={hoverTextColor}
                                            onChange={(color) => setAttributes({ hoverTextColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={HOVER_TEXT_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Link', 'zoloblocks')} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={LINK_TYPO}
                                requiredProps={requiredProps}
                            />

                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={linkColor}
                                            onChange={(color) => setAttributes({ linkColor: color })}
                                        />
                                        <NormalBGControl controlName={LINK_BG_COLOR} requiredProps={requiredProps} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Radius', 'zoloblocks')}
                                            controlName={LINK_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={LINK_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Hover Color', 'zoloblocks')}
                                            color={hoverLinkColor}
                                            onChange={(color) => setAttributes({ hoverLinkColor: color })}
                                        />
                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={HOVER_LINK_BG_COLOR}
                                            requiredProps={requiredProps}
                                            noMainBGImg={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Radius', 'zoloblocks')}
                                            controlName={HOVER_LINK_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={HOVER_LINK_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Focused', 'zoloblocks')} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={focusTextColor}
                                onChange={(color) => setAttributes({ focusTextColor: color })}
                            />
                            <ColorControl
                                label={__('Hover Color', 'zoloblocks')}
                                color={focusHoverTextColor}
                                onChange={(color) => setAttributes({ focusHoverTextColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={FOCUS_TEXT_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ColorControl
                                label={__('Text Decoration Color', 'zoloblocks')}
                                color={textDecorColor}
                                onChange={(color) => setAttributes({ textDecorColor: color })}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={FOCUS_TEXT_PADDING}
                                requiredProps={requiredProps}
                            />

                            {useTextFill === true ? (
                                <></>
                            ) : (
                                <>
                                    <ToggleControl
                                        label={__('Use Background On Text', 'zoloblocks')}
                                        checked={useBgOnText}
                                        onChange={() => setAttributes({ useBgOnText: !useBgOnText })}
                                    />
                                </>
                            )}

                            {useBgOnText && (
                                <>
                                    <NormalBGControl controlName={USE_TEXT_BG_COLOR} requiredProps={requiredProps} noMainBGImg={true} />
                                    <ResDimensionsControl
                                        label={__('Radius', 'zoloblocks')}
                                        controlName={USE_BG_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </>
                            )}

                            {useBgOnText === true ? (
                                <></>
                            ) : (
                                <>
                                    <ToggleControl
                                        label={__('Use Text Fill', 'zoloblocks')}
                                        checked={useTextFill}
                                        onChange={() => setAttributes({ useTextFill: !useTextFill })}
                                    />
                                </>
                            )}

                            {useTextFill && (
                                <>
                                    <NormalBGControl controlName={USE_FILL_BG_COLOR} requiredProps={requiredProps} noMainBGImg={true} />
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Drop Crop', 'zoloblocks')} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={DROP_CROP_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={dropcapColor}
                                onChange={(color) => setAttributes({ dropcapColor: color })}
                            />
                            <TextShadowControl
                                label={__('Text Shadow', 'zoloblocks')}
                                controlName={DROP_CROP_SHADOW}
                                requiredProps={requiredProps}
                                enableTransition={true}
                            />
                            <NormalBGControl controlName={DROP_CROP_BG_COLOR} requiredProps={requiredProps} noMainBGImg={true} />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={DROP_CROP_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Radius', 'zoloblocks')}
                                controlName={DROP_CROP_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={DROP_CROP_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={DROP_CROP_MARGIN}
                                requiredProps={requiredProps}
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
                            block="zolo/textarea"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
