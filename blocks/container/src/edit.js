/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';


/**
 * Internal depencencies
 */
const {
  softMinifyCssStrings,
  handleUniqueId,
} = window.zoloModule;

import {
  BLOCK_PREFIX,
} from './constants';
import Inspector from './inspector';


import { VariationPicker } from './variations';
import generateStyle from './generate-style';
import RenderView from './render-view';

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    clientId,
    isSelected,
    name,
  } = props;
  const {
    uniqueId,
    blockStyle,
    templates,
    variationStatus
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

  const {
    isParentOfSelectedBlock,
    variations,
    defaultVariation,
    getBlockParents,
    parentBlocks,
  } = useSelect((select) => {
    const coreBlocks = select('core/blocks');
    const coreBlockEditor = select('core/block-editor');
    const getBlockParentStore = coreBlockEditor?.getBlockParents(clientId);

    return {
      defaultVariation: coreBlocks?.getDefaultBlockVariation(name),
      variations: coreBlocks?.getBlockVariations(name),
      isParentOfSelectedBlock: coreBlockEditor?.hasSelectedInnerBlock(clientId, true),
      getBlockParents: getBlockParentStore,
      parentBlocks: coreBlockEditor?.getBlocksByClientId(getBlockParentStore),
    };
  });


  useEffect(() => {
    const attributesToUpdate = {};
    // Conditionally set the isBlockRootParent attribute
    if (!parentBlocks || parentBlocks.length === 0 || !parentBlocks.some(parent => parent.name === 'zolo/container')) {
      attributesToUpdate.isBlockRootParent = true;
    }

    // Compare with attribute and attributeToUpdate and update only if there is a change.
    if (attributesToUpdate.isBlockRootParent !== attributes.isBlockRootParent) {
      setAttributes(attributesToUpdate);
    }

  }, []);



  //generate all style
  const allStyle = generateStyle({
    attributes,
    setAttributes,
  });


  if (!variationStatus && 0 === getBlockParents?.length) {
    return <VariationPicker {...{ ...props, variations, defaultVariation }} />
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
      <style>{`${softMinifyCssStrings(allStyle)}`}</style>
      <RenderView
        attributes={attributes}
        clientId={clientId}
        className={className}
      />
    </>
  );
}
