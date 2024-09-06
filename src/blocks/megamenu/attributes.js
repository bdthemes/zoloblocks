const attributes = {
    //Common Attributes
    globalConfig: {
        type: 'object',
        default: {
            background: {
                prefix: 'mainBg',
            },
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
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
    // block attributes
    isVariationSelected: {
        type: 'boolean',
        default: false,
    },
    menuBreakpoint: {
        type: 'string',
        default: 'tablet',
    },
};
export default attributes;
