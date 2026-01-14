import { ZoloPopover, ZoloNumberControl, ZoloToggleGroupControl, ZoloToggleGroupControlOption } from '../core-controls';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import ColorBtn from '../color-btn';

import { BOX_SHADOW_TYPES } from '../../global/constants';

const EditIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={3} y={3} width="14.8235" height="14.8235" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 21H4.58826V17.8236H17.8236V4.58826H21V21Z" fill="currentColor" />
    </svg>
);

const ZoloShadowControl = ({
    label = '',
    onValue = null,
    onSelect,
    type = 'box',
    enablePopover = true,
}) => {
    const isBoxShadow = type === 'box';

    const hasShadow = onValue && (
        isBoxShadow
            ? (onValue.hOffset !== 0 || onValue.vOffset !== 0 || onValue.blur !== 0 || onValue.spread !== 0)
            : (onValue.shadowColor ||
                (onValue.hShadow && onValue.hShadow !== 0 && onValue.hShadow !== 'undefined' && onValue.hShadow !== '') ||
                (onValue.vShadow && onValue.vShadow !== 0 && onValue.vShadow !== 'undefined' && onValue.vShadow !== '') ||
                (onValue.blur && onValue.blur !== 0 && onValue.blur !== 'undefined' && onValue.blur !== ''))
    );

    const defaultUnits = isBoxShadow
        ? [
            { label: 'px', value: 'px' },
            { label: 'em', value: 'em' },
            { label: '%', value: '%' },
        ]
        : [
            { label: 'px', value: 'px' },
            { label: 'em', value: 'em' },
        ];

    const [displayPanel, setDisplayPanel] = useState(false);

    const handleSelect = (shadowData) => {
        if (onSelect) {
            onSelect(shadowData);
        }
    };

    const handleReset = () => {
        if (isBoxShadow) {
            handleSelect({
                shadowType: 'outset',
                shadowUnit: 'px',
                shadowColor: '#7C7C7C',
                hOffset: 0,
                vOffset: 0,
                blur: 0,
                spread: 0,
            });
        } else {
            handleSelect({
                shadowUnit: 'px',
                shadowColor: '',
                hShadow: '',
                vShadow: '',
                blur: '',
            });
        }
    };

    const textShadowContent = (
        <div className="zolo-box-shadow zolo-text-shadow">
            <div className="zolo-label-area">
                <UnitsBtn
                    selectedUnit={onValue?.shadowUnit || 'px'}
                    unitTypes={defaultUnits}
                    onClick={(sizeUnit) =>
                        handleSelect({
                            ...onValue,
                            shadowUnit: sizeUnit,
                        })
                    }
                >
                    {hasShadow && (
                        <ResetBtn onReset={handleReset} />
                    )}

                    <ColorBtn
                        color={onValue?.shadowColor || ''}
                        onChange={(value) => {
                            handleSelect({
                                shadowUnit: onValue?.shadowUnit || 'px',
                                shadowColor: value || '',
                                hShadow: onValue?.hShadow !== undefined ? onValue.hShadow : '',
                                vShadow: onValue?.vShadow !== undefined ? onValue.vShadow : '',
                                blur: onValue?.blur !== undefined ? onValue.blur : '',
                            });
                        }}
                    />
                </UnitsBtn>
                <div className="zolo-box-shadow-header">
                    <label className="zolo-control-label">
                        {label || __('Text Shadow', 'zoloblocks')}
                    </label>
                </div>
                <div className="zolo-box-shadow-options">
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(hShadow) =>
                                handleSelect({
                                    ...onValue,
                                    hShadow: hShadow !== '' ? parseInt(hShadow) : '',
                                })
                            }
                            value={onValue?.hShadow !== undefined ? onValue.hShadow : ''}
                            type="number"
                        />
                        <div className="input-label">{__('X', 'zoloblocks')}</div>
                    </div>
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(vShadow) =>
                                handleSelect({
                                    ...onValue,
                                    vShadow: vShadow !== '' ? parseInt(vShadow) : '',
                                })
                            }
                            value={onValue?.vShadow !== undefined ? onValue.vShadow : ''}
                            type="number"
                        />
                        <div className="input-label">{__('Y', 'zoloblocks')}</div>
                    </div>
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(blur) =>
                                handleSelect({
                                    ...onValue,
                                    blur: blur !== '' ? parseInt(blur) : '',
                                })
                            }
                            value={onValue?.blur !== undefined ? onValue.blur : ''}
                            min={0}
                            type="number"
                        />
                        <div className="input-label">{__('Blur', 'zoloblocks')}</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const boxShadowContent = (
        <div className="zolo-box-shadow">
            <div className="zolo-label-area">
                <UnitsBtn
                    selectedUnit={onValue?.shadowUnit || 'px'}
                    unitTypes={defaultUnits}
                    onClick={(sizeUnit) =>
                        handleSelect({
                            ...onValue,
                            shadowUnit: sizeUnit,
                        })
                    }
                >
                    <ResetBtn onReset={handleReset} />

                    <ColorBtn
                        color={onValue?.shadowColor || '#7C7C7C'}
                        onChange={(value) =>
                            handleSelect({
                                ...onValue,
                                shadowColor: value,
                            })
                        }
                    />
                </UnitsBtn>
                <div className="zolo-box-shadow-header">
                    <label className="zolo-control-label">
                        {label || __('Box Shadow', 'zoloblocks')}
                    </label>
                    <ZoloToggleGroupControl
                        className="zolo-toggle-box-custom-css"
                        value={onValue?.shadowType || 'outset'}
                        onChange={(value) =>
                            handleSelect({
                                ...onValue,
                                shadowType: value,
                            })
                        }
                    >
                        {BOX_SHADOW_TYPES?.map((type) => (
                            <ZoloToggleGroupControlOption
                                key={type.value}
                                value={type.value}
                                label={type.label}
                                showTooltip={true}
                            />
                        ))}
                    </ZoloToggleGroupControl>
                </div>
                <div className="zolo-box-shadow-options">
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(hOffset) =>
                                handleSelect({
                                    ...onValue,
                                    hOffset: parseInt(hOffset),
                                })
                            }
                            value={onValue?.hOffset || 0}
                            type="number"
                        />
                        <div className="input-label">{__('X', 'zoloblocks')}</div>
                    </div>
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(vOffset) =>
                                handleSelect({
                                    ...onValue,
                                    vOffset: parseInt(vOffset),
                                })
                            }
                            value={onValue?.vOffset || 0}
                            type="number"
                        />
                        <div className="input-label">{__('Y', 'zoloblocks')}</div>
                    </div>
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(blur) =>
                                handleSelect({
                                    ...onValue,
                                    blur: parseInt(blur),
                                })
                            }
                            value={onValue?.blur || 0}
                            min={0}
                            type="number"
                        />
                        <div className="input-label">{__('Blur', 'zoloblocks')}</div>
                    </div>
                    <div className="single-shadow-input">
                        <ZoloNumberControl
                            isShiftStepEnabled={true}
                            onChange={(spread) =>
                                handleSelect({
                                    ...onValue,
                                    spread: parseInt(spread),
                                })
                            }
                            value={onValue?.spread || 0}
                            min={0}
                            type="number"
                        />
                        <div className="input-label">{__('Spread', 'zoloblocks')}</div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (!isBoxShadow) {
        return textShadowContent;
    }

    if (!enablePopover) {
        return boxShadowContent;
    }

    return (
        <div className="zolo-control-container zolo-border-control">
            <div className="zolo-control-flex">
                <label className="zolo-control-label" htmlFor="zolo-control-label">
                    {label || __('Box Shadow', 'zoloblocks')}
                </label>
                <div className="zolo-flex">
                    {hasShadow && (
                        <ResetBtn onReset={handleReset} />
                    )}
                    <button onClick={() => setDisplayPanel(true)} className="zolo-panel-opener-btn">
                        <EditIcon />
                    </button>
                </div>
            </div>
            {displayPanel && (
                <ZoloPopover
                    className="zolo-dimensions-control-popover"
                    position="bottom left"
                    onFocusOutside={() => setDisplayPanel(false)}
                >
                    {boxShadowContent}
                </ZoloPopover>
            )}
        </div>
    );
};

export default ZoloShadowControl;
