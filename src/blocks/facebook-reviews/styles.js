import { generateResCounterStyle } from '../../helpers/res-counter-helper';
import { generateGapStyle } from '../../helpers/gap-helper';
import { FB_REVIEWS_COLUMNS, FB_REVIEWS_GAP } from './constants';

const Style = (props) => {
    const { attributes, uniqueId } = props;
    const { layoutType } = attributes;

    // Columns for grid and masonry layouts
    const {
        desktopRangeStyle: columnCountDesk,
        tabRangeStyle: columnCountTab,
        mobRangeStyle: columnCountMob,
    } = generateResCounterStyle({
        controlName: FB_REVIEWS_COLUMNS,
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
        controlName: FB_REVIEWS_GAP,
        attributes,
    });

    // Extract gap values for masonry
    const extractGapValues = (gapStyle) => {
        if (!gapStyle) return { columnGap: '20px', rowGap: '20px' };
        
        const columnGapMatch = gapStyle.match(/column-gap:\s*([^;]+)/);
        const rowGapMatch = gapStyle.match(/row-gap:\s*([^;]+)/);
        const gapMatch = gapStyle.match(/gap:\s*([^;]+)/);
        
        if (columnGapMatch && rowGapMatch) {
            return { columnGap: columnGapMatch[1].trim(), rowGap: rowGapMatch[1].trim() };
        } else if (gapMatch) {
            const value = gapMatch[1].trim();
            return { columnGap: value, rowGap: value };
        }
        
        return { columnGap: '20px', rowGap: '20px' };
    };

    const gapDeskValues = extractGapValues(gapDesk);
    const gapTabValues = extractGapValues(gapTab);
    const gapMobValues = extractGapValues(gapMob);

    const desktopCSS = `
        .zolo-fb-reviews-container.layout-grid.zolo-facebook-reviews-${uniqueId} {
            display: grid;
            ${gapDesk}
            ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
        }
        
        .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-${uniqueId} {
            ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
            column-gap: ${gapDeskValues.columnGap};
        }
        
        .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-${uniqueId} .zolo-fb-review-card {
            margin-bottom: ${gapDeskValues.rowGap};
        }
    `;

    const tabCSS = `
        .zolo-fb-reviews-container.layout-grid.zolo-facebook-reviews-${uniqueId} {
            ${gapTab}
            ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
        }
        
        .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-${uniqueId} {
            ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
            column-gap: ${gapTabValues.columnGap};
        }
        
        .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-${uniqueId} .zolo-fb-review-card {
            margin-bottom: ${gapTabValues.rowGap};
        }
    `;

    const mobCSS = `
        .zolo-fb-reviews-container.layout-grid.zolo-facebook-reviews-${uniqueId} {
            ${gapMob}
            ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
        }
        
        .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-${uniqueId} {
            ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
            column-gap: ${gapMobValues.columnGap};
        }
        
        .zolo-fb-reviews-container.layout-masonry.zolo-facebook-reviews-${uniqueId} .zolo-fb-review-card {
            margin-bottom: ${gapMobValues.rowGap};
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
