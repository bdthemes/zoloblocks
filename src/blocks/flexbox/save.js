import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import classnames from 'classnames';
const Save = ({ attributes }) => {
    const { classArrayToStr } = window.zoloModule;
    const blockProps = useBlockProps.save({
        className: classnames('zolo-flexbox', attributes?.uniqueId, classArrayToStr(attributes?.parentClasses), {
            [`${attributes?.flexWidthType}`]: attributes?.flexWidthType,
        }),
    });
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);
    const TAG = attributes?.tagName || 'div';
    return <TAG {...innerBlocksProps} />
}

export default Save;