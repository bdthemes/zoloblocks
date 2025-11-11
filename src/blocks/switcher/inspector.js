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
    SPACE_BETWEEN,
    SWITCHER_HEIGHT,
    SWITCHER_WIDTH,
    SWITCHER_KNOB_SIZE,
    SWITCHER_MARGIN,
    SWITCHER_BORDER_RADIUS,
    SWITCHER_BOX_SHADOW,
    SWITCHER_BORDER,
    SWITCHER_BG,
    ACTIVE_SWITCHER_BG,
    PRESETS,
} from './constants';

import { SWITCH_TYPO } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';


function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, primaryText, secondaryText, switchColor, activeSwitchColor, switcherColor, activeSwitcherColor, preset, showSwitcherLabels } = attributes;

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
                        <ZoloPanelBody title={__('Switch', 'zoloblocks')} firstOpen={true} panelProps={props}>

                            <ZoloSelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.switcher.presets', PRESETS)}
                                onChange={(value) => {
                                    setAttributes({
                                        preset: value,
                                    });
                                }}
                            />

                            <ZoloCardDivider />

                            <ZoloToggleControl
                                label={__('Show Switcher Labels', 'zoloblocks')}
                                checked={showSwitcherLabels}
                                onChange={(value) => setAttributes({ showSwitcherLabels: value })}
                            />

                            {showSwitcherLabels && (
                                <>
                                    <ZoloTextControl
                                        label={__('Primary', 'zoloblocks')}
                                        value={primaryText}
                                        onChange={(value) => setAttributes({ primaryText: value })}
                                    />
                                    <ZoloTextControl
                                        label={__('Secondary', 'zoloblocks')}
                                        value={secondaryText}
                                        onChange={(value) => setAttributes({ secondaryText: value })}
                                    />
                                </>
                            )}

                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {showSwitcherLabels && (
                            <ZoloPanelBody title={__('Switch Labels', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={switchColor}
                                    onChange={(value) => setAttributes({ switchColor: value })}
                                />

                                <ColorControl
                                    label={__('Active Color', 'zoloblocks')}
                                    color={activeSwitchColor}
                                    onChange={(value) => setAttributes({ activeSwitchColor: value })}
                                />

                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={SWITCH_TYPO}
                                    requiredProps={requiredProps}
                                />

                                <ZoloCardDivider />
                                <ResRangeControl
                                    label={__('Space Between', 'zoloblocks')}
                                    controlName={SPACE_BETWEEN}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Switcher', 'zoloblocks')} panelProps={props}>
                            <ColorControl
                                label={__('knobs color', 'zoloblocks')}
                                color={switcherColor}
                                onChange={(value) => setAttributes({ switcherColor: value })}
                            />
                            <NormalBGControl
                                label={__('Background', 'zoloblocks')}
                                controlName={SWITCHER_BG}
                                requiredProps={requiredProps}
                                noMainBGImg={false}
                            />
                            <ZoloCardDivider />
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
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={SWITCHER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl
                                label={__('Box Shadow', 'zoloblocks')}
                                controlName={SWITCHER_BOX_SHADOW}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={SWITCHER_BORDER_RADIUS}
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
                            block="zolo/switcher"
                        />
                    </>
                }
            />
        </InspectorControls >
    );
}

export default Inspector;
