function getBorderRadiusValue(radius) {
    const {
        topLeft = '',
        topRight = '',
        bottomRight = '',
        bottomLeft = ''
    } = radius;
    
    if (
        topLeft === topRight &&
        topLeft === bottomRight &&
        topLeft === bottomLeft
    ) {
        return `border-radius: ${topLeft};`;
    }

    if (topLeft === bottomRight && topRight === bottomLeft) {
        return `border-radius: ${topLeft} ${topRight};`;
    }
    if (topLeft === topRight && bottomLeft === bottomRight) {
        return `border-radius: ${topLeft} ${topRight} ${bottomRight};`;
    }

    return `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
}

export default getBorderRadiusValue;

