import { __ } from '@wordpress/i18n';
const { ColorControl, ZoloButton } = window.zoloModule;

const MultiColor = ({ propsMultiColor }) => {
    const { attributes, setAttributes } = propsMultiColor;
    const { zoloParticles } = attributes;
    const { colors } = zoloParticles;
    const particleColors = structuredClone(colors);
    return (
        <>
            {particleColors &&
                particleColors.map((item, index) => (
                    <div key={index} className="zolo-color-wrap">
                        {colors.length > 1 && (
                            <ZoloButton
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        zoloParticles: {
                                            ...zoloParticles,
                                            colors: colors.filter((color, i) => index !== i),
                                        },
                                    });
                                }}
                            />
                        )}

                        <ColorControl
                            label={__('Color', 'zoloblocks')}
                            color={item.color}
                            disableAlpha={true}
                            onChange={(v) => {
                                const newItems = [...particleColors];
                                newItems[index].color = v;
                                setAttributes({
                                    zoloParticles: {
                                        ...zoloParticles,
                                        colors: newItems,
                                    },
                                });
                            }}
                        />
                    </div>
                ))}
            <div className="repeater-label">
                <ZoloButton
                    onClick={() =>
                        setAttributes({
                            zoloParticles: {
                                ...zoloParticles,
                                colors: [
                                    ...colors,
                                    {
                                        id: colors.length + 1,
                                        color: '#D48431',
                                    },
                                ],
                            },
                        })
                    }
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </ZoloButton>
            </div>
        </>
    );
};

export default MultiColor;
