const getBorderCSS = (borderObjs) => {
    let border = {
        top: '',
        right: '',
        bottom: '',
        left: ''
    };

    if (Object.keys(borderObjs).length === 3 && borderObjs.width) {
        for (const key in border) {
            if (key === 'width') continue;
            border[key] = `${borderObjs.width} ${borderObjs?.style || 'none'} ${borderObjs?.color || '#111111'}`;
        }
    } else if (Object.keys(borderObjs).length > 0) {
        for (const key in border) {
            const origin = borderObjs[key];
            if (!origin) continue;
            border[key] = `${origin?.width} ${origin?.style || 'none'} ${origin?.color || '#111111'}`;
        }
    }


    let finalBorder = '';
    for (const key in border) {
        finalBorder += `border-${key}: ${border[key]};`;
    }
    return finalBorder;
}

export default getBorderCSS;
