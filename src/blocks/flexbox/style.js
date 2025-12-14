import { applyFilters } from '@wordpress/hooks';
import { useMemo } from '@wordpress/element';
/**
 * Internal depencencies
 */
const { generateResRangeStyle, generateResAlignmentStyle, generateGapStyle, GlobalStyleHanlder } = window.zoloModule;

import {
    MIN_HEIGHT,
    FLEXBOX_WIDTH,
    FLEX_DIRECTION,
    FLEX_JUSTIFY_CONTENT,
    FLEX_ALIGN_ITEMS,
    FLEX_WRAP,
    FLEXBOX_GAP,
} from './constants';

const Style = (props) => {
    const { attributes, setAttributes } = props;

    const { uniqueId } = attributes;

    const {
        desktopRangeStyle: flexboxDesktopWidth,
        tabRangeStyle: flexboxTabletWidth,
        mobRangeStyle: flexboxMobileWidth,
    } = generateResRangeStyle({
        controlName: FLEXBOX_WIDTH,
        property: 'max-width',
        attributes,
    });

    const {
        desktopRangeStyle: flexboxDesktopMinHeight,
        tabRangeStyle: flexboxTabletMinHeight,
        mobRangeStyle: flexboxMobileMinHeight,
    } = generateResRangeStyle({
        controlName: MIN_HEIGHT,
        property: 'min-height',
        attributes,
    });

    const {
        desktopAlignStyle: flexDirectionDesktop,
        tabAlignStyle: flexDirectionTablet,
        mobAlignStyle: flexDirectionMobile,
    } = generateResAlignmentStyle({
        controlName: FLEX_DIRECTION,
        property: 'flex-direction',
        attributes,
    });

    const {
        desktopAlignStyle: flexboxJustifyContentDesktop,
        tabAlignStyle: flexboxJustifyContentTablet,
        mobAlignStyle: flexboxJustifyContentMobile,
    } = generateResAlignmentStyle({
        controlName: FLEX_JUSTIFY_CONTENT,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: flexboxAlignItemsDesktop,
        tabAlignStyle: flexboxAlignItemsTablet,
        mobAlignStyle: flexboxAlignItemsMobile,
    } = generateResAlignmentStyle({
        controlName: FLEX_ALIGN_ITEMS,
        property: 'align-items',
        attributes,
    });

    const {
        desktopAlignStyle: flexWrapDesktop,
        tabAlignStyle: flexWrapTablet,
        mobAlignStyle: flexWrapMobile,
    } = generateResAlignmentStyle({
        controlName: FLEX_WRAP,
        property: 'flex-wrap',
        attributes,
    });

    const {
        gapStylesDesktop: flexboxGapDesktop,
        gapStylesTab: flexboxGapTablet,
        gapStylesMobile: flexboxGapMobile,
    } = generateGapStyle({
        controlName: FLEXBOX_GAP,
        attributes,
    });

    const desktopAllStyle = useMemo(() => {
        const style = `
        .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
            ${flexboxDesktopWidth || ''}
        }
        .${uniqueId}.zolo-flexbox{
            ${flexboxDesktopMinHeight || ''}
            ${flexDirectionDesktop || ''}
            ${flexboxJustifyContentDesktop || ''}
            ${flexboxAlignItemsDesktop || ''}
            ${flexWrapDesktop || ''}
            ${flexboxGapDesktop || ''}
        }
        `;
        return style;
    }, [flexboxDesktopWidth, flexboxDesktopMinHeight, flexboxJustifyContentDesktop, flexboxAlignItemsDesktop, flexDirectionDesktop, flexWrapDesktop, flexboxGapDesktop, uniqueId])

    const tabletAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
                ${flexboxTabletWidth || ''}
            }
            .${uniqueId}.zolo-flexbox{
                ${flexboxTabletMinHeight || ''}
                ${flexDirectionTablet || ''}
                ${flexboxJustifyContentTablet || ''}
                ${flexboxAlignItemsTablet || ''}
                ${flexWrapTablet || ''}
                ${flexboxGapTablet || ''}
            }
        `;

        return style;
    }, [flexboxTabletWidth, flexboxTabletMinHeight, flexboxJustifyContentTablet, flexboxAlignItemsTablet, flexDirectionTablet, flexWrapTablet, flexboxGapTablet, uniqueId])

    const mobileAllStyle = useMemo(() => {
        const style = `
            .${uniqueId}.zolo-flexbox.zolo-flexbox-custom-width{
                ${flexboxMobileWidth || ''}
            }
            .${uniqueId}.zolo-flexbox{
                ${flexboxMobileMinHeight || ''}
                ${flexDirectionMobile || ''}
                ${flexboxJustifyContentMobile || ''}
                ${flexboxAlignItemsMobile || ''}
                ${flexWrapMobile || ''}
                ${flexboxGapMobile || ''}
            }
        `;

        return style;
    }, [flexboxMobileWidth, flexboxMobileMinHeight, flexboxJustifyContentMobile, flexboxAlignItemsMobile, flexDirectionMobile, flexWrapMobile, flexboxGapMobile, uniqueId])

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.container.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.container.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.container.mobileAllStyle', mobileAllStyle, props)}
                blockName={props?.name}
            />
        </>
    );
};

export default Style;
