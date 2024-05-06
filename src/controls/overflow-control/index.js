import { __ } from '@wordpress/i18n';
import { OVERFLOWS } from '../../global/constants';

import { SelectControl } from '@wordpress/components';
import IconicBtnGroup from '../iconic-btn-group';

const OverflowControl = ({ label = '', value, onChange }) => {
    return (
        <div className="zolo-control-container zolo-single-control">
            <SelectControl
                label={label || __('Content Overflow', 'zoloblocks')}
                options={OVERFLOWS}
                onChange={(v) => onChange(v)}
                value={value}
            />
            {/* <IconicBtnGroup
                label={label || __('Content Overflow', 'zoloblocks')}
                value={value}
                onChange={(v) => onChange(v)}
                options={OVERFLOWS}
            /> */}
        </div>
    );
};

export default OverflowControl;
