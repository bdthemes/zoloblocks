/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateDimensionStyle, generateResAlignmentStyle, generateTypographyStyles, generateResRangeStyle, GlobalStyleHanlder } =
    window.zoloModule;

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';
import { LABEL_MARGIN, FIELD_PADDING, FIELD_BG, FIELD_BORDER, FIELD_BRADIUS, ICON_SIZE } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        showLabel,
        label,
        labelColor,
        textColor,
        placeholder,
        placeholderColor,
        showIcon,
        icon,
        iconColor,
        isRequired,
        showRequiredSymbol,
        requiredColor,
    } = attributes;

    // label
    const {
        dimensionStylesDesktop: labelMarginDesk,
        dimensionStylesTab: labelMarginTab,
        dimensionStylesMobile: labelMarginMob,
    } = generateDimensionStyle({
        controlName: LABEL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: labelTypoDesk,
        typoStylesTab: labelTypoTab,
        typoStylesMobile: labelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LABEL_TYPO,
        defaultFontSize: '',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        ${
            showLabel
                ? `
            .${uniqueId} .zolo-label-wrapper {
                ${labelMarginDesk}
            }
            .${uniqueId} .zolo-label {
                ${labelTypoDesk}
                color: ${labelColor};
            }
            ${
                showRequiredSymbol
                    ? `
                .${uniqueId} .zolo-required {
                    color: ${requiredColor};
                }
            `
                    : ''
            }
        `
                : ''
        }
    `;

    const tabletAllStyle = `
        
    `;

    const mobileAllStyle = `
        
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
