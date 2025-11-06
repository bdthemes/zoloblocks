/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
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
    SPACE_BETWEEN,
    SWITCHER_BG,
    SWITCHER_BORDER_RADIUS,
    SWITCHER_HEIGHT,
    SWITCHER_MARGIN,
    SWITCHER_WIDTH,
    SWITCHER_KNOB_SIZE,
} from './constants';

import { SWITCH_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, primaryText, secondaryText, switchColor, activeSwitchColor, switcherColor, activeSwitcherColor } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/switcher"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Switcher', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloTextControl
                                label={__('Primary Text', 'zoloblocks')}
                                value={primaryText}
                                onChange={(value) => setAttributes({ primaryText: value })}
                            />
                            <ZoloTextControl
                                label={__('Secondary Text', 'zoloblocks')}
                                value={secondaryText}
                                onChange={(value) => setAttributes({ secondaryText: value })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Switch', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Space Between', 'zoloblocks')}
                                controlName={SPACE_BETWEEN}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                controlName={SWITCH_TYPO}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                options={[
                                    {
                                        label: __('Normal', 'zoloblocks'),
                                        value: 'normal',
                                    },
                                    {
                                        label: __('Active', 'zoloblocks'),
                                        value: 'active',
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={switchColor}
                                            onChange={(value) => setAttributes({ switchColor: value })}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={activeSwitchColor}
                                            onChange={(value) => setAttributes({ activeSwitchColor: value })}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Switcher', 'zoloblocks')} panelProps={props}>
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={SWITCHER_WIDTH}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={SWITCHER_HEIGHT}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                            />
                            <ZoloCardDivider />
                            <ResRangeControl
                                label={__('Knob Size', 'zoloblocks')}
                                controlName={SWITCHER_KNOB_SIZE}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={SWITCHER_MARGIN}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                            />
                            <ZoloCardDivider />
                            <ResRangeControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={SWITCHER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                            />
                            <TabPanelControl
                                options={[
                                    {
                                        label: __('Normal', 'zoloblocks'),
                                        value: 'normal',
                                    },
                                    {
                                        label: __('Active', 'zoloblocks'),
                                        value: 'active',
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={switcherColor}
                                            onChange={(value) => setAttributes({ switcherColor: value })}
                                        />
                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={SWITCHER_BG}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={activeSwitcherColor}
                                            onChange={(value) => setAttributes({ activeSwitcherColor: value })}
                                        />
                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={SWITCHER_BG}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
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
                            block="zolo/switcher"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
