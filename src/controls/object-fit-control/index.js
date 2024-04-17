import { __ } from '@wordpress/i18n';
import { OBJECT_FITS } from '../../global/constants';

import { SelectControl } from '@wordpress/components';

const ObjectFitControl = ({ label = '', value, onChange }) => {
    return (
        <div className="zolo-control-container zolo-single-control">
            <SelectControl
                label={label || __('Object Fit', 'zoloblocks')}
                options={OBJECT_FITS}
                onChange={(v) => onChange(v)}
                value={value}
            />
        </div>
    );
};

export default ObjectFitControl;
