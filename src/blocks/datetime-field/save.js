import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import React from 'react';

const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        preset,
        uniqueId,
        parentClasses,
        zoloId,
        showLabel,
        label,
        placeholder,
        showIcon,
        icon,
        isRequired,
        showRequiredSymbol,
        requiredMsg,
        dateFormat,
        customNameAttribute,
        defaultValue,
        timeFormat,
        fieldType,
        dateRangeDefaultValue,
        minTime,
        maxTime,
        showEnableDate,
        enableDates,
        disableDates,
        disableDays,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `${showIcon ? 'zolo-field-icon' : ''}`, 'form-group'),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-field-item">
                {showLabel && (
                    <div className="zolo-label-wrapper">
                        <RichText.Content tagName="label" className="zolo-label" value={label} />
                        {isRequired && showRequiredSymbol && <span className="zolo-required">{__('*', 'zoloblocks')}</span>}
                    </div>
                )}

                <div
                    className="zolo-field-input-item"
                    data-fieldtype={fieldType}
                    data-showicon={JSON.stringify(showIcon && preset !== 'style-3')}
                    {...(showIcon && preset !== 'style-3'
                        ? {
                              'data-icon': JSON.stringify(icon),
                          }
                        : {})}
                    data-required={JSON.stringify(isRequired)}
                    data-uniqueid={uniqueId}
                    data-placeholder={placeholder}
                    data-requiredmsg={requiredMsg}
                    data-nameattribute={customNameAttribute}
                    {...(fieldType !== 'time'
                        ? {
                              'data-dateformat': dateFormat,
                              'data-defaultvalue': defaultValue,
                              'data-daterangedefaultvalue': JSON.stringify(dateRangeDefaultValue),
                              'data-showenabledate': JSON.stringify(showEnableDate),
                              'data-disabledates': JSON.stringify(disableDates),
                              'data-disabledays': JSON.stringify(disableDays),
                          }
                        : {})}
                    {...(showEnableDate && fieldType !== 'time'
                        ? {
                              'data-enabledates': JSON.stringify(enableDates),
                          }
                        : {})}
                    {...(fieldType === 'time' || fieldType === 'datetime'
                        ? {
                              'data-timeformat': timeFormat,
                              'data-mintime': minTime,
                              'data-maxtime': maxTime,
                          }
                        : {})}
                ></div>
            </div>
        </div>
    );
};

export default Save;
