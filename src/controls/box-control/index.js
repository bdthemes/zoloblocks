import { BoxControl } from '@wordpress/components';
import hasCssUnit from './has-css-unit';

const ZoloBoxControl = ({ label, value, onChange, ...props }) => {
    return (
        <div className="zb-box-control-wrapper">
            <BoxControl
                label={label}
                values={value}
                onChange={(values) => {
                    if (values && Object.keys(values).length > 0) {
                        let finalValues = {};
                        for (const key in values) {
                            if (!values[key]) {
                                continue;
                            }
                            if (hasCssUnit(values[key])) {
                                finalValues[key] = values[key];
                            } else {
                                finalValues[key] = `${values[key]}px`;
                            }
                        }
                        onChange(finalValues);
                    }
                }}
                {...props}
            />
        </div>
    )
}

export default ZoloBoxControl;
