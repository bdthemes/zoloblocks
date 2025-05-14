import { useEffect, useState } from '@wordpress/element';
import { prefix } from '../../global/constants';
import WithResDeviceBtn from '../with-res-device-btn';
import { __ } from '@wordpress/i18n';
import { ZoloRangeControl, ZoloNumberControl } from '../core-controls';

const DimensionControl = ({ top, right, bottom, left, onChange, neededProps, min = null, max = null }) => {
    const { label, setAttributes, forBorderRadius, controlName, isLinked } = neededProps;

    const [dimensions, setDimensions] = useState({
        top,
        right,
        bottom,
        left,
    });

    useEffect(() => {
        setDimensions({
            top,
            right,
            bottom,
            left,
        });
    }, [top, left, right, bottom]);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setDimensions({
            ...dimensions,
            [name]: value,
        });
    };

    const setLinkedDimensions = (value) => {
        setDimensions({
            ...dimensions,
            top: value,
            bottom: value,
            left: value,
            right: value,
        });
    };

    useEffect(() => {
        onChange(dimensions);
    }, [dimensions]);

    useEffect(() => {
        setAttributes({
            [`${prefix}${controlName}IsLinked`]: isLinked,
        });
    }, [isLinked]);

    // Helper function to safely parse numeric values
    const safeParseInt = (value) => {
        if (value === '' || value === undefined || value === null) return '';
        const parsed = parseInt(value);
        return isNaN(parsed) ? '' : parsed;
    };

    // Get the current linked value
    const getLinkedValue = () => {
        const values = [
            safeParseInt(dimensions.top),
            safeParseInt(dimensions.right),
            safeParseInt(dimensions.bottom),
            safeParseInt(dimensions.left)
        ].filter(val => val !== '');

        return values.length > 0 ? values[0] : '';
    };

    return (
        <div className="zb-dimension-container">
            <WithResDeviceBtn label={label} requiredProps={neededProps} controlName={controlName}>
                <div className={`input-container ${isLinked ? 'input-grouped' : 'input-separated'}`}>
                    {isLinked && (
                        <div className="zolo-input-range-wrapper">
                            <ZoloRangeControl
                                value={getLinkedValue()}
                                onChange={(value) => setLinkedDimensions(value?.toString() || '')}
                                max={max || 100}
                                min={min || 0}
                                withInputField={false}
                            />
                            <ZoloNumberControl
                                value={getLinkedValue()}
                                onChange={(value) => setLinkedDimensions(value?.toString() || '')}
                                min={min || 0}
                                max={max || 100}
                            />
                        </div>
                    )}
                    {!isLinked && (
                        <>
                            <div className="input-wrap">
                                <input
                                    type="number"
                                    name="top"
                                    value={dimensions.top}
                                    onChange={onInputChange}
                                    min={min || 0}
                                    max={max}
                                />
                                <label className="input-label">
                                    {forBorderRadius ? __('T.Left', 'zoloblocks') : __('Top', 'zoloblocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input
                                    type="number"
                                    name="right"
                                    value={dimensions.right}
                                    onChange={onInputChange}
                                    min={min || 0}
                                    max={max}
                                />
                                <label className="input-label">
                                    {forBorderRadius ? __('T.Right', 'zoloblocks') : __('Right', 'zoloblocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input
                                    type="number"
                                    name="bottom"
                                    value={dimensions.bottom}
                                    onChange={onInputChange}
                                    min={min || 0}
                                    max={max}
                                />
                                <label className="input-label">
                                    {forBorderRadius ? __('B.Right', 'zoloblocks') : __('Bottom', 'zoloblocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input
                                    type="number"
                                    name="left"
                                    value={dimensions.left}
                                    onChange={onInputChange}
                                    min={min || 0}
                                    max={max}
                                />
                                <label className="input-label">
                                    {forBorderRadius ? __('B.Left', 'zoloblocks') : __('Left', 'zoloblocks')}
                                </label>
                            </div>
                        </>
                    )}
                </div>
            </WithResDeviceBtn>
        </div>
    );
};

export default DimensionControl;
