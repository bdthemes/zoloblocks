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
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={presets}
                                options={PRESETS}
                                onChange={(preset) => onPresetChange(preset)}
                            />
                            <BaseControl id="countdate-1" label={__('Timer End Date-Time', 'zolo-blocks')}>
                                <DateTimePicker
                                    id="countdate-1"
                                    currentDate={CountDate}
                                    onChange={(newDate) => setAttributes({ CountDate: newDate })}
                                    is12Hour
                                />
                            </BaseControl>
                            <ToggleControl
                                label={__('Shows Years', 'zolo-blocks')}
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
                                label={__('Shows Months', 'zolo-blocks')}
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
                                label={__('Shows Weeks', 'zolo-blocks')}
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
                                label={__('Shows Days', 'zolo-blocks')}
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
                                label={__('Shows Hours', 'zolo-blocks')}
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
                                label={__('Shows Minutes', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Layout', 'zolo-blocks')} panelProps={props}>
                            <IconicBtnGroup
                                label={__('Layout Type', 'zolo-blocks')}
                                value={layout}
                                onChange={(value) =>
                                    setAttributes({
                                        layout: value,
                                    })
                                }
                                options={[
                                    {
                                        label: __('Flex', 'zolo-blocks'),
                                        value: 'flex',
                                    },
                                    {
                                        label: __('Grid', 'zolo-blocks'),
                                        value: 'grid',
                                    },
                                ]}
                            />
                            {layout === 'grid' && (
                                <>
                                    <ResCounterControl
                                        label={__('Grid', 'zolo-blocks')}
                                        controlName={COUNT_BOX_GRID}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={10}
                                        defaults={{
                                            deskRange: 4,
                                            tabRange: 2,
                                            mobRange: 1,
                                        }}
                                    />
                                </>
                            )}
                            <ResGapControl
                                label={__('Gap', 'zolo-blocks')}
                                controlName={GRID_BOX_GAP}
                                requiredProps={requiredProps}
                                max={200}
                                min={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Labels', 'zolo-blocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Show Labels', 'zolo-blocks')}
                                checked={toggleLabels}
                                onChange={() => setAttributes({ toggleLabels: !toggleLabels })}
                            />
                            {toggleLabels && (
                                <>
                                    {itemsVisibility.years && (
                                        <TextControl
                                            label={__('Years', 'zolo-blocks')}
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
                                            label={__('Months', 'zolo-blocks')}
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
                                            label={__('Weeks', 'zolo-blocks')}
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
                                            label={__('Days', 'zolo-blocks')}
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
                                            label={__('Hours', 'zolo-blocks')}
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
                                            label={__('Minutes', 'zolo-blocks')}
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
                                        label={__('Second', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Separator', 'zolo-blocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Separator', 'zolo-blocks')}
                                    checked={toggleSeparator}
                                    onChange={() => setAttributes({ toggleSeparator: !toggleSeparator })}
                                />
                                {toggleSeparator && (
                                    <IconicBtnGroup
                                        label={__('Separator Type', 'zolo-blocks')}
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
                                        label={__('custom Separator', 'zolo-blocks')}
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
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <>
                                <ResAlignmentControl
                                    label={__('Alignment', 'zolo-blocks')}
                                    controlName={INNER_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                                {layout == 'flex' && (
                                    <ResDimensionsControl
                                        label={__('Box Size', 'zolo-blocks')}
                                        controlName={COUNT_BOX_SIZE}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                        max={200}
                                    />
                                )}

                                <ResDimensionsControl
                                    label={__('Box Radius', 'zolo-blocks')}
                                    controlName={COUNT_BOX_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                    max={100}
                                />
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={COUNT_BORDER}
                                    requiredProps={requiredProps}
                                />

                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ALLBOX_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                    max={100}
                                />
                                <ResDimensionsControl
                                    label={__('Space Between', 'zolo-blocks')}
                                    controlName={COUNTBOX_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                    max={100}
                                />
                                <BoxShadowControl
                                    label={__('Box Shadow', 'zolo-blocks')}
                                    controlName={BOX_SHADOW}
                                    requiredProps={requiredProps}
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={COUNT_BG} noOverlay={true} />
                            </>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Number', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={digitColor}
                                onChange={(v) => setAttributes({ digitColor: v })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={DIGIT_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={COUNTNUM_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius')}
                                controlName={COUNT_NUM_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={COUNTNUM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />

                            <NormalBGControl requiredProps={requiredProps} controlName={COUNT_NUM_BG} noOverlay={true} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Label', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Position', 'zolo-blocks')}
                                controlName={LABEL_POSITION}
                                requiredProps={requiredProps}
                                alignOptions={LABEL_POSITION_OPTION}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={labelColor}
                                onChange={(v) => setAttributes({ labelColor: v })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={LABEL_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
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
                                label={__('Padding', 'zolo-blocks')}
                                controlName={COUNTLABEL_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Space Between', 'zolo-blocks')}
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
                                <ZoloPanelBody title={__('Separator', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={seperaColor}
                                            onChange={(v) => setAttributes({ seperaColor: v })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={SEPARATOR_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <ResRangeControl
                                            label={__(' Horizontal Spacing', 'zolo-blocks')}
                                            controlName={SEPERATR_SPACING}
                                            requiredProps={requiredProps}
                                            max={100}
                                            min={-100}
                                        />
                                        <ResRangeControl
                                            label={__('Vertical Spacing', 'zolo-blocks')}
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
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
