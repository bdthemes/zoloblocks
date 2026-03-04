const attributes = {
    // global Attributes
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
            responsiveControls: false,
        },
    },
    // block attributes
    label: {
        type: 'string',
        default: 'Tag Label',
    },
    link: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    textColor: {
        type: 'string',
        default: '',
    },
    fontSize: {
        type: 'number',
        default: 0,
    },
    bgColor: {
        type: 'string',
        default: '',
    },
    bgOutlineColor: {
        type: 'string',
        default: '',
    },
    bgOutlineThickness: {
        type: 'number',
        default: 0,
    },
    tooltip: {
        type: 'string',
        default: '',
    },
};

export default attributes;
