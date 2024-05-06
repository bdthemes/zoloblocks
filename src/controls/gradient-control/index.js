import { GradientPicker } from '@wordpress/components';

const defaultGradients = [
    {
        name: 'Warm Flame',
        gradient: 'linear-gradient(142.29deg, #0068EC 21.8%, #00BBF9 73.22%)',
        slug: 'warm-flame',
    },
    {
        name: 'Night Fade',
        gradient: 'linear-gradient(45deg, #08AEEA 0%, #2AF598 100%)',
        slug: 'night-fade',
    },
    {
        name: 'Spring Warmth',
        gradient: 'linear-gradient(45deg, #FFB199 0%, #FF0844 100%)',
        slug: 'spring-warmth',
    },
    {
        name: 'Juicy Peach',
        gradient: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
        slug: 'juicy-peach',
    },
    {
        name: 'Young Passion',
        gradient: 'linear-gradient(45deg,#FDBA74,#FB923C,#F87171)',
        slug: 'young-passion',
    },
];

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
    if (value?.startsWith('var(--wp--preset--gradient--')) {
        // find the gradient by slug and set its value as value
        const gradient = gradients.find((gradient) => value === `var(--wp--preset--gradient--${gradient.slug})`);
        gradientValue = gradient.gradient;
    } else {
        gradientValue = value;
    }

    return (
        <div className="zb-gradient-control-wrap">
            {label && (
                <div className="zb-gradient-head">
                    <span className="zb-label">{label}</span>
                </div>
            )}

            <div className="zb-gradient-body">
                <GradientPicker
                    value={gradientValue ? gradientValue : defaultGradients[1].gradient}
                    onChange={(val) => setSettings(val)}
                    gradients={gradientOptions.length > 0 ? gradientOptions : defaultGradients}
                />
            </div>
        </div>
    );
}

export default GradientControl;
