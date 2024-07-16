import UnitsBtn from '../units-btn';
import Borders from './border';
import { prefix } from '../../global/constants';
import { ButtonGroup, Button, SelectControl, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import ResetBtn from '../reset-btn';
import classNames from 'classnames';
import TabPanelControl from '../tabpanel-control';

import { BORDER_TYPES, SEPERATOR_STYLES } from '../../global/constants';

import { __ } from '@wordpress/i18n';

import ColorBtn from '../color-btn';
import LinkUnlink from '../link-unlink';

const BorderControl = ({ label, controlName, requiredProps, units, hoverControl = null }) => {
    const { attributes, setAttributes, resMode } = requiredProps;
    const [displayPanel, setDisplayPanel] = useState(false);

    const {
        [`${prefix}${controlName}BorderType`]: borderType,
        [`${prefix}${controlName}Unit`]: borderUnit,
        [`${prefix}${controlName}Top`]: borderTop,
        [`${prefix}${controlName}Right`]: borderRight,
        [`${prefix}${controlName}Bottom`]: borderBottom,
        [`${prefix}${controlName}Left`]: borderLeft,
        [`${prefix}${controlName}BorderStyle`]: borderStyle,
        [`${prefix}${controlName}BorderColor`]: borderColor,

        [`${prefix}TAB${controlName}BorderType`]: TABborderType,
        [`${prefix}TAB${controlName}Unit`]: TABborderUnit,
        [`${prefix}TAB${controlName}Top`]: TABborderTop,
        [`${prefix}TAB${controlName}Right`]: TABborderRight,
        [`${prefix}TAB${controlName}Bottom`]: TABborderBottom,
        [`${prefix}TAB${controlName}Left`]: TABborderLeft,
        [`${prefix}TAB${controlName}BorderStyle`]: TABborderStyle,
        [`${prefix}TAB${controlName}BorderColor`]: TABborderColor,

        [`${prefix}MOB${controlName}BorderType`]: MOBborderType,
        [`${prefix}MOB${controlName}Unit`]: MOBborderUnit,
        [`${prefix}MOB${controlName}Top`]: MOBborderTop,
        [`${prefix}MOB${controlName}Right`]: MOBborderRight,
        [`${prefix}MOB${controlName}Bottom`]: MOBborderBottom,
        [`${prefix}MOB${controlName}Left`]: MOBborderLeft,
        [`${prefix}MOB${controlName}BorderStyle`]: MOBborderStyle,
        [`${prefix}MOB${controlName}BorderColor`]: MOBborderColor,

        [`${prefix}${controlName}IsLinked`]: borderIsLinked,
    } = attributes;

    const [isLinked, setIsLinked] = useState(borderIsLinked);

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: '%', value: '%' },
    ];

    const neededProps = {
        label,
        setAttributes,
        resMode,
        controlName,
        isLinked,
    };

    const onButtonClick = () => {
        setIsLinked(!isLinked);
    };

    const hasValue =
        borderType ||
        borderTop ||
        borderRight ||
        borderBottom ||
        borderLeft ||
        borderColor ||
        TABborderTop ||
        TABborderRight ||
        TABborderBottom ||
        TABborderLeft ||
        TABborderStyle ||
        TABborderColor ||
        MOBborderUnit ||
        MOBborderTop ||
        MOBborderRight ||
        MOBborderBottom ||
        MOBborderLeft ||
        MOBborderStyle ||
        MOBborderColor
            ? true
            : false;

    return (
        <>
            <div className="zolo-control-container zolo-border-control">
                <div className="zolo-control-flex">
                    <label className="zolo-control-label" htmlFor="zolo-control-label">
                        {label}
                    </label>
                    <div className="zolo-flex">
                        {hasValue && (
                            <ResetBtn
                                customClass="zb-reset-has-value"
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}${controlName}BorderType`]: '',
                                        [`${prefix}${controlName}Unit`]: 'px',
                                        [`${prefix}${controlName}Top`]: '',
                                        [`${prefix}${controlName}Right`]: '',
                                        [`${prefix}${controlName}Bottom`]: '',
                                        [`${prefix}${controlName}Left`]: '',
                                        [`${prefix}${controlName}BorderStyle`]: '',
                                        [`${prefix}${controlName}BorderColor`]: '',
                                    });
                                }}
                            />
                        )}

                        <button
                            onClick={() => setDisplayPanel(true)}
                            className={classNames('zolo-panel-opener-btn', `${hasValue ? 'zb-has-value' : ''}`)}
                        >
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    x="4.63635"
                                    y="4.63635"
                                    width="14.7273"
                                    height="14.7273"
                                    rx="0.2"
                                    stroke="#4D4D4D"
                                    strokeWidth="1.5"
                                />
                                <rect
                                    x={3}
                                    y={3}
                                    width="3.27273"
                                    height="3.27273"
                                    rx="0.2"
                                    fill="white"
                                    stroke="#4D4D4D"
                                    strokeWidth="1.5"
                                />
                                <rect
                                    x="17.7273"
                                    y={3}
                                    width="3.27273"
                                    height="3.27273"
                                    rx="0.2"
                                    fill="white"
                                    stroke="#4D4D4D"
                                    strokeWidth="1.5"
                                />
                                <rect
                                    x={3}
                                    y="17.7273"
                                    width="3.27273"
                                    height="3.27273"
                                    rx="0.2"
                                    fill="white"
                                    stroke="#4D4D4D"
                                    strokeWidth="1.5"
                                />
                                <rect
                                    x="17.7273"
                                    y="17.7273"
                                    width="3.27273"
                                    height="3.27273"
                                    rx="0.2"
                                    fill="white"
                                    stroke="#4D4D4D"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {displayPanel && (
                    <Popover
                        className="zolo-dimensions-control-popover"
                        position="bottom left"
                        onFocusOutside={() => setDisplayPanel(false)}
                    >
                        {hoverControl ? (
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <div className="zolo-dimensions-control-wraper zolo-border-control">
                                            {resMode == 'Desktop' && (
                                                <>
                                                    <UnitsBtn
                                                        selectedUnit={borderUnit}
                                                        unitTypes={units || defaultUnits}
                                                        onClick={(borderUnit) =>
                                                            setAttributes({
                                                                [`${prefix}${controlName}Unit`]: borderUnit,
                                                            })
                                                        }
                                                    >
                                                        <Button
                                                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                                                            icon={<LinkUnlink isLinked={isLinked} />}
                                                            onClick={onButtonClick}
                                                        />
                                                        <ResetBtn
                                                            onReset={() => {
                                                                setAttributes({
                                                                    [`${prefix}${controlName}BorderType`]: '',
                                                                    [`${prefix}${controlName}Unit`]: 'px',
                                                                    [`${prefix}${controlName}Top`]: '',
                                                                    [`${prefix}${controlName}Right`]: '',
                                                                    [`${prefix}${controlName}Bottom`]: '',
                                                                    [`${prefix}${controlName}Left`]: '',
                                                                    [`${prefix}${controlName}BorderStyle`]: '',
                                                                    [`${prefix}${controlName}BorderColor`]: '',
                                                                });
                                                            }}
                                                        />
                                                        <ColorBtn
                                                            color={borderColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    [`${prefix}${controlName}BorderColor`]: color,
                                                                })
                                                            }
                                                        />
                                                    </UnitsBtn>
                                                    <Borders
                                                        top={borderTop}
                                                        right={borderRight}
                                                        bottom={borderBottom}
                                                        left={borderLeft}
                                                        neededProps={neededProps}
                                                        onChange={({ top, right, bottom, left }) => {
                                                            setAttributes({
                                                                [`${prefix}${controlName}Top`]: top,
                                                                [`${prefix}${controlName}Right`]: right,
                                                                [`${prefix}${controlName}Bottom`]: bottom,
                                                                [`${prefix}${controlName}Left`]: left,
                                                            });
                                                        }}
                                                    >
                                                        <ButtonGroup className="border-styles-group">
                                                            {BORDER_TYPES &&
                                                                BORDER_TYPES.map((type, index) => {
                                                                    return (
                                                                        <Button
                                                                            key={index}
                                                                            className={`border-style-btn ${
                                                                                borderType === type.value ? 'active' : ''
                                                                            }`}
                                                                            onClick={() =>
                                                                                setAttributes({
                                                                                    [`${prefix}${controlName}BorderType`]: type.value,
                                                                                })
                                                                            }
                                                                        >
                                                                            {type.label}
                                                                        </Button>
                                                                    );
                                                                })}
                                                        </ButtonGroup>
                                                        {borderType === 'custom' && (
                                                            <SelectControl
                                                                value={borderStyle}
                                                                options={SEPERATOR_STYLES}
                                                                onChange={(value) => {
                                                                    setAttributes({
                                                                        [`${prefix}${controlName}BorderStyle`]: value,
                                                                    });
                                                                }}
                                                            />
                                                        )}
                                                    </Borders>
                                                </>
                                            )}

                                            {resMode == 'Tablet' && (
                                                <>
                                                    <UnitsBtn
                                                        selectedUnit={TABborderUnit}
                                                        unitTypes={units || defaultUnits}
                                                        onClick={(TABdimensionUnit) =>
                                                            setAttributes({
                                                                [`${prefix}TAB${controlName}Unit`]: TABdimensionUnit,
                                                            })
                                                        }
                                                    >
                                                        <Button
                                                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                                                            icon={<LinkUnlink isLinked={isLinked} />}
                                                            onClick={onButtonClick}
                                                        />
                                                        <ResetBtn
                                                            onReset={() => {
                                                                setAttributes({
                                                                    [`${prefix}TAB${controlName}BorderType`]: '',
                                                                    [`${prefix}TAB${controlName}Unit`]: 'px',
                                                                    [`${prefix}TAB${controlName}Top`]: '',
                                                                    [`${prefix}TAB${controlName}Right`]: '',
                                                                    [`${prefix}TAB${controlName}Bottom`]: '',
                                                                    [`${prefix}TAB${controlName}Left`]: '',
                                                                    [`${prefix}TAB${controlName}BorderStyle`]: '',
                                                                    [`${prefix}TAB${controlName}BorderColor`]: '',
                                                                });
                                                            }}
                                                        />
                                                        <ColorBtn
                                                            color={TABborderColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    [`${prefix}TAB${controlName}BorderColor`]: color,
                                                                })
                                                            }
                                                        />
                                                    </UnitsBtn>

                                                    <Borders
                                                        top={TABborderTop}
                                                        right={TABborderRight}
                                                        bottom={TABborderBottom}
                                                        left={TABborderLeft}
                                                        neededProps={neededProps}
                                                        onChange={({ top, right, bottom, left }) =>
                                                            setAttributes({
                                                                [`${prefix}TAB${controlName}Top`]: top,
                                                                [`${prefix}TAB${controlName}Right`]: right,
                                                                [`${prefix}TAB${controlName}Bottom`]: bottom,
                                                                [`${prefix}TAB${controlName}Left`]: left,
                                                            })
                                                        }
                                                    >
                                                        <ButtonGroup className="border-styles-group">
                                                            {BORDER_TYPES &&
                                                                BORDER_TYPES.map((type, index) => {
                                                                    return (
                                                                        <Button
                                                                            key={index}
                                                                            className={`border-style-btn ${
                                                                                TABborderType === type.value ? 'active' : ''
                                                                            }`}
                                                                            onClick={() =>
                                                                                setAttributes({
                                                                                    [`${prefix}TAB${controlName}BorderType`]: type.value,
                                                                                })
                                                                            }
                                                                        >
                                                                            {type.label}
                                                                        </Button>
                                                                    );
                                                                })}
                                                        </ButtonGroup>
                                                        {TABborderType === 'custom' && (
                                                            <SelectControl
                                                                value={TABborderStyle}
                                                                options={SEPERATOR_STYLES}
                                                                onChange={(value) => {
                                                                    setAttributes({
                                                                        [`${prefix}TAB${controlName}BorderStyle`]: value,
                                                                    });
                                                                }}
                                                            />
                                                        )}
                                                    </Borders>
                                                </>
                                            )}

                                            {resMode == 'Mobile' && (
                                                <>
                                                    <UnitsBtn
                                                        selectedUnit={MOBborderUnit}
                                                        unitTypes={units || defaultUnits}
                                                        onClick={(value) =>
                                                            setAttributes({
                                                                [`${prefix}MOB${controlName}Unit`]: value,
                                                            })
                                                        }
                                                    >
                                                        <Button
                                                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                                                            icon={<LinkUnlink isLinked={isLinked} />}
                                                            onClick={onButtonClick}
                                                        />
                                                        <ResetBtn
                                                            onReset={() => {
                                                                setAttributes({
                                                                    [`${prefix}MOB${controlName}BorderType`]: '',
                                                                    [`${prefix}MOB${controlName}Unit`]: 'px',
                                                                    [`${prefix}MOB${controlName}Top`]: '',
                                                                    [`${prefix}MOB${controlName}Right`]: '',
                                                                    [`${prefix}MOB${controlName}Bottom`]: '',
                                                                    [`${prefix}MOB${controlName}Left`]: '',
                                                                    [`${prefix}MOB${controlName}BorderStyle`]: '',
                                                                    [`${prefix}MOB${controlName}BorderColor`]: '',
                                                                });
                                                            }}
                                                        />
                                                        <ColorBtn
                                                            color={MOBborderColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    [`${prefix}MOB${controlName}BorderColor`]: color,
                                                                })
                                                            }
                                                        />
                                                    </UnitsBtn>

                                                    <Borders
                                                        top={MOBborderTop}
                                                        right={MOBborderRight}
                                                        bottom={MOBborderBottom}
                                                        left={MOBborderLeft}
                                                        neededProps={neededProps}
                                                        onChange={({ top, right, bottom, left }) =>
                                                            setAttributes({
                                                                [`${prefix}MOB${controlName}Top`]: top,
                                                                [`${prefix}MOB${controlName}Right`]: right,
                                                                [`${prefix}MOB${controlName}Bottom`]: bottom,
                                                                [`${prefix}MOB${controlName}Left`]: left,
                                                            })
                                                        }
                                                    >
                                                        <ButtonGroup className="border-styles-group">
                                                            {BORDER_TYPES &&
                                                                BORDER_TYPES.map((type, index) => {
                                                                    return (
                                                                        <Button
                                                                            key={index}
                                                                            className={`border-style-btn ${
                                                                                MOBborderType === type.value ? 'active' : ''
                                                                            }`}
                                                                            onClick={() =>
                                                                                setAttributes({
                                                                                    [`${prefix}MOB${controlName}BorderType`]: type.value,
                                                                                })
                                                                            }
                                                                        >
                                                                            {type.label}
                                                                        </Button>
                                                                    );
                                                                })}
                                                        </ButtonGroup>
                                                        {MOBborderType === 'custom' && (
                                                            <SelectControl
                                                                value={MOBborderStyle}
                                                                options={SEPERATOR_STYLES}
                                                                onChange={(value) => {
                                                                    setAttributes({
                                                                        [`${prefix}MOB${controlName}BorderStyle`]: value,
                                                                    });
                                                                }}
                                                            />
                                                        )}
                                                    </Borders>
                                                </>
                                            )}
                                        </div>
                                    </>
                                }
                                hoverComponents={<>{hoverControl}</>}
                            />
                        ) : (
                            <div className="zolo-dimensions-control-wraper zolo-border-control">
                                {resMode == 'Desktop' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={borderUnit}
                                            unitTypes={units || defaultUnits}
                                            onClick={(borderUnit) =>
                                                setAttributes({
                                                    [`${prefix}${controlName}Unit`]: borderUnit,
                                                })
                                            }
                                        >
                                            <Button
                                                className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                                                icon={<LinkUnlink isLinked={isLinked} />}
                                                onClick={onButtonClick}
                                            />
                                            <ResetBtn
                                                onReset={() => {
                                                    setAttributes({
                                                        [`${prefix}${controlName}BorderType`]: '',
                                                        [`${prefix}${controlName}Unit`]: 'px',
                                                        [`${prefix}${controlName}Top`]: '',
                                                        [`${prefix}${controlName}Right`]: '',
                                                        [`${prefix}${controlName}Bottom`]: '',
                                                        [`${prefix}${controlName}Left`]: '',
                                                        [`${prefix}${controlName}BorderStyle`]: '',
                                                        [`${prefix}${controlName}BorderColor`]: '',
                                                    });
                                                }}
                                            />
                                            <ColorBtn
                                                color={borderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        [`${prefix}${controlName}BorderColor`]: color,
                                                    })
                                                }
                                            />
                                        </UnitsBtn>
                                        <Borders
                                            top={borderTop}
                                            right={borderRight}
                                            bottom={borderBottom}
                                            left={borderLeft}
                                            neededProps={neededProps}
                                            onChange={({ top, right, bottom, left }) => {
                                                setAttributes({
                                                    [`${prefix}${controlName}Top`]: top,
                                                    [`${prefix}${controlName}Right`]: right,
                                                    [`${prefix}${controlName}Bottom`]: bottom,
                                                    [`${prefix}${controlName}Left`]: left,
                                                });
                                            }}
                                        >
                                            <ButtonGroup className="border-styles-group">
                                                {BORDER_TYPES &&
                                                    BORDER_TYPES.map((type, index) => {
                                                        return (
                                                            <Button
                                                                key={index}
                                                                className={`border-style-btn ${borderType === type.value ? 'active' : ''}`}
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        [`${prefix}${controlName}BorderType`]: type.value,
                                                                    })
                                                                }
                                                            >
                                                                {type.label}
                                                            </Button>
                                                        );
                                                    })}
                                            </ButtonGroup>
                                            {borderType === 'custom' && (
                                                <SelectControl
                                                    value={borderStyle}
                                                    options={SEPERATOR_STYLES}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            [`${prefix}${controlName}BorderStyle`]: value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </Borders>
                                    </>
                                )}

                                {resMode == 'Tablet' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={TABborderUnit}
                                            unitTypes={units || defaultUnits}
                                            onClick={(TABdimensionUnit) =>
                                                setAttributes({
                                                    [`${prefix}TAB${controlName}Unit`]: TABdimensionUnit,
                                                })
                                            }
                                        >
                                            <Button
                                                className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                                                icon={<LinkUnlink isLinked={isLinked} />}
                                                onClick={onButtonClick}
                                            />
                                            <ResetBtn
                                                onReset={() => {
                                                    setAttributes({
                                                        [`${prefix}TAB${controlName}BorderType`]: '',
                                                        [`${prefix}TAB${controlName}Unit`]: 'px',
                                                        [`${prefix}TAB${controlName}Top`]: '',
                                                        [`${prefix}TAB${controlName}Right`]: '',
                                                        [`${prefix}TAB${controlName}Bottom`]: '',
                                                        [`${prefix}TAB${controlName}Left`]: '',
                                                        [`${prefix}TAB${controlName}BorderStyle`]: '',
                                                        [`${prefix}TAB${controlName}BorderColor`]: '',
                                                    });
                                                }}
                                            />
                                            <ColorBtn
                                                color={TABborderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        [`${prefix}TAB${controlName}BorderColor`]: color,
                                                    })
                                                }
                                            />
                                        </UnitsBtn>

                                        <Borders
                                            top={TABborderTop}
                                            right={TABborderRight}
                                            bottom={TABborderBottom}
                                            left={TABborderLeft}
                                            neededProps={neededProps}
                                            onChange={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    [`${prefix}TAB${controlName}Top`]: top,
                                                    [`${prefix}TAB${controlName}Right`]: right,
                                                    [`${prefix}TAB${controlName}Bottom`]: bottom,
                                                    [`${prefix}TAB${controlName}Left`]: left,
                                                })
                                            }
                                        >
                                            <ButtonGroup className="border-styles-group">
                                                {BORDER_TYPES &&
                                                    BORDER_TYPES.map((type, index) => {
                                                        return (
                                                            <Button
                                                                key={index}
                                                                className={`border-style-btn ${
                                                                    TABborderType === type.value ? 'active' : ''
                                                                }`}
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        [`${prefix}TAB${controlName}BorderType`]: type.value,
                                                                    })
                                                                }
                                                            >
                                                                {type.label}
                                                            </Button>
                                                        );
                                                    })}
                                            </ButtonGroup>
                                            {TABborderType === 'custom' && (
                                                <SelectControl
                                                    value={TABborderStyle}
                                                    options={SEPERATOR_STYLES}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            [`${prefix}TAB${controlName}BorderStyle`]: value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </Borders>
                                    </>
                                )}

                                {resMode == 'Mobile' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={MOBborderUnit}
                                            unitTypes={units || defaultUnits}
                                            onClick={(value) =>
                                                setAttributes({
                                                    [`${prefix}MOB${controlName}Unit`]: value,
                                                })
                                            }
                                        >
                                            <Button
                                                className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                                                icon={<LinkUnlink isLinked={isLinked} />}
                                                onClick={onButtonClick}
                                            />
                                            <ResetBtn
                                                onReset={() => {
                                                    setAttributes({
                                                        [`${prefix}MOB${controlName}BorderType`]: '',
                                                        [`${prefix}MOB${controlName}Unit`]: 'px',
                                                        [`${prefix}MOB${controlName}Top`]: '',
                                                        [`${prefix}MOB${controlName}Right`]: '',
                                                        [`${prefix}MOB${controlName}Bottom`]: '',
                                                        [`${prefix}MOB${controlName}Left`]: '',
                                                        [`${prefix}MOB${controlName}BorderStyle`]: '',
                                                        [`${prefix}MOB${controlName}BorderColor`]: '',
                                                    });
                                                }}
                                            />
                                            <ColorBtn
                                                color={MOBborderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        [`${prefix}MOB${controlName}BorderColor`]: color,
                                                    })
                                                }
                                            />
                                        </UnitsBtn>

                                        <Borders
                                            top={MOBborderTop}
                                            right={MOBborderRight}
                                            bottom={MOBborderBottom}
                                            left={MOBborderLeft}
                                            neededProps={neededProps}
                                            onChange={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    [`${prefix}MOB${controlName}Top`]: top,
                                                    [`${prefix}MOB${controlName}Right`]: right,
                                                    [`${prefix}MOB${controlName}Bottom`]: bottom,
                                                    [`${prefix}MOB${controlName}Left`]: left,
                                                })
                                            }
                                        >
                                            <ButtonGroup className="border-styles-group">
                                                {BORDER_TYPES &&
                                                    BORDER_TYPES.map((type, index) => {
                                                        return (
                                                            <Button
                                                                key={index}
                                                                className={`border-style-btn ${
                                                                    MOBborderType === type.value ? 'active' : ''
                                                                }`}
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        [`${prefix}MOB${controlName}BorderType`]: type.value,
                                                                    })
                                                                }
                                                            >
                                                                {type.label}
                                                            </Button>
                                                        );
                                                    })}
                                            </ButtonGroup>
                                            {MOBborderType === 'custom' && (
                                                <SelectControl
                                                    value={MOBborderStyle}
                                                    options={SEPERATOR_STYLES}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            [`${prefix}MOB${controlName}BorderStyle`]: value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </Borders>
                                    </>
                                )}
                            </div>
                        )}
                    </Popover>
                )}
            </div>
        </>
    );
};

export default BorderControl;
