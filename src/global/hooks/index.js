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
import { prefix } from '../constants';

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
  generateBackgroundAttributes,
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
    if (settings.name === 'zolo/advanced-button') {
    }
    settings.attributes = {
      ...settings.attributes,
      uniqueId: {
        type: 'string',
      },
      resMode: {
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
      selectedPanel: {
        type: 'string',
        default: 'first'
      },
      selectedStylePanel: {
        type: 'string',
        default: 'first'
      },
      selectedExtraPanel: {
        type: 'string',
        default: 'first'
      },
      selectedTab: {
        type: 'string',
        default: 'basic'
      },
      responsiveness: {
        type: 'object',
        default: {
          hideDesktop: false,
          hideTab: false,
          hideMobile: false,
        },
      },
      customCss: {
        type: 'string',
      },
      customClass: {
        type: 'string',
      },
      ...(settings.attributes.globalConfig?.default?.margin &&
        generateDimensionAttributes(settings.attributes.globalConfig.default.margin?.prefix || 'mainMargin')),

      ...(settings.attributes.globalConfig?.default?.padding &&
        generateDimensionAttributes(settings.attributes.globalConfig.default.padding?.prefix || 'mainPadding')),

      ...(settings.attributes.globalConfig?.default?.background &&
        generateBackgroundAttributes(settings.attributes.globalConfig.default.background?.prefix || 'mainBg')),

      ...(settings.attributes.globalConfig?.default?.border &&
        generateBorderAttributies(settings.attributes.globalConfig.default.border?.prefix || 'mainBorder')),

      ...(settings.attributes.globalConfig?.default?.borderRadius &&
        generateDimensionAttributes(settings.attributes.globalConfig.default.borderRadius?.prefix || 'mainBorderRadius')),

      ...(settings.attributes.globalConfig?.default?.boxShadow &&
        generateBoxShadowAttributies(settings.attributes.globalConfig.default.boxShadow?.prefix || 'mainBoxShadow')),
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
      selectedPanel,
      selectedStylePanel,
      selectedExtraPanel,
      selectedTab,
    } = attributes;

    const isBlockJustInserted = select('core/block-editor').wasBlockJustInserted(clientId);
    const [editorType, setEditorType] = useState();

    const localStoreKey = uniqueId + "loaded"

    window.onbeforeunload = function () {
      localStorage.clear();
    };
    //Handle Tab and Panel initial Open state
    useEffect(() => {
      const isPageLoadedStore = localStorage.getItem(localStoreKey);

      if (!isPageLoadedStore) {
        setAttributes({
          selectedPanel: 'first',
          selectedStylePanel: 'first',
          selectedExtraPanel: 'first',
          selectedTab: 'basic'
        })
        localStorage.setItem(localStoreKey, true);
      }
    }, []);

    const prefix = name.split('/')[1];
    // UseEffect for initial setting
    useEffect(() => {
      handleUniqueId({
        prefix,
        uniqueId,
        setAttributes,
        clientId,
      });
    }, []);

    //set Unique Id globally
    useEffect(() => {
      if (uniqueId) {
        const filteredParentClasses = parentClasses.filter((item) => !item.includes(`parent-${prefix}`));
        setAttributes({
          parentClasses: [...filteredParentClasses, `parent-${uniqueId}`],
        });
      }
    }, [uniqueId]);

    //
    useEffect(() => {
      if (!zoloParams) {
        setEditorType(false);
        return;
      }

      if (zoloParams.editor_type === 'edit-site') {
        setEditorType('core/edit-site');
      } else if (zoloParams.editor_type === 'edit-post') {
        setEditorType('core/edit-post');
      } else {
        setEditorType(false);
      }
    }, []);

    //Get Device type from "__experimentalGetPreviewDeviceType" Function
    const deviceType = useSelect((select) => {
      if (editorType && typeof editorType === 'string') {
        return select(editorType).__experimentalGetPreviewDeviceType();
      }
      return 'Desktop';
    });

    // this useEffect is for setting the resMode attribute to desktop/tab/mobile depending on the added 'zolo-res-option-' class
    useEffect(() => {
      setAttributes({
        resMode: deviceType,
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
