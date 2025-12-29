import { createHigherOrderComponent } from '@wordpress/compose';
import { useState, useRef } from '@wordpress/element';
import { Popover, Dropdown, MenuGroup, MenuItem, __experimentalText as Text } from '@wordpress/components';
import InputDropdownContent from './input-dropdown-content';
import { plus, close } from '@wordpress/icons';
import ControlsDropdownContent from './controls-dropdown-content';
import classNames from 'classnames';
const Inspector = createHigherOrderComponent((WrappedComponent) => {
    return (props) => {
        const { attributes, setAttributes } = props;
        const [selectedClass, setSelectedClass] = useState(null);
        const [selectedSubSelector, setSelectedSubSelector] = useState(null);
        const containerRef = useRef(null);
        function closeIfFocusOutside() {
            if (!containerRef.current) {
                return;
            }

            const { ownerDocument } = containerRef.current;
            const dialog =
                ownerDocument?.activeElement?.closest('[role="dialog"]');
            if (
                !containerRef.current.contains(ownerDocument.activeElement) &&
                (!dialog || dialog.contains(containerRef.current))
            ) {
                setSelectedClass(null);
                setSelectedSubSelector(null);
            }
        }

        return (
            <WrappedComponent {...props}>
                <MenuGroup title="Classes" className='zb-class-manager'>
                    {
                        attributes?.classManager?.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    className={classNames('zb-class-manager-class-item', { 'zb-class-manager-class-item-selected': item?.id === selectedClass?.id })}
                                    onClick={() => {
                                        if (selectedClass?.id === item?.id) {
                                            setSelectedClass(null);
                                            setSelectedSubSelector(null);
                                        } else {
                                            setSelectedClass(item);
                                        }
                                    }}
                                    ref={containerRef}
                                >
                                    <div
                                        variant="secondary"
                                        className="zb-class-manager-style-dropdown-btn"
                                        title="Select Class"
                                    >
                                        <Text>{item?.title}</Text>
                                        <span
                                            className='zb-class-manager-class-item-remove'
                                            role='button'
                                            tabIndex={0}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setAttributes({
                                                    classManager: attributes?.classManager?.filter((classItem) => classItem?.id !== item?.id)
                                                });
                                                if (selectedClass?.id === item?.id) {
                                                    setSelectedClass(null);
                                                    setSelectedSubSelector(null);
                                                }
                                            }}>
                                            {close}
                                        </span>
                                    </div>
                                </MenuItem>
                            )
                        })
                    }
                    <MenuItem className='zb-class-manager-class-item zb-class-manager-class-item-add'>
                        <Dropdown
                            className="zb-class-manager-input-dropdown"
                            contentClassName="zb-class-manager-input-dropdown-content"
                            popoverProps={{ placement: 'bottom-end' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className="zb-class-manager-add-btn"
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                >
                                    {plus}
                                </div>
                            )}
                            renderContent={() => {
                                return (
                                    <InputDropdownContent
                                        setSelectedClass={setSelectedClass}
                                        selectedClass={selectedClass}
                                        {...props}
                                    />
                                )
                            }}
                        />
                    </MenuItem>
                </MenuGroup>
                {
                    selectedClass && (
                        <Popover
                            className="zb-class-manager-popover"
                            placement='left-start'
                            offset={34}
                            onFocusOutside={closeIfFocusOutside}
                            onClose={() => {
                                setSelectedClass(null);
                                setSelectedSubSelector(null);
                            }}
                        >
                            <ControlsDropdownContent
                                selectedClass={selectedClass}
                                setSelectedClass={setSelectedClass}
                                selectedSubSelector={selectedSubSelector}
                                setSelectedSubSelector={setSelectedSubSelector}
                                {...props}
                            />
                        </Popover>
                    )
                }
            </WrappedComponent>
        );
    }
}, "Inspector");
export default Inspector;