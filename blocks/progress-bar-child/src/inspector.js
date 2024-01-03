/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { BorderControl, ResDimensionsControl, BoxShadowControl, NormalBGControl, HeaderTabs, AdvancedOptions, ZoloPanelBody } =
    window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import { ITEM_BG, ITEM_PADDING, ITEM_MARGIN, ITEM_BORDER, ITEM_BORDER_RADIUS, ITEM_BOX_SHADOW } from './constants';

import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, preset, progressH, barTitleToggle, barpercentToggle, progressText, progressTextTag } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };
    const presetPram = (v) => {
        setAttributes({ preset: v });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('preset', 'zolo-blocks')}
                                value={preset}
                                options={[
                                    { label: 'Preset-1', value: 'style-1' },
                                    { label: 'Preset-2', value: 'style-2' },
                                    { label: 'Preset-3', value: 'style-3' },
                                    { label: 'Preset-4', value: 'style-4' },
                                    { label: 'Preset-5', value: 'style-5' },
                                ]}
                                onChange={(presetV) => presetPram(presetV)}
                            />
                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={barTitleToggle}
                                onChange={() => setAttributes({ barTitleToggle: !barTitleToggle })}
                            />
                            <ToggleControl
                                label={__('Show Percent Value', 'zolo-blocks')}
                                checked={barpercentToggle}
                                onChange={() => setAttributes({ barpercentToggle: !barpercentToggle })}
                            />
                            <RangeControl
                                label={__('Progress Value', 'zolo-blocks')}
                                value={progressH}
                                onChange={(progressV) => setAttributes({ progressH: progressV })}
                                min={2}
                                max={100}
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

                            <TextControl
                                label={__('Title', 'zolo-blocks')}
                                value={progressText}
                                onChange={(v) => setAttributes({ progressText: v })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
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
}
export default Inspector;
