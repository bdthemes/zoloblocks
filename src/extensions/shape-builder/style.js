const Style = (props) => {
    const { attributes } = props;
    const { uniqueId, shapeBuilder, shape = [] } = attributes;

    if (!shapeBuilder || !shapeBuilder.enabled || shape.length === 0) {
        return {
            shapeBuilderDesktop: '',
            shapeBuilderTablet: '',
            shapeBuilderMobile: '',
        };
    }

    let shapeBuilderDesktop = '';
    let shapeBuilderTablet = '';
    let shapeBuilderMobile = '';

    // Add position relative to parent block wrapper
    const mainSelector = `.zolo-block-${uniqueId}`;
    shapeBuilderDesktop += `
        ${mainSelector} {
            position: relative;
        }
    `;

    // Generate styles for each shape
    shape.forEach((shapeItem, index) => {
        const selector = `.zolo-shape-builder-${uniqueId}-${shapeItem.id || index}`;
        const {
            width = 200,
            height = 200,
            zIndex = 1,
            horizontalOrientation = 'start',
            horizontalOffset = 0,
            verticalOrientation = 'start',
            verticalOffset = 0,
            translateX = 0,
            translateY = 0,
            rotate = 0,
            translateXHover = 0,
            translateYHover = 0,
            rotateHover = 0,
            filterBlur = 0,
            filterBrightness = 100,
            filterContrast = 100,
            filterSaturate = 100,
            filterHue = 0,
            filterBlurHover = 0,
            filterBrightnessHover = 100,
            filterContrastHover = 100,
            filterSaturateHover = 100,
            filterHueHover = 0,
            customSvgFillColor = '',
            customSvgStrokeColor = '',
        } = shapeItem;

        const transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
        const transformHover = `translate(${translateXHover}px, ${translateYHover}px) rotate(${rotateHover}deg)`;
        const filter = `blur(${filterBlur}px) brightness(${filterBrightness}%) contrast(${filterContrast}%) saturate(${filterSaturate}%) hue-rotate(${filterHue}deg)`;
        const filterHover = `blur(${filterBlurHover}px) brightness(${filterBrightnessHover}%) contrast(${filterContrastHover}%) saturate(${filterSaturateHover}%) hue-rotate(${filterHueHover}deg)`;

        shapeBuilderDesktop += `
            ${selector} {
                z-index: ${zIndex};
                ${horizontalOrientation === 'start' ? `left: ${horizontalOffset}px;` : `right: ${horizontalOffset}px; left: auto;`}
                ${verticalOrientation === 'start' ? `top: ${verticalOffset}px;` : `bottom: ${verticalOffset}px; top: auto;`}
                transform: ${transform};
                filter: ${filter};
                transition: transform 0.3s ease, filter 0.3s ease;
            }
            ${selector} svg {
                width: ${width}px;
                height: ${height}px;
            }
            .zolo-block-${uniqueId}:hover ${selector} {
                transform: ${transformHover};
                filter: ${filterHover};
            }
        `;

        // Add custom SVG color styles if it's a custom shape
        if (shapeItem.shapeType === 'custom') {
            if (customSvgFillColor) {
                shapeBuilderDesktop += `
                    ${selector}.zolo-shape-builder-custom svg *,
                    ${selector}.zolo-shape-builder-custom img {
                        fill: ${customSvgFillColor} !important;
                        color: ${customSvgFillColor} !important;
                    }
                `;
            }
            if (customSvgStrokeColor) {
                shapeBuilderDesktop += `
                    ${selector}.zolo-shape-builder-custom svg *,
                    ${selector}.zolo-shape-builder-custom img {
                        stroke: ${customSvgStrokeColor} !important;
                    }
                `;
            }
        }
    });

    return {
        shapeBuilderDesktop,
        shapeBuilderTablet,
        shapeBuilderMobile,
    };
};

export default Style;
