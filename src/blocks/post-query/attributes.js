const attributes = {
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
            },
            background: {
                prefix: 'mainBg',
            },
            border: {
                prefix: 'mainBorder',
            },
            borderRadius: {
                prefix: 'mainBorderRadius',
            },
            boxShadow: {
                prefix: 'mainBoxShadow',
            },
            responsiveControls: true,
        },
    },
    queryId: {
        type: 'number'
    },
    query: {
        type: 'object',
        default: {
            perPage: null,
            pages: 0,
            offset: 0,
            postType: "post",
            order: "desc",
            orderBy: "date",
            exclude: [],
            inherit: true
        },
    },
};

export default attributes;
