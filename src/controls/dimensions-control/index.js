import UnitsBtn from '../units-btn';
import DimensionControl from './dimension';
import { prefix } from '../../global/constants';
import { ZoloButton } from '../core-controls';
import { useState } from '@wordpress/element';
import ResetBtn from '../reset-btn';
import LinkUnlink from '../link-unlink';

const ResDimensionsControl = ({ label, help="", controlName, requiredProps, forBorderRadius, units, max = null }) => {
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

    // Helper function to ensure valid numeric values
    const parseNumericValue = (value) => {
        if (value === '' || value === undefined || value === null) return '';
        const parsed = parseFloat(value);
        return isNaN(parsed) ? '' : parsed.toString(); // Convert to string to avoid NaN
    };

    return (
        <div className="zolo-dimensions-control-wraper">
            {resMode == 'Desktop' && (
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
                        <ZoloButton
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

                    <DimensionControl
                        max={max}
                        top={dimensionTop}
                        right={dimensionRight}
                        bottom={dimensionBottom}
                        left={dimensionLeft}
                        neededProps={neededProps}
                        onChange={({ top, right, bottom, left }) => {
                            setAttributes({
                                [`${prefix}${controlName}Top`]: parseNumericValue(top),
                                [`${prefix}${controlName}Right`]: parseNumericValue(right),
                                [`${prefix}${controlName}Bottom`]: parseNumericValue(bottom),
                                [`${prefix}${controlName}Left`]: parseNumericValue(left),
                            });
                        }}
                    />
                </>
            )}

            {resMode == 'Tablet' && (
                <>
                    <UnitsBtn
                        selectedUnit={TABdimensionUnit}
                        unitTypes={units || defaultUnits}
                        onClick={(TABdimensionUnit) =>
                            setAttributes({
                                [`${prefix}TAB${controlName}Unit`]: TABdimensionUnit,
                            })
                        }
                    >
                        <ZoloButton
                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                            icon={<LinkUnlink isLinked={isLinked} />}
                            onClick={onButtonClick}
                        />
                        {(TABdimensionTop || TABdimensionRight || TABdimensionBottom || TABdimensionLeft) && (
                            <ResetBtn
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}TAB${controlName}Top`]: '',
                                        [`${prefix}TAB${controlName}Right`]: '',
                                        [`${prefix}TAB${controlName}Bottom`]: '',
                                        [`${prefix}TAB${controlName}Left`]: '',
                                    });
                                }}
                            />
                        )}
                    </UnitsBtn>

                    <DimensionControl
                        max={max}
                        top={TABdimensionTop}
                        right={TABdimensionRight}
                        bottom={TABdimensionBottom}
                        left={TABdimensionLeft}
                        neededProps={neededProps}
                        onChange={({ top, right, bottom, left }) => {
                            setAttributes({
                                [`${prefix}TAB${controlName}Top`]: parseNumericValue(top),
                                [`${prefix}TAB${controlName}Right`]: parseNumericValue(right),
                                [`${prefix}TAB${controlName}Bottom`]: parseNumericValue(bottom),
                                [`${prefix}TAB${controlName}Left`]: parseNumericValue(left),
                            });
                        }}
                    />
                </>
            )}

            {resMode == 'Mobile' && (
                <>
                    <UnitsBtn
                        selectedUnit={MOBdimensionUnit}
                        unitTypes={units || defaultUnits}
                        onClick={(MOBdimensionUnit) =>
                            setAttributes({
                                [`${prefix}MOB${controlName}Unit`]: MOBdimensionUnit,
                            })
                        }
                    >
                        <ZoloButton
                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                            icon={<LinkUnlink isLinked={isLinked} />}
                            onClick={onButtonClick}
                        />
                        {(MOBdimensionTop || MOBdimensionRight || MOBdimensionBottom || MOBdimensionLeft) && (
                            <ResetBtn
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}MOB${controlName}Top`]: '',
                                        [`${prefix}MOB${controlName}Right`]: '',
                                        [`${prefix}MOB${controlName}Bottom`]: '',
                                        [`${prefix}MOB${controlName}Left`]: '',
                                    });
                                }}
                            />
                        )}
                    </UnitsBtn>

                    <DimensionControl
                        max={max}
                        top={MOBdimensionTop}
                        right={MOBdimensionRight}
                        bottom={MOBdimensionBottom}
                        left={MOBdimensionLeft}
                        neededProps={neededProps}
                        onChange={({ top, right, bottom, left }) => {
                            setAttributes({
                                [`${prefix}MOB${controlName}Top`]: parseNumericValue(top),
                                [`${prefix}MOB${controlName}Right`]: parseNumericValue(right),
                                [`${prefix}MOB${controlName}Bottom`]: parseNumericValue(bottom),
                                [`${prefix}MOB${controlName}Left`]: parseNumericValue(left),
                            });
                        }}
                    />
                </>
            )}
            {help && <p className="components-base-control__help">{help}</p>}
        </div>
    );
};

export default ResDimensionsControl;
