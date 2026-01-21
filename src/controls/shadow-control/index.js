import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

const ZoloShadowControl = ({
    label = '',
    value = null,
    onChange,
    excludesControls = [],
}) => {
    const { ZoloNumberControl, UnitsBtn, ResetBtn, ColorBtn, ZoloChoose } = window.zoloModule;
    const excludes = new Set(excludesControls);
    return (
        <div className="zolo-box-shadow">
            <div className="zolo-label-area">
                <UnitsBtn
                    selectedUnit={value?.shadowUnit || 'px'}
                    unitTypes={[
                        {
                            label: 'px',
                            value: 'px',
                        }
                    ]}
                    onClick={(sizeUnit) => {
                        return;
                    }}
                >
                    {value && (
                        <ResetBtn onReset={() => onChange(null)} />
                    )}

                    <ColorBtn
                        color={value?.color}
                        onChange={(color) => {
                            onChange({
                                ...value,
                                color,
                            });
                        }}
                    />
                </UnitsBtn>
                <div className="zolo-box-shadow-header">
                    <BaseControl.VisualLabel>
                        {label || __('Box Shadow', 'zoloblocks')}
                    </BaseControl.VisualLabel>
                </div>
                {
                    !excludes.has('inset') && (
                        <ZoloChoose
                            value={value?.inset || 'outset'}
                            onChange={(newValue) => {
                                onChange({
                                    ...value,
                                    inset: newValue,
                                });
                            }}
                            options={[
                                {
                                    label: __('Outer', 'zoloblocks'),
                                    value: 'outset',
                                },
                                {
                                    label: __('Inner', 'zoloblocks'),
                                    value: 'inset',
                                }
                            ]}
                        />
                    )
                }
                <div className="zolo-box-shadow-options">
                    {
                        !excludes.has('x') && (
                            <div className="single-shadow-input">
                                <ZoloNumberControl
                                    isShiftStepEnabled={true}
                                    onChange={(newValue) =>
                                        onChange({
                                            ...value,
                                            x: newValue
                                        })
                                    }
                                    value={value?.x}
                                    type="number"
                                />
                                <div className="input-label">{__('X', 'zoloblocks')}</div>
                            </div>
                        )
                    }
                    {
                        !excludes.has('y') && (
                            <div className="single-shadow-input">
                                <ZoloNumberControl
                                    isShiftStepEnabled={true}
                                    onChange={(newValue) =>
                                        onChange({
                                            ...value,
                                            y: newValue
                                        })
                                    }
                                    value={value?.y}
                                    type="number"
                                />
                                <div className="input-label">{__('Y', 'zoloblocks')}</div>
                            </div>
                        )
                    }
                    {
                        !excludes.has('blur') && (
                            <div className="single-shadow-input">
                                <ZoloNumberControl
                                    isShiftStepEnabled={true}
                                    onChange={(blur) =>
                                        onChange({
                                            ...value,
                                            blur: blur
                                        })
                                    }
                                    value={value?.blur}
                                    min={0}
                                    type="number"
                                />
                                <div className="input-label">{__('Blur', 'zoloblocks')}</div>
                            </div>
                        )
                    }
                    {
                        !excludes.has('spread') && (
                            <div className="single-shadow-input">
                                <ZoloNumberControl
                                    isShiftStepEnabled={true}
                                    onChange={(spread) =>
                                        onChange({
                                            ...value,
                                            spread: spread
                                        })
                                    }
                                    value={value?.spread}
                                    min={0}
                                    type="number"
                                />
                                <div className="input-label">{__('Spread', 'zoloblocks')}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default ZoloShadowControl;
