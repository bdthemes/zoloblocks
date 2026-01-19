import { SHAPES_DATA } from './constants';

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { enableShapeBuilder, shape = [], uniqueId } = attributes;

    if (!enableShapeBuilder || shape.length === 0) {
        return null;
    }

    return (
        <>
            {shape.map((shapeItem, index) => {
                if (!shapeItem.shapeType) {
                    return null;
                }

                const shapeData = SHAPES_DATA.find((s) => s.id === shapeItem.shapeType);

                if (!shapeData) {
                    return null;
                }

                // Handle custom SVG upload
                const { id, shapeType, custom, svgColor = {}, animation, width, height } = shapeItem;
                const isCustomSvg = shapeType === 'custom';
                const customSvg = isCustomSvg && custom ? custom.svg : null;

                const shapeId = id || index;

                const gradId = `grad-${uniqueId}-${shapeId}`;
                let fillColor = 'currentColor';
                let gradientDef = null;
                const viewboxBoxArr = shapeData.viewBox.split(' ');
                const viewBoxWidth = viewboxBoxArr[2] || 100;
                const viewBoxHeight = viewboxBoxArr[3] || 100;

                // Use user-defined width/height if available, otherwise use viewBox dimensions
                const svgWidth = width || viewBoxWidth;
                const svgHeight = height || viewBoxHeight;

                // Handle gradient
                if (svgColor?.fillType === 'gradient') {
                    fillColor = `url(#${gradId})`;

                    if (svgColor.gradientType === 'linear') {
                        const angle = svgColor?.gradientAngle || 90;
                        gradientDef = (
                            <defs>
                                <linearGradient
                                    id={gradId}
                                    gradientUnits="objectBoundingBox"
                                    gradientTransform={`rotate(${angle} 0.5 0.5)`}
                                >
                                    <stop offset={`${svgColor?.gradientLocation1}%`} stopColor={svgColor?.gradientColor1} />
                                    <stop offset={`${svgColor?.gradientLocation2}%`} stopColor={svgColor?.gradientColor2} />
                                </linearGradient>
                            </defs>
                        );
                    } else {
                        gradientDef = (
                            <defs>
                                <radialGradient id={gradId} cx="50%" cy="50%" r="50%" gradientUnits="objectBoundingBox">
                                    <stop offset={`${svgColor?.gradientLocation1}%`} stopColor={svgColor?.gradientColor1} />
                                    <stop offset={`${svgColor?.gradientLocation2}%`} stopColor={svgColor?.gradientColor2} />
                                </radialGradient>
                            </defs>
                        );
                    }
                } else if (svgColor?.fillType === 'solid' && svgColor?.color) {
                    fillColor = svgColor.color;
                }

                // Render custom SVG if uploaded
                if (isCustomSvg && customSvg) {
                    // Get custom SVG colors from svgColor object
                    const customFillColor = svgColor?.customSvgFillColor || '';
                    const customStrokeColor = svgColor?.customSvgStrokeColor || '';

                    // Modify the custom SVG to apply width/height and remove inline colors
                    let modifiedSvg = customSvg;

                    // Remove existing width/height/style attributes
                    modifiedSvg = modifiedSvg
                        .replace(/width="[^"]*"/gi, '')
                        .replace(/height="[^"]*"/gi, '')
                        .replace(/style="[^"]*"/gi, '');

                    // Remove inline fill and stroke attributes so CSS can control them
                    if (customFillColor) {
                        modifiedSvg = modifiedSvg.replace(/fill="[^"]*"/gi, '').replace(/fill='[^']*'/gi, '');
                    }
                    if (customStrokeColor) {
                        modifiedSvg = modifiedSvg.replace(/stroke="[^"]*"/gi, '').replace(/stroke='[^']*'/gi, '');
                    }

                    // Build inline style for SVG
                    let svgStyle = `width: ${svgWidth}px; height: ${svgHeight}px;`;
                    if (customFillColor) {
                        svgStyle += ` fill: ${customFillColor}; color: ${customFillColor};`;
                    }
                    if (customStrokeColor) {
                        svgStyle += ` stroke: ${customStrokeColor};`;
                    }

                    // Add width, height and color styles to SVG element
                    modifiedSvg = modifiedSvg.replace(/<svg/i, `<svg width="${svgWidth}px" height="${svgHeight}px" style="${svgStyle}"`);

                    return (
                        <div
                            key={`${uniqueId}-shape-${shapeId}`}
                            className={`zolo-shape-builder zolo-shape-builder-custom zolo-shape-builder-${uniqueId}-${shapeId}`}
                            data-wrapper-id={`zolo-block-${uniqueId}`}
                            dangerouslySetInnerHTML={{ __html: modifiedSvg }}
                        />
                    );
                }

                return (
                    <div
                        key={`${uniqueId}-shape-${shapeId}`}
                        className={`zolo-shape-builder zolo-shape-builder-${uniqueId}-${shapeId}`}
                        data-wrapper-id={`zolo-block-${uniqueId}`}
                    >
                        <svg
                            viewBox={shapeData.viewBox}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            width={svgWidth}
                            height={svgHeight}
                        >
                            {gradientDef}
                            {shapeData.transform ? (
                                <g transform={shapeData.transform}>
                                    <path d={shapeData.path} fill={fillColor} />
                                </g>
                            ) : (
                                <path d={shapeData.path} fill={fillColor} />
                            )}
                        </svg>
                    </div>
                );
            })}
        </>
    );
}
