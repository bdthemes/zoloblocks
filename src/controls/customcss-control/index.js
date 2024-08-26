import { __ } from '@wordpress/i18n';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { TextHighlight, Button } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

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

    if (!uniqueId) {
        return null;
    }

    if (!customCss) {
        setAttributes({ customCss: defaultCss });
    }

    const zoloContainer = document.querySelector(`.${uniqueId}`);


    const blockAvailableClasses = useMemo(() => {
        if (!zoloContainer) return [];

        const zoloClassNames = Array.from(zoloContainer.children)
            .map((child) => getZoloClassNames(child))
            .flat();

        return [uniqueId, ...zoloClassNames];
    }, [uniqueId, zoloContainer]);

    const updatedClassesArray = useMemo(() => {
        const uniqueClasses = [...new Set(blockAvailableClasses)];
        return uniqueClasses.filter((item) => item !== uniqueId);
    }, [blockAvailableClasses, uniqueId]);

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
                <TextHighlight
                    text={__(
                        'To confine style changes to specific elements, add the {{ ZOLO }} prefix before the selector. This ensures a targeted, non-global application of your styles.',
                        'zoloblocks'
                    )}
                    highlight="{{ ZOLO }}"
                />
                <p style={{ margin: '10px 0', padding: '0 5px', lineHeight: '1.5', fontSize: '12px' }}>
                    <strong>{__('Suggested Classes:', 'zoloblocks')}</strong>
                </p>
                <div className="zolo-suggested-class">
                    {updatedClassesArray &&
                        updatedClassesArray.map((className) => (
                            <Button
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
                                    setAttributes({
                                        customCss: customCss + `{{ZOLO}}${` .${className}`} {\n  /*color: #f00;*/ \n }\n`,
                                    });
                                }}
                            >
                                {className}
                            </Button>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CustomCSSControl;
