
import { useEffect } from "@wordpress/element";
const useInenerFlexboxWidthType = (hasParent, flexWidthType, setAttributes) => {
    useEffect(() => {
        if (hasParent && flexWidthType == 'alignwide'){
            setAttributes({
                flexWidthType: 'alignfull'
            })
        }
    }, [hasParent]);
}

function findParent(el, selector) {
    if (!el || !selector) return null;

    let current = el.parentElement;

    while (current && current !== document.body && current !== document.documentElement) {
        if (current.matches(selector)) {
            return current;
        }
        current = current.parentElement;
    }

    return null;
}

export { useInenerFlexboxWidthType, findParent };