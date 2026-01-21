import { useMemo } from '@wordpress/element';
import generateCSS from '../../helpers/generate-css';

const { GlobalStyleHanlder } = window.zoloModule;

const Style = ({ attributes, setAttributes }) => {
    const { uniqueId, zolo_fbColumnsRange, zolo_TABfbColumnsRange, zolo_MOBfbColumnsRange } = attributes;

    // Column counts for responsive layouts
    const columnCountDesk = zolo_fbColumnsRange || 3;
    const columnCountTab = zolo_TABfbColumnsRange || 2;
    const columnCountMob = zolo_MOBfbColumnsRange || 1;

    // Desktop styles
    const desktopAllStyle = useMemo(() => {
        const style = `
            .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} .zolo-fb-post:not(:last-child) {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `margin-bottom: ${value?.second} !important;`;
                    return `margin-bottom: ${value?.first} !important;`;
                }, device: 'Desktop'})}
            }
            
            .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
                display: grid;
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Desktop'})}
                ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
            }
            
            .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
                ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap} !important; -webkit-column-gap: ${colGap} !important; -moz-column-gap: ${colGap} !important;`;
                }, device: 'Desktop'})}
            }
            
            .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap} !important;`;
                }, device: 'Desktop'})}
            }
            
            .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Desktop'})}
            }
            
            .zolo-fb-posts-container.layout-gallery.zolo-facebook-feed-${uniqueId} {
                display: grid;
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Desktop'})}
                ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbGap, zolo_fbColumnsRange]);

    // Tablet styles
    const tabAllStyle = useMemo(() => {
        const style = `
            .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} .zolo-fb-post:not(:last-child) {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `margin-bottom: ${value?.second} !important;`;
                    return `margin-bottom: ${value?.first} !important;`;
                }, device: 'Tablet'})}
            }
            
            .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Tablet'})}
                ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
            }
            
            .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
                ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap} !important; -webkit-column-gap: ${colGap} !important; -moz-column-gap: ${colGap} !important;`;
                }, device: 'Tablet'})}
            }
            
            .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap} !important;`;
                }, device: 'Tablet'})}
            }
            
            .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Tablet'})}
            }
            
            .zolo-fb-posts-container.layout-gallery.zolo-facebook-feed-${uniqueId} {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Tablet'})}
                ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbGap, zolo_TABfbColumnsRange]);

    // Mobile styles
    const mobileAllStyle = useMemo(() => {
        const style = `
            .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} .zolo-fb-post:not(:last-child) {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `margin-bottom: ${value?.second} !important;`;
                    return `margin-bottom: ${value?.first} !important;`;
                }, device: 'Mobile'})}
            }
            
            .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Mobile'})}
                ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
            }
            
            .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
                ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap} !important; -webkit-column-gap: ${colGap} !important; -moz-column-gap: ${colGap} !important;`;
                }, device: 'Mobile'})}
            }
            
            .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap} !important;`;
                }, device: 'Mobile'})}
            }
            
            .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Mobile'})}
            }
            
            .zolo-fb-posts-container.layout-gallery.zolo-facebook-feed-${uniqueId} {
                ${generateCSS({attributes, key:'fbGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second} !important; column-gap: ${value?.first} !important;`;
                    return `gap: ${value?.first} !important;`;
                }, device: 'Mobile'})}
                ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbGap, zolo_MOBfbColumnsRange]);

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
