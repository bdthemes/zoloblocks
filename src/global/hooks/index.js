/**
 * External Dependencies
 */
import classNames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState, Fragment, useRef } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select, useSelect, withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
  handleUniqueId,
  generateResAlignmentAttributies,
  generateResRangeAttributies,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateNormalBGAttributes,
  generateBoxShadowAttributies,
  generateTypographyAttributes,
} = window.zoloModule;

/**
 * Internal Dependencies
 */

/**
 * Add custom attribute for Essential Block
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
  if (typeof settings.attributes === 'undefined') {
    return settings;
  }
  if (settings.category && settings.category == 'zolo-blocks') {
    settings.attributes = {
      ...settings.attributes,
      uniqueId: {
        type: 'string',
      },
      resDevice: {
        type: 'string',
        default: 'Desktop',
      },
      parentClasses: {
        type: 'array',
        default: [],
      },
      zoloStyles: {
        type: 'object',
      },
      responsiveness: {
        type: 'object',
        default: {
          hideDesktop: false,
          hideTab: false,
          hideMobile: false,
        }
      },
      customCss: {
        type: 'string',
      },
      customClass: {
        type: 'string',
      },
      ...(settings.attributes.globalConfig?.default?.background && generateNormalBGAttributes(settings.attributes.globalConfig.background?.prefix || 'mainBg')),
      ...(settings.attributes.globalConfig?.default?.margin && generateDimensionAttributes(settings.attributes.globalConfig.margin?.prefix || 'mainMargin')),
      ...(settings.attributes.globalConfig?.default?.padding && generateDimensionAttributes(settings.attributes.globalConfig.padding?.prefix || 'mainPadding')),
    };
  }
  return settings;
}

/**
 * Add controls and generate styles on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const { attributes, setAttributes, isSelected, name, clientId } = props;
    const blockType = select('core/blocks').getBlockType(name);

    if (blockType.category != 'zolo-blocks') {
      return <BlockEdit {...props} />;
    }

    const {
      uniqueId,
      resMode,
      parentClasses,
      zoloStyles,
      customCss,
    } = attributes;

    const isBlockJustInserted = select('core/block-editor').wasBlockJustInserted(clientId);
    const [editorStoreForGettingPreivew, setEditorStoreForGettingPreview] = useState();

    // UseEffect for initial setting
    useEffect(() => {
      const blockPrefix = name.split('/')[1]
      handleUniqueId({
        blockPrefix,
        uniqueId,
        setAttributes,
        clientId,
      });

      setAttributes({
        parentClasses: [
          ...parentClasses,
          `parent-${uniqueId}`
        ],
      });
    }, [])

    //
    useEffect(() => {
      if (!window?.eb_conditional_localize) {
        setEditorStoreForGettingPreview(false);
        return;
      }

      if (eb_conditional_localize.editor_type === 'edit-site') {
        setEditorStoreForGettingPreview('core/edit-site');
      } else if (eb_conditional_localize.editor_type === 'edit-post') {
        setEditorStoreForGettingPreview('core/edit-post');
      } else {
        setEditorStoreForGettingPreview(false);
      }
    }, []);

    //Get Device type from "__experimentalGetPreviewDeviceType" Function
    const deviceType = useSelect((select) => {
      return select('core/edit-post').__experimentalGetPreviewDeviceType() || 'Desktop';
    });

    // this useEffect is for setting the resMode attribute to desktop/tab/mobile depending on the added 'zolo-res-option-' class
    useEffect(() => {
      setAttributes({
        resMode: deviceType
      });
    }, [deviceType]);

    return (
      <Fragment>
        <BlockEdit {...props} />
      </Fragment>
    );
  };
}, 'withAdvancedControls');

/**
 * Add Attributes Filter
 */
addFilter('blocks.registerBlockType', 'zolo-blocks/hoc-global', addAttributes);

/**
 * Filter for modification of Edit Function
 */
addFilter('editor.BlockEdit', 'zolo-blocks/hoc-global', withAdvancedControls);
