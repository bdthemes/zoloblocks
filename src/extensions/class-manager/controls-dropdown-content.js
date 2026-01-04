import { Flex, FlexBlock, FlexItem, __experimentalVStack as VStack, Button, __experimentalText as Text, TextControl, Dropdown } from '@wordpress/components';
import { plus, close, seen, unseen, trash, pencil } from '@wordpress/icons';
import StyleControls from './style-controls';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import classNames from 'classnames';
const ControlsDropdownContent = ({ selectedClass, setSelectedClass, selectedSubSelector, setSelectedSubSelector, attributes, setAttributes }) => {
    const { style: parentStyle, selectedClassRawTitle } = useSelect((select) => {
        const { getEditedEntityRecord, getEntityRecord } = select('core');
        const data = getEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        return {
            style: data && editedData?.content ? JSON.parse(editedData?.content) : '',
            selectedClassRawTitle: editedData?.title
        }
    }, [selectedClass]);

    const { editEntityRecord, deleteEntityRecord } = useDispatch('core');
    const setParentStyle = (style) => {
        editEntityRecord('postType', 'zolo-class-manager', selectedClass?.id, { content: JSON.stringify(style) });
    }

    const panelTitle = selectedSubSelector?.title || selectedClassRawTitle;
    const [editInput, setEditInput] = useState(selectedClassRawTitle);

    const onDelete = () => {
        if (selectedSubSelector) {
            const updatedSubSelector = attributes?.classManagerSubselector?.filter((item) => item?.title !== selectedSubSelector?.title && item?.parent !== selectedSubSelector?.parent);
            setAttributes({
                classManagerSubselector: updatedSubSelector
            });
            setSelectedSubSelector(null);
        } else if (selectedClass) {
            const result = deleteEntityRecord('postType', 'zolo-class-manager', selectedClass?.id, { force: true });
            if (result) {
                setSelectedClass(null);
                setSelectedSubSelector(null);
                const updateSelector = attributes?.classManager?.filter((item) => item?.id !== selectedClass?.id);
                const updatedSubSelector = attributes?.classManagerSubselector?.filter((item) => item?.parent !== selectedClass?.id);
                setAttributes({
                    classManager: updateSelector,
                    classManagerSubselector: updatedSubSelector
                });
            }
        }
    }

    return (
        <div className="controls-dropdown-content">
            <VStack className="controls-dropdown-content-header">
                <Flex>
                    <FlexItem
                        className="controls-dropdown-content-header-title"
                    >
                        <Text>{panelTitle?.length > 20 ? panelTitle?.slice(0, 20) + '...' : panelTitle}</Text>
                    </FlexItem>
                    <FlexItem className="controls-dropdown-content-header-controls">
                        <Dropdown
                            contentClassName="controls-dropdown-content-header-edit-dropdown-content"
                            popoverProps={{
                                placement: 'left-start'
                            }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button
                                    className='controls-dropdown-content-header-controls-button'
                                    variant='secondary'
                                    size='small'
                                    icon={pencil}
                                    label='Edit'
                                    showTooltip
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                />
                            )}
                            renderContent={({ onClose }) => {
                                return (
                                    <VStack>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                editEntityRecord('postType', 'zolo-class-manager', selectedClass?.id, { title: editInput });
                                                const updatedClass = attributes?.classManager?.map((item) => {
                                                    if (item?.id === selectedClass?.id) {
                                                        return {
                                                            ...item,
                                                            title: editInput
                                                        }
                                                    }
                                                    return item;
                                                });
                                                const updatedSubSelector = attributes?.classManagerSubselector?.map((item) => {
                                                    if (item?.parent === selectedClass?.id) {
                                                        return {
                                                            ...item,
                                                            title: editInput
                                                        }
                                                    }
                                                    return item;
                                                });
                                                setAttributes({
                                                    classManager: updatedClass,
                                                    classManagerSubselector: updatedSubSelector
                                                });
                                                onClose();
                                            }}>
                                            <TextControl
                                                label="Edit Class Name"
                                                value={editInput}
                                                onChange={(value) => {
                                                    setEditInput(value);
                                                }}
                                            />
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                size="small"
                                                label="Save"
                                                showTooltip
                                            >
                                                Save
                                            </Button>
                                        </form>
                                    </VStack>
                                )
                            }}
                        />
                        <Button
                            className='controls-dropdown-content-header-controls-button'
                            variant='secondary'
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
                            variant='secondary'
                            size='small'
                            icon={trash}
                            label='Delete'
                            showTooltip
                            onClick={() => {
                                onDelete();
                            }}
                        />
                    </FlexItem>
                </Flex>
                <form
                    onSubmit={(e) => {
                        console.log('I am subselector form');

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
                    <Flex className="controls-dropdown-content-subselector-form">
                        <FlexBlock>
                            <TextControl
                                className="controls-dropdown-content-subselector-form-input"
                                type="text"
                                name="subselector"
                                placeholder="Write subselector here..."
                                onChange={(value) => { }}
                            />
                        </FlexBlock>
                        <FlexItem>
                            <Button
                                type='submit'
                                className="controls-dropdown-content-subselector-form-button" variant='primary'
                                icon={plus}
                            >
                                Add
                            </Button>
                        </FlexItem>
                    </Flex>
                </form>
                <div className="controls-dropdown-content-subselector-group">
                    {
                        attributes?.classManagerSubselector?.filter((item) => item?.parent === selectedClass?.id)?.map((item) => (
                            <Button
                                variant='secondary'
                                className={classNames('controls-dropdown-content-subselector-group__item', {
                                    'active': selectedSubSelector?.title === item?.title
                                })}
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