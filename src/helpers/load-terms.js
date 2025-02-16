import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
const loadTerms = async (inputValue, taxonomy) => {
    if (taxonomy?.rest_base) {
        const path = addQueryArgs(`/wp/v2/${taxonomy?.rest_base}`, {
            search: inputValue,
        });

        try {
            const response = await apiFetch({ path });
            return response.map((term) => {
                return {
                    value: term.id,
                    label: term.name,
                };
            });
        } catch (error) {
            return [];
        }
    }

    return [];
};

export default loadTerms;