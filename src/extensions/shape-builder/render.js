import { SHAPES_DATA } from './constants';

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { shapeBuilder, shape = [], uniqueId } = attributes;

    if (!shapeBuilder?.enabled || shape.length === 0) {
        return null;
    }

    return (
        <>
            {shape.map((shapeItem, index) => {
                const shapeData = SHAPES_DATA.find((s) => s.id === shapeItem.shapeType);
                
                if (!shapeData) {
                    return null;
                }

                const shapeId = shapeItem.id || index;
                const {
                    fillType = 'solid',
                    color = '',
                    gradientColor1 = '#08AEEC',
                    gradientColor2 = '#20E2AD',
                    gradientLocation1 = 0,
                    gradientLocation2 = 100,
                    gradientType = 'linear',
                    gradientAngle = 90,
                    width = 200,
                    height = 200,
                    zIndex = 1,
                    horizontalOrientation = 'start',
                    horizontalOffset = 0,
                    verticalOrientation = 'start',
                    verticalOffset = 0,
                    animationEnabled = false,
                    animationTrigger = 'on-load',
                    animationName = 'fade-in',
                    animationDuration = 1,
                    animationDelay = 0,
                    animationEasing = 'power2.out',
                    animationRepeat = 0,
                    animationYoyo = false,
                    animationViewport = 0.1,
                } = shapeItem;

                const gradId = `grad-${uniqueId}-${shapeId}`;
                let fillColor = 'currentColor';
                let gradientDef = null;

                // Handle gradient
                if (fillType === 'gradient') {
                    fillColor = `url(#${gradId})`;
                    
                    if (gradientType === 'linear') {
                        gradientDef = (
                            <defs>
                                <linearGradient 
                                    id={gradId} 
                                    gradientTransform={`rotate(${gradientAngle})`}
                                >
                                    <stop offset={`${gradientLocation1}%`} stopColor={gradientColor1} />
                                    <stop offset={`${gradientLocation2}%`} stopColor={gradientColor2} />
                                </linearGradient>
                            </defs>
                        );
                    } else {
                        gradientDef = (
                            <defs>
                                <radialGradient id={gradId}>
                                    <stop offset={`${gradientLocation1}%`} stopColor={gradientColor1} />
                                    <stop offset={`${gradientLocation2}%`} stopColor={gradientColor2} />
                                </radialGradient>
                            </defs>
                        );
                    }
                } else if (fillType === 'solid' && color) {
                    fillColor = color;
                }

                // Build animation data attributes
                const animationAttrs = animationEnabled ? {
                    'data-animation-enabled': 'true',
                    'data-animation-trigger': animationTrigger,
                    'data-animation-name': animationName,
                    'data-animation-duration': animationDuration,
                    'data-animation-delay': animationDelay,
                    'data-animation-easing': animationEasing,
                    'data-animation-repeat': animationRepeat,
                    'data-animation-yoyo': animationYoyo ? 'true' : 'false',
                    'data-animation-viewport': animationViewport,
                } : {};

                return (
                    <div
                        key={`${uniqueId}-shape-${shapeId}`}
                        className={`zolo-shape-builder zolo-shape-builder-${uniqueId}-${shapeId}`}
                        data-wrapper-id={`zolo-block-${uniqueId}`}
                        {...animationAttrs}
                        style={{
                            position: 'absolute',
                            pointerEvents: 'none',
                            zIndex: zIndex,
                            ...(horizontalOrientation === 'start' 
                                ? { left: `${horizontalOffset}px` } 
                                : { right: `${horizontalOffset}px` }),
                            ...(verticalOrientation === 'start' 
                                ? { top: `${verticalOffset}px` } 
                                : { bottom: `${verticalOffset}px` }),
                            width: `${width}px`,
                            height: `${height}px`,
                        }}
                    >
                        <svg
                            viewBox={shapeData.viewBox}
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
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
