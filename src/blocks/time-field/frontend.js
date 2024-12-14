import React, {useState, forwardRef} from 'react';
import DatePicker from 'react-datepicker';
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
        const CustomInput = forwardRef(({value, onClick, onChange}, ref) => (
          <>
            {showIcon && (
              <span
                className="zolo-input-icon"
                dangerouslySetInnerHTML={{__html: svgIcon}}
              />
            )}
            <input
              ref={ref}
              value={value}
              onClick={onClick}
              onChange={onChange}
              placeholder={placeholderMsg}
              className="zolo-form-time-picker"
              name={customNameAttribute}
              required={isRequired}
              {...(isRequired && {'data-pristine-required-message': requiredMsg})}
            />
          </>
        ));

        const DatePickerComponent = () => {
          const [selectedDate, setSelectedDate] = useState(defaultValue);

          return (
            <>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat={timeFormat}
                customInput={<CustomInput/>}
                showTimeSelectOnly
                timeInputLabel="Time"
                showTimeInput
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
