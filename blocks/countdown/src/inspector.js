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
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    BoxShadowControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { DIGIT_TYPO, LABEL_TYPO, SEPERAT_TYPO } from './constants/typoPrefixConstant';
import {
    SEPARATOR_TYPE,
    SEPARATOR_OPTION,
    OVERALL_ALIGNMENT,
    INNER_ALIGNMENT,
    LABEL_POSITION,
    LABEL_POSITION_OPTION,
    BOX_WIDTH,
    GAP_BOX_WIDTH,
    GAP_BETWEEN_DIGITLABEL,
    ALLBOX_PADDING,
    SEPERATR_SPACING,
    SEPARATOR_TOP_SPACING,
    BOX_SHADOW,
    COUNT_PADDING,
    COUNT_MARGIN,
} from './constants';
import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS, TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        CountDate,
        toggleYears,
        toggleMonths,
        toggleDays,
        toggleHourse,
        toggleMinutes,
        toggleLabels,
        yearsLabel,
        monthsLabel,
        daysLabel,
        hoursLabel,
        minutesLabel,
        secondsLabel,
        toggleSeparator,
        seperatorType,
        borderStyle,
        digitColor,
        labelColor,
        seperaColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };
    console.log(CountDate);
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <BaseControl id="countdate-1" label={__('Timer End Date & Time', 'zolo-blocks')}>
                                <DateTimePicker
                                    id="countdate-1"
                                    currentDate={CountDate}
                                    onChange={(newDate) => setAttributes({ CountDate: newDate })}
                                    is12Hour
                                />
                            </BaseControl>
                            <ToggleControl
                                label={__('Shows Years', 'zolo-blocks')}
                                checked={toggleYears}
                                onChange={() => setAttributes({ toggleYears: !toggleYears })}
                            />
                            {toggleYears == false && (
                                <ToggleControl
                                    label={__('Shows Months', 'zolo-blocks')}
                                    checked={toggleMonths}
                                    onChange={() => setAttributes({ toggleMonths: !toggleMonths })}
                                />
                            )}

                            {toggleMonths == false && (
                                <ToggleControl
                                    label={__('Shows Days', 'zolo-blocks')}
                                    checked={toggleDays}
                                    onChange={() => setAttributes({ toggleDays: !toggleDays })}
                                />
                            )}

                            {toggleDays == false && (
                                <ToggleControl
                                    label={__('Shows Hours', 'zolo-blocks')}
                                    checked={toggleHourse}
                                    onChange={() => setAttributes({ toggleHourse: !toggleHourse })}
                                />
                            )}
                            {toggleHourse == false && (
                                <ToggleControl
                                    label={__('Shows Minutes', 'zolo-blocks')}
                                    checked={toggleMinutes}
                                    onChange={() => setAttributes({ toggleMinutes: !toggleMinutes })}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Labels', 'zolo-blocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Show Labels', 'zolo-blocks')}
                                checked={toggleLabels}
                                onChange={() => setAttributes({ toggleLabels: !toggleLabels })}
                            />
                            {toggleLabels && (
                                <>
                                    <TextControl
                                        label={__('Years', 'zolo-blocks')}
                                        value={yearsLabel}
                                        onChange={(v) => setAttributes({ yearsLabel: v })}
                                    />
                                    <TextControl
                                        label={__('Months', 'zolo-blocks')}
                                        value={monthsLabel}
                                        onChange={(v) => setAttributes({ monthsLabel: v })}
                                    />
                                    <TextControl
                                        label={__('Days', 'zolo-blocks')}
                                        value={daysLabel}
                                        onChange={(v) => setAttributes({ daysLabel: v })}
                                    />
                                    <TextControl
                                        label={__('Hours', 'zolo-blocks')}
                                        value={hoursLabel}
                                        onChange={(v) => setAttributes({ hoursLabel: v })}
                                    />
                                    <TextControl
                                        label={__('Minutes', 'zolo-blocks')}
                                        value={minutesLabel}
                                        onChange={(v) => setAttributes({ minutesLabel: v })}
                                    />
                                    <TextControl
                                        label={__('Second', 'zolo-blocks')}
                                        value={secondsLabel}
                                        onChange={(v) => setAttributes({ secondsLabel: v })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Separator', 'zolo-blocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Show Separator', 'zolo-blocks')}
                                checked={toggleSeparator}
                                onChange={() => setAttributes({ toggleSeparator: !toggleSeparator })}
                            />
                            {toggleSeparator && (
                                <SelectControl
                                    label={__('Separator Type', 'zolo-blocks')}
                                    value={seperatorType}
                                    options={[
                                        { label: 'Colon', value: ':' },
                                        { label: 'Line', value: '|' },
                                        { label: 'Slash', value: '/' },
                                    ]}
                                    onChange={(type) => {
                                        setAttributes({ seperatorType: type });
                                    }}
                                />
                            )}
                            <ResAlignmentControl
                                label={__('Separator Type', 'zolo-blocks')}
                                controlName={SEPARATOR_TYPE}
                                requiredProps={requiredProps}
                                alignOptions={SEPARATOR_OPTION}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Box', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Overall Alignment', 'zolo-blocks')}
                                controlName={OVERALL_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Inner Alignment', 'zolo-blocks')}
                                controlName={INNER_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                            <ResAlignmentControl
                                label={__('Label Position', 'zolo-blocks')}
                                controlName={LABEL_POSITION}
                                requiredProps={requiredProps}
                                alignOptions={LABEL_POSITION_OPTION}
                            />
                            <ResRangeControl
                                label={__('Box Width', 'zolo-blocks')}
                                controlName={BOX_WIDTH}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Gap Between Boxs', 'zolo-blocks')}
                                controlName={GAP_BOX_WIDTH}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Gap Between Digit & Label', 'zolo-blocks')}
                                controlName={GAP_BETWEEN_DIGITLABEL}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <SelectControl
                                label={__('Border Style', 'zolo-blocks')}
                                value={borderStyle}
                                options={[
                                    { label: 'Default', value: 'default' },
                                    { label: 'None', value: 'none' },
                                    { label: 'Solid', value: 'solid' },
                                    { label: 'Dotted', value: 'dotted' },
                                    { label: 'Dashed', value: 'dashed' },
                                    { label: 'Double', value: 'double' },
                                    { label: 'Groove', value: 'groove' },
                                    { label: 'Ridge', value: 'ridge' },
                                    { label: 'Inset', value: 'inset' },
                                    { label: 'Outset', value: 'outset' },
                                    { label: 'Inherit', value: 'initial' },
                                ]}
                                onChange={(style) => setAttributes({ borderStyle: style })}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={ALLBOX_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Digit', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Label', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Separator', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={seperaColor}
                                onChange={(v) => setAttributes({ seperaColor: v })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={SEPERAT_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl
                                label={__('Separator Right Spacing', 'zolo-blocks')}
                                controlName={SEPERATR_SPACING}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Separator Right Spacing', 'zolo-blocks')}
                                controlName={SEPARATOR_TOP_SPACING}
                                requiredProps={requiredProps}
                                max={100}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Box Shadow', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <BoxShadowControl label={__('Box Shadow')} controlName={BOX_SHADOW} requiredProps={requiredProps} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Spacing', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={COUNT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={COUNT_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                max={100}
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
