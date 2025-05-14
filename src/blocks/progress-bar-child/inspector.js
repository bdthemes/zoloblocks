/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloTextControl,
    ZoloCardDivider,
    ZoloRangeControl,
    NormalBGControl,
    TypographyDropdown,
    HeaderTabs,
    AdvancedOptions,
    ColorControl,
    ZoloPanelBody,
    ResRangeControl,
    ResDimensionsControl,
    BoxShadowControl,
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
    PROGRESS_PERCENT_GAP,
    PROGRESS_BSHADOW,
} from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { preset, resMode, progressH, titleColor, progressText, progressVColor } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/progress-bar-child"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloTextControl
                                label={__('Title', 'zoloblocks')}
                                value={progressText}
                                onChange={(v) => setAttributes({ progressText: v })}
                            />
                            <ZoloCardDivider />
                            <div className="zolo-flex-col-control">
                                <ZoloRangeControl
                                    label={__('Percentage', 'zoloblocks')}
                                    value={progressH}
                                    onChange={(v) => setAttributes({ progressH: v })}
                                    min={0}
                                    max={100}
                                />
                            </div>
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
                            <ZoloCardDivider />
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={titleColor}
                                onChange={(color) => setAttributes({ titleColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TITLE_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
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
                            <ZoloCardDivider />
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
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PROGRESS_VALUE}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={PROGRESS_VALUE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />

                            {preset === 'style-5' && (
                                <>
                                    <ZoloCardDivider />
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
                            block="zolo/progress-bar-child"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
