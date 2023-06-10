/**
 * WordPress dependencies
 */
import {
  useBlockProps
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
import Inspector from './inspector';

const {
  handleUniqueId,
  softMinifyCssStrings,
  generateResRangeStyle,
  generateDimensionStyle,
} = window.zoloModule;

import {
  BLOCK_PREFIX,
  CONTAINER_MARGIN,
  CONTAINER_PADDING
} from './constants';

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const { uniqueId, blockStyle, containerBg } = attributes;

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
    className: classnames(className, `${uniqueId} ${'zolo-post-grid-' + styles}`),
  });

  // Container Margin
  const {
    dimensionStylesDesktop: containerDeskMargin,
    dimensionStylesTab: containerTabMargin,
    dimensionStylesMobile: containerMobMargin,
  } = generateDimensionStyle({
    controlName: CONTAINER_MARGIN,
    styleFor: 'margin',
    attributes,
  });

  // Container Padding
  const {
    dimensionStylesDesktop: containerDeskPadding,
    dimensionStylesTab: containerTabPadding,
    dimensionStylesMobile: containerMobPadding,
  } = generateDimensionStyle({
    controlName: CONTAINER_PADDING,
    styleFor: 'padding',
    attributes,
  });

  /**
   * All Style Combination
   */
  const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-post-grid {
			background-color: ${containerBg};
			${containerDeskMargin}
			${containerDeskPadding}
		}
	`;
  const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-post-grid {
			${containerTabMargin}
			${containerTabPadding}
		}
	`;
  const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-post-grid {
			${containerMobMargin}
			${containerMobPadding}
		}
	`;

  const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
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

  //query change effect
  const [queryEffect, setQueryEffect] = useState(false);
  const changeQuery = () => {
    setQueryEffect(!queryEffect);
  }


  return (
    <>
      {isSelected && (
        <Inspector
          attributes={attributes}
          setAttributes={setAttributes}
          changeQuery={changeQuery}
        />
      )}
      <style>{`${softMinifyCssStrings(allStyle)}`}</style>

      <div {...blockProps}>

        <h1>Post Grid</h1>

      </div>
    </>
  );
}
