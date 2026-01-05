import { useState, useMemo } from '@wordpress/element';
import { SearchControl, MenuItem, MenuGroup, Button, __experimentalText as Text } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';
import classNames from 'classnames';
import { useDispatch } from '@wordpress/data';
import { isValidCssClass } from './utils';
const SubselectorDropdownContent = ({ subSelectors = [], parent, attributes, setAttributes }) => {
    const [ searchInput, setSearchInput ] = useState('');
    const { saveEntityRecord, deleteEntityRecord } = useDispatch('core');
   
    const hasClassExists = useMemo(() => {
        return subSelectors.some((item) => item.title === searchInput);
    }, [subSelectors, searchInput]);

    const modifiedRecords = useMemo(() => {
        const selectedClasses = attributes?.classManagerSubselector || [];
        const excludeIds = new Set(selectedClasses.map(item => item.id));
        return subSelectors?.map((item) => {
            return {
                ...item,
                isSelected: excludeIds.has(item.id)
            }
        })
    }, [subSelectors, attributes?.classManagerSubselector]);
    

    if(!parent) return null;


    return (
        <div className="zolo-input-dropdown-content">
            <SearchControl
                className='zb-class-manager-search'
                placeholder="Write class name..."
                value={searchInput}
                onChange={(value) => setSearchInput(value)}
            />
            <MenuGroup title="Classes" className='zb-class-manager-classes'>
                {
                    subSelectors?.length > 0 && modifiedRecords && modifiedRecords.length > 0 && (
                        modifiedRecords.map((item) => {
                            return (
                                <MenuItem
                                    className={classNames('zb-class-manager-class', { 'zb-class-manager-class-selected': item?.isSelected || false })}
                                    key={item?.id}
                                    onClick={() => {
                                        if (item?.isSelected) {
                                            setAttributes({
                                                classManagerSubselector: attributes?.classManagerSubselector?.filter((classItem) => classItem?.id !== item?.id)
                                            })
                                        } else {
                                            setAttributes({
                                                classManagerSubselector: [
                                                    ...attributes.classManagerSubselector || [],
                                                    {
                                                        id: item?.id,
                                                        title: item?.title,
                                                        parent: parent?.id
                                                    }
                                                ]
                                            })
                                        }
                                    }}
                                    showTooltip={item?.title?.length > 20}
                                >
                                    <Text>{item?.title?.length > 20 ? item?.title?.slice(0, 20) + '...' : item?.title}</Text>
                                    <span
                                        className='zb-class-manager-delete'
                                        role='button'
                                        tabIndex={0}
                                        onClick={async (e) => {
                                            e.stopPropagation();
                                            await deleteEntityRecord('postType', 'zolo-class-manager', item?.id, { force: true });
                                        }}
                                    >
                                        {trash}
                                    </span>
                                </MenuItem>
                            )
                        })
                    )
                }
            </MenuGroup>
            {
                searchInput?.trim()?.length > 2 && (
                    <Button
                        disabled={hasClassExists}
                        variant='primary'
                        className='zb-class-manager-input-dropdown-add'
                        icon={plus}
                        onClick={async () => {
                            await saveEntityRecord('postType', 'zolo-class-manager', {
                                title: searchInput?.trim(),
                                status: 'publish',
                                parent: parent?.id
                            });
                            setSearchInput('');
                        }}
                    >
                        Add Class
                    </Button>
                )
            }
        </div>
    )
};

export default SubselectorDropdownContent;