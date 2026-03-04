import { applyFilters } from '@wordpress/hooks';
import { useMemo } from '@wordpress/element';

const { GlobalStyleHanlder, generateCSS } = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { uniqueId, canvasWidth, canvasHeight } = attributes;

    const desktopAllStyle = useMemo(() => {
        return `
            .${uniqueId}.zolo-cloud-list {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .${uniqueId}.zolo-cloud-list .zolo-cloud-list-canvas {
                max-width: 100%;
                height: auto;
                ${generateCSS({ attributes, key: 'canvasWidth', device: 'Desktop', getValue: (v) => `width: ${v};` })}
                ${generateCSS({ attributes, key: 'canvasHeight', device: 'Desktop', getValue: (v) => `height: ${v};` })}
            }
        `;
    }, [uniqueId, canvasWidth?.Desktop, canvasHeight?.Desktop]);

    const tabletAllStyle = useMemo(() => {
        return `
            .${uniqueId}.zolo-cloud-list .zolo-cloud-list-canvas {
                max-width: 100%;
                ${generateCSS({ attributes, key: 'canvasWidth', device: 'Tablet', getValue: (v) => `width: ${v};` })}
                ${generateCSS({ attributes, key: 'canvasHeight', device: 'Tablet', getValue: (v) => `height: ${v};` })}
            }
        `;
    }, [uniqueId, canvasWidth?.Tablet, canvasHeight?.Tablet]);

    const mobileAllStyle = useMemo(() => {
        return `
            .${uniqueId}.zolo-cloud-list .zolo-cloud-list-canvas {
                max-width: 100%;
                ${generateCSS({ attributes, key: 'canvasWidth', device: 'Mobile', getValue: (v) => `width: ${v};` })}
                ${generateCSS({ attributes, key: 'canvasHeight', device: 'Mobile', getValue: (v) => `height: ${v};` })}
            }
        `;
    }, [uniqueId, canvasWidth?.Mobile, canvasHeight?.Mobile]);

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.cloudList.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.cloudList.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.cloudList.mobileAllStyle', mobileAllStyle, props)}
                blockName={props?.name}
            />
        </>
    );
}

export default Style;
