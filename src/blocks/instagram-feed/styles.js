import { generateResCounterStyle } from '../../helpers/res-counter-helper';
import { useMemo } from '@wordpress/element';

const { GlobalStyleHanlder, generateCSS } = window.zoloModule;

const Style = (props) => {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;

    // Columns for grid and masonry layouts
    const {
        desktopRangeStyle: columnCountDesk,
        tabRangeStyle: columnCountTab,
        mobRangeStyle: columnCountMob,
    } = generateResCounterStyle({
        controlName: 'igColumns',
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    });

    const desktopCSS = useMemo(() => {
        const style = `
            .${uniqueId} .zolo-ig-grid {
                display: grid;
                ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
            }
            .${uniqueId} .zolo-ig-masonry {
                ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
            }
            .zolo-lightbox-caption {
                ${attributes.lightboxCaptionSize ? `font-size: ${attributes.lightboxCaptionSize}px;` : ''}
            }
        ` +
        `.${uniqueId} .zolo-ig-grid{
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        if (!value?.linked) return `column-gap: ${value?.first}; row-gap: ${value?.second};`;
                        return `gap: ${value?.first};`;
                    },
                    device: 'Desktop'
                })
            }
        }
        .${uniqueId} .zolo-ig-masonry {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        const colGap = value?.linked ? value?.first : value?.first;
                        return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                    },
                    device: 'Desktop'
                })
            }
        }
        .${uniqueId} .zolo-ig-masonry .zolo-ig-item {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        const rowGap = value?.linked ? value?.first : value?.second;
                        return `margin-bottom: ${rowGap};`;
                    },
                    device: 'Desktop'
                })
            }
        }
        .${uniqueId} .zolo-ig-carousel .swiper {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        if (!value?.linked) return `column-gap: ${value?.first}; row-gap: ${value?.second};`;
                        return `gap: ${value?.first};`;
                    },
                    device: 'Desktop'
                })
            }
        }
        `;
        return style;
    }, [JSON.stringify(attributes)]);

    const tabCSS = useMemo(() => {
        const style = `
            .${uniqueId} .zolo-ig-grid {
                ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr);` : ''}
            }
            .${uniqueId} .zolo-ig-masonry {
                ${columnCountTab ? `column-count: ${columnCountTab};` : ''}
            }
        ` +
        `.${uniqueId} .zolo-ig-grid{
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        if (!value?.linked) return `column-gap: ${value?.first}; row-gap: ${value?.second};`;
                        return `gap: ${value?.first};`;
                    },
                    device: 'Tablet'
                })
            }
        }
        .${uniqueId} .zolo-ig-masonry {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        const colGap = value?.linked ? value?.first : value?.first;
                        return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                    },
                    device: 'Tablet'
                })
            }
        }
        .${uniqueId} .zolo-ig-masonry .zolo-ig-item {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        const rowGap = value?.linked ? value?.first : value?.second;
                        return `margin-bottom: ${rowGap};`;
                    },
                    device: 'Tablet'
                })
            }
        }
        `;
        return style;
    }, [JSON.stringify(attributes)]);

    const mobCSS = useMemo(() => {
        const style = `
            .${uniqueId} .zolo-ig-grid {
                ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr);` : ''}
            }
            .${uniqueId} .zolo-ig-masonry {
                ${columnCountMob ? `column-count: ${columnCountMob};` : ''}
            }
        ` +
        `.${uniqueId} .zolo-ig-grid{
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        if (!value?.linked) return `column-gap: ${value?.first}; row-gap: ${value?.second};`;
                        return `gap: ${value?.first};`;
                    },
                    device: 'Mobile'
                })
            }
        }
        .${uniqueId} .zolo-ig-masonry {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        const colGap = value?.linked ? value?.first : value?.first;
                        return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                    },
                    device: 'Mobile'
                })
            }
        }
        .${uniqueId} .zolo-ig-masonry .zolo-ig-item {
            ${
                generateCSS({
                    attributes,
                    key: 'flexGap',
                    getValue: (value) => {
                        const rowGap = value?.linked ? value?.first : value?.second;
                        return `margin-bottom: ${rowGap};`;
                    },
                    device: 'Mobile'
                })
            }
        }
        `;
        return style;
    }, [JSON.stringify(attributes)]);

    return (
        <GlobalStyleHanlder
            attributes={attributes}
            setAttributes={setAttributes}
            desktopAllStyle={desktopCSS}
            tabAllStyle={tabCSS}
            mobileAllStyle={mobCSS}
            blockName={props?.name}
        />
    );
};

export default Style;
