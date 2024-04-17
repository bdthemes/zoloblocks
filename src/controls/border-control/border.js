import { useEffect, useState } from '@wordpress/element';
import { prefix } from '../../global/constants';
import WithResDeviceBtn from '../with-res-device-btn';
import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';

const Borders = ({ top, right, bottom, left, onChange, neededProps, children }) => {
    const { label, setAttributes, controlName, isLinked } = neededProps;

    const [borders, setBorders] = useState({
        top,
        right,
        bottom,
        left,
    });

    useEffect(() => {
        setBorders({
            top,
            right,
            bottom,
            left,
        });
    }, [top, left, right, bottom]);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setBorders({
            ...borders,
            [name]: value,
        });
    };

    const setLinkedBorders = (value) => {
        setBorders({
            ...borders,
            top: value,
            bottom: value,
            left: value,
            right: value,
        });
    };

    useEffect(() => {
        onChange(borders);
    }, [borders]);

    useEffect(() => {
        setAttributes({
            [`${prefix}${controlName}IsLinked`]: isLinked,
        });
    }, [isLinked]);

    return (
        <div className="zb-dimension-container">
            <WithResDeviceBtn label={label} requiredProps={neededProps} controlName={controlName} noResetBtn={true}>
                {children}
                <div className={`input-container ${isLinked ? 'input-grouped' : 'input-separated'}`}>
                    {isLinked && (
                        <RangeControl
                            value={parseInt(borders.top) || parseInt(borders.right) || parseInt(borders.bottom) || parseInt(borders.left)}
                            onChange={(value) => setLinkedBorders(value.toString())}
                            min={0}
                            max={25}
                        />
                    )}
                    {!isLinked && (
                        <>
                            <div className="input-wrap">
                                <input type="number" name="top" value={borders.top} onChange={onInputChange} />
                                <label className="input-label">{__('Top', 'zoloblocks')}</label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="right" value={borders.right} onChange={onInputChange} />
                                <label className="input-label">{__('Right', 'zoloblocks')}</label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="bottom" value={borders.bottom} onChange={onInputChange} />
                                <label className="input-label">{__('Bottom', 'zoloblocks')}</label>
                            </div>

                            <div className="input-wrap">
                                <input type="number" name="left" value={borders.left} onChange={onInputChange} />
                                <label className="input-label">{__('Left', 'zoloblocks')}</label>
                            </div>
                        </>
                    )}
                </div>
            </WithResDeviceBtn>
        </div>
    );
};

export default Borders;
