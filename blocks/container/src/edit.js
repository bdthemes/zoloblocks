/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal depencencies
 */
import Inspector from './inspector';

import { VariationPicker } from './variations';
import RenderView from './render-view';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const { variationStatus, testClass, zolo_advBtnPaddingTop } = attributes;
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

    if (!variationStatus && 0 === getBlockParents?.length) {
        return <VariationPicker {...{ ...props, variations, defaultVariation }} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <RenderView
                {...{
                    attributes,
                    clientId,
                    className,
                    setAttributes,
                    testClass,
                }}
            />
        </>
    );
}
