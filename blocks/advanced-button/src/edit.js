/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Internal depencencies
 */
import classnames from "classnames";
import { generateDimensionStyle } from "../../../src/helpers/dimension-helper";
import { handleUniqueId } from "../../../src/helpers/helper";
import { generateResAlignmentStyle } from "../../../src/helpers/res-alignment-helper";
import { generateResRangeStyle } from "../../../src/helpers/res-range-helper";
import {
  BLOCK_PREFIX,
  BUTTON_ALIGNMENT,
  BUTTON_BRADIUS,
  BUTTON_MARGIN,
  BUTTON_PADDING,
  BUTTON_WIDTH,
} from "./constants";
import Inspector from "./inspector";

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const { uniqueId, preset, buttonColor, buttonBGColor } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  useEffect(() => {
    handleUniqueId({
      BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId,
    });
  }, []);

  const blockProps = useBlockProps({
    className: classnames(className, `zolo-block-wrapper zolo-${uniqueId}`),
  });

  const {
    desktopRangeStyle: buttonWidthDesktop,
    tabRangeStyle: buttonWidthTab,
    mobRangeStyle: buttonWithMob,
  } = generateResRangeStyle({
    controlName: BUTTON_WIDTH,
    property: "width",
    attributes,
  });

  const {
    desktopAlignStyle: buttonAlignmentDesktop,
    tabAlignStyle: buttonAlignmentTab,
    mobAlignStyle: buttonAlignmentMob,
  } = generateResAlignmentStyle({
    controlName: BUTTON_ALIGNMENT,
    property: "text-align",
    attributes,
  });

  const {
    dimensionStylesDesktop: buttonMarginDesktop,
    dimensionStylesTab: buttonMarginTab,
    dimensionStylesMobile: buttonMarginMobile,
  } = generateDimensionStyle({
    controlName: BUTTON_MARGIN,
    styleFor: "margin",
    attributes,
  });

  const {
    dimensionStylesDesktop: buttonPaddingDesktop,
    dimensionStylesTab: buttonPaddingTab,
    dimensionStylesMobile: buttonPaddingMobile,
  } = generateDimensionStyle({
    controlName: BUTTON_PADDING,
    styleFor: "padding",
    attributes,
  });

  const {
    dimensionStylesDesktop: buttonBorderRadiusDesktop,
    dimensionStylesTab: buttonBorderRadiusTab,
    dimensionStylesMobile: buttonBorderRadiusMobile,
  } = generateDimensionStyle({
    controlName: BUTTON_BRADIUS,
    styleFor: "border-radius",
    attributes,
  });

  const desktopAllStyle = `
	.zolo-${uniqueId}{
		${buttonWidthDesktop}
    ${buttonAlignmentDesktop}
    color:${buttonColor};
    background-color:${buttonBGColor};
    ${buttonMarginDesktop}
    ${buttonPaddingDesktop}
    ${buttonBorderRadiusDesktop}
	}
  `;
  const tabletAllStyle = `
	.zolo-${uniqueId}{
		${buttonWidthTab}
    ${buttonAlignmentTab}
    ${buttonMarginTab}
    ${buttonPaddingTab}
    ${buttonBorderRadiusTab}
	}
  `;
  const mobileAllStyle = `
  	.zolo-${uniqueId}{
		${buttonWithMob}
    ${buttonAlignmentMob}
    ${buttonMarginMobile}
    ${buttonPaddingMobile}
    ${buttonBorderRadiusMobile}
	}
  `;
  return (
    <>
      {isSelected && (
        <Inspector attributes={attributes} setAttributes={setAttributes} />
      )}

      <div {...blockProps}>
        <style>
          {`
				${desktopAllStyle}

				@media all and (max-width: 1024px) {	
					/* tabcssStart */			
					${tabletAllStyle}
					/* tabcssEnd */			
				}
					
				@media all and (max-width: 767px) {
					/* mobcssStart */			
					${mobileAllStyle}
					/* mobcssEnd */
				}			
			`}
        </style>
        <div
          className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
          data-id={uniqueId}
        >
          <div className={`zolo-content`}>Advanced Button Block</div>
        </div>
      </div>
    </>
  );
}
