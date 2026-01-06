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

    // Extract gap values for masonry (CSS columns don't support gap property the same way)
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
        .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} {
            ${gapDesk}
        }
        
        .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
            display: grid;
            ${gapDesk}
            ${columnCountDesk ? `grid-template-columns: repeat(${columnCountDesk}, 1fr);` : ''}
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountDesk ? `column-count: ${columnCountDesk};` : ''}
            column-gap: ${gapDeskValues.columnGap};
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapDeskValues.rowGap};
        }
        
        .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
            ${gapDesk}
        }
    `;

    const tabCSS = `
        .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} {
            ${gapTab}
        }
        
        .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
            ${gapTab}
            ${columnCountTab ? `grid-template-columns: repeat(${columnCountTab}, 1fr) !important;` : ''}
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountTab ? `column-count: ${columnCountTab} !important;` : ''}
            column-gap: ${gapTabValues.columnGap};
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapTabValues.rowGap};
        }
        
        .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
            ${gapTab}
        }
    `;

    const mobCSS = `
        .zolo-fb-posts-container.layout-timeline.zolo-facebook-feed-${uniqueId} {
            ${gapMob}
        }
        
        .zolo-fb-posts-container.layout-grid.zolo-facebook-feed-${uniqueId} {
            ${gapMob}
            ${columnCountMob ? `grid-template-columns: repeat(${columnCountMob}, 1fr) !important;` : ''}
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} {
            ${columnCountMob ? `column-count: ${columnCountMob} !important;` : ''}
            column-gap: ${gapMobValues.columnGap};
        }
        
        .zolo-fb-posts-container.layout-masonry.zolo-facebook-feed-${uniqueId} .zolo-fb-post {
            margin-bottom: ${gapMobValues.rowGap};
        }
        
        .zolo-fb-posts-container.layout-carousel.zolo-facebook-feed-${uniqueId} .swiper {
            ${gapMob}
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
