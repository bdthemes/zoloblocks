import { useEffect, useState } from '@wordpress/element';
import { prefix } from '../../global/constants';
import WithResDeviceBtn from '../with-res-device-btn';
import { __ } from '@wordpress/i18n';
import { RangeControl, __experimentalNumberControl as NumberControl} from '@wordpress/components';

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
                        <div className="zolo-input-range-wrapper">
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
                                withInputField={false}
                            />
                            <NumberControl
                                value={
                                    parseInt(dimensions.top) ||
                                    parseInt(dimensions.right) ||
                                    parseInt(dimensions.bottom) ||
                                    parseInt(dimensions.left) ||
                                    null
                                }
                                onChange={(value) => setLinkedDimensions(value.toString())}
                            />
                        </div>
                    )}
                    {!isLinked && (
                        <>
                            <div className="input-wrap">
                                <input type="number" name="top" value={dimensions.top} onChange={onInputChange} />

                                <label className="input-label">
                                    {forBorderRadius ? __('T.Left', 'zoloblocks') : __('Top', 'zoloblocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="right" value={dimensions.right} onChange={onInputChange} />
                                <label className="input-label">
                                    {forBorderRadius ? __('T.Right', 'zoloblocks') : __('Right', 'zoloblocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="bottom" value={dimensions.bottom} onChange={onInputChange} />
                                <label className="input-label">
                                    {forBorderRadius ? __('B.Right', 'zoloblocks') : __('Bottom', 'zoloblocks')}
                                </label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="left" value={dimensions.left} onChange={onInputChange} />
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
