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

    //submenu attributes
    addSubmenu: {
        type: 'boolean',
        default: false,
    },
    submenuType: {
        type: 'string',
        default: 'dropdown',
    },
    label: {
        type: "string"
    },
    type: {
        type: "string"
    },
    description: {
        type: "string"
    },
    rel: {
        type: "string"
    },
    id: {
        type: "number"
    },
    opensInNewTab: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string"
    },
    title: {
        type: "string"
    },
    kind: {
        type: "string"
    },
};
export default attributes;
