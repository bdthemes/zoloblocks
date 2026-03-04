const attributes = {
    // Global Attributes
    globalConfig: {
        type: 'object',
        default: {
            margin: { prefix: 'mainMargin' },
            padding: { prefix: 'mainPadding' },
            background: { prefix: 'mainBg' },
            border: { prefix: 'mainBorder' },
            borderRadius: { prefix: 'mainBorderRadius' },
            boxShadow: { prefix: 'mainBoxShadow' },
            responsiveControls: true,
        },
    },

    canvasWidth: {
        type: 'object',
        default: { Desktop: '500px' },
    },
    canvasHeight: {
        type: 'object',
        default: { Desktop: '500px' },
    },

    // Cloud shape & motion
    cloudShape: {
        type: 'string',
        default: 'sphere',
    },
    rotationLock: {
        type: 'string',
        default: '',
    },
    depth: {
        type: 'number',
        default: 80,
    },
    speed: {
        type: 'number',
        default: 50,
    },
    triggerOn: {
        type: 'string',
        default: 'always',
    },
    dragControl: {
        type: 'boolean',
        default: false,
    },
    wheelZoom: {
        type: 'boolean',
        default: false,
    },
    reverse: {
        type: 'boolean',
        default: true,
    },
    shuffleTags: {
        type: 'boolean',
        default: false,
    },
    noMouse: {
        type: 'boolean',
        default: false,
    },
    // Text appearance
    textColor: {
        type: 'string',
        default: '',
    },
    textHeight: {
        type: 'object',
        default: { Desktop: '15px' },
    },

    // Active highlight / outline
    outlineColor: {
        type: 'string',
        default: '#ffff99',
    },
    outlineThickness: {
        type: 'number',
        default: 2,
    },
    outlineDash: {
        type: 'number',
        default: 0,
    },
    outlineDashSpace: {
        type: 'number',
        default: 0,
    },
    outlineDashSpeed: {
        type: 'number',
        default: 1,
    },
    outlineIncrease: {
        type: 'number',
        default: 4,
    },
    outlineBorderRadius: {
        type: 'number',
        default: 0,
    },

    // Tag background
    bgColor: {
        type: 'string',
        default: '',
    },
    bgRadius: {
        type: 'number',
        default: 0,
    },
    tagPadding: {
        type: 'number',
        default: 0,
    },

    // Shadow
    shadowColor: {
        type: 'string',
        default: '#000000',
    },
    shadowBlur: {
        type: 'number',
        default: 0,
    },

    // Interaction
    activeCursor: {
        type: 'string',
        default: 'pointer',
    },
};

export default attributes;
