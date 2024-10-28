import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('zolo-megamenu', uniqueId, classArrayToStr(parentClasses), {
            [`megamenu-layout-${attributes.megamenuLayoutType}`]: attributes?.megamenuLayoutType,
            [`direction-${attributes.megamenuCustomDirection}`]: attributes?.megamenuLayoutType === 'custom', // Corrected line
        }),
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: classnames('zolo-megamenu-content'),
    });

    return (
        <div {...blockProps}>
            <div {...innerBlocksProps} />
        </div>
    );
};

export default Save;
