/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {select, useSelect} from '@wordpress/data';
import { useEffect,useState } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup,Modal} from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';
/**
 * Internal depencencies
 */
import Inspector from './inspector';

import RenderView from './render-view';
import { VariationPicker } from './variations';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const { variationStatus, testClass, isBlockRootParent } = attributes;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { variations, defaultVariation, getBlockParents, parentBlocks } = useSelect((select) => {
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
        if (!parentBlocks || parentBlocks.length === 0 || !parentBlocks.some((parent) => parent.name === 'zolo/container')) {
            attributesToUpdate.isBlockRootParent = true;
        }

        // Compare with attribute and attributeToUpdate and update only if there is a change.
        if (attributesToUpdate.isBlockRootParent !== attributes.isBlockRootParent) {
            setAttributes(attributesToUpdate);
        }
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const hasInnerBlocks = (blocks) => {
      return blocks.some((block) => {
        if ( Object.keys(block).length > 0 && block?.name !=='zolo/container') {
          return true;
        }
        if (block?.innerBlocks.length > 0) {
          return true;
        }
        return hasInnerBlocks(block.innerBlocks);
      });
    };
    const innerBlocks = useSelect((select) => {
      return select('core/block-editor').getBlock(clientId)?.innerBlocks || [];
    }, [clientId]);
    const doesHaveInnerBlocks = hasInnerBlocks(innerBlocks);

    if (!variationStatus && 0 === getBlockParents?.length) {
        return <VariationPicker {...{ ...props, variations, defaultVariation }} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            {isBlockRootParent && (
              <BlockControls>
                <ToolbarGroup>
                  <ToolbarButton
                    label={__('Replace', 'zoloblocks')}
                    onClick={() => openModal() }
                    disabled={doesHaveInnerBlocks}
                  >
                    {__('Replace', 'zoloblocks')}
                  </ToolbarButton>
                </ToolbarGroup>
              </BlockControls>
            )}
            <RenderView
                {...{
                    attributes,
                    clientId,
                    className,
                    setAttributes,
                    testClass,
                }}
            />

          {/* Conditionally render the Modal */}
          {isModalOpen && (
            <Modal
              overlayClassName="block-library-query-pattern__selection-modal"
              title={__('Choose Container Layout','zoloblocks')}
              onRequestClose={closeModal}
              isFullScreen
            >
              <VariationPicker {...{ ...props, variations, defaultVariation,closeModal }} />
            </Modal>
          )}
        </>
    );
}
