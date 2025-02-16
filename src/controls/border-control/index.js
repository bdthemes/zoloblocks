import { Button, ButtonGroup, Popover, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import classNames from 'classnames';
import { BORDER_TYPES, prefix, SEPERATOR_STYLES } from '../../global/constants';
import ColorBtn from '../color-btn';
import LinkUnlink from '../link-unlink';
import ResetBtn from '../reset-btn';
import TabPanelControl from '../tabpanel-control';
import UnitsBtn from '../units-btn';
import Borders from './border';

const BorderControl = ({ label, controlName, requiredProps, units, hoverControl = null }) => {
    // const { attributes, setAttributes, resMode } = requiredProps;
    const { usePanelProps } = window?.zoloModule;
    const { attributes, setAttributes } = usePanelProps();
    const { resMode } = attributes;

    const [displayPanel, setDisplayPanel] = useState(false);
    const [isLinked, setIsLinked] = useState(attributes[`${prefix}${controlName}IsLinked`]);

    const resPrefixes = { Desktop: '', Tablet: 'TAB', Mobile: 'MOB' };

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: '%', value: '%' },
    ];

    const onButtonClick = () => setIsLinked(!isLinked);

    const resetAttributes = (prefixKey) => {
        setAttributes({
            [`${prefix}${prefixKey}${controlName}BorderType`]: '',
            [`${prefix}${prefixKey}${controlName}Unit`]: 'px',
            [`${prefix}${prefixKey}${controlName}Top`]: '',
            [`${prefix}${prefixKey}${controlName}Right`]: '',
            [`${prefix}${prefixKey}${controlName}Bottom`]: '',
            [`${prefix}${prefixKey}${controlName}Left`]: '',
            [`${prefix}${prefixKey}${controlName}BorderStyle`]: '',
            [`${prefix}${prefixKey}${controlName}BorderColor`]: '',
        });
    };

    const renderControls = (prefixKey) => {
        return (
            <>
                <UnitsBtn
                    selectedUnit={attributes[`${prefix}${prefixKey}${controlName}Unit`]}
                    unitTypes={units || defaultUnits}
                    onClick={(unit) => setAttributes({ [`${prefix}${prefixKey}${controlName}Unit`]: unit })}
                >
                    <Button
                        className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                        icon={<LinkUnlink isLinked={isLinked} />}
                        onClick={onButtonClick}
                    />
                    <ResetBtn onReset={() => resetAttributes(prefixKey)} />
                    <ColorBtn
                        color={attributes[`${prefix}${prefixKey}${controlName}BorderColor`]}
                        onChange={(color) => setAttributes({ [`${prefix}${prefixKey}${controlName}BorderColor`]: color })}
                    />
                </UnitsBtn>
                <Borders
                    top={attributes[`${prefix}${prefixKey}${controlName}Top`]}
                    right={attributes[`${prefix}${prefixKey}${controlName}Right`]}
                    bottom={attributes[`${prefix}${prefixKey}${controlName}Bottom`]}
                    left={attributes[`${prefix}${prefixKey}${controlName}Left`]}
                    neededProps={{ label, setAttributes, resMode, controlName, isLinked }}
                    onChange={({ top, right, bottom, left }) =>
                        setAttributes({
                            [`${prefix}${prefixKey}${controlName}Top`]: top,
                            [`${prefix}${prefixKey}${controlName}Right`]: right,
                            [`${prefix}${prefixKey}${controlName}Bottom`]: bottom,
                            [`${prefix}${prefixKey}${controlName}Left`]: left,
                        })
                    }
                >
                    <ButtonGroup className="border-styles-group">
                        {BORDER_TYPES.map((borderType, index) => (
                            <Button
                                key={index}
                                className={`border-style-btn ${attributes[`${prefix}${prefixKey}${controlName}BorderType`] === borderType.value ? 'active' : ''}`}
                                onClick={() => setAttributes({ [`${prefix}${prefixKey}${controlName}BorderType`]: borderType.value })}
                            >
                                {borderType.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                    {attributes[`${prefix}${prefixKey}${controlName}BorderType`] === 'custom' && (
                        <SelectControl
                            value={attributes[`${prefix}${prefixKey}${controlName}BorderStyle`]}
                            options={SEPERATOR_STYLES}
                            onChange={(value) => setAttributes({ [`${prefix}${prefixKey}${controlName}BorderStyle`]: value })}
                        />
                    )}
                </Borders>
            </>
        );
    };

    return (
        <div className="zolo-control-container zolo-border-control">
            <div className="zolo-control-flex">
                <label className="zolo-control-label" htmlFor="zolo-control-label">
                    {label}
                </label>
                <div className="zolo-flex">
                    <button
                        onClick={() => setDisplayPanel(true)}
                        className={classNames('zolo-panel-opener-btn', {
                            'zb-has-value': Object.values(resPrefixes).some((key) => attributes[`${prefix}${key}${controlName}BorderType`]),
                        })}
                    >
                        <svg width={24} height={24} viewBox="0 0 24 24">
                            <rect x="4.636" y="4.636" width="14.727" height="14.727" rx="0.2" stroke="#4D4D4D" strokeWidth="1.5" />
                        </svg>
                    </button>
                </div>
            </div>
            {displayPanel && (
                <Popover className="zolo-dimensions-control-popover" position="bottom left" onFocusOutside={() => setDisplayPanel(false)}>
                    {hoverControl ? (
                        <TabPanelControl
                            normalComponents={
                                <div className="zolo-dimensions-control-wraper zolo-border-control">
                                    {renderControls(resPrefixes[resMode])}
                                </div>
                            }
                            hoverComponents={hoverControl}
                        />
                    ) : (
                        <div className="zolo-dimensions-control-wraper zolo-border-control">{renderControls(resPrefixes[resMode])}</div>
                    )}
                </Popover>
            )}
        </div>
    );
};

export default BorderControl;
