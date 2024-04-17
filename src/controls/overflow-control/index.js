import { __ } from '@wordpress/i18n';
import { OVERFLOWS } from '../../global/constants';

import { SelectControl } from '@wordpress/components';

const OverflowControl = ({ label = '', value, onChange }) => {
    return (
        <div className="zolo-control-container zolo-single-control">
            <SelectControl
                label={label || __('Content Overflow', 'zoloblocks')}
                options={OVERFLOWS}
                onChange={(v) => onChange(v)}
                value={value}
            />
        </div>
    );
};

export default OverflowControl;
