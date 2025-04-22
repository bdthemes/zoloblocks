import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import objAttributes from './attributes';
import { NAME_TYPOGRAPHY, COUNT_TYPOGRAPHY } from './constants/typoPrefixConstant';
import QuerySettings from './query-settings';
import {
    PRESETS,
    COLUMNS_GAP,
    COUNT_PADDING,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
} from './constants';
import { RangeControl } from '../../components/Core';

const {
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        catQuery,
        resMode,
        preset,
        showCount,
        nameColor,
        nameHoverColor,
        countColor,
        countBgColor,
        countHoverColor,
        countBgHoverColor,
        tagCloudPro,
        itemHoverOpacity,
    } = attributes;
    const { enableMultipleBG } = tagCloudPro ?? {};
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    const multipleBgControl = applyFilters('zolo.blocks.tagCloud.style.controls.multipleBg', [], props);
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Count', 'zoloblocks')}
                                checked={showCount}
                                onChange={(showCount) => setAttributes({ showCount })}
                            />
                            <CardDivider />
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QuerySettings attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        {/*from pro*/}
                                        {multipleBgControl && multipleBgControl.length > 0 && multipleBgControl}
                                        {!enableMultipleBG && (
                                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                        )}

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {!enableMultipleBG && (
                                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true} />
                                        )}
                                        <BoxShadowControl
                                            controlName={ITEM_HOVER_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <RangeControl
                                            className="zolo-flex-col-control"
                                            label={__('Opacity', 'zoloblocks')}
                                            value={itemHoverOpacity}
                                            onChange={(v) => setAttributes({ itemHoverOpacity: v })}
                                            min={0}
                                            max={1}
                                            step={0.1}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={nameColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    nameColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={NAME_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={nameHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    nameHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {showCount && (
                            <ZoloPanelBody title={__('Count', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={countColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={COUNT_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={countBgColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countBgColor: color,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={COUNT_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={COUNT_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <BoxShadowControl
                                                controlName={COUNT_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={COUNT_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={countHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countHoverColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={countBgHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        countBgHoverColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-category"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
