import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

const ZoloReactSelect = ({ label = __('Select', 'zoloblocks'), value, onChange, options, ...props }) => {
    return (
        <BaseControl label={label} className="zolo-flex-col-control">
            <Select
                options={options}
                value={value}
                onChange={onChange}
                isClearable
                isSearchable
                classNamePrefix="zolo-select"
                {...props}
            />
        </BaseControl>
    )
};

const ZoloAsyncSelect = ({ label = __('Select', 'zoloblocks'), value, onChange, options, ...props }) => {
    return (
        <BaseControl label={label} className="zolo-flex-col-control">
            <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={options}
                value={value}
                onChange={onChange}
                isClearable
                isSearchable
                classNamePrefix="zolo-select"
                {...props}
            />
        </BaseControl>
    )
}
export { ZoloReactSelect, ZoloAsyncSelect };