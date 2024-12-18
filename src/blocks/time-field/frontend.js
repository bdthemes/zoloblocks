import React, {useState, forwardRef} from 'react';
import Datetime from 'react-datetime';
import {createRoot} from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const zoloDateFieldWrap = document.querySelectorAll('.wp-block-zolo-time-field');
  if (zoloDateFieldWrap.length > 0) {
    zoloDateFieldWrap.forEach((dateFieldWrap) => {
      const zoloFieldItem = dateFieldWrap.querySelector('.zolo-field-input-item');

      if (zoloFieldItem) {

        const showIcon = JSON.parse(zoloFieldItem.dataset.showicon);
        const isRequired = JSON.parse(zoloFieldItem.dataset.required);
        const requiredMsg = zoloFieldItem.dataset.requiredmsg;
        const placeholderMsg = zoloFieldItem.dataset.placeholder;
        const svgIcon = JSON.parse(zoloFieldItem.dataset.icon);
        const timeFormat = zoloFieldItem.dataset.dateformat;
        const customNameAttribute = zoloFieldItem.dataset.nameattribute;
        const defaultValue = zoloFieldItem.dataset.defaultvalue;
        const DatePickerComponent = () => {
          const [selectedTime, setSelectedTime] = useState(defaultValue);
          return (
            <>
              {showIcon && (
                <span
                  className="zolo-input-icon"
                  dangerouslySetInnerHTML={{__html: svgIcon}}
                />
              )}
              <Datetime
                value={selectedTime}
                onChange={(date) => setSelectedTime(date)}
                dateFormat={false}
                timeFormat={timeFormat}
                className="zolo-form-time-picker"
                inputProps={{
                  placeholder:placeholderMsg,
                  name: customNameAttribute,
                  required: isRequired,
                  ...(isRequired && {'data-pristine-required-message': requiredMsg})
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
