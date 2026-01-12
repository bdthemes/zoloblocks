import { __ } from "@wordpress/i18n";
import { BaseControl, __experimentalGrid as Grid } from "@wordpress/components";
import { ZoloButton, ZoloInputControl } from "../core-controls";
import { reset, plus, rotateLeft } from "@wordpress/icons";
import { Button } from "@wordpress/components";

const CounterControl = ({ label, value, onChange, min = 0, max = 12, step = 1 }) => {
    return (
        <div className="zb-counter-control-wrapper">
            <BaseControl.VisualLabel>
                {label}
            </BaseControl.VisualLabel>
            <Button
                className="zb-reset-button zb-counter-control-reset-btn"
                icon={rotateLeft}
                label={__('Reset', 'zoloblocks')}
                onClick={() => onChange(min)}
            />
            <Grid columns={3} gap={2}>
                <ZoloButton
                    variant="primary"
                    className="zb-counter-control-btn"
                    onClick={() => onChange((value || min) - 1)}
                    disabled={value <= min}
                    icon={reset}
                    label={__('Minus', 'zoloblocks')}
                />
                <ZoloInputControl
                    type="number"
                    value={value}
                    onChange={(value) => onChange(value)}
                    min={min}
                    max={max}
                    step={step}
                />
                <ZoloButton
                    variant="primary"
                    className="zb-counter-control-btn"
                    onClick={() => onChange((value || min) + 1)}
                    disabled={value >= max}
                    icon={plus}
                    label={__('Plus', 'zoloblocks')}
                />
            </Grid>
        </div>
    );
};

export default CounterControl;
