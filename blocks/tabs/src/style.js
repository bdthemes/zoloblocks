/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResAlignmentStyle, generateTypographyStyles, generateResRangeStyle, GlobalStyleHanlder, generateNormalBGControlStyles } =
    window.zoloModule;

import { NAV_ITEMS_ALIGN, NAV_SPACING, CONTENT_SPACING, TAB_NORMAL_BGCOLOR, TAB_HOVER_BGCOLOR, TAB_ACTIVE_BGCOLOR } from './constants';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, normalTabColor, hoverTabColor, activeTabColor } = attributes;

    // styles
    const {
        desktopAlignStyle: itemsVDeskAlign,
        tabAlignStyle: itemsVTabAlign,
        mobAlignStyle: itemsVMobAlign,
    } = generateResAlignmentStyle({
        controlName: NAV_ITEMS_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopRangeStyle: deskNavSpacing,
        tabRangeStyle: tabNavSpacing,
        mobRangeStyle: mobNavSpacing,
    } = generateResRangeStyle({
        controlName: NAV_SPACING,
        property: 'gap',
        attributes,
    });
    const {
        desktopRangeStyle: deskContentSpacing,
        tabRangeStyle: tabContentSpacing,
        mobRangeStyle: mobContentSpacing,
    } = generateResRangeStyle({
        controlName: CONTENT_SPACING,
        property: 'margin-bottom',
        attributes,
    });


    /**
    * Background Color
    */

        const {
            backgroundStylesDesktop: tabNormalBgColorDesktop,
            backgroundStylesTab: tabNormalBgColorTab,
            backgroundStylesMobile: tabNormalBgColorMobile,
        } = generateNormalBGControlStyles({
            controlName: TAB_NORMAL_BGCOLOR,
            attributes,
            noMainBGImg: false,
        });
        const {
            backgroundStylesDesktop: tabHoverBgColorDesktop,
            backgroundStylesTab: tabHoverBgColorTab,
            backgroundStylesMobile: tabHoverBgColorMobile,
        } = generateNormalBGControlStyles({
            controlName: TAB_HOVER_BGCOLOR,
            attributes,
            noMainBGImg: false,
        });
        const {
            backgroundStylesDesktop: tabActiveBgColorDesktop,
            backgroundStylesTab: tabActiveBgColorTab,
            backgroundStylesMobile: tabActiveBgColorMobile,
        } = generateNormalBGControlStyles({
            controlName: TAB_ACTIVE_BGCOLOR,
            attributes,
            noMainBGImg: false,
        });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${itemsVDeskAlign}
            ${deskNavSpacing}
            ${deskContentSpacing}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
           --zolo-tab-title-color: ${normalTabColor};
            ${tabNormalBgColorDesktop}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            --zolo-tab-title-color: ${hoverTabColor};
            ${tabHoverBgColorDesktop}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item.active {
           ${activeTabColor ? `--zolo-tab-title-color: ${activeTabColor};` : ''}
            ${tabActiveBgColorDesktop}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${itemsVTabAlign}
            ${tabNavSpacing}
            ${tabContentSpacing}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${itemsVMobAlign}
            ${mobNavSpacing}
            ${mobContentSpacing}
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
