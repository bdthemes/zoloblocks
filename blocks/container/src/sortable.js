/**
 * Internal depencencies
 */
const { SortableControl, SortableItem, ColorControlAlt } = window.zoloModule;

const { __ } = wp.i18n;
const { Button, PanelBody } = wp.components;
import { cloneDeep } from 'lodash';

const Sortable = ({ colorItem, setAttributes }) => {
    const deepCloneProfiles = cloneDeep(colorItem);

    return (
        <div className="sortable">
            <div className="zb-repeater-flex">
                <div className="repeater-label">{__('Add Color', 'zoloblocks')}</div>
                <Button
                    onClick={() =>
                        setAttributes({
                            colorItem: [
                                ...colorItem,
                                {
                                    id: colorItem.length + 1,
                                    color: '#808080',
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
            <SortableControl defaultItems={colorItem} attributeName="colorItem" setAttributes={setAttributes}>
                {deepCloneProfiles &&
                    deepCloneProfiles.map((profile, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button
                                    className="dnd-trash"
                                    icon="trash"
                                    onClick={() => {
                                        setAttributes({
                                            colorItem: colorItem.filter((profile, i) => index !== i),
                                        });
                                    }}
                                />
                                <SortableItem key={profile.id} id={profile.id}>
                                    <PanelBody title={'Color'} initialOpen={false}>
                                        <ColorControlAlt
                                            label={__('Color', 'zoloblocks')}
                                            color={profile.color}
                                            onChange={(value) => {
                                                const newItems = [...deepCloneProfiles];
                                                newItems[index].color = value;
                                                setAttributes({
                                                    colorItem: newItems,
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
