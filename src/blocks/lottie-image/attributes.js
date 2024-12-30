/**
 * Internal dependencies
 */


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
            responsiveControls: true,
        },
    },
    fileId: {
        type: 'string',
        default: '',
    },
    fileURL: {
        type: 'string',
        default: '',
    },

    fileWidth: {
        type: 'number',
    },
    fileHeight: {
        type: 'number',
    },
    direction: {
        type: 'number',
        default: 1,
    },
    trigger: {
        type: 'number',
        default: 0,
    },

    loop: {
        type: 'boolean',
        default: true,
    },
    speed: {
        type: 'number',
        default: 1,
    },
    autoplay: {
        type: 'boolean',
        default: true,
    },
};

export default attributes;
