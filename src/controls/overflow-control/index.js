import { __ } from '@wordpress/i18n';
import { OVERFLOWS } from '../../global/constants';

import { ZoloSelectControl } from '../core-controls';

const OverflowControl = ({ label = '', value, onChange }) => {
    return (
        <div className="zolo-control-container zolo-single-control">
            <ZoloSelectControl
                label={label || __('Content Overflow', 'zoloblocks')}
                options={OVERFLOWS}
                onChange={(v) => onChange(v)}
                value={value}
            />
        </div>
    );
};

export default OverflowControl;
