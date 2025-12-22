
import { useEffect } from "@wordpress/element";
import { __ } from '@wordpress/i18n';
import { justifyBottom, justifyCenter, justifyCenterVertical, justifyLeft, justifyRight, justifySpaceBetween, justifyStretch, justifyStretchVertical, justifyTop } from '@wordpress/icons';

export const tagList = [
    { label: 'div', value: 'div' },
    { label: 'header', value: 'header' },
    { label: 'footer', value: 'footer' },
    { label: 'main', value: 'main' },
    { label: 'article', value: 'article' },
    { label: 'section', value: 'section' },
    { label: 'aside', value: 'aside' },
    { label: 'nav', value: 'nav' },
    { label: 'a (link)', value: 'a' },
];

export const widthTypes = [
    {
        label: __('Full', 'zoloblocks'),
        value: 'alignfull',
    },
    {
        label: __('Wide', 'zoloblocks'),
        value: 'alignwide',
    },
    {
        label: __('Custom', 'zoloblocks'),
        value: 'zolo-flexbox-custom-width',
    },
];

export const innerWidthTypes = [
    {
        label: __('Full', 'zoloblocks'),
        value: 'alignfull',
    },
    {
        label: __('Custom', 'zoloblocks'),
        value: 'zolo-flexbox-custom-width',
    },
];

export const justifyContentOptions = [
    {
        label: __('Start', 'zoloblocks'),
        value: 'flex-start',
        icon: justifyLeft,
    },
    {
        label: __('Center', 'zoloblocks'),
        value: 'center',
        icon: justifyCenter,
    },
    {
        label: __('End', 'zoloblocks'),
        value: 'flex-end',
        icon: justifyRight
    },
    {
        label: __('Space Between', 'zoloblocks'),
        value: 'space-between',
        icon: justifySpaceBetween
    },
    {
        label: __('Space Around', 'zoloblocks'),
        value: 'space-around',
        icon: justifyStretch
    },
    {
        label: __('Space Evenly', 'zoloblocks'),
        value: 'space-evenly',
        icon: justifyStretch
    }
];

export const alignItemsOptions = [
    {
        label: __('Start', 'zoloblocks'),
        value: 'flex-start',
        icon: justifyTop,
    },
    {
        label: __('Center', 'zoloblocks'),
        value: 'center',
        icon: justifyCenterVertical
    },
    {
        label: __('End', 'zoloblocks'),
        value: 'flex-end',
        icon: justifyBottom
    },
    {
        label: __('Stretch', 'zoloblocks'),
        value: 'stretch',
        icon: justifyStretchVertical
    },
];

const useInenerFlexboxWidthType = (hasParent, flexWidthType, setAttributes) => {
    useEffect(() => {
        if (hasParent && flexWidthType == 'alignwide') {
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