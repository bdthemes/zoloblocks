/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, TextareaControl, CardDivider, SelectControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Flatpickr from 'react-flatpickr';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ZoloIconPicker,
    ResDimensionsControl,
    NormalBGControl,
    ZoloPanelBody,
    TabPanelControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';
import {
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    FIELD_PADDING,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    ICON_SIZE,
    DATE_FORMAT,
    FIELD_TYPE,
    TIME_FORMAT,
    DAYS_OPTION,

    // Date/Time
    DATE_HEAD_BG,
    DATE_BODY_BG,
    DATE_BODY_BG_HOVER,
    DATE_BODY_TODAY_BG,
    DATE_BODY_SELECTED,
    DATE_BODY_TODAY_BG_HOVER,
    TIME_BG_COLOR,
    TIME_BG_HOVER_COLOR,
} from './constants';
import Select2 from 'react-select';
import { Card } from '@wordpress/components';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        showLabel,
        label,
        labelColor,
        textColor,
        placeholder,
        placeholderColor,
        showIcon,
        icon,
        iconColor,
        isRequired,
        requiredMsg,
        showRequiredSymbol,
        requiredColor,
        dateFormat,
        defaultValue,
        customNameAttribute,
        fieldType,
        timeFormat,
        dateRangeDefaultValue,
        disableDates,
        enableDates,
        weekendDays,
        minTime,
        maxTime,
        showEnableDate,
        disableDays,
        // Date/Time
        dateMonthColor,
        dateMonthHoverColor,
        dateYearColor,
        dateNavColor,
        dateNavHoverColor,
        dateDaysColor,
        dateBodyColor,
        dateBodyNextColor,
        dateDisableColor,
        dateBodyTodayColor,
        dateBodyTodayBorderColor,
        dateBodyTodayHoverColor,
        dateBodyTodayHoverBorderColor,
        dateBodySelectedColor,
        dateBodySelectedBorderColor,
        dateBodyRangeColor,
        dateBodyRangeBgColor,
        timeTextColor,
        timeBorderColor,
        timeTextHoverColor,
        timeArrowColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/text-field"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ToggleControl
                                label={__('Show Label', 'zoloblocks')}
                                checked={showLabel}
                                onChange={() => setAttributes({ showLabel: !showLabel })}
                            />
                            <ToggleControl
                                label={__('Is It Required Field?', 'zoloblocks')}
                                checked={isRequired}
                                onChange={() => setAttributes({ isRequired: !isRequired })}
                            />
                            {preset !== 'style-3' && (
                                <ToggleControl
                                    label={__('Show icon', 'zoloblocks')}
                                    checked={showIcon}
                                    onChange={(showIcon) => setAttributes({ showIcon })}
                                />
                            )}

                            {isRequired && (
                                <ToggleControl
                                    label={__('Show Required Symbol', 'zoloblocks')}
                                    checked={showRequiredSymbol}
                                    onChange={() => setAttributes({ showRequiredSymbol: !showRequiredSymbol })}
                                />
                            )}

                            <ToggleControl
                                label={__('Disable All Enable Specific Dates', 'zoloblocks')}
                                checked={showEnableDate}
                                onChange={(showEnableDate) => setAttributes({ showEnableDate })}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showLabel && (
                                <TextControl
                                    label={__('Field Label', 'zoloblocks')}
                                    value={label}
                                    onChange={(v) => setAttributes({ label: v })}
                                    placeholder={__('Enter label..', 'zoloblocks')}
                                    help={__('This will be used as the label for the field', 'zoloblocks')}
                                />
                            )}
                            {preset !== 'style-3' && (
                                <TextControl
                                    label={__('Placeholder', 'zoloblocks')}
                                    value={placeholder}
                                    onChange={(v) => setAttributes({ placeholder: v })}
                                />
                            )}

                            {isRequired && (
                                <div className="zolo-flex-col-control">
                                    <TextareaControl
                                        label={__('Required Message', 'zoloblocks')}
                                        help={__('This message will be shown when the field is required', 'zoloblocks')}
                                        value={requiredMsg}
                                        onChange={(v) => setAttributes({ requiredMsg: v })}
                                    />
                                </div>
                            )}
                            {showIcon && preset !== 'style-3' && (
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    value={icon}
                                    onChange={(value) => {
                                        setAttributes({
                                            icon: value,
                                        });
                                    }}
                                />
                            )}

                            <CardDivider />
                            <SelectControl
                                label={__('Field Type', 'zoloblocks')}
                                value={fieldType}
                                options={FIELD_TYPE}
                                onChange={(fieldType) => setAttributes({ fieldType })}
                            />

                            {(fieldType === 'date' || fieldType === 'datetime') && (
                                <SelectControl
                                    label={__('Date Format', 'zoloblocks')}
                                    value={dateFormat}
                                    options={DATE_FORMAT}
                                    onChange={(dateFormat) => setAttributes({ dateFormat })}
                                />
                            )}

                            {(fieldType === 'time' || fieldType === 'datetime') && (
                                <SelectControl
                                    label={__('Time Format', 'zoloblocks')}
                                    value={timeFormat}
                                    options={TIME_FORMAT}
                                    onChange={(timeFormat) => setAttributes({ timeFormat })}
                                />
                            )}

                            <CardDivider />
                            <BaseControl label={__('Default Value', 'zoloblocks')} className="zolo-flex-col-control">
                                {fieldType === 'date' && (
                                    <Flatpickr
                                        value={defaultValue}
                                        onChange={(date) => {
                                            if (date[0]) {
                                                const formattedDate = date[0].toISOString().split('T')[0];
                                                setAttributes({ defaultValue: formattedDate });
                                            }
                                        }}
                                        options={{
                                            dateFormat,
                                            enableTime: false,
                                            disable: [...disableDates, (date) => disableDays.includes(date.getDay())],
                                        }}
                                        render={({ defaultValue, ...props }, ref) => (
                                            <input
                                                {...props}
                                                ref={ref}
                                                placeholder={placeholder}
                                                onChange={()=>null}
                                                style={{
                                                    pointerEvents: 'inherit !important',
                                                }}
                                            />
                                        )}
                                    />
                                )}

                                {fieldType === 'time' && (
                                    <Flatpickr
                                        value={defaultValue}
                                        onChange={(date) => {
                                            if (date[0]) {
                                                const formattedDate = date[0].toISOString().split('T')[0];
                                                setAttributes({ defaultValue: formattedDate });
                                            }
                                        }}
                                        options={{
                                            dateFormat: timeFormat,
                                            enableTime: true,
                                            noCalendar: true,
                                        }}
                                        render={({ defaultValue, ...props }, ref) => (
                                            <input
                                                {...props}
                                                ref={ref}
                                                placeholder={placeholder}
                                                onChange={()=>null}
                                                style={{
                                                    pointerEvents: 'inherit !important',
                                                }}
                                            />
                                        )}
                                    />
                                )}
                                {fieldType === 'datetime' && (
                                    <Flatpickr
                                        value={defaultValue}
                                        onChange={(date) => {
                                            if (date[0]) {
                                                const formattedDate = date[0].toISOString().split('T')[0];
                                                setAttributes({ defaultValue: formattedDate });
                                            }
                                        }}
                                        options={{
                                            enableTime: true,
                                            dateFormat: dateFormat + ' ' + timeFormat,
                                            disable: [...disableDates, (date) => disableDays.includes(date.getDay())],
                                        }}
                                        render={({ defaultValue, ...props }, ref) => (
                                            <input
                                                {...props}
                                                ref={ref}
                                                placeholder={placeholder}
                                                onChange={()=>null}
                                                style={{
                                                    pointerEvents: 'inherit !important',
                                                }}
                                            />
                                        )}
                                    />
                                )}
                                {fieldType === 'date-range' && (
                                    <Flatpickr
                                        value={dateRangeDefaultValue}
                                        onChange={(selectedDates) => {
                                            const adjustedDates = selectedDates.map((date) => {
                                                return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                                                    .toISOString()
                                                    .split('T')[0];
                                            });
                                            setAttributes({ dateRangeDefaultValue: adjustedDates });
                                        }}
                                        options={{
                                            mode: 'range',
                                            dateFormat: dateFormat,
                                            disable: [...disableDates, (date) => disableDays.includes(date.getDay())],
                                        }}
                                        render={({ defaultValue, ...props }, ref) => (
                                            <input
                                                {...props}
                                                ref={ref}
                                                placeholder={placeholder}
                                                onChange={()=>null}
                                                style={{
                                                    pointerEvents: 'inherit !important',
                                                }}
                                            />
                                        )}
                                    />
                                )}
                                {fieldType === 'date-multiple' && (
                                    <Flatpickr
                                        value={dateRangeDefaultValue}
                                        onChange={(selectedDates) => {
                                            const adjustedDates = selectedDates.map((date) => {
                                                return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                                                    .toISOString()
                                                    .split('T')[0];
                                            });
                                            setAttributes({ dateRangeDefaultValue: adjustedDates });
                                        }}
                                        options={{
                                            mode: 'multiple',
                                            dateFormat: dateFormat,
                                            disable: [...disableDates, (date) => disableDays.includes(date.getDay())],
                                        }}
                                        render={({ defaultValue, ...props }, ref) => (
                                            <input
                                                {...props}
                                                ref={ref}
                                                placeholder={placeholder}
                                                onChange={()=>null}
                                                style={{
                                                    pointerEvents: 'inherit !important',
                                                }}
                                            />
                                        )}
                                    />
                                )}
                            </BaseControl>

                            <CardDivider />
                            <div className="zolo-flex-col-control">
                                <TextControl
                                    label={__('Custom Name Attribute', 'zoloblocks')}
                                    value={customNameAttribute || ''}
                                    onChange={(v) => setAttributes({ customNameAttribute: v })}
                                    help={__(
                                        'Each name attribute must be unique to submit form data correctly. Leave the field blank if no custom name attribute is necessary.',
                                        'zoloblocks'
                                    )}
                                />
                            </div>

                            {!showEnableDate && fieldType !== 'time' && (
                                <>
                                    <BaseControl label={__('Disable Specific Dates', 'zoloblocks')} className="zolo-flex-col-control">
                                        <Flatpickr
                                            value={disableDates}
                                            onChange={(dates) => {
                                                const adjustedDates = dates.map((date) => {
                                                    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                                                        .toISOString()
                                                        .split('T')[0];
                                                });
                                                setAttributes({ disableDates: adjustedDates });
                                            }}
                                            options={{
                                                mode: 'multiple',
                                                dateFormat: dateFormat,
                                            }}
                                            render={({ defaultValue, ...props }, ref) => (
                                                <input
                                                    {...props}
                                                    ref={ref}
                                                    placeholder={placeholder}
                                                    onChange={()=>null}
                                                    style={{
                                                        pointerEvents: 'inherit !important',
                                                    }}
                                                />
                                            )}
                                        />
                                    </BaseControl>

                                    <BaseControl label={__('Weekends Days', 'zoloblocks')} className="zolo-flex-col-control">
                                        <Select2
                                            classNamePrefix="zolo-select"
                                            options={DAYS_OPTION}
                                            value={weekendDays}
                                            onChange={(weekendDays) => {
                                                setAttributes({ weekendDays });
                                                const disableDays = weekendDays.map((day) => day.value);
                                                setAttributes({ disableDays });
                                            }}
                                            isMulti={true}
                                            closeMenuOnSelect={false}
                                        />
                                    </BaseControl>
                                </>
                            )}

                            {showEnableDate && fieldType !== 'time' && (
                                <BaseControl label={__('Enable Specific Dates', 'zoloblocks')} className="zolo-flex-col-control">
                                    <Flatpickr
                                        value={enableDates}
                                        onChange={(dates) => {
                                            const adjustedDates = dates.map((date) => {
                                                // Adjust dates to ignore time zone discrepancies
                                                return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                                                    .toISOString()
                                                    .split('T')[0]; // Extract only the date part
                                            });
                                            setAttributes({ enableDates: adjustedDates });
                                        }}
                                        options={{
                                            mode: 'multiple',
                                            dateFormat: dateFormat,
                                        }}
                                        render={({ defaultValue, ...props }, ref) => (
                                            <input
                                                {...props}
                                                ref={ref}
                                                onChange={()=>null}
                                                placeholder={placeholder}
                                                style={{
                                                    pointerEvents: 'inherit !important',
                                                }}
                                            />
                                        )}
                                    />
                                </BaseControl>
                            )}

                            {(fieldType === 'time' || fieldType === 'datetime') && (
                                <>
                                    <TextControl
                                        className="zolo-flex-col-control"
                                        label={__('Limited Min Time', 'zoloblocks')}
                                        value={minTime}
                                        onChange={(minTime) => setAttributes({ minTime })}
                                        help={__('Ex:09:00', 'zoloblocks')}
                                    />
                                    <TextControl
                                        className="zolo-flex-col-control"
                                        label={__('Limited Max Time', 'zoloblocks')}
                                        value={maxTime}
                                        onChange={(maxTime) => setAttributes({ maxTime })}
                                        help={__('Ex:16:00', 'zoloblocks')}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {showLabel && (
                            <ZoloPanelBody title={__('Label', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Label Color', 'zoloblocks')}
                                    color={labelColor}
                                    onChange={(color) => setAttributes({ labelColor: color })}
                                />
                                <ColorControl
                                    label={__('Required Color', 'zoloblocks')}
                                    color={requiredColor}
                                    onChange={(color) => setAttributes({ requiredColor: color })}
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={LABEL_TYPO}
                                    requiredProps={requiredProps}
                                />
                                {preset === 'style-3' && (
                                    <>
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={LABEL_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={LABEL_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={LABEL_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                    </>
                                )}
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={LABEL_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                {preset === 'style-3' && (
                                    <NormalBGControl requiredProps={requiredProps} controlName={LABEL_BG} noMainBGImg={true} />
                                )}
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody
                            title={__('Field', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={showLabel ? false : true}
                        >
                            <ColorControl
                                label={__('Text Color', 'zoloblocks')}
                                color={textColor}
                                onChange={(color) => setAttributes({ textColor: color })}
                            />
                            {preset !== 'style-3' && (
                                <ColorControl
                                    label={__('Placeholder Color', 'zoloblocks')}
                                    color={placeholderColor}
                                    onChange={(color) => setAttributes({ placeholderColor: color })}
                                />
                            )}

                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={FIELD_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={FIELD_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={FIELD_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={FIELD_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={FIELD_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        {showIcon && preset !== 'style-3' && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={iconColor}
                                    onChange={(color) => setAttributes({ iconColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Icon', 'zoloblocks')}
                                    controlName={ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Date/Time', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <div className="zolo-custom-heading" style={{ paddingTop: 0, border: 0 }}>
                                            {__('Header Area', 'zoloblocks')}
                                        </div>
                                        <ColorControl
                                            label={__('Month Color', 'zoloblocks')}
                                            color={dateMonthColor}
                                            onChange={(color) => setAttributes({ dateMonthColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Year Color', 'zoloblocks')}
                                            color={dateYearColor}
                                            onChange={(color) => setAttributes({ dateYearColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Nav Color', 'zoloblocks')}
                                            color={dateNavColor}
                                            onChange={(color) => setAttributes({ dateNavColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Days Color', 'zoloblocks')}
                                            color={dateDaysColor}
                                            onChange={(color) => setAttributes({ dateDaysColor: color })}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={DATE_HEAD_BG} noMainBGImg={false} />
                                        <div className="zolo-custom-heading">{__('Date Container', 'zoloblocks')}</div>
                                        <NormalBGControl requiredProps={requiredProps} controlName={DATE_BODY_BG} noMainBGImg={false} />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Date Color', 'zoloblocks')}
                                            color={dateBodyColor}
                                            onChange={(color) => setAttributes({ dateBodyColor: color })}
                                        />
                                        {!showEnableDate && (
                                            <ColorControl
                                                label={__('Next/Prev Date Color', 'zoloblocks')}
                                                color={dateBodyNextColor}
                                                onChange={(color) => setAttributes({ dateBodyNextColor: color })}
                                            />
                                        )}
                                        {showEnableDate && (
                                            <>
                                                <ColorControl
                                                    label={__('Date Disable Color', 'zoloblocks')}
                                                    color={dateDisableColor}
                                                    onChange={(color) => setAttributes({ dateDisableColor: color })}
                                                />
                                            </>
                                        )}
                                        <div className="zolo-custom-heading">{__('Date Today', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Date Color', 'zoloblocks')}
                                            color={dateBodyTodayColor}
                                            onChange={(color) => setAttributes({ dateBodyTodayColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Date Border Color', 'zoloblocks')}
                                            color={dateBodyTodayBorderColor}
                                            onChange={(color) => setAttributes({ dateBodyTodayBorderColor: color })}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={DATE_BODY_TODAY_BG}
                                            noMainBGImg={false}
                                        />

                                        <div className="zolo-custom-heading">{__('Date Selected', 'zoloblocks')}</div>

                                        <ColorControl
                                            label={__('Date Color', 'zoloblocks')}
                                            color={dateBodySelectedColor}
                                            onChange={(color) => setAttributes({ dateBodySelectedColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Date Border Color', 'zoloblocks')}
                                            color={dateBodySelectedBorderColor}
                                            onChange={(color) => setAttributes({ dateBodySelectedBorderColor: color })}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={DATE_BODY_SELECTED}
                                            noMainBGImg={false}
                                        />
                                        {fieldType === 'date-range' && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Date Range', 'zoloblocks')}</div>
                                                <ColorControl
                                                    label={__('Date Color', 'zoloblocks')}
                                                    color={dateBodyRangeColor}
                                                    onChange={(color) => setAttributes({ dateBodyRangeColor: color })}
                                                />
                                                <ColorControl
                                                    label={__('Date Background', 'zoloblocks')}
                                                    color={dateBodyRangeBgColor}
                                                    onChange={(color) => setAttributes({ dateBodyRangeBgColor: color })}
                                                />
                                            </>
                                        )}

                                        {(fieldType === 'time' || fieldType === 'datetime') && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Time', 'zoloblocks')}</div>
                                                <ColorControl
                                                    label={__('Text Color', 'zoloblocks')}
                                                    color={timeTextColor}
                                                    onChange={(color) => setAttributes({ timeTextColor: color })}
                                                />
                                                <ColorControl
                                                    label={__('Border Color', 'zoloblocks')}
                                                    color={timeBorderColor}
                                                    onChange={(color) => setAttributes({ timeBorderColor: color })}
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={TIME_BG_COLOR}
                                                    noMainBGImg={false}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Month Color', 'zoloblocks')}
                                            color={dateMonthHoverColor}
                                            onChange={(color) => setAttributes({ dateMonthHoverColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Nav Color', 'zoloblocks')}
                                            color={dateNavHoverColor}
                                            onChange={(color) => setAttributes({ dateNavHoverColor: color })}
                                        />
                                        <div className="zolo-custom-heading">{__('Date Container', 'zoloblocks')}</div>
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={DATE_BODY_BG_HOVER}
                                            noMainBGImg={false}
                                        />
                                        <div className="zolo-custom-heading">{__('Date Today', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Date Color', 'zoloblocks')}
                                            color={dateBodyTodayHoverColor}
                                            onChange={(color) => setAttributes({ dateBodyTodayHoverColor: color })}
                                        />
                                        <ColorControl
                                            label={__('Date Border Color', 'zoloblocks')}
                                            color={dateBodyTodayHoverBorderColor}
                                            onChange={(color) => setAttributes({ dateBodyTodayHoverBorderColor: color })}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={DATE_BODY_TODAY_BG_HOVER}
                                            noMainBGImg={false}
                                        />
                                        {(fieldType === 'time' || fieldType === 'datetime') && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Time', 'zoloblocks')}</div>

                                                <ColorControl
                                                    label={__('Text Color', 'zoloblocks')}
                                                    color={timeTextHoverColor}
                                                    onChange={(color) => setAttributes({ timeTextHoverColor: color })}
                                                />
                                                <ColorControl
                                                    label={__('Arrow Color', 'zoloblocks')}
                                                    color={timeArrowColor}
                                                    onChange={(color) => setAttributes({ timeArrowColor: color })}
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={TIME_BG_HOVER_COLOR}
                                                    noMainBGImg={false}
                                                />
                                            </>
                                        )}
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
                            block="zolo/text-field"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
