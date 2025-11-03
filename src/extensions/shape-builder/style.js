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
            width,
            height,
            color,
        } = shapeItem;

        // Desktop styles
        shapeBuilderDesktop += `
            ${selector} {
                ${width ? `width: ${width}px;` : ''}
                ${height ? `height: ${height}px;` : ''}
            }
            ${selector} svg {
                ${width ? `width: ${width}px;` : ''}
                ${height ? `height: ${height}px;` : ''}
            }
            ${selector} svg path {
                ${color ? `fill: ${color};` : ''}
            }
        `;
    });

    return {
        shapeBuilderDesktop,
        shapeBuilderTablet,
        shapeBuilderMobile,
    };
};

export default Style;
