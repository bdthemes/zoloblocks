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
    const { clientId, attributes, setAttributes, isSelected } = props;
    const { classArrayToStr, useResponsiveValue } = window.zoloModule;
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

    const [getResponsiveValue, createResponsiveValue] = useResponsiveValue(attributes);

    useElementResize({
        element: wrapperRef?.current,
        position: 'right',
        cssProperty: 'max-width',
        value: getResponsiveValue('flexboxCustomWidth'),
        onResizeStart: () => {
            setAttributes({
                flexShrink: Number(0)
            });
        },
        onResizeEnd: (value) => {
            setAttributes(createResponsiveValue('flexboxCustomWidth', value));
        },
        condition: (element) => {
            return element?.classList?.contains('zolo-flexbox-custom-width') && element?.classList?.contains('is-selected');
        }
    })
    useElementResize({
        element: wrapperRef?.current,
        position: 'left',
        cssProperty: 'max-width',
        value: getResponsiveValue('flexboxCustomWidth'),
        onResizeStart: () => {
            setAttributes({
                flexShrink: Number(0)
            })
        },
        onResizeEnd: (value) => {
            setAttributes(createResponsiveValue('flexboxCustomWidth', value));
        },
        condition: (element) => {
            return element?.classList?.contains('zolo-flexbox-custom-width') && element?.classList?.contains('is-selected');
        }
    })

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
                {
                    isSelected && <Inspector
                        {...props}
                        isParent={isParent}
                        hasParent={hasParent}
                        getResponsiveValue={getResponsiveValue}
                        createResponsiveValue={createResponsiveValue}
                    />
                }
                <Style {...props} />
                <TAG {...innerBlocksProps} />
            </>
        );
    }

    return content;
};
export default Edit;