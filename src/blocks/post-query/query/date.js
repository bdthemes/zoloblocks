import { __experimentalInputControl as InputControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { dateCompareOptions } from "../utils";
const Date = ({ onChange, value }) => {
    return(
        <>
            <InputControl 
                label={__('Year', 'zoloblocks')}
                placeholder={__('Year', 'zoloblocks')}
                value={value?.year}
                onChange={newValue => onChange({ ...value, year: newValue })}
            />
            <InputControl 
                label={__('Month', 'zoloblocks')}
                placeholder={__('Month', 'zoloblocks')}
                value={value?.month}
                onChange={newValue => onChange({ ...value, month: newValue })}
            />
            <InputControl 
                label={__('Day', 'zoloblocks')}
                placeholder={__('Day', 'zoloblocks')}
                value={value?.day}
                onChange={newValue => onChange({ ...value, day: newValue })}
            />

            <SelectControl
                label={__('Comparison', 'zoloblocks')}
                value={value?.compare}
                onChange={newValue => onChange({ ...value, compare: newValue })}
                options={dateCompareOptions}
            />
        </>
    )
}
export default Date;