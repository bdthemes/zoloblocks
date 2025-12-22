import { applyFilters } from '@wordpress/hooks';
import { useMemo } from '@wordpress/element';
/**
 * Internal depencencies
 */
const { GlobalStyleHanlder, generateCSS } = window.zoloModule;

const Style = (props) => {
    const { attributes, setAttributes } = props;

    const { uniqueId } = attributes;
    const desktopAllStyle = useMemo(() => {
        const style = `
        .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
            ${
                generateCSS({attributes, key:'flexboxCustomWidth', getValue: (value) => `max-width: ${value};`, device: 'Desktop'})
            }
        }
        .zolo-flexbox > .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
            ${
                generateCSS({attributes, key:'flexShrink', getValue: (value) => `flex-shrink: ${value};`, device: 'Desktop'})
            }
        }
        .${uniqueId}.zolo-flexbox{
            ${
                generateCSS({attributes, key:'flexDirection', getValue: (value) => `flex-direction: ${value};`, device: 'Desktop'})+
                generateCSS({attributes, key:'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Desktop'})+
                generateCSS({attributes, key:'flexJustifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Desktop'})+
                generateCSS({attributes, key:'flexAlignItems', getValue: (value) => `align-items: ${value};`, device: 'Desktop'})+
                generateCSS({attributes, key:'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Desktop'})+
                generateCSS({attributes, key:'flexGap', getValue: (value) => {
                    if(!value?.linked) return`column-gap: ${value?.first};row-gap: ${value?.second};`
                    return `gap: ${value?.first};`
                }, device: 'Desktop'})
            }
        }
        `;
        return style;
    }, [JSON.stringify(attributes)])

    const tabletAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
                ${
                    generateCSS({attributes, key:'flexboxCustomWidth', getValue: (value) => `max-width: ${value};`, device: 'Tablet'})
                }
            }
            .${uniqueId}.zolo-flexbox{
                ${
                    generateCSS({attributes, key:'flexDirection', getValue: (value) => `flex-direction: ${value};`, device: 'Tablet'})+
                    generateCSS({attributes, key:'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Tablet'})+
                    generateCSS({attributes, key:'flexJustifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Tablet'})+
                    generateCSS({attributes, key:'flexAlignItems', getValue: (value) => `align-items: ${value};`, device: 'Tablet'})+
                    generateCSS({attributes, key:'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Tablet'})+
                    generateCSS({attributes, key:'flexGap', getValue: (value) => {
                        if(!value?.linked) return`column-gap: ${value?.first};row-gap: ${value?.second};`
                        return `gap: ${value?.first};`
                    }, device: 'Tablet'})
                }
            }
        `;

        return style;
    }, [JSON.stringify(attributes)])

    const mobileAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
                ${
                    generateCSS({attributes, key:'flexboxCustomWidth', getValue: (value) => `max-width: ${value};`, device: 'Mobile'})
                }
            }
            .${uniqueId}.zolo-flexbox{
                ${
                    generateCSS({attributes, key:'flexDirection', getValue: (value) => `flex-direction: ${value};`, device: 'Mobile'})+
                    generateCSS({attributes, key:'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Mobile'})+
                    generateCSS({attributes, key:'flexJustifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Mobile'})+
                    generateCSS({attributes, key:'flexAlignItems', getValue: (value) => `align-items: ${value};`, device: 'Mobile'})+
                    generateCSS({attributes, key:'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Mobile'})+
                    generateCSS({attributes, key:'flexGap', getValue: (value) => {
                        if(!value?.linked) return`column-gap: ${value?.first};row-gap: ${value?.second};`
                        return `gap: ${value?.first};`
                    }, device: 'Mobile'})
                }
            }
        `;
        return style;
    }, [JSON.stringify(attributes)])

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.container.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.container.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.container.mobileAllStyle', mobileAllStyle, props)}
                blockName={props?.name}
            />
        </>
    );
};

export default Style;
