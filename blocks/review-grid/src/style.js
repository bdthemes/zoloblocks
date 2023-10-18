/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { GlobalStyleHanlder, generateResRangeStyle, generateDimensionStyle, generateNormalBGControlStyles, generateResCounterStyle } =
    window.zoloModule;

import { COLUMNS_GAP, GRID_COLUMNS, ROWS_GAP, REVIEW_GRID_BG, REVIEW_GRID_MARGIN, REVIEW_GRID_PADDING } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;

    // column count
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
    });

    // Grid Columns Gap
    const {
        desktopRangeStyle: deskColumnsGap,
        tabRangeStyle: tabColumnsGap,
        mobRangeStyle: mobColumnsGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'grid-column-gap',
        attributes,
    });

    // Grid Rows Gap
    const {
        desktopRangeStyle: deskRowsGap,
        tabRangeStyle: tabRowsGap,
        mobRangeStyle: mobRowsGap,
    } = generateResRangeStyle({
        controlName: ROWS_GAP,
        property: 'grid-row-gap',
        attributes,
    });

    // Container
    const {
        backgroundStylesDesktop: reviewGridDeskBGStyle,
        backgroundStylesTab: reviewGridTabBGStyle,
        backgroundStylesMobile: reviewGridMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: REVIEW_GRID_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: containerDeskMargin,
        dimensionStylesTab: containerTabMargin,
        dimensionStylesMobile: containerMobMargin,
    } = generateDimensionStyle({
        controlName: REVIEW_GRID_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerDeskPadding,
        dimensionStylesTab: containerTabPadding,
        dimensionStylesMobile: containerMobPadding,
    } = generateDimensionStyle({
        controlName: REVIEW_GRID_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			${reviewGridDeskBGStyle}
			${containerDeskMargin}
			${containerDeskPadding}
			grid-template-columns: repeat(${deskColumns}, 1fr);
			${deskColumnsGap}
			${deskRowsGap}
		}
	`;
    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			${reviewGridTabBGStyle}
			${containerTabMargin}
			${containerTabPadding}
			grid-template-columns: repeat(${tabColumns}, 1fr);
			${tabColumnsGap}
			${tabRowsGap}
		}
	`;
    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			${reviewGridMobBGStyle}
			${containerMobMargin}
			${containerMobPadding}
			grid-template-columns: repeat(${mobColumns}, 1fr);
			${mobColumnsGap}
			${mobRowsGap}
		}
	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};

export default Style;
