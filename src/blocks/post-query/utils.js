/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

/**
 * Returns a helper object that contains:
 * 1. An `options` object from the available post types, to be passed to a `SelectControl`.
 * 2. A helper map with available taxonomies per post type.
 *
 * @return {Object} The helper object related to post types.
 */
export const usePostTypes = () => {
    const postTypes = useSelect((select) => {
        const { getPostTypes } = select(coreStore);
        const excludedPostTypes = ['attachment'];
        const filteredPostTypes = getPostTypes({ per_page: -1 })?.filter(
            ({ viewable, slug }) =>
                viewable && !excludedPostTypes.includes(slug)
        );
        return filteredPostTypes;
    }, []);
    const postTypesTaxonomiesMap = useMemo(() => {
        if (!postTypes?.length) return;
        return postTypes.reduce((accumulator, type) => {
            accumulator[type.slug] = type.taxonomies;
            return accumulator;
        }, {});
    }, [postTypes]);
    const postTypesSelectOptions = useMemo(
        () =>
            (postTypes || []).map(({ labels, slug }) => ({
                label: labels.singular_name,
                value: slug,
            })),
        [postTypes]
    );
    return { postTypesTaxonomiesMap, postTypesSelectOptions };
};

const getComplexSelectValue = (attributes) => {
    return attributes?.value || null;
}

export const postStatusOptions = [
    {
        label: 'Any',
        value: 'any',
    },
    {
        label: 'Publish',
        value: 'publish',
    },
    {
        label: 'Pending',
        value: 'pending',
    },
    {
        label: 'Draft',
        value: 'draft',
    },
    {
        label: 'Future',
        value: 'future',
    },
    {
        label: 'Private',
        value: 'private',
    },
    {
        label: 'Trash',
        value: 'trash',
    },
];

export const orderByOptions = [
    {
        label: 'none',
        value: 'none'
    },
    {
        label: 'ID',
        value: 'ID',
    },
    {
        label: 'Author',
        value: 'author',
    },
    {
        label: 'Title',
        value: 'title',
    },
    {
        label: 'Name',
        value: 'name',
    },
    {
        label: 'Type',
        value: 'type'
    },
    {
        label: 'Date',
        value: 'date',
    },
    {
        label: 'Modified',
        value: 'modified',
    },
    {
        label: 'Parent',
        value: 'parent',
    },
    {
        label: 'Random',
        value: 'rand',
    },
    {
        label: 'Comment Count',
        value: 'comment_count',
    },
    {
        label: 'Menu Order',
        value: 'menu_order',
    },
    {
        label: 'Meta Value',
        value: 'meta_value',
    },
    {
        label: 'Meta Value Num',
        value: 'meta_value_num',
    },
    {
        label: 'Post In',
        value: 'post__in',
    },
    {
        label: 'Post Name In',
        value: 'post_name__in',
    },
    {
        label: 'Post Parent In',
        value: 'post_parent__in',
    }
];

export const compareOptions = [
    {
        label: '==',
        value: '=',
    },
    {
        label: '!=',
        value: '!=',
    },
    {
        label: '>',
        value: '>',
    },
    {
        label: '<',
        value: '<',
    },
    {
        label: '>=',
        value: '>=',
    },
    {
        label: '<=',
        value: '<=',
    },
    {
        label: 'LIKE',
        value: 'LIKE',
    },
    {
        label: 'NOT LIKE',
        value: 'NOT LIKE',
    },
    {
        label: 'IN',
        value: 'IN',
    },
    {
        label: 'NOT IN',
        value: 'NOT IN',
    },
    {
        label: 'BETWEEN',
        value: 'BETWEEN',
    },
    {
        label: 'NOT BETWEEN',
        value: 'NOT BETWEEN',
    },
    {
        label: 'EXISTS',
        value: 'EXISTS',
    },
    {
        label: 'NOT EXISTS',
        value: 'NOT EXISTS',
    }
];

export const metaTypeOptions = [
    {
        label: 'CHAR',
        value: 'CHAR',
    },
    {
        label: 'NUMERIC',
        value: 'NUMERIC',
    },
    {
        label: 'BINARY',
        value: 'BINARY',
    },
    {
        label: 'DATE',
        value: 'DATE',
    },
    {
        label: 'DATETIME',
        value: 'DATETIME',
    },
    {
        label: 'DECIMAL',
        value: 'DECIMAL',
    },
    {
        label: 'SIGNED',
        value: 'SIGNED',
    },
    {
        label: 'UNSIGNED',
        value: 'UNSIGNED',
    },
    {
        label: 'TIME',
        value: 'TIME',
    }
];

export const dateCompareOptions = [
    {
        label: '==',
        value: '=',
    },
    {
        label: '!=',
        value: '!=',
    },
    {
        label: '>',
        value: '>',
    },
    {
        label: '<',
        value: '<',
    },
    {
        label: '>=',
        value: '>=',
    },
    {
        label: '<=',
        value: '<=',
    },
    {
        label: 'LIKE',
        value: 'LIKE',
    },
    {
        label: 'NOT LIKE',
        value: 'NOT LIKE',
    },
    {
        label: 'IN',
        value: 'IN',
    },
    {
        label: 'NOT IN',
        value: 'NOT IN',
    },
    {
        label: 'BETWEEN',
        value: 'BETWEEN',
    },
    {
        label: 'NOT BETWEEN',
        value: 'NOT BETWEEN',
    },
];

export const commentsCompareOptions = [
    {
        label: '==',
        value: '=',
    },
    {
        label: '!=',
        value: '!=',
    },
    {
        label: '>',
        value: '>',
    },
    {
        label: '<',
        value: '<',
    },
    {
        label: '>=',
        value: '>=',
    },
    {
        label: '<=',
        value: '<=',
    },
]

export const getPostTypes = (postTypes = []) => {
    const postTypesMap = postTypes && postTypes.map((type) => {
        return getComplexSelectValue(type);
    })

    return postTypesMap && postTypesMap.join(',');
}