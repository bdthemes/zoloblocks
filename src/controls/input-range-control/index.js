import UnitsBtn from '../units-btn';
import AnimationInputControl from './input';
import { prefix } from '../../global/constants';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import ResetBtn from '../reset-btn';
import LinkUnlink from '../link-unlink';

const AnimationInputRangeControl = ({ label, controlName, requiredProps, forBorderRadius, units, max = null }) => {
    const { attributes, setAttributes, resMode } = requiredProps;

    const {
        [`${prefix}${controlName}Unit`]: dimensionUnit,
        [`${prefix}${controlName}Top`]: dimensionTop,
        [`${prefix}${controlName}Right`]: dimensionRight,
        [`${prefix}${controlName}Bottom`]: dimensionBottom,
        [`${prefix}${controlName}Left`]: dimensionLeft,

        [`${prefix}TAB${controlName}Unit`]: TABdimensionUnit,
        [`${prefix}TAB${controlName}Top`]: TABdimensionTop,
        [`${prefix}TAB${controlName}Right`]: TABdimensionRight,
        [`${prefix}TAB${controlName}Bottom`]: TABdimensionBottom,
        [`${prefix}TAB${controlName}Left`]: TABdimensionLeft,

        [`${prefix}MOB${controlName}Unit`]: MOBdimensionUnit,
        [`${prefix}MOB${controlName}Top`]: MOBdimensionTop,
        [`${prefix}MOB${controlName}Right`]: MOBdimensionRight,
        [`${prefix}MOB${controlName}Bottom`]: MOBdimensionBottom,
        [`${prefix}MOB${controlName}Left`]: MOBdimensionLeft,

        [`${prefix}${controlName}IsLinked`]: dimensionIsLinked,
    } = attributes;

    const [isLinked, setIsLinked] = useState(dimensionIsLinked);

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: '%', value: '%' },
        { label: 'vh', value: 'vh' },
        { label: 'vw', value: 'vw' },
    ];

    const neededProps = {
        label,
        controlName,
        setAttributes,
        resMode,
        dimensionIsLinked,
        forBorderRadius,
        controlName,
        isLinked,
    };

    const onButtonClick = () => {
        setIsLinked(!isLinked);
    };

    return (
        <div className="zolo-dimensions-control-wraper">
            {
                <>
                    <UnitsBtn
                        selectedUnit={dimensionUnit}
                        unitTypes={units || defaultUnits}
                        onClick={(dimensionUnit) =>
                            setAttributes({
                                [`${prefix}${controlName}Unit`]: dimensionUnit,
                            })
                        }
                    >
                        <Button
                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                            icon={<LinkUnlink isLinked={isLinked} />}
                            onClick={onButtonClick}
                        />
                        {(dimensionTop || dimensionRight || dimensionBottom || dimensionLeft) && (
                            <ResetBtn
                                customClass="zb-reset-has-value"
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}${controlName}Top`]: '',
                                        [`${prefix}${controlName}Right`]: '',
                                        [`${prefix}${controlName}Bottom`]: '',
                                        [`${prefix}${controlName}Left`]: '',
                                    });
                                }}
                            />
                        )}
                    </UnitsBtn>

                    <AnimationInputControl
                        max={max}
                        top={dimensionTop}
                        right={dimensionRight}
                        bottom={dimensionBottom}
                        left={dimensionLeft}
                        neededProps={neededProps}
                        onChange={({ top, right, bottom, left }) => {
                            setAttributes({
                                [`${prefix}${controlName}Top`]: top,
                                [`${prefix}${controlName}Right`]: right,
                                [`${prefix}${controlName}Bottom`]: bottom,
                                [`${prefix}${controlName}Left`]: left,
                            });
                        }}
                    />
                </>
            }
        </div>
    );
};

export default AnimationInputRangeControl;
