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
                <Flex>
                    <FlexBlock>
                        <InputControl
                            type="text"
                            placeholder="Write subselector here..."
                        />
                    </FlexBlock>
                    <FlexItem>
                        <Button variant='primary' icon={plus}>Add</Button>
                    </FlexItem>
                </Flex>
                <div className="controls-dropdown-content-subselector-group">
                    <Button variant='secondary'>
                        <span>subselector</span>
                        <span className="controls-dropdown-content-subselector-group__icon">{close}</span>
                    </Button>
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
                                setSelectedSubSelector({
                                    ...selectedSubSelector,
                                    style: {
                                        ...selectedSubSelector?.style,
                                        ...value
                                    }
                                })
                            }}
                        />
                    )
                }
            </div>
        </div>
    )
};

export default ControlsDropdownContent;