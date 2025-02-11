import { SelectControl, __experimentalInputControl as InputControl, BaseControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { SORT_ORDER } from '../../../src/global/constants';
import { ORDER_BY, USER_ROLE } from './constants';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';


const QuerySettings = ({ attributes, setAttributes }) => {
    const { ZoloAsyncSelect, ZoloReactSelect } = window.zoloModule;
    const { authorQuery } = attributes;

    const loadUsers = async (inputValue) => {
        const path = addQueryArgs('/wp/v2/users', {
            search: inputValue,
        })

        try {
            const response = await apiFetch({ path });

            return response.map((user) => {
                return {
                    value: user.id,
                    label: user.name,
                };
            });
        } catch (error) {
            return [];
        }
    }
    return (
        <>
            <InputControl
                label={__('Item Limit', 'zoloblocks')}
                value={authorQuery.itemLimit}
                onChange={(itemLimit) => {
                    setAttributes({ authorQuery: { ...authorQuery, itemLimit } });
                }}
                type="number"
                min={1}
                max={99}
                labelPosition="edge"
                __unstableInputWidth="64px"
            />

            <CardDivider />

            <BaseControl label={__('Role', 'zoloblocks')} className="zolo-flex-col-control">
                <ZoloReactSelect
                    options={USER_ROLE}
                    value={authorQuery.role}
                    onChange={(role) => setAttributes({ authorQuery: { ...authorQuery, role } })}
                    isMulti={true}
                    closeMenuOnSelect={false}
                />
            </BaseControl>

            <div className="zolo-flex-col-control">
                <ZoloAsyncSelect
                    label={__('Exclude', 'zoloblocks')}
                    placeholder={__('Search...', 'zoloblocks')}
                    isMulti={true}
                    value={authorQuery?.exclude || []}
                    onChange={(exclude) => setAttributes({ authorQuery: { ...authorQuery, exclude } })}
                    options={loadUsers}
                />
            </div>

            <CardDivider />

            <SelectControl
                label={__('Order By', 'zoloblocks')}
                value={authorQuery.orderby}
                onChange={(orderby) => {
                    setAttributes({ authorQuery: { ...authorQuery, orderby } });
                }}
                options={ORDER_BY}
            />

            <SelectControl
                label={__('Sort Order', 'zoloblocks')}
                value={authorQuery.order}
                onChange={(order) => {
                    setAttributes({ authorQuery: { ...authorQuery, order } });
                }}
                options={SORT_ORDER}
            />
        </>
    );
};

export default QuerySettings;
