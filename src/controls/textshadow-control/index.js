import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import ColorBtn from '../color-btn';

function TextShadowControl({ label = '', controlName, requiredProps }) {
    const { setAttributes, attributes } = requiredProps;

    const {
        [`${controlName}shadowColor`]: shadowColor,
        [`${controlName}shadowUnit`]: shadowUnit,
        [`${controlName}hShadow`]: hShadow,
        [`${controlName}vShadow`]: vShadow,
        [`${controlName}blur`]: blur,
    } = attributes;

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
    ];

    return (
        <div className="zolo-box-shadow zolo-text-shadow">
            <div className="zolo-label-area">
                <UnitsBtn
                    selectedUnit={shadowUnit}
                    unitTypes={defaultUnits}
                    onClick={(sizeUnit) =>
                        setAttributes({
                            [`${controlName}shadowUnit`]: sizeUnit,
                        })
                    }
                >
                    <ResetBtn
                        onReset={() => {
                            setAttributes({
                                [`${controlName}shadowUnit`]: 'px',
                                [`${controlName}shadowColor`]: '',
                                [`${controlName}hShadow`]: '',
                                [`${controlName}vShadow`]: '',
                                [`${controlName}blur`]: '',
                            });
                        }}
                    />
                    <ColorBtn
                        color={shadowColor}
                        onChange={(value) =>
                            setAttributes({
                                [`${controlName}shadowColor`]: value,
                            })
                        }
                    />
                </UnitsBtn>
                <WithResDeviceBtn
                    label={label || __('Text Shadow', 'zolo-blocks')}
                    requiredProps={requiredProps}
                    controlName={controlName}
                    noResetBtn={true}
                    noResponsive={true}
                >
                    <div className="zolo-box-shadow-options">
                        <div className="single-shadow-input">
                            <NumberControl
                                isShiftStepEnabled={true}
                                onChange={(hShadow) =>
                                    setAttributes({
                                        [`${controlName}hShadow`]: parseInt(hShadow),
                                    })
                                }
                                value={hShadow}
                                type="number"
                            />
                            <div className="input-label">{__('X', 'zolo-blocks')}</div>
                        </div>
                        <div className="single-shadow-input">
                            <NumberControl
                                isShiftStepEnabled={true}
                                onChange={(vShadow) =>
                                    setAttributes({
                                        [`${controlName}vShadow`]: parseInt(vShadow),
                                    })
                                }
                                value={vShadow}
                                type="number"
                            />
                            <div className="input-label">{__('Y', 'zolo-blocks')}</div>
                        </div>
                        <div className="single-shadow-input">
                            <NumberControl
                                isShiftStepEnabled={true}
                                onChange={(blur) =>
                                    setAttributes({
                                        [`${controlName}blur`]: parseInt(blur),
                                    })
                                }
                                value={blur}
                                min={0}
                                type="number"
                            />
                            <div className="input-label">{__('Blur', 'zolo-blocks')}</div>
                        </div>
                    </div>
                </WithResDeviceBtn>
            </div>
        </div>
    );
}

export default TextShadowControl;
