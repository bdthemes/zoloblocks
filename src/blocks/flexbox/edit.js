import { useBlockProps, useInnerBlocksProps, InnerBlocks, store as blockEditorStore } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import classnames from 'classnames';
import VariationPicker from "./variations-picker";

const Edit = ({ attributes, setAttributes, clientId }) => {
    const { hasChildBlocks, hasParent, isParent } = useSelect(
		(select) => {
			const { getBlockOrder, getBlockParentsByBlockName } = select(blockEditorStore);
			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
				hasParent: getBlockParentsByBlockName(clientId, 'zolo/flexbox').length > 0 ? true : false,
				isParent: getBlockParentsByBlockName(clientId, 'zolo/flexbox').length === 0 ? true : false
			};
		},
		[clientId]
	);
    const blockProps = useBlockProps({
        className: classnames('zolo-flexbox', {
            'has-child-blocks': hasChildBlocks,
            'has-parent': hasParent,
            'is-parent': isParent
        }),
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        renderAppender: hasChildBlocks ? false : InnerBlocks.ButtonBlockAppender
    });

    let content;

    if (!attributes?.isVariationSelected && isParent) {
        content = (
            <VariationPicker />
        );
    } else {
        content = (
            <div {...innerBlocksProps} />
        );
    }
    return content;
};
export default Edit;