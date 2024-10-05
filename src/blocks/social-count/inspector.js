import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
const {
    ResRangeControl,
    ColorControl,
    TabPanelControl,
    HeaderTabs,
    ResCounterControl,
    ResDimensionsControl,
    BorderControl,
    NormalBGControl,
    BoxShadowControl,
    TypographyDropdown,
    AdvancedOptions,
    ResGapControl,
    ZoloPanelBody,
} = window.zoloModule;

import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    //icon
    ICON_BG,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
    ICON_H_SPACING,
    ICON_HOVER_BG,
    //counter
    COUNTER_SPACING,
} from './constants';

import { COUNTER_TYPOGRAPHY, META_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        counterColor,
        counterHoverColor,
        metaColor,
        metaHoverColor,
        itemHoverBorderColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const changePremade = (selected) => {
        setAttributes({ preset: selected });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/social-links"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.socialCount.presets', PRESETS)}
                                onChange={(value) => changePremade(value)}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 4,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={ITEM_SHADOW} requiredProps={requiredProps} />
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
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true} />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={itemHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    itemHoverBorderColor: value,
                                                })
                                            }
                                        />
                                        <BoxShadowControl controlName={ITEM_HOVER_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={iconColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICON_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ICON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ICON_BORDER}
                                            requiredProps={requiredProps}
                                        />

                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ICON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        {preset === 'style-1' && (
                                            <>
                                                <CardDivider />
                                                <ResRangeControl
                                                    label={__('Spacing', 'zoloblocks')}
                                                    controlName={ICON_SPACING}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                />
                                            </>
                                        )}

                                        {preset === 'style-2' && (
                                            <>
                                                <CardDivider />
                                                <ResRangeControl
                                                    label={__('Spacing', 'zoloblocks')}
                                                    controlName={ICON_H_SPACING}
                                                    requiredProps={requiredProps}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={iconHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconHoverColor: value,
                                                })
                                            }
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ICON_HOVER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={iconHoverBorderColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconHoverBorderColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Counter', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={counterColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={COUNTER_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Bottom Spacing', 'zoloblocks')}
                                            controlName={COUNTER_SPACING}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={counterHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    counterHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Meta', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    metaColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={META_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    metaHoverColor: value,
                                                })
                                            }
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
                            block="zolo/social-links"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
