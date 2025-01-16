import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Flatpickr from "react-flatpickr";
import {generateUniqueName} from '../../helpers/helper';
document.addEventListener('DOMContentLoaded', () => {
  const zoloDateFieldWrap = document.querySelectorAll('.wp-block-zolo-datetime-field');
  if (zoloDateFieldWrap.length > 0) {
    zoloDateFieldWrap.forEach((dateFieldWrap) => {
      const zoloFieldItem = dateFieldWrap.querySelector('.zolo-field-input-item');

      if (zoloFieldItem) {
        const fieldType = zoloFieldItem.dataset.fieldtype;
        const showIcon = JSON.parse(zoloFieldItem.dataset.showicon || '{}');
        const isRequired = JSON.parse(zoloFieldItem.dataset.required || '{}');
        const requiredMsg = zoloFieldItem.dataset.requiredmsg;
        const placeholderMsg = zoloFieldItem.dataset.placeholder;
        const svgIcon = showIcon ? JSON.parse(zoloFieldItem.dataset.icon || '{}') : '';
        const customNameAttribute = zoloFieldItem.dataset.nameattribute;
        const uniqueId = zoloFieldItem?.dataset?.uniqueid;

        const dateFormat = zoloFieldItem.dataset.dateformat;
        const defaultValue = zoloFieldItem.dataset.defaultvalue;
        const dateRangeDefaultValue = JSON.parse(zoloFieldItem.dataset.daterangedefaultvalue || '{}');
        const showEnableDate = JSON.parse(zoloFieldItem.dataset.showenabledate || '{}');
        const disableDates = JSON.parse(zoloFieldItem.dataset.disabledates || '{}');
        const enableDates = showEnableDate ? JSON.parse(zoloFieldItem.dataset.enabledates || '{}') : false;
        const disableDays = JSON.parse(zoloFieldItem.dataset.disabledays || '{}');

        const timeFormat = zoloFieldItem.dataset.timeformat;
        const minTime = zoloFieldItem.dataset.mintime;
        const maxTime = zoloFieldItem.dataset.maxtime;

        const DatePickerComponent = () => {
          const [selectedDate, setSelectedDate] = fieldType === 'date-range' ? useState(dateRangeDefaultValue || []) : useState(defaultValue || null);
          return (
            <>
              {showIcon && (
                <span
                  className="zolo-input-icon"
                  dangerouslySetInnerHTML={{__html: svgIcon}}
                />
              )}

              <Flatpickr
                // key={fieldType + showEnableDate}
                value={selectedDate || ''}
                onChange={(dates) => {
                  if (fieldType === 'date-range' || fieldType === 'date-multiple') {
                    const adjustedDates = dates.map(date => {
                      return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                        .toISOString()
                        .split('T')[0];
                    });
                    setSelectedDate(adjustedDates);
                  } else {
                    setSelectedDate(dates[0]);
                  }
                }}
                options={{
                  ...(fieldType !== 'time' ? {
                    dateFormat,
                    enableTime: false,
                    disable: [
                      ...disableDates,
                      (date) => disableDays.includes(date.getDay()),
                    ],
                  } : {}),

                  ...((showEnableDate && fieldType !== 'time') ? {enable: enableDates} : {}),

                  ...(fieldType === 'datetime' && {
                    dateFormat: dateFormat + ' ' + timeFormat,
                    enableTime: true,
                    ...(minTime ? {minTime} : {}),
                    ...(maxTime ? {maxTime} : {}),
                  }),
                  ...(fieldType === 'time' && {
                    dateFormat: timeFormat,
                    enableTime: true,
                    noCalendar: true,
                    ...(minTime ? {minTime} : {}),
                    ...(maxTime ? {maxTime} : {}),
                  }),
                  ...(fieldType === 'date-range' && {
                    mode: 'range',
                    dateFormat: dateFormat,
                  }),
                  ...(fieldType === 'date-multiple' && {
                    mode: 'multiple',
                    dateFormat: dateFormat,
                  })
                }}
                render={({defaultValue, ...props}, ref) => (
                  <input
                    {...props}
                    ref={ref}
                    defaultValue={defaultValue}
                    onChange={()=>null}
                    placeholder={placeholderMsg}
                    required={isRequired}
                    name={generateUniqueName(uniqueId,customNameAttribute,'date_field')}
                    {...(isRequired && {'data-pristine-required-message': requiredMsg})}
                  />
                )}
                onOpen={(event, ui, instance) => {
                  const calendarContainer = instance?.calendarContainer;
                  if (calendarContainer) {
                    calendarContainer.classList.add(`zolo-datepicker-${uniqueId}`);
                  }
                }}
                onClose={(event, ui, instance) => {
                  const calendarContainer = instance?.calendarContainer;
                  if (calendarContainer) {
                    calendarContainer.classList.remove(`zolo-datepicker-${uniqueId}`);
                  }
                }}
              />

            </>
          );
        };

        const root = createRoot(zoloFieldItem);
        root.render(<DatePickerComponent/>);
      }
    });
  }
});
