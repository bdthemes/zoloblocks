/**
 * WordPress dependencies
 */


export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { builderShapes, uniqueId } = attributes;
    //if bulderShapes is empty array, return null
    if (!builderShapes.length) {
        return null;
    }
    //if builderShapes is not empty array, return the following loop to render the shapes
    return (
        <div className="shape-builder">
            {builderShapes.map((shape, index) => {
                return (
                    <div key={index} className={`shape-builder__item shape-builder__item-${shape.id}`}>
                        <div className="shape-builder__text">{shape.text}</div>
                    </div>
                );
            })}
        </div>
    );
}
