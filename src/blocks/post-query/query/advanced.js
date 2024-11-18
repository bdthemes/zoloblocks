import { __experimentalInputControl as InputControl, SelectControl, BaseControl, TextControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { commentsCompareOptions, passwordOptions } from '../utils';
import { useSelect } from '@wordpress/data';
import Select2 from 'react-select';
const { IconicBtnGroup } = window.zoloModule;

const AdvancedQuery = ({ query, setQuery }) => {
    const { mimeTypes } = useSelect((select) => {
        const { getSettings } = select('core/block-editor');
        const allowedMimeTypes = getSettings()?.allowedMimeTypes;
        const options = Object.keys(allowedMimeTypes)?.map((key) => {
            const label = key;
            const value = allowedMimeTypes[key];
            return {
                label,
                value,
            };
        });

        return {
            mimeTypes: options,
        };
    }, []);
    return (
        <>
            <InputControl
                label={__('Number of comments', 'zoloblocks')}
                type="number"
                value={query?.commentsNumber}
                onChange={(value) => setQuery({ ...query, commentsNumber: value })}
                labelPosition="edge"
                __unstableInputWidth="64px"
            />
            {query?.commentsNumber && (
                <SelectControl
                    label={__('Comment Compare', 'zoloblocks')}
                    value={query?.commentsCompare}
                    onChange={(value) => setQuery({ ...query, commentsCompare: value })}
                    options={commentsCompareOptions}
                />
            )}
            <CardDivider />
            <IconicBtnGroup
                label={__('Password', 'zoloblocks')}
                value={query?.password}
                onChange={(value) => setQuery({ ...query, password: value })}
                options={passwordOptions}
            />

            {query?.password === 'password' && (
                <TextControl
                    label={__('Specify', 'zoloblocks')}
                    value={query?.passwordValue}
                    onChange={(value) => setQuery({ ...query, passwordValue: value })}
                />
            )}
            <CardDivider />
            <TextControl
                label={__('Search Term', 'zoloblocks')}
                value={query?.searchValue}
                onChange={(value) => setQuery({ ...query, searchValue: value })}
            />
            <CardDivider />
            <BaseControl label={__('Media Types', 'zoloblocks')} className="zolo-flex-col-control">
                <Select2
                    classNamePrefix="zolo-select"
                    options={mimeTypes}
                    value={query?.mimeTypes}
                    onChange={(value) => setQuery({ ...query, mimeTypes: value })}
                    isMulti={true}
                    key="mimeTypes"
                />
            </BaseControl>
        </>
    );
};
export default AdvancedQuery;
