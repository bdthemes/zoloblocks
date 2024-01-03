import { useEffect, useState } from '@wordpress/element';
import { prefix } from '../../global/constants';
import WithResDeviceBtn from '../with-res-device-btn';
import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';

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

    return (
        <div className="zb-dimension-container">
            <WithResDeviceBtn label={label} requiredProps={neededProps} controlName={controlName}>
                <div className={`input-container ${isLinked ? 'input-grouped' : 'input-separated'}`}>
                    {isLinked && (
                        <RangeControl
                            value={
                                parseInt(dimensions.top) ||
                                parseInt(dimensions.right) ||
                                parseInt(dimensions.bottom) ||
                                parseInt(dimensions.left) ||
                                null
                            }
                            onChange={(value) => setLinkedDimensions(value.toString())}
                            max={max || 100}
                        />
                    )}
                    {!isLinked && (
                        <>
                            <div className="input-wrap">
                                <input type="number" name="top" value={dimensions.top} onChange={onInputChange} />

                                <label className="input-label">
                                    {forBorderRadius ? __('T.Left', 'zolo-blocks') : __('Top', 'zolo-blocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="right" value={dimensions.right} onChange={onInputChange} />
                                <label className="input-label">
                                    {forBorderRadius ? __('T.Right', 'zolo-blocks') : __('Right', 'zolo-blocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="bottom" value={dimensions.bottom} onChange={onInputChange} />
                                <label className="input-label">
                                    {forBorderRadius ? __('B.Right', 'zolo-blocks') : __('Bottom', 'zolo-blocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="left" value={dimensions.left} onChange={onInputChange} />
                                <label className="input-label">
                                    {forBorderRadius ? __('B.Left', 'zolo-blocks') : __('Left', 'zolo-blocks')}
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
