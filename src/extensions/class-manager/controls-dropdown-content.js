import { Flex, FlexBlock, FlexItem, __experimentalVStack as VStack, Button, __experimentalText as Text } from '@wordpress/components';
import { plus, close, seen, unseen, trash } from '@wordpress/icons';
import StyleControls from './style-controls';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { commentEditLink } from '@wordpress/icons';
const ControlsDropdownContent = ({ selectedClass, setSelectedClass, selectedSubSelector, setSelectedSubSelector, attributes, setAttributes }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { style: parentStyle } = useSelect((select) => {
        const { getEditedEntityRecord, getEntityRecord } = select('core');
        const data = getEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        return {
            style: data && editedData?.content ? JSON.parse(editedData?.content) : '',
        }
    }, [selectedClass]);

    const { editEntityRecord, deleteEntityRecord } = useDispatch('core');
    const setParentStyle = (style) => {
        editEntityRecord('postType', 'zolo-class-manager', selectedClass?.id, { content: JSON.stringify(style) });
    }

    return (
        <div className="controls-dropdown-content">
            <VStack className="controls-dropdown-content-header">
                <Flex>
                    <FlexItem
                        className="controls-dropdown-content-header-title"
                        onDoubleClick={(e) => {
                            setIsEditing(true);
                            e.target.focus();
                        }}
                    >
                        <Button
                            variant="tertiary"
                            icon={commentEditLink}
                            onClick={() => {
                                setIsEditing(false);
                            }}
                        >
                            <Text>{selectedSubSelector?.title || selectedClass?.title}</Text>
                        </Button>
                    </FlexItem>
                    <FlexItem className="controls-dropdown-content-header-controls">
                        <Button
                            className='controls-dropdown-content-header-controls-button'
                            size='small'
                            icon={attributes?.unseenClass === selectedClass?.title ? unseen : seen}
                            label={attributes?.unseenClass === selectedClass?.title ? 'Show' : 'Hide'}
                            showTooltip
                            onClick={() => {
                                setAttributes({
                                    unseenClass: attributes?.unseenClass === selectedClass?.title ? '' : selectedClass?.title
                                })
                            }}
                        />
                        <Button
                            className='controls-dropdown-content-header-controls-button'
                            size='small'
                            icon={trash}
                            label='Delete'
                            showTooltip
                            onClick={() => {
                                deleteEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
                            }}
                        />
                    </FlexItem>
                </Flex>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = new FormData(e.target);
                        const subselector = form.get('subselector');
                        const isSubselectorExist = attributes?.classManagerSubselector?.find((item) => item?.title === subselector);
                        if (!subselector || isSubselectorExist) {
                            return;
                        }
                        setAttributes({
                            classManagerSubselector: [
                                ...attributes.classManagerSubselector,
                                {
                                    parent: selectedClass?.id,
                                    title: subselector,
                                    style: {}
                                }
                            ]
                        });
                        //reset form
                        e.target.reset();
                    }}
                >
                    <Flex>
                        <FlexBlock>
                            <input
                                type="text"
                                name="subselector"
                                placeholder="Write subselector here..."
                            />
                        </FlexBlock>
                        <FlexItem>
                            <Button type='submit' variant='primary' icon={plus}>Add</Button>
                        </FlexItem>
                    </Flex>
                </form>
                <div className="controls-dropdown-content-subselector-group">
                    {
                        attributes?.classManagerSubselector?.filter((item) => item?.parent === selectedClass?.id)?.map((item) => (
                            <Button
                                variant='secondary'
                                className={selectedSubSelector?.title === item?.title ? 'active' : ''}
                                onClick={() => {
                                    setSelectedSubSelector(selectedSubSelector?.title === item?.title ? null : item);
                                }}
                            >
                                <span>{item?.title}</span>
                                <span className="controls-dropdown-content-subselector-group__icon">{close}</span>
                            </Button>
                        ))
                    }
                </div>
            </VStack>
            <div className="controls-dropdown-content-body">
                {
                    !selectedSubSelector ? (
                        <StyleControls
                            value={parentStyle}
                            onChange={(value) => {
                                setParentStyle({
                                    ...parentStyle,
                                    ...value
                                });
                            }}
                        />
                    ) : (
                        <StyleControls
                            value={attributes?.classManagerSubselector?.find((item) => item?.title === selectedSubSelector?.title && selectedClass?.id === item?.parent)?.style}
                            onChange={(value) => {
                                const classIndex = attributes?.classManagerSubselector.findIndex((item) => item?.title === selectedSubSelector?.title && selectedClass?.id === item?.parent);
                                const newSubSelectors = [...attributes?.classManagerSubselector];
                                newSubSelectors[classIndex] = {
                                    ...newSubSelectors[classIndex],
                                    style: {
                                        ...newSubSelectors[classIndex]?.style,
                                        ...value
                                    }
                                }
                                setAttributes({
                                    classManagerSubselector: newSubSelectors
                                });
                            }}
                        />
                    )
                }
            </div>
        </div>
    )
};

export default ControlsDropdownContent;