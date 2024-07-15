import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const { ColorControl } = window.zoloModule;

const MultiColor = ({ progPieMultiColor, setAttributes }) => {
    const progPieDeepColor = structuredClone(progPieMultiColor);
    return (
        <>
            {progPieDeepColor &&
                progPieDeepColor.map((item, index) => (
                    <div key={index} className="zolo-color-wrap">
                        {progPieMultiColor.length > 1 && (
                            <Button
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        progPieMultiColor: progPieMultiColor.filter((profile, i) => index !== i),
                                    });
                                }}
                            />
                        )}

                        <ColorControl
                            label={__('Color', 'zoloblocks')}
                            color={item.color}
                            onChange={(v) => {
                                const newItems = [...progPieDeepColor];
                                newItems[index].color = v;
                                setAttributes({
                                    progPieMultiColor: newItems,
                                });
                            }}
                        />
                    </div>
                ))}
            <div className="repeater-label">
                <Button
                    onClick={() =>
                        setAttributes({
                            progPieMultiColor: [
                                ...progPieMultiColor,
                                {
                                    id: progPieMultiColor.length + 1,
                                    color: '#D48431',
                                },
                            ],
                        })
                    }
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Button>
            </div>
        </>
    );
};

export default MultiColor;
