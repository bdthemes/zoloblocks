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
                if (!shapeItem.shape || !shapeItem.shape.shapeType) {
                    return null;
                }

                const shapeData = SHAPES_DATA.find((s) => s.id === shapeItem.shape.shapeType);

                if (!shapeData) {
                    return null;
                }

                // Handle custom SVG upload
                const { id, shape, svgColor, animation } = shapeItem;
                const isCustomSvg = shape.shapeType === 'custom';
                const customSvg = isCustomSvg && shape.custom ? shape.custom.svg : null;

                const shapeId = id || index;

                const gradId = `grad-${uniqueId}-${shapeId}`;
                let fillColor = 'currentColor';
                let gradientDef = null;
                const viewboxBoxArr = shapeData.viewBox.split(' ');
                const viewBoxWidth = viewboxBoxArr[2] || 100;
                const viewBoxHeight = viewboxBoxArr[3] || 100;

                // Handle gradient
                if (svgColor.fillType === 'gradient') {
                    fillColor = `url(#${gradId})`;

                    if (svgColor.gradientType === 'linear') {
                        gradientDef = (
                            <defs>
                                <linearGradient id={gradId} gradientTransform={`rotate(${svgColor?.gradientAngle})`}>
                                    <stop offset={`${svgColor?.gradientLocation1}%`} stopColor={svgColor?.gradientColor1} />
                                    <stop offset={`${svgColor?.gradientLocation2}%`} stopColor={svgColor?.gradientColor2} />
                                </linearGradient>
                            </defs>
                        );
                    } else {
                        gradientDef = (
                            <defs>
                                <radialGradient id={gradId}>
                                    <stop offset={`${svgColor?.gradientLocation1}%`} stopColor={svgColor?.gradientColor1} />
                                    <stop offset={`${svgColor?.gradientLocation2}%`} stopColor={svgColor?.gradientColor2} />
                                </radialGradient>
                            </defs>
                        );
                    }
                } else if (svgColor.fillType === 'solid' && svgColor.color) {
                    fillColor = svgColor.color;
                }

                // Render custom SVG if uploaded
                if (isCustomSvg && customSvg) {
                    return (
                        <div
                            key={`${uniqueId}-shape-${shapeId}`}
                            className={`zolo-shape-builder zolo-shape-builder-custom zolo-shape-builder-${uniqueId}-${shapeId}`}
                            data-wrapper-id={`zolo-block-${uniqueId}`}
                            dangerouslySetInnerHTML={{ __html: customSvg }}
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
                            width={viewBoxWidth}
                            height={viewBoxHeight}
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
