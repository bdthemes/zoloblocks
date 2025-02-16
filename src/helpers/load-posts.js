import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
const loadPosts = async (inputValue, args = {}) => {
    const path = addQueryArgs('/wp/v2/search', {
        search: inputValue,
        ...args
    });

    try {
        const response = await apiFetch({ path });
        return response.map((post) => {
            return {
                value: post.id,
                label: post.title,
            };
        })
    } catch (error) {
        return [];
    }
}

export default loadPosts;