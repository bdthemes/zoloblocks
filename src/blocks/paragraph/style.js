/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateDimensionStyle,
    generateBorderStyle,
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { TEXT_TYPO } from './constants/typoPrefixConstant';

import { COLUMNS, TEXT_ALIGNMENT } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, dropcap, textColor } = attributes;

    const {
        desktopRangeStyle: columnsDesktop,
        tabRangeStyle: columnsTab,
        mobRangeStyle: columnsMob,
    } = generateResRangeStyle({
        controlName: COLUMNS,
        property: 'column-count',
        attributes,
    });

    // text
    const {
        typoStylesDesktop: textTypoDesk,
        typoStylesTab: textTypoTab,
        typoStylesMobile: textTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPO,
        defaultFontSize: '',
        attributes,
    });

    const {
        desktopAlignStyle: textAlignDesk,
        tabAlignStyle: textAlignTab,
        mobAlignStyle: textAlignMob,
    } = generateResAlignmentStyle({
        controlName: TEXT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-paragraph {
        ${columnsDesktop.replace('px', '')}
    }
    .${uniqueId}.wp-block-zolo-paragraph p{
        ${textColor ? `color: ${textColor};` : ''}
        ${textTypoDesk}
        ${textAlignDesk}

    }

    ${
        dropcap
            ? `
        .${uniqueId}.wp-block-zolo-paragraph:first-letter {
            font-size: 2em;
            font-weight: bold;
            float: left;
            margin-right: 0.1em;
            line-height: 1;
        }
    `
            : ''
    }
`;

    const tabletAllStyle = ``;

    const mobileAllStyle = ``;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.textarea.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.textarea.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.textarea.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
