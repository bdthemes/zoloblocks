export const generateMaskAttributes = (controlName) => {
    return {
        [`${controlName}MaskImage`]: {
            type: 'string',
            default: '',
        },
        [`${controlName}MaskSize`]: {
            type: 'string',
            default: 'auto',
        },
        [`${controlName}MaskPosition`]: {
            type: 'string',
            default: 'center center',
        },
        [`${controlName}MaskRepeat`]: {
            type: 'string',
            default: 'no-repeat',
        },
    };
};

export const generateMaskStyles = ({ controlName, attributes }) => {
    const {
        [`${controlName}MaskImage`]: maskImage,
        [`${controlName}MaskSize`]: maskSize,
        [`${controlName}MaskPosition`]: maskPosition,
        [`${controlName}MaskRepeat`]: maskRepeat,
    } = attributes;

    let maskStyle = '';
    if (maskImage) {
        maskStyle += `mask-image: url(${zoloSettings?.maskShapes[maskImage]});`;
        if (maskSize) {
            maskStyle += `mask-size: ${maskSize};`;
        }

        if (maskPosition) {
            maskStyle += `mask-position: ${maskPosition};`;
        }

        if (maskRepeat) {
            maskStyle += `mask-repeat: ${maskRepeat};`;
        }
    }

    return {
        maskStyle,
    };
};
