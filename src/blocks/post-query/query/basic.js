
import { BaseControl, __experimentalInputControl as InputControl, SelectControl } from "@wordpress/components";
import Select2 from "react-select";
import { orderByOptions, usePostTypes } from "../utils";
import { __ } from "@wordpress/i18n";
import { useSelect, dispatch } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

const {
    ZoloPanelBody
} = window.zoloModule;

const BasicQuery = ({ query, setQuery }) => {
    const { postTypesSelectOptions } = usePostTypes();
    const { attributes, clientId } = useSelect((select) => {
        const { getSelectedBlock } = select('core/block-editor');
        const selectedBlock = getSelectedBlock();
        return { 
            attributes: selectedBlock?.attributes || {},
            clientId: selectedBlock?.clientId || null
        };
    }, [])

    const setAttributes = useCallback((value) => {
        return dispatch('core/block-editor').updateBlockAttributes(clientId, value)
    }, [clientId]);

    return (
        <>
            <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={{attributes, setAttributes}}>
                <BaseControl label={__('Post Type', 'zoloblocks')} className="zolo-flex-col-control">
                    <Select2
                        classNamePrefix="zolo-select"
                        options={postTypesSelectOptions}
                        value={query?.postType}
                        onChange={(value) => setQuery({ ...query, postType: value })}
                        isMulti={false}
                    />
                </BaseControl>
                <InputControl
                    label={__('Posts Per Page', 'zoloblocks')}
                    value={query?.perPage}
                    onChange={(perPage) => {
                        setQuery({ ...query, perPage })
                    }}
                    type="number"
                    min={1}
                    max={99}
                    labelPosition="edge"
                    __unstableInputWidth="64px"
                />
                <InputControl
                    label={__('Offset', 'zoloblocks')}
                    value={query?.offset}
                    onChange={(offset) => {
                        setQuery({ ...query, offset })
                    }}
                    type="number"
                    min={1}
                    max={99}
                    labelPosition="edge"
                    __unstableInputWidth="64px"
                />

                <SelectControl
                    label={__('Order By', 'zoloblocks')}
                    value={query?.orderBy}
                    onChange={(orderBy) => {
                        setQuery({ ...query, orderBy })
                    }}
                    options={orderByOptions}
                />
                <SelectControl
                    label={__('Order', 'zoloblocks')}
                    value={query?.order}
                    onChange={(order) => {
                        setQuery({ ...query, order })
                    }}
                    options={[
                        { value: 'ASC', label: __('ASC', 'zoloblocks') },
                        { value: 'DESC', label: __('DESC', 'zoloblocks') },
                    ]}
                />
            </ZoloPanelBody>
        </>
    )
}
export default BasicQuery;