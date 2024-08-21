import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        isVariationSelected
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const innerBlocksProps = useInnerBlocksProps.save(
        {
            className: classnames('zolo-navmenu-menu'),
        },
    );

    if (!isVariationSelected) {
        return null;
    }

    return (
        <div {...blockProps}>
            <ul {...innerBlocksProps}></ul>
        </div>
    );
};

export default Save;
