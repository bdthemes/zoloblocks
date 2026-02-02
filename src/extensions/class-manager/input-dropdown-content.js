import { useState, useMemo } from '@wordpress/element';
import { SearchControl, MenuItem, MenuGroup, Button, __experimentalText as Text } from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';
import { plus, trash } from '@wordpress/icons';
import classNames from 'classnames';
import { useDispatch } from '@wordpress/data';
import { isValidCssClass, useClasses } from './utils';
const InputDropdownContent = ({ attributes, setAttributes }) => {
    const [ searchInput, setSearchInput ] = useState('');
    const { records: rawRecords, hasResolved } = useEntityRecords('postType', 'zolo-class-manager', { per_page: -1, search: searchInput, parent: 0 });
    const records = useClasses(rawRecords || []);
    const { saveEntityRecord, deleteEntityRecord } = useDispatch('core');
   
    const hasClassExists = useMemo(() => {
        return (records || []).some((item) => item.title === searchInput);
    }, [records, searchInput]);

    const modifiedRecords = useMemo(() => {
        const selectedClasses = attributes?.classManager || [];
        const excludeIds = new Set(selectedClasses.map(item => item.id));
        return records?.map((item) => {
            return {
                ...item,
                isSelected: excludeIds.has(item.id)
            }
        })
    }, [records, attributes?.classManager]);


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
                    hasResolved && records && modifiedRecords && records.length > 0 && modifiedRecords.length > 0 && (
                        modifiedRecords.map((item) => {
                            return (
                                <MenuItem
                                    className={classNames('zb-class-manager-class', { 'zb-class-manager-class-selected': item?.isSelected || false })}
                                    key={item?.id}
                                    onClick={() => {
                                        if (item?.isSelected) {
                                            setAttributes({
                                                classManager: attributes?.classManager?.filter((classItem) => classItem?.id !== item?.id)
                                            })
                                        } else {
                                            setAttributes({
                                                classManager: [
                                                    ...attributes.classManager || [],
                                                    {
                                                        id: item?.id,
                                                        title: item?.title,
                                                    }]
                                            })
                                        }
                                    }}
                                >
                                    <Text>{item?.title}</Text>
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
                        disabled={hasClassExists || !isValidCssClass(searchInput)}
                        variant='primary'
                        className='zb-class-manager-input-dropdown-add'
                        icon={plus}
                        onClick={async () => {
                            await saveEntityRecord('postType', 'zolo-class-manager', {
                                title: searchInput?.trim(),
                                status: 'publish'
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

export default InputDropdownContent