import { useSelect, useDispatch } from '@wordpress/data';
import { store as BlockEditorStore } from '@wordpress/block-editor';
import { useCallback, useMemo } from 'react';

const usePanelProps = () => {
    const { attributes, clientId } = useSelect((select) => {
        const { getSelectedBlock } = select(BlockEditorStore);
        const selectedBlock = getSelectedBlock();
        return {
            attributes: selectedBlock ? selectedBlock.attributes : {},
            clientId: selectedBlock ? selectedBlock.clientId : '',
        };
    }, []);

    const { updateBlockAttributes } = useDispatch(BlockEditorStore);

    const setAttributes = useCallback(
        (newAttributes) => {
            updateBlockAttributes(clientId, newAttributes);
        },
        [clientId, updateBlockAttributes]
    );

    return useMemo(() => ({ attributes, setAttributes }), [attributes, setAttributes]);
};

export default usePanelProps;
