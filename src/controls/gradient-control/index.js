import { GradientPicker } from '@wordpress/components';

function GradientControl({ label, value, onChange }) {
    const setSettings = (val) => {
        onChange(val);
    };

    const gradients = wp.data.select('core/editor').getEditorSettings().gradients; // fetch theme gradients from api

    const gradientOptions = gradients.map((gradient) => {
        return {
            name: gradient.name,
            gradient: gradient.slug ? `var(--wp--preset--gradient--${gradient.slug})` : gradient.gradient,
            slug: gradient.slug,
            value: gradient.gradient,
        };
    });

    // if value is var(--wp--preset--gradient--slug) then find the gradient and set it as value else set the value as it is
    let gradientValue;
    if (value.startsWith('var(--wp--preset--gradient--')) {
        // find the gradient by slug and set its value as value
        const gradient = gradients.find((gradient) => value === `var(--wp--preset--gradient--${gradient.slug})`);
        gradientValue = gradient.gradient;
    }

    return (
        <div className="zb-gradient-control-wrap">
            {label && (
                <div className="zb-gradient-head">
                    <span className="zb-label">{label}</span>
                </div>
            )}

            <div className="zb-gradient-body">
                <GradientPicker value={gradientValue} onChange={(val) => setSettings(val)} gradients={gradientOptions} />
            </div>
        </div>
    );
}

export default GradientControl;
