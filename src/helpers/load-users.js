import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
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

export default loadUsers;