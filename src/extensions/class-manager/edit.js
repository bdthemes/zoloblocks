import { registerPlugin } from '@wordpress/plugins';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { minifyCSS } from './utils';
const RenderGlobalStyles = () => {
    const editorSettings = useSelect((select) => {
        const { getEditorSettings } = select('core/editor');
        return getEditorSettings();
    }, [])
    const { updateEditorSettings } = useDispatch('core/editor');
    const classStyles = useSelect((select) => {
        const { getEntityRecords, getEditedEntityRecord } = select('core');
        const classes = getEntityRecords('postType', 'zolo-class-manager', { per_page: -1 }) || [];
        if (classes.length > 0) {
            return classes.map((item) => {
                const editedData = getEditedEntityRecord('postType', 'zolo-class-manager', item?.id);
                if (editedData?.content) {
                    let style = JSON.parse(editedData?.content);
                    return `
                        .${editedData?.title}{
                            font-family: ${style?.typography?.fontFamily};
                            font-weight: ${style?.typography?.fontWeight};
                            font-size: ${style?.typography?.fontSize};
                        }
                    `
                }
            })?.join('');
        }
        return '';
    }, []);

    useEffect(() => {
        if (!classStyles) {
            return;
        }

        const styleIndex = editorSettings?.styles?.findIndex((style) => style?.__unstableType === 'zolo-class-manager');
        if (styleIndex === -1) {
            updateEditorSettings({
                ...editorSettings,
                styles: [
                    ...editorSettings?.styles,
                    {
                        isGlobalStyles: true,
                        __unstableType: 'zolo-class-manager',
                        css: minifyCSS(classStyles)
                    }
                ]
            })
        } else {
            updateEditorSettings({
                ...editorSettings,
                styles: editorSettings?.styles?.map((style, index) => {
                    if (index === styleIndex) {
                        return {
                            ...style,
                            css: minifyCSS(classStyles)
                        }
                    }
                    return style;
                })
            })
        }
    }, [classStyles]);

    return <></>;
};

registerPlugin('zolo-class-manager', {
    render: RenderGlobalStyles,
});