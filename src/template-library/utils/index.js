const rootURL = 'https://zoloblocks.com/wp-content/uploads/template-library-json';
const templaesRootURL = 'https://templates.zoloblocks.com/wp-content/uploads/template-library-json';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

export const fetchRecords = async (query, type) => {
    try {
        const response = await fetch(`${getRootURL(type)}/${type}/${type}.json`);
        let data = await response.json();
        
        // Apply client-side filtering since we're using static JSON
        if (data && Array.isArray(data)) {
            // Filter by category
            if (query?.categories) {
                data = data.filter(item => {
                    if (!item.categories || !Array.isArray(item.categories)) return false;
                    return item.categories.some(cat => cat.slug === query.categories || cat.id === query.categories);
                });
            }
            
            // Filter by tag
            if (query?.tags) {
                data = data.filter(item => {
                    if (!item.tags || !Array.isArray(item.tags)) return false;
                    return item.tags.some(tag => tag.slug === query.tags || tag.id === query.tags);
                });
            }
            
            // Filter by search text
            if (query?.search) {
                const searchLower = query.search.toLowerCase();
                data = data.filter(item => {
                    return item.title?.toLowerCase().includes(searchLower) ||
                           item.description?.toLowerCase().includes(searchLower);
                });
            }
            
            // Sort by order (created date)
            if (query?.order) {
                data = data.sort((a, b) => {
                    const dateA = a.created || 0;
                    const dateB = b.created || 0;
                    return query.order === 'DESC' ? dateB - dateA : dateA - dateB;
                });
            }
        }
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchCategories = async (type) => {
    try {
        const response = await fetch(`${getRootURL(type)}/${type}/categories.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchTags = async (type) => {
    try {
        const response = await fetch(`${getRootURL(type)}/${type}/tags.json`);
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
    // { label: __('Favorites', 'zoloblocks'), value: 'favorites' },
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

export const getRootURL = (type) => {
    let url = rootURL;
    if (type === 'templates' || type === 'pages') {
        url = templaesRootURL;
    }
    return url;
}

export const getNormalizedParams = (params = {}) => {
    const { page, ...rest } = params;
    return rest;
};

export const getFullUrl = (url, type) => {
    if (!url || url.startsWith('http')) {
        return url;
    }
    
    const baseUrl = (type === 'templates' || type === 'pages') 
        ? 'https://templates.zoloblocks.com' 
        : 'https://zoloblocks.com';
    
    return `${baseUrl}${url}`;
};

