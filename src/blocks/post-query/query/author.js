import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import AsyncSelect from "react-select/async";

const Author = ({ query, setQuery }) => {
    const loadAuthors = async (input) => {
        const response = await apiFetch({
            path: `/wp/v2/users?search=${input}`,
        });

        const authors = []
        for (const key in response) {
            const author = response[key];
            authors.push({
                label: author.name,
                value: author.id
            })
        }

        return authors
    }
    return (
        <>
            <BaseControl label={__('Author IN', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                    classNamePrefix="zolo-select"
                    defaultOptions
                    loadOptions={loadAuthors}
                    value={query?.authorIn}
                    onChange={(newValue) => setQuery({ authorIn: newValue })}
                    isMulti={true}
                    isClearable
                    key='authorIn'
                />
            </BaseControl>
            <BaseControl label={__('Author NOT IN', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                    classNamePrefix="zolo-select"
                    defaultOptions
                    loadOptions={loadAuthors}
                    value={query?.authorNotIn}
                    onChange={(newValue) => setQuery({ authorNotIn: newValue })}
                    isMulti={true}
                    isClearable
                    key='authorNotIn'
                />
            </BaseControl>
        </>
    )
}

export default Author;