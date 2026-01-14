import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
export const fontWeightOptions = [
    { label: __('Default', 'zoloblocks'), value: '' },
    { label: __('100', 'zoloblocks'), value: '100' },
    { label: __('200', 'zoloblocks'), value: '200' },
    { label: __('300', 'zoloblocks'), value: '300' },
    { label: __('400', 'zoloblocks'), value: '400' },
    { label: __('500', 'zoloblocks'), value: '500' },
    { label: __('600', 'zoloblocks'), value: '600' },
    { label: __('700', 'zoloblocks'), value: '700' },
    { label: __('800', 'zoloblocks'), value: '800' },
    { label: __('900', 'zoloblocks'), value: '900' },
];

export const borderStyles = [
    { label: __('None', 'zoloblocks'), value: 'none' },
    { label: __('Solid', 'zoloblocks'), value: 'solid' },
    { label: __('Dotted', 'zoloblocks'), value: 'dotted' },
    { label: __('Dashed', 'zoloblocks'), value: 'dashed' },
    { label: __('Double', 'zoloblocks'), value: 'double' },
    { label: __('Groove', 'zoloblocks'), value: 'groove' },
    { label: __('Ridge', 'zoloblocks'), value: 'ridge' },
    { label: __('Inset', 'zoloblocks'), value: 'inset' },
    { label: __('Outset', 'zoloblocks'), value: 'outset' },
];

export const overflowOptions = [
    { label: __('Visible', 'zoloblocks'), value: 'visible' },
    { label: __('Hidden', 'zoloblocks'), value: 'hidden' },
    { label: __('Scroll', 'zoloblocks'), value: 'scroll' },
    { label: __('Auto', 'zoloblocks'), value: 'auto' },
];

export const backgroundTypes = [
    { label: __('Color', 'zoloblocks'), value: 'color' },
    { label: __('Gradient', 'zoloblocks'), value: 'gradient' },
    { label: __('Image', 'zoloblocks'), value: 'image' },
];

export const whiteSpaceOptions = [
    { label: __('Normal', 'zoloblocks'), value: 'normal' },
    { label: __('Nowrap', 'zoloblocks'), value: 'nowrap' },
    { label: __('Pre', 'zoloblocks'), value: 'pre' },
    { label: __('Pre Line', 'zoloblocks'), value: 'pre-line' },
    { label: __('Pre Wrap', 'zoloblocks'), value: 'pre-wrap' },
    { label: __('Break Spaces', 'zoloblocks'), value: 'break-spaces' },
];

export const displayOptions = [
    { label: __('Block', 'zoloblocks'), value: 'block' },
    { label: __('Inline', 'zoloblocks'), value: 'inline' },
    { label: __('Flex', 'zoloblocks'), value: 'flex' },
    { label: __('Grid', 'zoloblocks'), value: 'grid' },
];

export const positionOptions = [
    { label: __('Static', 'zoloblocks'), value: 'static' },
    { label: __('Relative', 'zoloblocks'), value: 'relative' },
    { label: __('Absolute', 'zoloblocks'), value: 'absolute' },
    { label: __('Fixed', 'zoloblocks'), value: 'fixed' },
    { label: __('Sticky', 'zoloblocks'), value: 'sticky' },
];

export const floatOptions = [
    { label: __('Left', 'zoloblocks'), value: 'left' },
    { label: __('Right', 'zoloblocks'), value: 'right' },
];

export const clearOptions = [
    { label: __('Left', 'zoloblocks'), value: 'left' },
    { label: __('Right', 'zoloblocks'), value: 'right' },
    { label: __('Both', 'zoloblocks'), value: 'both' },
];

export const verticalAlignOptions = [
    { label: __('Baseline', 'zoloblocks'), value: 'baseline' },
    { label: __('Top', 'zoloblocks'), value: 'top' },
    { label: __('Middle', 'zoloblocks'), value: 'middle' },
    { label: __('Bottom', 'zoloblocks'), value: 'bottom' },
    { label: __('Text Top', 'zoloblocks'), value: 'text-top' },
    { label: __('Text Bottom', 'zoloblocks'), value: 'text-bottom' },
];

export const gridLayoutTypeOptions = [
    { label: __('Auto', 'zoloblocks'), value: 'auto' },
    { label: __('Manual', 'zoloblocks'), value: 'manual' },
    { label: __('Masonry', 'zoloblocks'), value: 'masonry' },
];

export function minifyCSS(css) {
    if (!css) return '';
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
        .replace(/\s+/g, ' ')             // collapse whitespace
        .replace(/\s*([{}:;,])\s*/g, '$1')// trim around tokens
        .replace(/;}/g, '}')              // optional micro-opt
        .trim();
}


export const useClasses = (classes = [], searchInput = '', parent = null) => {
    const data = useSelect((select) => {
        const { getEntityRecords, getEditedEntityRecord } = select('core');
        const savedClasses = getEntityRecords('postType', 'zolo-class-manager', { per_page: -1, search: searchInput, parent: parent || 0 }) || [];

        if (classes.length > 0 && savedClasses.length > 0) {
            const editedClasses = classes.map((item) => {
                const savedData = savedClasses.find((savedItem) => savedItem?.id === item?.id);
                if(!savedData) return null;
                const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', item?.id);
                if (editedData) {
                    return {
                        id: editedData?.id,
                        title: editedData?.title
                    };
                }
            }).filter((item) => item);

            return editedClasses;
        }

        return [];
    }, [classes]);

    return data;
}

export const useSelectors = (selectors = []) => {
    const data = useSelect((select) => {
        const { getEntityRecords, getEditedEntityRecord } = select('core');
        const savedSelectors = getEntityRecords('postType', 'zolo-class-manager', { per_page: -1 }) || [];

        if (selectors.length > 0 && savedSelectors.length > 0) {
            const editedSelectors = selectors.map((item) => {
                const savedData = savedSelectors.find((savedItem) => savedItem?.id === item?.id);
                if(!savedData) return null;
                const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', item?.id);
                if (editedData) {
                    return {
                        id: editedData?.id,
                        title: editedData?.title
                    };
                }
            }).filter((item) => item);

            return editedSelectors;
        }

        return [];
    }, [selectors]);

    return data;
}

export function isValidCssClass(className) {
    if (typeof className !== 'string') return false;

    const regex = /^[a-zA-Z_-][a-zA-Z0-9_-]*$/;
    return regex.test(className.trim());
}
