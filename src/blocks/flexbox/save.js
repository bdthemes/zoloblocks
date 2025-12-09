import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
const Save = () => {
    const blockProps = useBlockProps.save({
        className: 'zolo-flexbox',
    });
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);
    return <div {...innerBlocksProps} />
}

export default Save;