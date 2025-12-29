import { Flex, FlexBlock, FlexItem, __experimentalVStack as VStack, Button, Dropdown, __experimentalInputControl as InputControl } from '@wordpress/components';
import { plus, close, seen, unseen, trash } from '@wordpress/icons';
import StyleControls from './style-controls';
import { useSelect, useDispatch, use } from '@wordpress/data';
const ControlsDropdownContent = ({ selectedClass, setSelectedClass, selectedSubSelector, setSelectedSubSelector, attributes, setAttributes }) => {
    const { style: parentStyle } = useSelect((select) => {
        const { getEditedEntityRecord, getEntityRecord } = select('core');
        const data = getEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', selectedClass?.id);
        return {
            style: data && editedData?.content ? JSON.parse(editedData?.content) : '',
        }
    }, [selectedClass]);

    const { editEntityRecord } = useDispatch('core');
    const setParentStyle = (style) => {
        editEntityRecord('postType', 'zolo-class-manager', selectedClass?.id, { content: JSON.stringify(style) });
    }

    return (
        <div className="controls-dropdown-content">
            <VStack className="controls-dropdown-content-header">
                <Flex>
                    <FlexItem className="controls-dropdown-content-header-title">{selectedClass?.title}</FlexItem>
                    <FlexItem className="controls-dropdown-content-header-controls">
                        <Button className='controls-dropdown-content-header-controls-button' size='small' icon={seen} label='Show/Hide' showTooltip />
                        <Button className='controls-dropdown-content-header-controls-button' size='small' icon={trash} label='Delete' showTooltip />
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
                        attributes?.classManagerSubselector?.map((item) => (
                            <Button
                                variant='secondary'
                                onClick={() => setSelectedSubSelector(item)}
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
                            value={selectedSubSelector?.style}
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