import { Flex, FlexItem, __experimentalVStack as VStack, Button, __experimentalText as Text, TextControl, Dropdown } from '@wordpress/components';
import { plus, seen, unseen, trash, pencil, closeSmall } from '@wordpress/icons';
import StyleControls from './style-controls';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import SubselectorDropdownContent from './subselector-droptdown-content';
import classNames from 'classnames';
import { isValidCssClass } from './utils';

const ControlsDropdownContent = ({ selectedClass, setSelectedClass, selectedSubSelector, setSelectedSubSelector, attributes, setAttributes }) => {
    const { style: parentStyle, selectedClassRawTitle, subSelectors } = useSelect((select) => {
        const { getEditedEntityRecord, getEntityRecord, getEntityRecords } = select('core');
        const data = getEntityRecord('postType', 'zolo-class-manager', selectedClass?.id, { parent: 0 });
        const subSelectorsRaw = getEntityRecords('postType', 'zolo-class-manager', { per_page: -1, parent: selectedClass?.id }) || [];
        const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        const subSelectors = subSelectorsRaw?.length > 0 ? subSelectorsRaw.map((item) => {
            const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', item?.id);
            if (editedData) {
                return {
                    parent: editedData?.parent,
                    id: editedData?.id,
                    title: editedData?.title
                };
            }
        }) : [];
        return {
            style: data && editedData?.content ? JSON.parse(editedData?.content) : '',
            selectedClassRawTitle: editedData?.title,
            subSelectors
        }
    }, [selectedClass]);

    const { childStyle } = useSelect((select) => {
        if (!selectedSubSelector) {
            return {
                childStyle: null
            }
        }
        const { getEditedEntityRecord, getEntityRecord } = select('core');
        const data = getEntityRecord('postType', 'zolo-class-manager', selectedSubSelector?.id);
        const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', selectedSubSelector?.id);
        return {
            childStyle: data && editedData?.content ? JSON.parse(editedData?.content) : null
        }
    }, [selectedSubSelector]);
    const { editEntityRecord, deleteEntityRecord } = useDispatch('core');
    const { __unstableMarkNextChangeAsNotPersistent: markNextChangeAsNotPersistent } = useDispatch('core/block-editor');
    const currentID = selectedSubSelector?.id || selectedClass?.id;
    const currentStyle = selectedSubSelector?.id ? childStyle : parentStyle;

    const setStyle = (style) => {
        editEntityRecord('postType', 'zolo-class-manager', currentID, { content: JSON.stringify(style) });
    }

    const subSelectorTitle = subSelectors?.find((item) => item?.id === selectedSubSelector?.id)?.title;

    const panelTitle = subSelectorTitle || selectedClassRawTitle;
    const [editInput, setEditInput] = useState(panelTitle);

    const subSelectorsMerge = attributes?.classManagerSubselector?.map((item) => {
        const subSelector = subSelectors?.find((subSelector) => subSelector?.id === item?.id);
        if (subSelector) {
            return {
                ...item,
                title: subSelector?.title
            }
        }
    })?.filter(Boolean);
    

    const onDelete = async () => {
        if (currentID) {
            await deleteEntityRecord('postType', 'zolo-class-manager', currentID, { force: true });
            if (selectedSubSelector) {
                setSelectedSubSelector(null);
                const updatedSubSelector = attributes?.classManagerSubselector?.filter((item) => item?.id !== selectedSubSelector?.id && item?.parent === selectedClass?.id);
                setAttributes({ classManagerSubselector: updatedSubSelector });
            } else {
                setSelectedClass(null);
                setSelectedSubSelector(null);
                const updatedClasses = attributes?.classManager?.filter((item) => item?.id !== selectedClass?.id);
                const updatedSubSelector = attributes?.classManagerSubselector?.filter((item) => item?.parent !== selectedClass?.id);
                setAttributes({ classManager: updatedClasses, classManagerSubselector: updatedSubSelector });
            }
        }
    }

    const unseenTitle = selectedSubSelector ? attributes?.unseenSelector : attributes?.unseenClass;

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
                                                editEntityRecord('postType', 'zolo-class-manager', currentID, { title: editInput });
                                                if (selectedSubSelector) {
                                                    const updatedSubSelector = attributes?.classManagerSubselector?.map((item) => {
                                                        if (item?.id === selectedSubSelector?.id && item?.parent === selectedClass?.id) {
                                                            return {
                                                                ...item,
                                                                title: editInput
                                                            };
                                                        }
                                                        return item;
                                                    });
                                                    setAttributes({ classManagerSubselector: updatedSubSelector });
                                                } else if (!selectedSubSelector && isValidCssClass(editInput)) {
                                                    const updatedClasses = attributes?.classManager?.map((item) => {
                                                        if (item?.id === selectedClass?.id) {
                                                            return {
                                                                ...item,
                                                                title: editInput
                                                            };
                                                        }
                                                        return item;
                                                    });
                                                    setAttributes({ classManager: updatedClasses });
                                                }
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
                                                disabled={!selectedSubSelector && !isValidCssClass(editInput)}
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
                            icon={unseenTitle === panelTitle ? unseen : seen}
                            label={unseenTitle === panelTitle ? 'Show' : 'Hide'}
                            showTooltip
                            onClick={() => {
                                markNextChangeAsNotPersistent();
                                if (selectedSubSelector) {
                                    if (selectedSubSelector?.title === attributes?.unseenSelector) {
                                        setAttributes({ unseenSelector: '' });
                                    } else {
                                        setAttributes({ unseenSelector: selectedSubSelector?.title });
                                    }
                                } else {
                                    if (selectedClass?.title === attributes?.unseenClass) {
                                        setAttributes({ unseenClass: '' });
                                    } else {
                                        setAttributes({ unseenClass: selectedClass?.title });
                                    }
                                }


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
                <div className="controls-dropdown-content-subselectors">
                    {
                        subSelectorsMerge?.length > 0 && subSelectorsMerge?.map((item) => {
                            if (item?.parent === selectedClass?.id) {
                                return (
                                    <Button
                                        key={item?.id}
                                        variant='secondary'
                                        size='small'
                                        label={item?.title}
                                        className={classNames('controls-dropdown-content-subselector', { 'subselector-selected': selectedSubSelector?.id === item?.id })}
                                        showTooltip
                                        onClick={() => {
                                            if (selectedSubSelector?.id === item?.id) {
                                                setSelectedSubSelector(null);
                                                setEditInput(selectedClass?.title);
                                            } else {
                                                setSelectedSubSelector(item);
                                                setEditInput(item?.title);
                                            }
                                        }}
                                    >
                                        <Text>{item?.title}</Text>
                                        <span
                                            className='controls-dropdown-content-subselector-close'
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const updatedSubSelector = attributes?.classManagerSubselector?.filter((subSelector) => subSelector?.id !== item?.id);
                                                setAttributes({ classManagerSubselector: updatedSubSelector });
                                                if (selectedSubSelector?.id === item?.id) {
                                                    setSelectedSubSelector(null);
                                                }
                                            }}
                                        >
                                            {closeSmall}
                                        </span>
                                    </Button>
                                )
                            }
                        })
                    }
                    <Dropdown
                        className="zb-class-manager-subselector-input-dropdown"
                        contentClassName="zb-class-manager-input-dropdown-content"
                        popoverProps={{ placement: 'bottom-end' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <Button
                                label='Add Subselector'
                                className='controls-dropdown-content-subselector'
                                icon={plus}
                                variant='secondary'
                                size='small'
                                showTooltip
                                onClick={onToggle}
                                aria-expanded={isOpen}
                            />
                        )}
                        renderContent={() => {
                            return (
                                <SubselectorDropdownContent subSelectors={subSelectors} parent={selectedClass} attributes={attributes} setAttributes={setAttributes} />
                            )
                        }}
                    />
                </div>
            </VStack>
            <div className="controls-dropdown-content-body">
                <StyleControls
                    value={currentStyle}
                    onChange={(value) => {
                        setStyle({
                            ...currentStyle,
                            ...value
                        });
                    }}
                />
            </div>
        </div>
    )
};

export default ControlsDropdownContent;