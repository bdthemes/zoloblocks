/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    NormalBGControl,
    TypographyDropdown,
    HeaderTabs,
    AdvancedOptions,
    ColorControl,
    ZoloPanelBody,
    ResRangeControl,
    ResDimensionsControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO, PROGRESS_VALUE } from './constants/typoPrefixConstant';
import {
    PROGRESS_BAR_BG_COLOR,
    PROGRESS_BG_COLOR,
    PROGRESS_HIGHT,
    PROGRESS_BAR_RADIUS,
    PROGRESS_TITLE_MARGIN,
    PROGRESS_VALUE_MARGIN,
    ITEM_BRADIUS,
} from './constants';

import { HEADING } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, progressH, titleColor, progressText, progressTextTag, progressbarRadius, progressVColor } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <TextControl
                                label={__('Title', 'zolo-blocks')}
                                value={progressText}
                                onChange={(v) => setAttributes({ progressText: v })}
                            />
                            <RangeControl
                                label={__('Progress Percentage', 'zolo-blocks')}
                                value={progressH}
                                onChange={(v) => setAttributes({ progressH: v })}
                                min={0}
                                max={100}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
