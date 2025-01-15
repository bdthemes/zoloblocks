/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateDimensionStyle,
    generateBorderStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

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

    // Date/Time
    DATE_HEAD_BG,
    DATE_BODY_BG,
    DATE_BODY_BG_HOVER,
    DATE_BODY_SELECTED,
    DATE_BODY_TODAY_BG_HOVER,
    DATE_BODY_TODAY_BG,
    TIME_BG_COLOR,
    TIME_BG_HOVER_COLOR,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        showLabel,
        labelColor,
        textColor,
        placeholderColor,
        iconColor,
        showRequiredSymbol,
        requiredColor,
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

    // label
    const {
        desktopBorderStyle: labelBorderStyles,
        tabBorderStyle: labelBorderStylesTab,
        mobBorderStyle: labelBorderStylesMob,
    } = generateBorderStyle({
        controlName: LABEL_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: labelBRDesktop,
        dimensionStylesTab: labelBRTab,
        dimensionStylesMobile: labelBRMob,
    } = generateDimensionStyle({
        controlName: LABEL_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: labelPaddingDesk,
        dimensionStylesTab: labelPaddingTab,
        dimensionStylesMobile: labelPaddingMob,
    } = generateDimensionStyle({
        controlName: LABEL_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { backgroundStylesDesktop: labelBGStyle } = generateNormalBGControlStyles({
        controlName: LABEL_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        dimensionStylesDesktop: labelMarginDesk,
        dimensionStylesTab: labelMarginTab,
        dimensionStylesMobile: labelMarginMob,
    } = generateDimensionStyle({
        controlName: LABEL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: labelTypoDesk,
        typoStylesTab: labelTypoTab,
        typoStylesMobile: labelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LABEL_TYPO,
        defaultFontSize: '',
        attributes,
    });

    // Field
    const {
        typoStylesDesktop: fieldTypoDesk,
        typoStylesTab: fieldTypoTab,
        typoStylesMobile: fieldTypoMob,
    } = generateTypographyStyles({
        prefixConstant: FIELD_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        desktopBorderStyle: fieldBorderStyles,
        tabBorderStyle: fieldBorderStylesTab,
        mobBorderStyle: fieldBorderStylesMob,
    } = generateBorderStyle({
        controlName: FIELD_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldBRDesktop,
        dimensionStylesTab: fieldBRTab,
        dimensionStylesMobile: fieldBRMob,
    } = generateDimensionStyle({
        controlName: FIELD_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: fieldPaddingDesktop,
        dimensionStylesTab: fieldPaddingTab,
        dimensionStylesMobile: fieldPaddingMob,
    } = generateDimensionStyle({
        controlName: FIELD_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: fieldBGStyle,
        backgroundStylesTab: fieldTabBGStyle,
        backgroundStylesMobile: fieldMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: FIELD_BG,
        attributes,
        noMainBGImg: false,
    });

    // Icon
    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconTabSize,
        mobRangeStyle: iconMobSize,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // Date Time Field
    const {
        backgroundStylesDesktop: dateHeadBGStyleDesk,
        backgroundStylesTab: dateHeadBGStyleTab,
        backgroundStylesMobile: dateHeadBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: DATE_HEAD_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: dateBodyBGStyleDesk,
        backgroundStylesTab: dateBodyBGStyleTab,
        backgroundStylesMobile: dateBodyBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: DATE_BODY_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: dateBodyBGHoverStyleDesk,
        backgroundStylesTab: dateBodyBGHoverStyleTab,
        backgroundStylesMobile: dateBodyBGHoverStyleMob,
    } = generateNormalBGControlStyles({
        controlName: DATE_BODY_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: dateBodySelectedStyleDesk,
        backgroundStylesTab: dateBodySelectedStyleTab,
        backgroundStylesMobile: dateBodySelectedStyleMob,
    } = generateNormalBGControlStyles({
        controlName: DATE_BODY_SELECTED,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: dateBodyTodayBGHoverStyleDesk,
        backgroundStylesTab: dateBodyTodayBGHoverStyleTab,
        backgroundStylesMobile: dateBodyTodayBGHoverStyleMob,
    } = generateNormalBGControlStyles({
        controlName: DATE_BODY_TODAY_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: dateBodyTodayBGStyleDesk,
        backgroundStylesTab: dateBodyTodayBGStyleTab,
        backgroundStylesMobile: dateBodyTodayBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: DATE_BODY_TODAY_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: timeBGStyleDesk,
        backgroundStylesTab: timeBGStyleTab,
        backgroundStylesMobile: timeBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: TIME_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: timeBGHoverStyleDesk,
        backgroundStylesTab: timeBGHoverStyleTab,
        backgroundStylesMobile: timeBGHoverStyleMob,
    } = generateNormalBGControlStyles({
        controlName: TIME_BG_HOVER_COLOR,
        attributes,
        noMainBGImg: false,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId}.wp-block-zolo-datetime-field .zolo-label-wrapper {
                ${labelMarginDesk}
            }
            .${uniqueId}.wp-block-zolo-datetime-field .zolo-label {
                ${labelTypoDesk}
                color: ${labelColor};
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-datetime-field .zolo-label{
                ${labelPaddingDesk}
                ${labelBGStyle}
                ${labelBorderStyles}
                ${labelBRDesktop}
            }
            ${
                showRequiredSymbol
                    ? `
                .${uniqueId}.wp-block-zolo-datetime-field .zolo-required {
                    color: ${requiredColor};
                }
            `
                    : ''
            }
        `
                : ''
        }
        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item input {
            ${textColor ? `color: ${textColor};` : ''}
            ${fieldTypoDesk}
            ${fieldBorderStyles}
            ${fieldBRDesktop}
            ${fieldPaddingDesktop}
            ${fieldBGStyle}
        }
        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item input::placeholder {
            ${placeholderColor ? `color: ${placeholderColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item .zolo-input-icon svg {
            ${iconSize}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-current-month .flatpickr-monthDropdown-months,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-months .flatpickr-month,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-weekdays,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-weekday {
           ${dateHeadBGStyleDesk}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-months .flatpickr-month {
            ${dateMonthColor ? `color: ${dateMonthColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-monthDropdown-months:focus,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-monthDropdown-months:hover{
            ${dateMonthHoverColor ? `color: ${dateMonthHoverColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-current-month input.cur-year{
            ${dateYearColor ? `color: ${dateYearColor};` : ''}
           
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-months .flatpickr-prev-month, 
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-months .flatpickr-next-month {
            ${dateNavColor ? `fill: ${dateNavColor};` : ''}
            ${dateNavColor ? `color: ${dateNavColor};` : ''}
        }

       .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-months:hover .flatpickr-prev-month,
       .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-months:hover .flatpickr-next-month {
            ${dateNavHoverColor ? `color: ${dateNavHoverColor};` : ''}
            
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-weekday {
            ${dateDaysColor ? `color: ${dateDaysColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-innerContainer {
            ${dateBodyBGStyleDesk}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day{
            ${dateBodyColor ? `color: ${dateBodyColor};` : ''}
        }
 
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.nextMonthDay,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.prevMonthDay{
            ${dateBodyNextColor ? `color: ${dateBodyNextColor};` : ''}
        }
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.flatpickr-disabled{
            ${dateDisableColor ? `color: ${dateDisableColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.today{
            ${dateBodyTodayColor ? `color: ${dateBodyTodayColor};` : ''}
            ${dateBodyTodayBorderColor ? `border-color: ${dateBodyTodayBorderColor};` : ''}
            ${dateBodyTodayBGStyleDesk}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day:hover{
            ${dateBodyBGHoverStyleDesk}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.today:hover{
            ${dateBodyTodayHoverColor ? `color: ${dateBodyTodayHoverColor};` : ''}
            ${dateBodyTodayHoverBorderColor ? `border-color: ${dateBodyTodayHoverBorderColor};` : ''}
             ${dateBodyTodayBGHoverStyleDesk}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.selected{
            ${dateBodySelectedColor ? `color: ${dateBodySelectedColor};` : ''}
            ${dateBodySelectedBorderColor ? `border-color: ${dateBodySelectedBorderColor};` : ''}
             ${dateBodySelectedStyleDesk}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-day.inRange{
            ${dateBodyRangeColor ? `color: ${dateBodyRangeColor};` : ''}
            ${dateBodyRangeBgColor ? `--zolo-date-range-color: ${dateBodyRangeBgColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time input,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time .flatpickr-time-separator,
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time .flatpickr-am-pm{
            ${timeTextColor ? `color: ${timeTextColor};` : ''}
        }

        .zolo-datepicker-${uniqueId}.flatpickr-calendar.hasTime .flatpickr-time{
            ${timeBorderColor ? `border-color: ${timeBorderColor};` : ''}
        }
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time{
            ${timeBGStyleDesk}
        }
            
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time {
            ${timeArrowColor ? `--zolo-time-arrow-color: ${timeArrowColor};` : ''}
        }
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time input:hover, 
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover, 
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time input:focus, 
        .zolo-datepicker-${uniqueId}.flatpickr-calendar .flatpickr-time .flatpickr-am-pm:focus{
            ${timeBGHoverStyleDesk}
             ${timeTextHoverColor ? `color: ${timeTextHoverColor};` : ''}
        }

    `;

    const tabletAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId}.wp-block-zolo-datetime-field .zolo-label-wrapper {
                ${labelMarginTab}
            }
            .${uniqueId}.wp-block-zolo-datetime-field .zolo-label {
                ${labelTypoTab}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-datetime-field .zolo-label {
                ${labelPaddingTab}
                ${labelBorderStylesTab}
                ${labelBRTab}
            }
        `
                : ''
        }

        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item input {
            ${fieldTypoTab}
            ${fieldBorderStylesTab}
            ${fieldBRTab}
            ${fieldPaddingTab}
            ${fieldTabBGStyle}
        }

        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item .zolo-input-icon svg {
            ${iconTabSize}
        }
    `;

    const mobileAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId}.wp-block-zolo-datetime-field .zolo-label-wrapper {
                ${labelMarginMob}
            }
            .${uniqueId}.wp-block-zolo-datetime-field .zolo-label {
                ${labelTypoMob}
            }
            .wp-block-zolo-form.style-3 .${uniqueId}.wp-block-zolo-datetime-field .zolo-label {
                ${labelPaddingMob}
                ${labelBorderStylesMob}
                ${labelBRMob}
            }
        `
                : ''
        }

        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item input {
            ${fieldTypoMob}
            ${fieldBorderStylesMob}
            ${fieldBRMob}
            ${fieldPaddingMob}
            ${fieldMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-datetime-field .zolo-field-input-item .zolo-input-icon svg {
            ${iconMobSize}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.textField.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.textField.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.textField.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
