import { RangeControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { prefix } from '../../global/constants';
import WithResDeviceBtn from '../with-res-device-btn';

const sides = ['top', 'right', 'bottom', 'left'];

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
                            {sides.map((side) => (
                                <div className="input-wrap" key={side}>
                                    <input type="number" name={side} value={borders[side]} onChange={onInputChange} />
                                    <label className="input-label">{__(side.charAt(0).toUpperCase() + side.slice(1), 'zoloblocks')}</label>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </WithResDeviceBtn>
        </div>
    );
};

export default Borders;
