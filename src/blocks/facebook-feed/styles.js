import { useMemo } from '@wordpress/element';
import generateCSS from '../../helpers/generate-css';

const { GlobalStyleHanlder } = window.zoloModule;

const Style = ({ attributes, setAttributes }) => {
    const { uniqueId, fbColumns } = attributes;

    const columnCountDesk = fbColumns?.Desktop || 3;
    const columnCountTab = fbColumns?.Tablet || 2;
    const columnCountMob = fbColumns?.Mobile || 1;

    // Desktop styles
    const desktopAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-timeline .zolo-fb-post:not(:last-child) {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `margin-bottom: ${value?.second};`;
                    return `margin-bottom: ${value?.first};`;
                }, device: 'Desktop'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-grid {
                display: grid;
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Desktop'})}
                ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-masonry {
                ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                }, device: 'Desktop'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-masonry .zolo-fb-post {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap};`;
                }, device: 'Desktop'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-carousel .swiper {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Desktop'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-gallery {
                display: grid;
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Desktop'})}
                ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbGap, fbColumns]);

    // Tablet styles
    const tabAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-timeline .zolo-fb-post:not(:last-child) {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `margin-bottom: ${value?.second};`;
                    return `margin-bottom: ${value?.first};`;
                }, device: 'Tablet'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-grid {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Tablet'})}
                ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-masonry {
                ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                }, device: 'Tablet'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-masonry .zolo-fb-post {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap};`;
                }, device: 'Tablet'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-carousel .swiper {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Tablet'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-gallery {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Tablet'})}
                ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbGap, fbColumns]);

    // Mobile styles
    const mobileAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-timeline .zolo-fb-post:not(:last-child) {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `margin-bottom: ${value?.second};`;
                    return `margin-bottom: ${value?.first};`;
                }, device: 'Mobile'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-grid {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Mobile'})}
                ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-masonry {
                ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                }, device: 'Mobile'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-masonry .zolo-fb-post {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap};`;
                }, device: 'Mobile'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-carousel .swiper {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Mobile'})}
            }
            
            .${uniqueId}.zolo-facebook-feed .zolo-fb-posts-container.layout-gallery {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Mobile'})}
                ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbGap, fbColumns]);

    return (
        <GlobalStyleHanlder
            attributes={attributes}
            setAttributes={setAttributes}
            desktopAllStyle={desktopAllStyle}
            tabAllStyle={tabAllStyle}
            mobileAllStyle={mobileAllStyle}
            blockName="zolo/facebook-feed"
        />
    );
};

export default Style;
