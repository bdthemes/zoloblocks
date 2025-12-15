const attributes = {
    // global config
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'advBtnMargin',
            },
            padding: {
                prefix: 'advBtnPadding',
            },
            background: {
                prefix: 'advBtnBg',
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
    isVariationSelected: {
        type: 'boolean',
        default: false,
    },
    flexWidthType: {
        type: 'string',
        default: 'alignfull',
    },
    tagName: {
        type: 'string',
        default: 'div',
    },
    link: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    flexDirection: {
        type: 'object',
    },
    flexboxCustomWidth: {
        type: 'object',
        default: {
            Desktop: "100%",
        },
    },
    minHeight: {
        type: 'object'
    },
    flexJustifyContent: {
        type: 'object'
    },
    flexAlignItems: {
        type: 'object'
    },
    flexWrap: {
        type: 'object'
    },
    flexGap: {
        type: 'object'
    },
};

export default attributes;
