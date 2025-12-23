import { generateResCounterStyle } from '../../helpers/res-counter-helper';
import { generateGapStyle } from '../../helpers/gap-helper';
import { FB_COLUMNS, FB_GAP } from './constants';

const Style = (props) => {
    const { attributes, uniqueId } = props;
    const { layoutType } = attributes;

    // Columns for grid and masonry layouts
    const {
        desktopRangeStyle: columnCountDesk,
        tabRangeStyle: columnCountTab,
        mobRangeStyle: columnCountMob,
    } = generateResCounterStyle({
        controlName: FB_COLUMNS,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    });

    // Gap styles
    const {
        gapStylesDesktop: gapDesk,
        gapStylesTab: gapTab,
        gapStylesMobile: gapMob,
    } = generateGapStyle({
        controlName: FB_GAP,
        attributes,
    });

    // Convert gap styles to extract values for masonry
    const extractGapValue = (gapStyle) => {
        if (!gapStyle) return '20px';
        const match = gapStyle.match(/gap:\s*([^;]+)/);
        return match ? match[1].trim() : '20px';
    };

    const gapDeskValue = extractGapValue(gapDesk);
    const gapTabValue = extractGapValue(gapTab) || gapDeskValue;
    const gapMobValue = extractGapValue(gapMob) || gapTabValue;

    const desktopCSS = `
        .layout-grid.zolo-facebook-feed-${uniqueId} {
            display: grid;
            ${gapDesk}
            ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
        }
        
        .layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
            column-gap: ${gapDeskValue};
        }
        
        .layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin: 0;
            margin-bottom: ${gapDeskValue};
        }
    `;

    const tabCSS = `
        .layout-grid.zolo-facebook-feed-${uniqueId} {
            ${gapTab}
            ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
        }
        
        .layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
            column-gap: ${gapTabValue};
        }
        
        .layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapTabValue};
        }
    `;

    const mobCSS = `
        .layout-grid.zolo-facebook-feed-${uniqueId} {
            ${gapMob}
            ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
        }
        
        .layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
            column-gap: ${gapMobValue};
        }
        
        .layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapMobValue};
        }
    `;

    return (
        <style>
            {desktopCSS}
            {`@media (max-width: 1024px) {
                ${tabCSS}
            }`}
            {`@media (max-width: 767px) {
                ${mobCSS}
            }`}
        </style>
    );
};

export default Style;
