import { ANIMATION_EFFECTS } from "../constants";
import { __ } from "@wordpress/i18n";

const ShapeBuilderAnimation = ({ value, onChange }) => {
    const { ZoloSelectControl, ZoloRangeControl, ZoloToggleControl } = window.zoloModule;
    return (
        <>
            <ZoloToggleControl
                className="zolo-flex-col-control"
                label={__('Enable Animation', 'zoloblocks')}
                checked={value?.animationEnabled || false}
                onChange={(newValue) => onChange({ ...value, animationEnabled: newValue })}
            />
            {
                value?.animationEnabled && (
                    <>
                        <ZoloSelectControl
                            label={__('Animation Effect', 'zoloblocks')}
                            value={value?.animationName}
                            onChange={(newValue) => onChange({ ...value, animationName: newValue })}
                            options={ANIMATION_EFFECTS}
                        />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Duration (s)', 'zoloblocks')}
                            value={value?.animationDuration}
                            onChange={(newValue) => onChange({ ...value, animationDuration: newValue })}
                            min={0.1}
                            max={5}
                            step={0.1}
                        />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Delay (s)', 'zoloblocks')}
                            value={value?.animationDelay}
                            onChange={(newValue) => onChange({ ...value, animationDelay: newValue })}
                            min={0}
                            max={5}
                            step={0.1}
                        />
                    </>
                )
            }
        </>
    );
};

export default ShapeBuilderAnimation;
