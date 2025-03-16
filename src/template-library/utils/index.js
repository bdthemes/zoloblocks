const rootURL = 'https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

export const fetchRecords = async (query, type) => {
    try {
        const path = addQueryArgs(`/${type}`, query);
        console.log(`${rootURL}${path}`);
        const response = await fetch(`${rootURL}${path}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchCategories = async (type) => {
    try {
        const response = await fetch(`${rootURL}/${type}/categories`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchTags = async (type) => {
    try {
        const response = await fetch(`${rootURL}/${type}/tags`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const TABS = [
    { label: __('Demos', 'zoloblocks'), value: 'demos' },
    { label: __('Templates', 'zoloblocks'), value: 'templates' },
    { label: __('Pages', 'zoloblocks'), value: 'pages' },
    { label: __('Patterns', 'zoloblocks'), value: 'patterns' },
    { label: __('Favorites', 'zoloblocks'), value: 'favorites' },
];

export const useCategories = (args = []) => {
    const result = useSelect(
        (select) => {
            const {
                getCategories,
                isResolving,
                hasFinishedResolution,
                hasStartedResolution
            } = select(STORE_NAME);
            return {
                startResolution: hasStartedResolution('getCategories', [...args]),
                isResolving: isResolving('getCategories', [...args]),
                categories: getCategories(...args),
                hasResolved: hasFinishedResolution('getCategories', [...args]),
            };
        },
        [args]
    );

    return result;
}

export const useTags = (args = []) => {
    const result = useSelect(
        (select) => {
            const {
                getTags,
                isResolving,
                hasFinishedResolution,
                hasStartedResolution
            } = select(STORE_NAME);
            return {
                startResolution: hasStartedResolution('getTags', [...args]),
                isResolving: isResolving('getTags', [...args]),
                tags: getTags(...args),
                hasResolved: hasFinishedResolution('getTags', [...args]),
            };
        },
        [args]
    );

    return result;
}

export const useRecords = (args = []) => {
    const result = useSelect(
        (select) => {
            const {
                getRecords,
                isResolving,
                hasFinishedResolution,
                hasStartedResolution
            } = select(STORE_NAME);
            return {
                startResolution: hasStartedResolution('getRecords', [...args]),
                isResolving: isResolving('getRecords', [...args]),
                records: getRecords(...args),
                hasResolved: hasFinishedResolution('getRecords', [...args]),
            };
        },
        [args]
    );

    return result;
}