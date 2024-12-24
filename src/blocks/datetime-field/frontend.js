import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Flatpickr from "react-flatpickr";

document.addEventListener('DOMContentLoaded', () => {
  const zoloDateFieldWrap = document.querySelectorAll('.wp-block-zolo-datetime-field');
  if (zoloDateFieldWrap.length > 0) {
    zoloDateFieldWrap.forEach((dateFieldWrap) => {
      const zoloFieldItem = dateFieldWrap.querySelector('.zolo-field-input-item');

      if (zoloFieldItem) {

        const showIcon = JSON.parse(zoloFieldItem.dataset.showicon);
        const isRequired = JSON.parse(zoloFieldItem.dataset.required);
        const requiredMsg = zoloFieldItem.dataset.requiredmsg;
        const placeholderMsg = zoloFieldItem.dataset.placeholder;
        const svgIcon = JSON.parse(zoloFieldItem.dataset.icon);
        const dateFormat = zoloFieldItem.dataset.dateformat;
        const timeFormat = zoloFieldItem.dataset.timeformat;
        const customNameAttribute = zoloFieldItem.dataset.nameattribute;
        const defaultValue = zoloFieldItem.dataset.defaultvalue;
        const fieldType = zoloFieldItem.dataset.fieldtype;
        const DatePickerComponent = () => {
          const [selectedDate, setSelectedDate] = useState(null);

          return (
            <>
              {showIcon && (
                <span
                  className="zolo-input-icon"
                  dangerouslySetInnerHTML={{__html: svgIcon}}
                />
              )}

              <Flatpickr
                value={selectedDate || defaultValue}
                onChange={(date) => setSelectedDate(date[0])}
                options={{
                  ...(fieldType === 'date' && {
                    dateFormat: dateFormat,
                    enableTime: false
                  }),
                  ...(fieldType === 'datetime' && {
                    dateFormat: dateFormat + ' ' + timeFormat,
                    enableTime: true
                  }),
                  ...(fieldType === 'time' && {
                    dateFormat: timeFormat,
                    enableTime: true,
                    noCalendar: true
                  }),

                }}
                render={({defaultValue, ...props}, ref) => (
                  <input
                    {...props}
                    ref={ref}
                    defaultValue={defaultValue}
                    placeholder={placeholderMsg}
                    required={isRequired}
                    name={customNameAttribute}
                    {...(isRequired && {'data-pristine-required-message': requiredMsg})}
                  />
                )}
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
