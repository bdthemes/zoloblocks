import { generateResCounterStyle } from '../../helpers/res-counter-helper';
import { generateGapStyle } from '../../helpers/gap-helper';
import { FB_COLUMNS, FB_GAP } from './constants';

const { GlobalStyleHanlder } = window.zoloModule;

const Style = ({ attributes, setAttributes }) => {
    const { uniqueId } = attributes;
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

    // Extract gap values for different layouts
    const getGapValues = (gapStyle) => {
        if (!gapStyle || gapStyle.trim() === '') return { gap: '20px', rowGap: '20px', colGap: '20px' };
        
        const rowGapMatch = gapStyle.match(/row-gap:\s*([^;]+)/);
        const colGapMatch = gapStyle.match(/column-gap:\s*([^;]+)/);
        const gapMatch = gapStyle.match(/(?:^|[^-])gap:\s*([^;]+)/);
        
        // If both row-gap and column-gap are present (unlinked), use them
        if (rowGapMatch && colGapMatch) {
            return {
                gap: rowGapMatch[1].trim(),
                rowGap: rowGapMatch[1].trim(),
                colGap: colGapMatch[1].trim(),
            };
        }
        
        // If only gap is present (linked), use it for both
        if (gapMatch) {
            const value = gapMatch[1].trim();
            return { gap: value, rowGap: value, colGap: value };
        }
        
        // Fallback
        return {
            gap: '20px',
            rowGap: rowGapMatch ? rowGapMatch[1].trim() : '20px',
            colGap: colGapMatch ? colGapMatch[1].trim() : '20px',
        };
    };

    const gapDeskValues = getGapValues(gapDesk);
    const gapTabValues = getGapValues(gapTab);
    const gapMobValues = getGapValues(gapMob);

    const desktopCSS = `
        .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} .zolo-fb-post:not(:last-child) {
            margin-bottom: ${gapDeskValues.gap} !important;
        }
        
        .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
            display: grid;
            gap: ${gapDeskValues.gap} !important;
            ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
            column-gap: ${gapDeskValues.colGap} !important;
            -webkit-column-gap: ${gapDeskValues.colGap} !important;
            -moz-column-gap: ${gapDeskValues.colGap} !important;
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            display: inline-block;
            width: 100%;
            margin-bottom: ${gapDeskValues.rowGap} !important;
        }
        
        .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
            gap: ${gapDeskValues.gap} !important;
        }
    `;

    const tabCSS = `
        .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} .zolo-fb-post:not(:last-child) {
            margin-bottom: ${gapTabValues.gap} !important;
        }
        
        .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
            gap: ${gapTabValues.gap} !important;
            ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
            column-gap: ${gapTabValues.colGap} !important;
            -webkit-column-gap: ${gapTabValues.colGap} !important;
            -moz-column-gap: ${gapTabValues.colGap} !important;
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapTabValues.rowGap} !important;
        }
        
        .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
            gap: ${gapTabValues.gap} !important;
        }
    `;

    const mobCSS = `
        .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} .zolo-fb-post:not(:last-child) {
            margin-bottom: ${gapMobValues.gap} !important;
        }
        
        .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
            gap: ${gapMobValues.gap} !important;
            ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
            column-gap: ${gapMobValues.colGap} !important;
            -webkit-column-gap: ${gapMobValues.colGap} !important;
            -moz-column-gap: ${gapMobValues.colGap} !important;
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapMobValues.rowGap} !important;
        }
        
        .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
            gap: ${gapMobValues.gap} !important;
        }
    `;

    return (
        <GlobalStyleHanlder
            attributes={attributes}
            setAttributes={setAttributes}
            desktopAllStyle={desktopCSS}
            tabAllStyle={tabCSS}
            mobileAllStyle={mobCSS}
            blockName="zolo/facebook-feed"
        />
    );
};

export default Style;
