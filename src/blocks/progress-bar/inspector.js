/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, RangeControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


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
    BoxShadowControl,
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
    PROGRESS_PERCENT_GAP,
    PROGRESS_BSHADOW,
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
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                options={applyFilters('zolo.progressBar.presets', PRESETS)}
                                onChange={(v) => onPresetChange(v)}
                                value={preset}
                            />
                            <div className="zolo-custom-heading">{__('Show/Hide Elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={titleToggle}
                                onChange={() => setAttributes({ titleToggle: !titleToggle })}
                            />
                            <ToggleControl
                                label={__('Percentage Value', 'zoloblocks')}
                                checked={percentToggle}
                                onChange={() => setAttributes({ percentToggle: !percentToggle })}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            <SelectControl
                                label={__('Title Tag')}
                                value={progressTextTag}
                                options={HEADING}
                                onChange={(tag) => {
                                    setAttributes({ progressTextTag: tag });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Animation Settings', 'zoloblocks')} panelProps={props}>
                            <RangeResetControl
                                label={__('Offset', 'zoloblocks')}
                                controlName={'progressOffset'}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={PROGRESS_HIGHT}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={false}
                            />
                            <CardDivider />
                            <NormalBGControl
                                label={__('Background', 'zoloblocks')}
                                controlName={PROGRESS_BG_COLOR}
                                requiredProps={requiredProps}
                                noMainBGImg={true}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={PROGRESS_GAP}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                                noUnits={false}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={titleColor}
                                onChange={(color) => setAttributes({ titleColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-block')}
                                typoPrefixConstant={TITLE_TYPO}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={PROGRESS_TITLE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Value', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <NormalBGControl
                                label={__('Background', 'zoloblocks')}
                                controlName={PROGRESS_BAR_BG_COLOR}
                                requiredProps={requiredProps}
                                noMainBGImg={true}
                            />
                            <CardDivider />
                            <BoxShadowControl controlName={PROGRESS_BSHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={PROGRESS_BAR_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Percentage', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={progressVColor}
                                onChange={(color) => setAttributes({ progressVColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-block')}
                                typoPrefixConstant={PROGRESS_VALUE}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={PROGRESS_VALUE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />

                            {preset === 'style-5' && (
                                <>
                                    <CardDivider />
                                    <ResRangeControl
                                        label={__('Gap', 'zoloblocks')}
                                        controlName={PROGRESS_PERCENT_GAP}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                        noUnits={false}
                                    />
                                </>
                            )}
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
