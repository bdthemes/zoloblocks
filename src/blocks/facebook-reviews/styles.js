import { useMemo } from '@wordpress/element';
import generateCSS from '../../helpers/generate-css';

const { GlobalStyleHanlder } = window.zoloModule;

const Style = ({ attributes, setAttributes }) => {
    const { uniqueId, layoutType, fbReviewsColumns } = attributes;

    const columnCountDesk = fbReviewsColumns?.Desktop || 3;
    const columnCountTab = fbReviewsColumns?.Tablet || 2;
    const columnCountMob = fbReviewsColumns?.Mobile || 1;

    // Desktop styles
    const desktopAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-grid {
                display: grid;
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Desktop'})}
                ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
            }
            
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry {
                ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                }, device: 'Desktop'})}
            }
            
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry .zolo-fb-review-card {
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap};`;
                }, device: 'Desktop'})}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbReviewsGap, fbReviewsColumns]);

    // Tablet styles
    const tabAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-grid {
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Tablet'})}
                ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
            }
            
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry {
                ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                }, device: 'Tablet'})}
            }
            
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry .zolo-fb-review-card {
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap};`;
                }, device: 'Tablet'})}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbReviewsGap, fbReviewsColumns]);

    // Mobile styles
    const mobileAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-grid {
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    if(!value?.linked) return `row-gap: ${value?.second}; column-gap: ${value?.first};`;
                    return `gap: ${value?.first};`;
                }, device: 'Mobile'})}
                ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
            }
            
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry {
                ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    const colGap = !value?.linked ? value?.first : value?.first;
                    return `column-gap: ${colGap}; -webkit-column-gap: ${colGap}; -moz-column-gap: ${colGap};`;
                }, device: 'Mobile'})}
            }
            
            .${uniqueId}.zolo-facebook-reviews .zolo-fb-reviews-container.layout-masonry .zolo-fb-review-card {
                ${generateCSS({attributes, key:'fbReviewsGap', getValue: (value) => {
                    const rowGap = !value?.linked ? value?.second : value?.first;
                    return `margin-bottom: ${rowGap};`;
                }, device: 'Mobile'})}
            }
        `;
        return style;
    }, [uniqueId, attributes.fbReviewsGap, fbReviewsColumns]);

    return (
        <GlobalStyleHanlder
            attributes={attributes}
            setAttributes={setAttributes}
            desktopAllStyle={desktopAllStyle}
            tabAllStyle={tabAllStyle}
            mobileAllStyle={mobileAllStyle}
            blockName="zolo/facebook-reviews"
        />
    );
};

export default Style;
