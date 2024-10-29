export function getSuggestionsQuery(type, kind) {
    switch (type) {
        case 'post':
        case 'page':
            return { type: 'post', subtype: type };
        case 'category':
            return { type: 'term', subtype: 'category' };
        case 'tag':
            return { type: 'term', subtype: 'post_tag' };
        case 'post_format':
            return { type: 'post-format' };
        default:
            if (kind === 'taxonomy') {
                return { type: 'term', subtype: type };
            }
            if (kind === 'post-type') {
                return { type: 'post', subtype: type };
            }
            return {
                // for custom link which has no type
                // always show pages as initial suggestions
                initialSuggestionsSearchOptions: {
                    type: 'post',
                    subtype: 'page',
                    perPage: 20,
                },
            };
    }
}