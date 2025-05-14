import { __ } from '@wordpress/i18n';
import { OBJECT_FITS } from '../../global/constants';

import { ZoloSelectControl } from '../core-controls';

const ObjectFitControl = ({ label = '', value, onChange }) => {
    return (
        <div className="zolo-control-container zolo-single-control">
            <ZoloSelectControl
                label={label || __('Object Fit', 'zoloblocks')}
                options={OBJECT_FITS}
                onChange={(v) => onChange(v)}
                value={value}
            />
        </div>
    );
};

export default ObjectFitControl;
