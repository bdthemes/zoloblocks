import { __ } from "@wordpress/i18n";

const ShapeBuilderColorGroup = ({ value, onChange, item }) => {
    const { IconicBtnGroup, ColorControl, ZoloRangeControl, ZoloSelectControl } = window.zoloModule;

    return (
        <>
            {
                item?.shape?.shapeType === 'custom' ? (
                    <>
                        <ColorControl
                            label={__('Fill Color', 'zoloblocks')}
                            value={value?.customSvgFillColor}
                            onChange={(newValue) => onChange({ ...value, customSvgFillColor: newValue })}
                        />
                        <ColorControl
                            label={__('Stroke Color', 'zoloblocks')}
                            value={value?.customSvgStrokeColor}
                            onChange={(newValue) => onChange({ ...value, customSvgStrokeColor: newValue })}
                        />
                    </>
                ) : (
                    <>
                        <IconicBtnGroup
                            label={__('Fill Type', 'zoloblocks')}
                            options={[
                                { label: __('Solid', 'zoloblocks'), value: 'solid' },
                                { label: __('Gradient', 'zoloblocks'), value: 'gradient' },
                            ]}
                            value={value?.fillType}
                            onChange={(newValue) => onChange({ ...value, fillType: newValue })}
                        />

                        {
                            value?.fillType === 'solid' && (
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    value={value?.color}
                                    onChange={(newValue) => onChange({ ...value, color: newValue })}
                                />
                            )
                        }
                        {
                            value?.fillType === 'gradient' && (
                                <>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        value={value?.gradientColor1}
                                        onChange={(newValue) => onChange({ ...value, gradientColor1: newValue })}
                                    />
                                    <ZoloRangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Location', 'zoloblocks')}
                                        value={value?.gradientLocation1}
                                        onChange={(value) => onChange({ ...value, gradientLocation1: value })}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <ColorControl
                                        label={__('Second Color', 'zoloblocks')}
                                        value={value?.gradientColor2}
                                        onChange={(newValue) => onChange({ ...value, gradientColor2: newValue })}
                                    />
                                    <ZoloRangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Location', 'zoloblocks')}
                                        value={value?.gradientLocation2}
                                        onChange={(value) => onChange({ ...value, gradientLocation2: value })}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <ZoloSelectControl
                                        label={__('Gradient Type', 'zoloblocks')}
                                        options={[
                                            { label: __('Linear', 'zoloblocks'), value: 'linear' },
                                            { label: __('Radial', 'zoloblocks'), value: 'radial' },
                                        ]}
                                        value={value?.gradientType}
                                        onChange={(nextValue) => onChange({ ...value, gradientType: nextValue })}
                                    />
                                    <ZoloRangeControl
                                        className="zolo-flex-col-control"
                                        label={__('Angle', 'zoloblocks')}
                                        value={value?.gradientAngle}
                                        onChange={(value) => onChange({ ...value, gradientAngle: value })}
                                        min={0}
                                        max={360}
                                        step={1}
                                    />
                                </>
                            )
                        }
                    </>
                )
            }

        </>
    )
};

export default ShapeBuilderColorGroup;