/**
 * Internal depencencies
 */
const { SortableControl, SortableItem, ColorControlAlt } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody } = wp.components;
import { cloneDeep } from 'lodash';

const Sortable = ({ sortableProps }) => {
  const { attributes, setAttributes } = sortableProps;
  const { zoloParticles } = attributes;
    const { colors } = zoloParticles;
    const particleColors = cloneDeep(colors);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add Color', 'zoloblocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            // colors: [
                            //     ...colors,
                            //     {
                            //         id: colors.length + 1,
                            //         color: '#808080',
                            //     },
                            // ],
                            zoloParticles: {
                                ...zoloParticles,
                                colors: [
                                    ...colors,
                                    {
                                        id: colors.length + 1,
                                        color: '#808080',
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
                </Button>
            </div>
            <SortableControl defaultItems={colors} attributeName="colors" setAttributes={setAttributes}>
                {particleColors &&
                    particleColors.map((color, index) => {
                      console.log('color', color);
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            // colors: colors.filter((color, i) => index !== i),
                                            zoloParticles: {
                                                ...zoloParticles,
                                                colors: colors.filter((color, i) => index !== i),
                                            },
                                        });
                                    }}
                                />
                                <SortableItem key={color.id} id={color.id}>
                                    <PanelBody title={'Color'} initialOpen={false}>
                                        <ColorControlAlt
                                            label={__('Color', 'zoloblocks')}
                                            color={color?.color}
                                            onChange={(value) => {
                                                const newItems = [...particleColors];
                                                newItems[index].color = value;
                                                setAttributes({
                                                    zoloParticles: {
                                                        ...zoloParticles,
                                                        colors: newItems,
                                                    },
                                                });
                                            }}
                                        />
                                    </PanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl>
        </div>
    );
};

export default Sortable;
