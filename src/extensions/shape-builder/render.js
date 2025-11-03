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

                const { width = 100, height = 100, color = '#000000' } = shapeItem;
                const shapeId = shapeItem.id || index;

                return (
                    <div
                        key={`${uniqueId}-shape-${shapeId}`}
                        className={`zolo-shape-builder zolo-shape-builder-${uniqueId}-${shapeId}`}
                        style={{
                            position: 'absolute',
                            width: `${width}px`,
                            height: `${height}px`,
                            pointerEvents: 'none',
                        }}
                    >
                        <svg
                            viewBox={shapeData.viewBox}
                            width={width}
                            height={height}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d={shapeData.path} fill={color} />
                        </svg>
                    </div>
                );
            })}
        </>
    );
}
