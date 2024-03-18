/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ColorControl,
    TypographyDropdown,
    ResRangeControl,
    NormalBGControl,
    AdvancedOptions,
    ZoloPanelBody,
    ResDimensionsControl,
    RangeResetControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    PROGRESS_BG_COLOR,
    PROGRESS_HIGHT,
    PROGRESS_OFFSET,
    PROGRESS_GAP,
    PROGRESS_BAR_BG_COLOR,
    PROGRESS_BAR_RADIUS,
    PROGRESS_TITLE_MARGIN,
    PROGRESS_VALUE_MARGIN,
    ITEM_BRADIUS,
} from './constants';

import { TITLE_TYPO, PROGRESS_VALUE } from './constants/typoPrefixConstants';

import { HEADING } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, preset, titleToggle, percentToggle, progressTextTag, progressVColor, titleColor } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const onPresetChange = (selected) => {
        setAttributes({ preset: selected });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/progress-bar"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <Fragment>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                options={applyFilters('zolo.progressBar.presets', PRESETS)}
                                onChange={(v) => onPresetChange(v)}
                                value={preset}
                            />
                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={titleToggle}
                                onChange={() => setAttributes({ titleToggle: !titleToggle })}
                            />
                            <ToggleControl
                                label={__('Show Percentage Value', 'zolo-blocks')}
                                checked={percentToggle}
                                onChange={() => setAttributes({ percentToggle: !percentToggle })}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            <SelectControl
                                label={__('Select Title Tag')}
                                value={progressTextTag}
                                options={HEADING}
                                onChange={(tag) => {
                                    setAttributes({ progressTextTag: tag });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Animation Settings', 'zolo-blocks')} panelProps={props}>
                            <RangeResetControl
                                label={__('Offset', 'zolo-blocks')}
                                controlName={'progressOffset'}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                    </Fragment>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Item Gap', 'zolo-blocks')}
                                controlName={PROGRESS_GAP}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={false}
                            />
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={PROGRESS_HIGHT}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={false}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={ITEM_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <NormalBGControl
                                label={__('Background', 'zolo-blocks')}
                                controlName={PROGRESS_BG_COLOR}
                                requiredProps={requiredProps}
                                noMainBGImg={true}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={titleColor}
                                onChange={(color) => setAttributes({ titleColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-block')}
                                typoPrefixConstant={TITLE_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={PROGRESS_TITLE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Value', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={PROGRESS_BAR_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <NormalBGControl
                                label={__('Background', 'zolo-blocks')}
                                controlName={PROGRESS_BAR_BG_COLOR}
                                requiredProps={requiredProps}
                                noMainBGImg={true}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Percentage', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={progressVColor}
                                onChange={(color) => setAttributes({ progressVColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-block')}
                                typoPrefixConstant={PROGRESS_VALUE}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={PROGRESS_VALUE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
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
                            block="zolo/progress-bar"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
