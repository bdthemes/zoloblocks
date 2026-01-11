import { registerPlugin } from '@wordpress/plugins';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import generateStyles from './style';
const RenderGlobalStyles = () => {
    const editorSettings = useSelect((select) => {
        const { getEditorSettings } = select('core/editor');
        return getEditorSettings();
    }, [])
    const { updateEditorSettings } = useDispatch('core/editor');
    const { editEntityRecord } = useDispatch('core');
    const classStyles = useSelect((select) => {
        const { getEntityRecords, getEditedEntityRecord } = select('core');
        const classes = getEntityRecords('postType', 'zolo-class-manager', { per_page: -1 }) || [];
        if (classes.length > 0) {
            const editedClasses = classes.map((item) => getEditedEntityRecord('postType', 'zolo-class-manager', item?.id));
            return editedClasses.map((item) => {
                const parent = getEditedEntityRecord('postType', 'zolo-class-manager', item?.parent);
                let selector;
                if (parent) {
                    selector = item?.title?.startsWith(':') ? `.${parent?.title}.zbcm-${item?.id}` + item?.title : `.${parent?.title}.zbcm-${item?.id} ${item?.title}`;
                } else {
                    selector = `.${item?.title}`
                }
                if (item?.content && item?.title) {
                    let style = JSON.parse(item?.content);
                    return {
                        id: item?.id,
                        title: item?.title,
                        style: style && Object.keys(style).length > 0 ? generateStyles(style, selector) : ''
                    }
                }
            })
        }
        return '';
    }, []);

    const classStylesRef = useRef(JSON.stringify(classStyles));

    const updateStyles = async (classStyles) => {
        for (let item of classStyles) {
            if(!item?.style) continue;
            await editEntityRecord('postType', 'zolo-class-manager', item?.id, {
                meta: {
                    zoloClassManagerStyles: item?.style
                }
            })
        }
    }

    useEffect(() => {
        if (!classStyles?.length) return;
        
        const styles = classStyles?.map((item) => item?.style)?.join('');

        const styleIndex = editorSettings?.styles?.findIndex((style) => style?.__unstableType === 'zolo-class-manager');
        if (styleIndex === -1) {
            updateEditorSettings({
                ...editorSettings,
                styles: [
                    ...editorSettings?.styles,
                    {
                        isGlobalStyles: true,
                        __unstableType: 'zolo-class-manager',
                        css: styles
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
                            css: styles
                        }
                    }
                    return style;
                })
            })
        }

        if (JSON.stringify(classStyles) !== classStylesRef.current) {
            updateStyles(classStyles);
            classStylesRef.current = JSON.stringify(classStyles);
        }
        
    }, [classStyles]);

    return <></>;
};

registerPlugin('zolo-class-manager', {
    render: RenderGlobalStyles,
});