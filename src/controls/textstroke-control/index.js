import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import ColorBtn from '../color-btn';

function TextShadowControl({ label = '', controlName, requiredProps }) {
    const { attributes, setAttributes, resMode, objAttributes } = requiredProps;

    const strokeWidthAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}strokeWidth`;
    const strokeUnitAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}strokeUnit`;
    const strokeWidthVal = attributes[strokeWidthAttr];
    const strokeUnitVal = attributes[strokeUnitAttr];

    const { [`${controlName}strokeColor`]: strokeColor } = attributes;

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
    ];

    return (
        <>
            <div className="zolo-box-shadow zolo-text-shadow zolo-text-stroke">
                <div className="zolo-label-area">
                    <UnitsBtn
                        selectedUnit={strokeUnitVal}
                        unitTypes={defaultUnits}
                        onClick={(sizeUnit) =>
                            setAttributes({
                                [strokeUnitAttr]: sizeUnit,
                            })
                        }
                    >
                        {(strokeColor || strokeWidthVal !== 0) && strokeWidthVal !== 'undefined' && strokeWidthVal !== '' && (
                            <ResetBtn
                                onReset={() => {
                                    setAttributes({
                                        [strokeUnitAttr]: 'px',
                                        [`${controlName}strokeColor`]: '',
                                        [strokeWidthAttr]: '',
                                    });
                                }}
                            />
                        )}
                        <ColorBtn
                            color={strokeColor}
                            onChange={(value) =>
                                setAttributes({
                                    [`${controlName}strokeColor`]: value,
                                })
                            }
                        />
                    </UnitsBtn>

                    <WithResDeviceBtn
                        label={label || __('Text Stroke', 'zoloblocks')}
                        requiredProps={requiredProps}
                        controlName={controlName}
                        noResetBtn={true}
                        noResponsive={false}
                    >
                        <div className="zolo-box-shadow-options">
                            <div className="single-shadow-input">
                                <RangeControl
                                    value={strokeWidthVal}
                                    onChange={(val) =>
                                        setAttributes({
                                            [strokeWidthAttr]: val,
                                        })
                                    }
                                    min={0}
                                    max={strokeUnitVal === 'em' || strokeUnitVal === 'rem' ? 1 : 10}
                                    step={strokeUnitVal === 'em' || strokeUnitVal === 'rem' ? 0.1 : 1}
                                />
                            </div>
                        </div>
                    </WithResDeviceBtn>
                </div>
            </div>
        </>
    );
}

export default TextShadowControl;
