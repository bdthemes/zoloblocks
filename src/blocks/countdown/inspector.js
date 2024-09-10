/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { DateTimePicker, BaseControl, ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ResDimensionsControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
    BoxShadowControl,
    BorderControl,
    ResCounterControl,
    ResGapControl,
    NormalBGControl,
    IconicBtnGroup,
    OverflowControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { DIGIT_TYPO, LABEL_TYPO, SEPARATOR_TYPO } from './constants/typoPrefixConstant';
import {
    INNER_ALIGNMENT,
    LABEL_POSITION,
    LABEL_POSITION_OPTION,
    ALLBOX_PADDING,
    SEPERATR_SPACING,
    SEPARATOR_TOP_SPACING,
    BOX_SHADOW,
    COUNT_BORDER,
    COUNT_BG,
    COUNTLABEL_MARGIN,
    COUNTLABEL_PADDING,
    COUNTLABEL_BORDER,
    COUNT_LABEL_RADIUS,
    COUNT_BOX_GRID,
    GRID_BOX_GAP,
    COUNT_BOX_RADIUS,
    COUNT_BOX_SIZE,
    COUNTNUM_BORDER,
    COUNTNUM_PADDING,
    COUNTBOX_MARGIN,
    COUNT_NUM_BG,
    COUNT_NUM_RADIUS,
    COUNT_LABEL_BG,
    PRESETS,
    SEPARATOR_POSITIONS,
} from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        presets,
        CountDate,
        itemsVisibility,
        itemsLabels,
        toggleLabels,
        digitColor,
        labelColor,
        seperaColor,
        countSeparator,
        toggleSeparator,
        layout,
        separatorItem,
        overflow,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const onPresetChange = (selected) => {
        setAttributes({
            presets: selected,
        });
        switch (selected) {
            case 'zolo-countdown-style-1':
                setAttributes({
                    toggleSeparator: true,
                });
                break;

            case 'zolo-countdown-style-2':
                setAttributes({
                    toggleSeparator: null,
                });
                break;

            case 'zolo-countdown-style-3':
                setAttributes({
                    toggleSeparator: null,
                });
                break;

            case 'zolo-countdown-style-4':
                setAttributes({
                    toggleSeparator: false,
                });
                break;
            default:
                return true;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/countdown"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={presets}
                                options={applyFilters('zolo.countdown.presets', PRESETS)}
                                onChange={(preset) => onPresetChange(preset)}
                            />
                            <BaseControl id="countdate-1" label={__('Timer End Date-Time', 'zoloblocks')} className="zolo-flex-col-control">
                                <DateTimePicker
                                    id="countdate-1"
                                    currentDate={CountDate}
                                    onChange={(newDate) => setAttributes({ CountDate: newDate })}
                                    is12Hour
                                />
                            </BaseControl>
                            <ToggleControl
                                label={__('Shows Years', 'zoloblocks')}
                                checked={itemsVisibility?.years}
                                onChange={() =>
                                    setAttributes({
                                        itemsVisibility: {
                                            ...itemsVisibility,
                                            years: !itemsVisibility.years,
                                        },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Shows Months', 'zoloblocks')}
                                checked={itemsVisibility?.months}
                                onChange={() =>
                                    setAttributes({
                                        itemsVisibility: {
                                            ...itemsVisibility,
                                            months: !itemsVisibility.months,
                                        },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Shows Weeks', 'zoloblocks')}
                                checked={itemsVisibility?.weeks}
                                onChange={() =>
                                    setAttributes({
                                        itemsVisibility: {
                                            ...itemsVisibility,
                                            weeks: !itemsVisibility.weeks,
                                        },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Shows Days', 'zoloblocks')}
                                checked={itemsVisibility?.days}
                                onChange={() =>
                                    setAttributes({
                                        itemsVisibility: {
                                            ...itemsVisibility,
                                            days: !itemsVisibility.days,
                                        },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Shows Hours', 'zoloblocks')}
                                checked={itemsVisibility?.hours}
                                onChange={() =>
                                    setAttributes({
                                        itemsVisibility: {
                                            ...itemsVisibility,
                                            hours: !itemsVisibility.hours,
                                        },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Shows Minutes', 'zoloblocks')}
                                checked={itemsVisibility?.minutes}
                                onChange={() =>
                                    setAttributes({
                                        itemsVisibility: {
                                            ...itemsVisibility,
                                            minutes: !itemsVisibility.minutes,
                                        },
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Layout Type', 'zoloblocks')}
                                    value={layout}
                                    onChange={(value) =>
                                        setAttributes({
                                            layout: value,
                                        })
                                    }
                                    options={[
                                        {
                                            label: __('Flex', 'zoloblocks'),
                                            value: 'flex',
                                        },
                                        {
                                            label: __('Grid', 'zoloblocks'),
                                            value: 'grid',
                                        },
                                    ]}
                                />
                            </div>
                            {layout === 'grid' && (
                                <>
                                    <ResCounterControl
                                        label={__('Grid', 'zoloblocks')}
                                        controlName={COUNT_BOX_GRID}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={7}
                                        defaults={{
                                            deskRange: 4,
                                            tabRange: 2,
                                            mobRange: 1,
                                        }}
                                    />
                                </>
                            )}
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={GRID_BOX_GAP}
                                requiredProps={requiredProps}
                                max={200}
                                min={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Labels', 'zoloblocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Show Labels', 'zoloblocks')}
                                checked={toggleLabels}
                                onChange={() => setAttributes({ toggleLabels: !toggleLabels })}
                            />
                            {toggleLabels && (
                                <>
                                    {itemsVisibility.years && (
                                        <TextControl
                                            label={__('Years', 'zoloblocks')}
                                            value={itemsLabels?.years}
                                            onChange={(v) =>
                                                setAttributes({
                                                    itemsLabels: {
                                                        ...itemsLabels,
                                                        years: v,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    {itemsVisibility.months && (
                                        <TextControl
                                            label={__('Months', 'zoloblocks')}
                                            value={itemsLabels?.months}
                                            onChange={(v) =>
                                                setAttributes({
                                                    itemsLabels: {
                                                        ...itemsLabels,
                                                        months: v,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    {itemsVisibility.weeks && (
                                        <TextControl
                                            label={__('Weeks', 'zoloblocks')}
                                            value={itemsLabels?.weeks}
                                            onChange={(v) =>
                                                setAttributes({
                                                    itemsLabels: {
                                                        ...itemsLabels,
                                                        weeks: v,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    {itemsVisibility.days && (
                                        <TextControl
                                            label={__('Days', 'zoloblocks')}
                                            value={itemsLabels?.days}
                                            onChange={(v) =>
                                                setAttributes({
                                                    itemsLabels: {
                                                        ...itemsLabels,
                                                        days: v,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    {itemsVisibility.hours && (
                                        <TextControl
                                            label={__('Hours', 'zoloblocks')}
                                            value={itemsLabels?.hours}
                                            onChange={(v) =>
                                                setAttributes({
                                                    itemsLabels: {
                                                        ...itemsLabels,
                                                        hours: v,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    {itemsVisibility.minutes && (
                                        <TextControl
                                            label={__('Minutes', 'zoloblocks')}
                                            value={itemsLabels?.minutes}
                                            onChange={(v) =>
                                                setAttributes({
                                                    itemsLabels: {
                                                        ...itemsLabels,
                                                        minutes: v,
                                                    },
                                                })
                                            }
                                        />
                                    )}
                                    <TextControl
                                        label={__('Second', 'zoloblocks')}
                                        value={itemsLabels?.seconds}
                                        onChange={(v) =>
                                            setAttributes({
                                                itemsLabels: {
                                                    ...itemsLabels,
                                                    seconds: v,
                                                },
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {presets === 'zolo-countdown-style-2' || presets === 'zolo-countdown-style-3' || (
                            <ZoloPanelBody title={__('Separator', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Separator', 'zoloblocks')}
                                    checked={toggleSeparator}
                                    onChange={() => setAttributes({ toggleSeparator: !toggleSeparator })}
                                />
                                {toggleSeparator && (
                                    <IconicBtnGroup
                                        label={__('Separator Type', 'zoloblocks')}
                                        value={countSeparator}
                                        onChange={(value) =>
                                            setAttributes({
                                                countSeparator: value,
                                            })
                                        }
                                        options={SEPARATOR_POSITIONS}
                                    />
                                )}
                                {toggleSeparator && countSeparator === 'text' && (
                                    <TextControl
                                        label={__('custom', 'zoloblocks')}
                                        value={separatorItem}
                                        onChange={(v) => setAttributes({ separatorItem: v })}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <>
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={INNER_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                                <OverflowControl
                                    label={__('Overflow', 'zoloblocks')}
                                    value={overflow}
                                    onChange={(v) => setAttributes({ overflow: v })}
                                />
                                {layout == 'flex' && (
                                    <ResRangeControl
                                        label={__('Box Size', 'zoloblocks')}
                                        controlName={COUNT_BOX_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={200}
                                        step={1}
                                    />
                                )}

                                <ResDimensionsControl
                                    label={__('Box Radius', 'zoloblocks')}
                                    controlName={COUNT_BOX_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                    max={100}
                                />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={COUNT_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={ALLBOX_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                    max={100}
                                />
                                <ResDimensionsControl
                                    label={__('Space Between', 'zoloblocks')}
                                    controlName={COUNTBOX_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                    max={100}
                                />
                                <BoxShadowControl
                                    label={__('Box Shadow', 'zoloblocks')}
                                    controlName={BOX_SHADOW}
                                    requiredProps={requiredProps}
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={COUNT_BG} noOverlay={true} />
                            </>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Number', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={digitColor}
                                onChange={(v) => setAttributes({ digitColor: v })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={DIGIT_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={COUNTNUM_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius')}
                                controlName={COUNT_NUM_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={COUNTNUM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />

                            <NormalBGControl requiredProps={requiredProps} controlName={COUNT_NUM_BG} noOverlay={true} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Label', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Position', 'zoloblocks')}
                                controlName={LABEL_POSITION}
                                requiredProps={requiredProps}
                                alignOptions={LABEL_POSITION_OPTION}
                            />
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={labelColor}
                                onChange={(v) => setAttributes({ labelColor: v })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={LABEL_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={COUNTLABEL_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius')}
                                controlName={COUNT_LABEL_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={COUNTLABEL_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Space Between', 'zoloblocks')}
                                controlName={COUNTLABEL_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={COUNT_LABEL_BG} noOverlay={true} />
                        </ZoloPanelBody>

                        {presets === 'zolo-countdown-style-2' ||
                            presets === 'zolo-countdown-style-3' ||
                            (toggleSeparator && (
                                <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={seperaColor}
                                            onChange={(v) => setAttributes({ seperaColor: v })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={SEPARATOR_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <ResRangeControl
                                            label={__(' Horizontal Spacing', 'zoloblocks')}
                                            controlName={SEPERATR_SPACING}
                                            requiredProps={requiredProps}
                                            max={100}
                                            min={-100}
                                        />
                                        <ResRangeControl
                                            label={__('Vertical Spacing', 'zoloblocks')}
                                            controlName={SEPARATOR_TOP_SPACING}
                                            requiredProps={requiredProps}
                                            max={100}
                                            min={-100}
                                        />
                                    </>
                                </ZoloPanelBody>
                            ))}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/countdown"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
