import {
    BaseControl,
    Button,
    ButtonGroup,
    Dropdown,
    RangeControl,
    ToggleControl,
    ColorPicker,
    __experimentalNumberControl as NumberControl,
    Popover,
    ColorIndicator,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';

import ColorBtn from '../color-btn';

import { BOX_SHADOW_TYPES } from '../../global/constants';

const BoxShadowControl = ({ label = '', controlName, requiredProps }) => {
    const { setAttributes, attributes } = requiredProps;
    const {
        [`${controlName}shadowType`]: shadowType,
        [`${controlName}shadowUnit`]: shadowUnit,
        [`${controlName}shadowColor`]: shadowColor,
        [`${controlName}hOffset`]: hOffset,
        [`${controlName}vOffset`]: vOffset,
        [`${controlName}blur`]: blur,
        [`${controlName}spread`]: spread,
    } = attributes;

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: '%', value: '%' },
    ];

    const [displayPanel, setDisplayPanel] = useState(false);

    return (
        <div className="zolo-control-container zolo-border-control">
            <div className="zolo-control-flex">
                <label className="zolo-control-label" htmlFor="zolo-control-label">
                    {label || __('Box Shadow', 'zoloblocks')}
                </label>
                <div className="zolo-flex">
                    {((shadowType !== 'outset' && (hOffset !== 0 || vOffset !== 0 || blur !== 0 || spread !== 0)) ||
                        (shadowType === 'outset' && (hOffset !== 0 || vOffset !== 0 || blur !== 0 || spread !== 0))) && (
                        <ResetBtn
                            onReset={() => {
                                setAttributes({
                                    [`${controlName}shadowType`]: 'outset',
                                    [`${controlName}shadowUnit`]: 'px',
                                    [`${controlName}shadowColor`]: '#7C7C7C',
                                    [`${controlName}hOffset`]: 0,
                                    [`${controlName}vOffset`]: 0,
                                    [`${controlName}blur`]: 0,
                                    [`${controlName}spread`]: 0,
                                });
                            }}
                        />
                    )}
                    {/* #7C7C7C */}
                    <button onClick={() => setDisplayPanel(true)} className="zolo-panel-opener-btn">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={3} y={3} width="14.8235" height="14.8235" stroke="#4D4D4D" strokeWidth="1.5" />
                            <path d="M21 21H4.58826V17.8236H17.8236V4.58826H21V21Z" fill="#4D4D4D" />
                        </svg>
                    </button>
                </div>
            </div>
            {displayPanel && (
                <Popover className="zolo-dimensions-control-popover" position="bottom left" onFocusOutside={() => setDisplayPanel(false)}>
                    <div className="zolo-box-shadow">
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
                                            [`${controlName}shadowType`]: 'outset',
                                            [`${controlName}shadowUnit`]: 'px',
                                            [`${controlName}shadowColor`]: '',
                                            [`${controlName}hOffset`]: 0,
                                            [`${controlName}vOffset`]: 0,
                                            [`${controlName}blur`]: 0,
                                            [`${controlName}spread`]: 0,
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
                                label={label || __('Box Shadow', 'zoloblocks')}
                                requiredProps={requiredProps}
                                controlName={controlName}
                                noResetBtn={true}
                                noResponsive={true}
                            >
                                <ButtonGroup className="shadow-style-btn-group">
                                    {BOX_SHADOW_TYPES &&
                                        BOX_SHADOW_TYPES.map((type, index) => {
                                            return (
                                                <Button
                                                    key={index}
                                                    className={`shadow-style-btn ${shadowType === type.value ? 'active' : ''}`}
                                                    onClick={() =>
                                                        setAttributes({
                                                            [`${controlName}shadowType`]: type.value,
                                                        })
                                                    }
                                                >
                                                    {type.label}
                                                </Button>
                                            );
                                        })}
                                </ButtonGroup>
                                <div className="zolo-box-shadow-options">
                                    <div className="single-shadow-input">
                                        <NumberControl
                                            isShiftStepEnabled={true}
                                            onChange={(hOffset) =>
                                                setAttributes({
                                                    [`${controlName}hOffset`]: parseInt(hOffset),
                                                })
                                            }
                                            value={hOffset}
                                            type="number"
                                        />
                                        <div className="input-label">{__('X', 'zoloblocks')}</div>
                                    </div>
                                    <div className="single-shadow-input">
                                        <NumberControl
                                            isShiftStepEnabled={true}
                                            onChange={(vOffset) =>
                                                setAttributes({
                                                    [`${controlName}vOffset`]: parseInt(vOffset),
                                                })
                                            }
                                            value={vOffset}
                                            type="number"
                                        />
                                        <div className="input-label">{__('Y', 'zoloblocks')}</div>
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
                                        <div className="input-label">{__('Blur', 'zoloblocks')}</div>
                                    </div>
                                    <div className="single-shadow-input">
                                        <NumberControl
                                            isShiftStepEnabled={true}
                                            onChange={(spread) =>
                                                setAttributes({
                                                    [`${controlName}spread`]: parseInt(spread),
                                                })
                                            }
                                            value={spread}
                                            min={0}
                                            type="number"
                                        />
                                        <div className="input-label">{__('Spread', 'zoloblocks')}</div>
                                    </div>
                                </div>
                            </WithResDeviceBtn>
                        </div>
                    </div>
                </Popover>
            )}
        </div>
    );
};

export default BoxShadowControl;
