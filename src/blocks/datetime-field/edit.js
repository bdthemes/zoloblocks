import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Flatpickr from 'react-flatpickr';

const { handleUniqueId, DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';
import Style from './style';
import { manageOptions } from '@/blocks/datetime-field/helper';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const {
        preset,
        preview,
        uniqueId,
        parentClasses,
        showLabel,
        label,
        placeholder,
        showIcon,
        icon,
        isRequired,
        showRequiredSymbol,
        dateFormat,
        customNameAttribute,
        defaultValue,
        fieldType,
        dateRangeDefaultValue,
        disableDates,
        disableDays,
        showEnableDate,
    } = attributes;

    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    useEffect(() => {
        setAttributes({
            showIcon: context['zolo/showFieldIcon'],
            preset: context['zolo/preset'],
        });
    }, [context]);

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId}`,
            classArrayToStr(parentClasses),
            `${showIcon ? 'zolo-field-icon' : ''}`,
            'form-group-editor'
        ),
    });

    const [selectedDate, setSelectedDate] =
        fieldType === 'date-range' || fieldType === 'date-multiple'
            ? useState(dateRangeDefaultValue || [])
            : useState(defaultValue || null);

    // Generate Flatpickr options
    const getFlatpickrOptions = () => {
        const baseOptions = {
            dateFormat,
            disable: [...disableDates, (date) => disableDays.includes(date.getDay())],
        };

        return manageOptions(baseOptions, attributes);
    };

    const handleDateChange = (dates) => {
        if (fieldType === 'date-range' || fieldType === 'date-multiple') {
            setSelectedDate(dates.map((date) => new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0]));
        } else {
            setSelectedDate(dates[0]);
        }
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zolo-field-item">
                    {showLabel && (
                        <div className="zolo-label-wrapper">
                            <RichText
                                tagName="label"
                                className="zolo-label"
                                value={label}
                                onChange={(v) => setAttributes({ label: v })}
                                placeholder={__('Label', 'zoloblocks')}
                            />
                            {isRequired && showRequiredSymbol && <span className="zolo-required">{__('*', 'zoloblocks')}</span>}
                        </div>
                    )}

                    <div className="zolo-field-input-item">
                        {showIcon && preset !== 'style-3' && (
                            <div className="zolo-input-icon">
                                <DisplayZoloIcon icon={icon} />
                            </div>
                        )}

                        <Flatpickr
                            key={fieldType + showEnableDate} // Force reinitialization when options change
                            className="zolo-date-field"
                            value={selectedDate}
                            onChange={handleDateChange}
                            name={customNameAttribute || 'date_field'}
                            placeholder={placeholder}
                            options={getFlatpickrOptions()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
