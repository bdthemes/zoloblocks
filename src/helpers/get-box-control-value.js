const getBoxControlValue = (value, property) => {
    if (!value) return '';
    let css = '';
    for (const key in value) {
        if (value[key]) {
            if(property === 'border-radius') {
                switch (key) {
                    case 'top':
                        css += `border-top-left-radius: ${value[key]};`;
                        break;
                    case 'right':
                        css += `border-top-right-radius: ${value[key]};`;
                        break;
                    case 'bottom':
                        css += `border-bottom-right-radius: ${value[key]};`;
                        break;
                    case 'left':
                        css += `border-bottom-left-radius: ${value[key]};`;
                        break;
                }
            } else {
                css += `${property}-${key}: ${value[key]};`;
            }
        }
    }

    return css;
}

export default getBoxControlValue;