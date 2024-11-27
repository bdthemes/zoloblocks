/**
 * WordPress dependencies
 */

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { builderShapes, uniqueId, shapeBuilderPs } = attributes;
    //if bulderShapes is empty array, return null
    if (!builderShapes.length) {
        return null;
    }

    //if builderShapes is not empty array, return the following loop to render the shapes
    return (
        <>
            {builderShapes.map((shape, index) => {
                return (
                    <div
                        key={index}
                        className={`wp-block zolo-shape-builder zolo-shape-ps-${shape?.position} zolo-shape-builder-${shape.id}`}
                    ></div>
                );
            })}
        </>
    );
}
