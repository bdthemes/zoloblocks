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

export function minifyCSS(css) {
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
