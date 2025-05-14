import { __ } from '@wordpress/i18n';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { ZoloButton } from '../core-controls';
import { useMemo, useRef, useEffect, useState } from '@wordpress/element';

function getZoloClassNames(element) {
    let classNames = [];

    if (element.classList.length > 0) {
        classNames = Array.from(element.classList).filter((className) => className.startsWith('zolo'));
    }

    Array.from(element.children).forEach((child) => {
        const childClassNames = getZoloClassNames(child);
        classNames = classNames.concat(childClassNames);
    });

    return classNames;
}

const CustomCSSControl = ({ attributes, setAttributes }) => {
    const { customCss, uniqueId } = attributes;
    const defaultCss = ``;
    const [availableClasses, setAvailableClasses] = useState([]);
    if (!uniqueId) {
        return null;
    }

    const zoloContainer = useRef(null);

    useEffect(() => {
        const editorWindow = window.frames['editor-canvas'] || window;
        const { document } = editorWindow;
        const container = document.querySelector(`.${uniqueId}`);
        if (container) {
            zoloContainer.current = container;
            const classNames = getZoloClassNames(container);
            setAvailableClasses(classNames);
        } else {
            setAvailableClasses([]);
        }
    }, [JSON.stringify(attributes)]);

    useEffect( () => {
        if (!customCss) {
            setAttributes({ customCss: defaultCss });
        }
    }, [customCss, defaultCss])

    const updatedClassesArray = useMemo(() => {
        const uniqueClasses = [...new Set(availableClasses)];
        return uniqueClasses.filter((item) => item !== uniqueId);
    }, [availableClasses, uniqueId]);

    const ZOLO = `{{ZOLO}}`
    return (
        <div className="zolo-codemirror-wrap">
            <CodeMirror
                value={customCss}
                height="200px"
                extensions={[css()]}
                onChange={(value) => {
                    setAttributes({ customCss: value });
                }}
            />
            <div className="zolo-help-text">
                {__("To confine style changes to specific elements, add the", "zoloblocks")}{" "}
                <mark
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        let modifiedCustomCss = customCss.length > 0 ? customCss + `\n` : '';
                        setAttributes({
                            customCss: modifiedCustomCss + `{{ZOLO}}{\n  /*color: #f00;*/ \n }`,
                        });
                    }}
                >
                    {ZOLO}
                </mark>
                {__("prefix before the selector. This ensures a targeted, non-global application of your styles.", "zoloblocks")}
                <p style={{ margin: '10px 0', padding: '0 5px', lineHeight: '1.5', fontSize: '12px' }}>
                    <strong>{__('Suggested Classes:', 'zoloblocks')}</strong>
                </p>
                <div className="zolo-suggested-class">
                    {updatedClassesArray && updatedClassesArray.map((className) => (
                        <ZoloButton
                            key={className}
                            style={{
                                margin: '5px',
                                padding: '0 5px',
                                lineHeight: '1.5',
                                fontSize: '12px',
                                borderBottom: '1px solid #ddd',
                                display: 'block',
                            }}
                            onClick={() => {
                                let modifiedCustomCss = customCss.length > 0 ? customCss + `\n` : '';
                                setAttributes({
                                    customCss: modifiedCustomCss + `{{ZOLO}}${` .${className}`} {\n  /*color: #f00;*/ \n }`,
                                });
                            }}
                        >
                            {className}
                        </ZoloButton>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomCSSControl;
