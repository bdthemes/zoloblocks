/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Internal depencencies
 */
import classnames from "classnames";
import { handleUniqueId } from "../../../src/helpers/helper";
import { generateResAlignmentStyle } from "../../../src/helpers/res-alignment-helper";
import { generateResRangeStyle } from "../../../src/helpers/res-range-helper";
import { BLOCK_PREFIX, BUTTON_ALIGNMENT, BUTTON_WIDTH } from "./constants";
import Inspector from "./inspector";

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const {
    uniqueId,
    preset,
    bgColor,
    textColor,
    blockStyle
  } = attributes;

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
    className: classnames(className, ``),
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

  const desktopAllStyle = `
    .${uniqueId}{
      ${buttonWidthDesktop}
      ${buttonAlignmentDesktop}
    }
    .${uniqueId} button {
      background-color: ${bgColor};
      color: ${textColor};
    }
  `;
  const tabletAllStyle = `
    .${uniqueId}{
      ${buttonWidthTab}
      ${buttonAlignmentTab}
    }
  `;
  const mobileAllStyle = `
  	.${uniqueId}{
      ${buttonWithMob}
      ${buttonAlignmentMob}
    }
  `;

  // Set All Style in "blockStyle" Attribute
  useEffect(() => {
    const styles = {
      desktop: desktopAllStyle,
      tablet: tabletAllStyle,
      mobile: mobileAllStyle,
    };
    if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
      setAttributes({ blockStyle: styles });
    }
  }, [attributes]);

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
        <div className={`zolo-block-wrapper zolo-advanced-button ${uniqueId}`}>
          <div
            className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
            data-id={uniqueId}
          >
            <div className={`zolo-content`}>
              <button>Advanced Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
