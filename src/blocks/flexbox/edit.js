import { useBlockProps, useInnerBlocksProps, InnerBlocks, store as blockEditorStore } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import classnames from 'classnames';
import { useRef } from "@wordpress/element";
import { useMergeRefs } from "@wordpress/compose";
import VariationPicker from "./variations-picker";
import Inspector from "./inspector";
import Style from "./style";
import useElementResize from "./use-element-resizer";

const Edit = (props) => {
    const { clientId, attributes, } = props;
    const { classArrayToStr } = window.zoloModule;
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
    const wrapperRef = useRef(null);
    const blockProps = useBlockProps({
        className: classnames('zolo-flexbox', attributes?.uniqueId, classArrayToStr(attributes?.parentClasses), {
            'has-child-blocks': hasChildBlocks,
            'has-parent': hasParent,
            'is-parent': isParent,
            [`${attributes?.flexWidthType}`]: attributes?.flexWidthType,
        }),
        ref: useMergeRefs([wrapperRef]),
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        renderAppender: hasChildBlocks ? false : InnerBlocks.ButtonBlockAppender
    });

    const TAG = attributes?.tagName || 'div';
    let content;

    if (!attributes?.isVariationSelected && isParent) {
        content = (
            <>
                <VariationPicker {...props} />
            </>
        );
    } else {
        content = (
            <>
                <Inspector {...props} isParent={isParent} hasParent={hasParent} />
                <Style {...props} />
                <TAG {...innerBlocksProps} />
            </>
        );
    }

    return content;
};
export default Edit;